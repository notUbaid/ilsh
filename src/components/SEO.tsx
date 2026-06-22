import { createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const SEO_KEYWORDS = [
  "basketball",
  "India basketball",
  "basketball streaming",
  "basketball live coverage",
  "Indian basketball tournaments",
  "basketball India",
  "basketball videos",
  "live sports streaming",
  "Faridabad basketball",
  "Delhi basketball",
  "Haryana basketball",
  "basketball championship",
  "basketball tournament coverage",
  "basketball highlights",
  "Indian sports",
  "basketball grassroots",
  "district basketball",
  "state basketball",
  "national basketball",
  "basketball community India",
];

export const SEO_DESCRIPTION = "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India. 24 × 7 coverage from grassroots to championships.";

export const SEO_TITLE = "Indian Live Sports Hub — India's Basketball Voice";

export const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd428f04-fada-4342-af85-5e70f88ad0f7/id-preview-848cd00b--c68537f8-6a10-4933-95b1-898d2d60e8b4.lovable.app-1780510914529.png";

export const CANONICAL_DOMAINS = [
  "https://www.indianlivesportshub.in",
  "https://www.indianlivesportshub.com",
  "https://www.indianlivesportshub.online",
];

export function getBaseMeta(overrides: { title?: string; description?: string; image?: string } = {}) {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "color-scheme", content: "light" },
    { name: "theme-color", content: "#E8971A" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { title: overrides.title || SEO_TITLE },
    { name: "description", content: overrides.description || SEO_DESCRIPTION },
    { name: "keywords", content: SEO_KEYWORDS.join(", ") },
    { name: "author", content: "Indian Live Sports Hub" },
    { name: "creator", content: "Indian Live Sports Hub" },
    { name: "publisher", content: "Indian Live Sports Hub" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "bingbot", content: "index, follow" },
    { property: "og:title", content: overrides.title || SEO_TITLE },
    { property: "og:description", content: overrides.description || SEO_DESCRIPTION },
    { property: "og:image", content: overrides.image || OG_IMAGE },
    { property: "og:image:alt", content: "Indian Live Sports Hub - Live Basketball Coverage" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Indian Live Sports Hub" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:locale:alternate", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: overrides.title || SEO_TITLE },
    { name: "twitter:description", content: overrides.description || SEO_DESCRIPTION },
    { name: "twitter:image", content: overrides.image || OG_IMAGE },
    { name: "twitter:creator", content: "@indianlivesportshub" },
    { name: "twitter:site", content: "@indianlivesportshub" },
    { name: "application-name", content: "Indian Live Sports Hub" },
    { name: "msapplication-TileColor", content: "#E8971A" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
  ];
}

export function getAlternateLinks(path: string) {
  return CANONICAL_DOMAINS.map((domain) => ({
    rel: "alternate",
    href: `${domain}${path}`,
    title: `Indian Live Sports Hub (${domain.split("//")[1]})`,
  }));
}