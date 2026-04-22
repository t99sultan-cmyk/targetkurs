#!/usr/bin/env node
/**
 * Batch image optimizer + OG image + apple-touch-icon generator.
 * Rewrites files in public/ in-place. Safe because they're tracked in git.
 */
import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
const V1_IMAGES = join(PUBLIC_DIR, "v1-images");

const JPEG_QUALITY = 82;
const PNG_COMPRESSION = 9;
const MAX_WIDTH = 1600;
const SIZE_THRESHOLD = 400 * 1024; // 400 KB

const EXT_IMG = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function listImages(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) continue;
    const ext = extname(e.name).toLowerCase();
    if (!EXT_IMG.has(ext)) continue;
    out.push(join(dir, e.name));
  }
  return out;
}

async function optimizeFile(path) {
  const s = await stat(path);
  if (s.size < SIZE_THRESHOLD) return { skipped: true, before: s.size };

  const ext = extname(path).toLowerCase();
  const meta = await sharp(path).metadata();
  const width = Math.min(meta.width || MAX_WIDTH, MAX_WIDTH);
  const hasAlpha = meta.hasAlpha;

  const tmp = path + ".opt";
  let pipeline = sharp(path).resize({ width, withoutEnlargement: true });

  if (ext === ".png" && !hasAlpha) {
    // Convert opaque PNG → JPEG (massive size win)
    const jpegPath = path.replace(/\.png$/i, ".jpg");
    const jpegTmp = jpegPath + ".opt";
    await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toFile(jpegTmp);
    await rename(jpegTmp, jpegPath);
    if (jpegPath !== path) {
      // Keep original .png? Actually remove to save disk — but we need to update references.
      // Safer: keep both for now. User can manually delete later.
    }
    const after = (await stat(jpegPath)).size;
    return { ok: true, before: s.size, after, converted: true, newPath: jpegPath };
  }

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, palette: true });
  } else if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  }

  await pipeline.toFile(tmp);
  await rename(tmp, path);
  const after = (await stat(path)).size;
  return { ok: true, before: s.size, after };
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

async function generateOG() {
  const src = join(V1_IMAGES, "intro_photo_suit.jpg");
  if (!existsSync(src)) {
    console.warn("intro_photo_suit.jpg not found — skipping OG generation");
    return;
  }
  const ogOut = join(PUBLIC_DIR, "og-image.jpg");
  await sharp(src)
    .resize({ width: 1200, height: 630, fit: "cover", position: "top" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(ogOut);
  console.log("✓ generated og-image.jpg (1200×630)");

  const appleOut = join(PUBLIC_DIR, "apple-touch-icon.png");
  await sharp(src)
    .resize({ width: 180, height: 180, fit: "cover", position: "top" })
    .png({ compressionLevel: 9 })
    .toFile(appleOut);
  console.log("✓ generated apple-touch-icon.png (180×180)");
}

async function main() {
  const rootImages = await listImages(PUBLIC_DIR);
  const v1Images = existsSync(V1_IMAGES) ? await listImages(V1_IMAGES) : [];
  const all = [...rootImages, ...v1Images];

  let totalBefore = 0;
  let totalAfter = 0;
  let optimizedCount = 0;
  let convertedCount = 0;

  for (const file of all) {
    try {
      const r = await optimizeFile(file);
      if (r.skipped) continue;
      totalBefore += r.before;
      totalAfter += r.after;
      optimizedCount++;
      if (r.converted) convertedCount++;
      const pct = ((1 - r.after / r.before) * 100).toFixed(0);
      console.log(
        `${r.converted ? "→" : "·"} ${file.replace(ROOT + "/", "")} — ${formatBytes(r.before)} → ${formatBytes(r.after)} (-${pct}%)${r.converted ? " [PNG→JPEG]" : ""}`,
      );
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`);
    }
  }

  console.log(
    `\n✓ Optimized ${optimizedCount} files (${convertedCount} PNG→JPEG). Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (saved ${formatBytes(totalBefore - totalAfter)})\n`,
  );

  await generateOG();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
