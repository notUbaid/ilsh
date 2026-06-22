/**
 * Resolves a Lovable .asset.json URL for local dev.
 *
 * In production (Lovable Cloud) the `/__l5e/assets-v1/...` URLs work fine.
 * In local dev they 404, so we swap in a themed Unsplash placeholder keyed
 * by the original filename.
 */

const IS_LOVABLE_CDN = (url: string) => url.startsWith("/__l5e/");

const PLACEHOLDERS: Record<string, string> = {
  "hero-bg.png": "/hero-bg.jpg",
  "ilsh-logo.png": "/ilsh-logo.png",
  "team-huddle.jpg": "/youth-squad.jpeg",
  "crowd-arena.jpg": "/crowded-court.jpg",
  "fbl-banner.jpg": "/faridabad-league.jpg",
  "court-empty.jpg": "/court-ground-at-night.jpg",
  "founder-1.jpg": "/founder.jpeg",
  "founder-2.jpg": "/co-founder.jpg",
  "action-dunk.png": "/team-win.jpeg",
};

type AssetJson = { url: string; original_filename?: string; r2_key?: string };

export function assetUrl(asset: AssetJson): string {
  if (!IS_LOVABLE_CDN(asset.url)) return asset.url;
  // Extract filename from url or r2_key
  const filename = asset.original_filename ?? asset.url.split("/").pop() ?? "";
  return (
    PLACEHOLDERS[filename] ?? `https://placehold.co/800x450?text=${encodeURIComponent(filename)}`
  );
}
