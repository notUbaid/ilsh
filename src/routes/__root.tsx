import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import sportsCss from "../styles/sports.css?url";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Indian Live Sports Hub — India's Basketball Voice" },
      {
        name: "description",
        content: "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India.",
      },
      { property: "og:title", content: "Indian Live Sports Hub — India's Basketball Voice" },
      { name: "twitter:title", content: "Indian Live Sports Hub — India's Basketball Voice" },
      { property: "og:description", content: "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India." },
      { name: "twitter:description", content: "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd428f04-fada-4342-af85-5e70f88ad0f7/id-preview-848cd00b--c68537f8-6a10-4933-95b1-898d2d60e8b4.lovable.app-1780510914529.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd428f04-fada-4342-af85-5e70f88ad0f7/id-preview-848cd00b--c68537f8-6a10-4933-95b1-898d2d60e8b4.lovable.app-1780510914529.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: sportsCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Figtree:wght@300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Ticker />
      <Nav />
      <Outlet />
    </QueryClientProvider>
  );
}
