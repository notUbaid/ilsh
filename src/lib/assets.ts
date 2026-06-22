/**
 * Resolves a Lovable .asset.json URL for local dev.
 *
 * In production (Lovable Cloud) the `/__l5e/assets-v1/...` URLs work fine.
 * In local dev they 404, so we swap in a themed Unsplash placeholder keyed
 * by the original filename.
 */

const IS_LOVABLE_CDN = (url: string) => url.startsWith("/__l5e/");

const PLACEHOLDERS: Record<string, string> = {
  "hero-bg.png": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1400&q=80",
  "ilsh-logo.png": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=84&h=84&fit=crop&q=80",
  "team-huddle.jpg": "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80",
  "crowd-arena.jpg": "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
  "fbl-banner.jpg": "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
  "court-empty.jpg": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "founder-1.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "founder-2.jpg": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "action-dunk.png": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
};

type AssetJson = { url: string; original_filename?: string; r2_key?: string };

export function assetUrl(asset: AssetJson): string {
  if (!IS_LOVABLE_CDN(asset.url)) return asset.url;
  // Extract filename from url or r2_key
  const filename = asset.original_filename
    ?? asset.url.split("/").pop()
    ?? "";
  return PLACEHOLDERS[filename] ?? `https://placehold.co/800x450?text=${encodeURIComponent(filename)}`;
}
