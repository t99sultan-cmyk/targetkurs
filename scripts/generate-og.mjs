#!/usr/bin/env node
/**
 * Generate a branded og-image.jpg (1200×630) with text overlay.
 */
import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
const SRC = join(PUBLIC_DIR, "v1-images", "intro_photo_suit.jpg");

if (!existsSync(SRC)) {
  console.error("intro_photo_suit.jpg not found at", SRC);
  process.exit(1);
}

const W = 1200;
const H = 630;

// SVG overlay: dark gradient + text. Cyrillic-friendly system font.
const overlaySvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.2"/>
      <stop offset="55%" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#6ee7b7"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <!-- Accent bar -->
  <rect x="60" y="440" width="70" height="5" rx="2.5" fill="url(#accent)"/>
  <!-- Eyebrow -->
  <text x="60" y="420" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="3" fill="#10b981" text-transform="uppercase">TARGET MENTORSHIP</text>
  <!-- Headline -->
  <text x="60" y="490" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="64" font-weight="900" fill="#ffffff">Обучение таргету</text>
  <!-- Subheadline gradient -->
  <text x="60" y="555" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="54" font-weight="900" fill="url(#accent)">От 500 000₸ в месяц</text>
  <!-- Bottom row -->
  <text x="60" y="600" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="20" font-weight="600" fill="#a1a1aa">Интенсив · Набор 2026 открыт · 1 990₸</text>
</svg>
`;

async function main() {
  const out = join(PUBLIC_DIR, "og-image.jpg");
  await sharp(SRC)
    .resize({ width: W, height: H, fit: "cover", position: "top" })
    .composite([{ input: Buffer.from(overlaySvg) }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(out);
  console.log("✓ og-image.jpg regenerated with text overlay (1200×630)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
