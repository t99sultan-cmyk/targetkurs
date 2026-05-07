/**
 * Returns array of Meta Pixel IDs from env.
 *
 * - NEXT_PUBLIC_FB_PIXEL_IDS — comma/space-separated list (preferred for multi-pixel)
 * - NEXT_PUBLIC_FB_PIXEL_ID — single ID (legacy, fallback)
 *
 * Returns empty array if neither is set.
 */
export function getPixelIds(): string[] {
  const multi = process.env.NEXT_PUBLIC_FB_PIXEL_IDS;
  const single = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const raw = (multi && multi.trim()) || (single && single.trim()) || "";
  if (!raw) return [];
  return raw
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}
