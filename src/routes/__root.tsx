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
import { NavigationProgress } from "@/components/NavigationProgress";
import { getBaseMeta, getAlternateLinks, getJsonLd } from "@/components/SEO";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: getBaseMeta(),
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23E8971A'/%3E%3Ccircle cx='16' cy='16' r='11' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='5' y1='16' x2='27' y2='16' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='16' y1='5' x2='16' y2='27' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M9 7.5 Q16 13 16 16 Q16 19 9 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M23 7.5 Q16 13 16 16 Q16 19 23 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3C/svg%3E",
      },
      ...getAlternateLinks("/"),
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
      <head>
        <HeadContent />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }} />
      <NavigationProgress />
      <Ticker />
      <Nav />
      <Outlet />
    </QueryClientProvider>
  );
}
