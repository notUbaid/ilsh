import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQuery, a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, u as useRouterState, d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as redirect } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-CN47ePur.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const appCss = "/assets/styles-Bl2kZo4B.css";
const sportsCss = "/assets/sports-DmyZFyu6.css";
const logoUrl = "/ilsh-logo.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/schedule", label: "Schedule" },
  { to: "/covering", label: "Covering Now" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const { pathname, isLoading, pendingLocation } = useRouterState({
    select: (s) => ({
      pathname: s.location.pathname,
      isLoading: s.isLoading,
      pendingLocation: s.pendingMatch?.pathname ?? null
    })
  });
  const navigate = useNavigate();
  const [open, setOpen] = reactExports.useState(false);
  const activePath = isLoading && pendingLocation ? pendingLocation : pathname;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "nav-logo", onClick: () => setOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-mark", style: { background: "transparent", border: "none", padding: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "ILSH", width: 42, height: 42, style: { display: "block", borderRadius: "50%" } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logo-words", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-top", children: "Indian Live Sports Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-bot", children: "India's Basketball Voice" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: `nav-center ${open ? "mob" : ""}`, children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        className: activePath === l.to ? "act" : "",
        children: l.label
      }
    ) }, l.to)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.youtube.com/@indianlivesportshub",
          target: "_blank",
          rel: "noreferrer",
          className: "nav-yt",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
            "YouTube"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "nav-pill",
          onClick: () => navigate({ to: "/covering" }),
          "aria-label": "Currently covering — view live coverage",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  width: 6,
                  height: 6,
                  background: "var(--saff)",
                  borderRadius: "50%",
                  animation: "blink 1.3s infinite"
                }
              }
            ),
            "Live"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "burger",
          onClick: () => setOpen((o) => !o),
          "aria-label": open ? "Close menu" : "Open menu",
          "aria-expanded": open,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ]
        }
      )
    ] })
  ] });
}
const fmt = (ds) => {
  if (!ds) return "TBD";
  try {
    return new Date(ds).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return ds;
  }
};
const STALE = 5 * 60 * 1e3;
function useVideos() {
  return useQuery({
    queryKey: ["videos"],
    staleTime: STALE,
    queryFn: async () => {
      const { data, error } = await supabase.from("videos").select("*").order("sort_order").order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    }
  });
}
function useMemories() {
  return useQuery({
    queryKey: ["memories"],
    staleTime: STALE,
    queryFn: async () => {
      const { data, error } = await supabase.from("memories").select("*").order("sort_order").order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    }
  });
}
function useSchedule() {
  return useQuery({
    queryKey: ["schedule"],
    staleTime: STALE,
    queryFn: async () => {
      const { data, error } = await supabase.from("schedule_events").select("*").order("start_date");
      if (error) throw error;
      return data ?? [];
    }
  });
}
function useCoverage() {
  return useQuery({
    queryKey: ["coverage"],
    staleTime: 60 * 1e3,
    // 1 min — coverage can change more frequently
    queryFn: async () => {
      const { data, error } = await supabase.from("coverage").select("*").eq("id", 1).maybeSingle();
      if (error) throw error;
      return data;
    }
  });
}
function useInvalidateAll() {
  const qc = useQueryClient();
  return () => {
    qc.invalidateQueries({ queryKey: ["videos"] });
    qc.invalidateQueries({ queryKey: ["memories"] });
    qc.invalidateQueries({ queryKey: ["schedule"] });
    qc.invalidateQueries({ queryKey: ["coverage"] });
  };
}
function Ticker() {
  const { data: cov } = useCoverage();
  if (!cov?.active) return null;
  const items = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-map-marker-alt" }),
      cov.name,
      " · ",
      cov.city
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-building" }),
      cov.venue
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-calendar-alt" }),
      fmt(cov.start_date),
      " — ",
      fmt(cov.end_date)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
      "Watch on YouTube"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
      "Follow on Instagram"
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker", style: { display: "flex" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-label", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-dot" }),
      "Live Now"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-track", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ticker-inner", children: [
      items,
      items
    ] }) })
  ] });
}
function NavigationProgress() {
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const [width, setWidth] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setWidth(0);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setWidth(72));
      });
    } else {
      setWidth(100);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 380);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoading]);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${width}%`,
        background: "var(--saff)",
        zIndex: 9999,
        transition: width === 100 ? "width 0.25s ease-out, opacity 0.15s ease 0.25s" : "width 2.5s cubic-bezier(0.1, 0.05, 0, 1)",
        opacity: width === 100 ? 0 : 1,
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 10px rgba(232,151,26,.7)",
        pointerEvents: "none"
      }
    }
  );
}
const SEO_KEYWORDS = [
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
  "basketball community India"
];
const SEO_DESCRIPTION = "India's first dedicated basketball streaming channel — covering district, state, and national tournaments live across India. 24 × 7 coverage from grassroots to championships.";
const SEO_TITLE = "Indian Live Sports Hub — India's Basketball Voice";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd428f04-fada-4342-af85-5e70f88ad0f7/id-preview-848cd00b--c68537f8-6a10-4933-95b1-898d2d60e8b4.lovable.app-1780510914529.png";
const CANONICAL_DOMAINS = [
  "https://www.indianlivesportshub.in",
  "https://www.indianlivesportshub.com",
  "https://www.indianlivesportshub.online"
];
function getBaseMeta(overrides = {}) {
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
    { name: "msapplication-config", content: "/browserconfig.xml" }
  ];
}
function getAlternateLinks(path) {
  return CANONICAL_DOMAINS.map((domain) => ({
    rel: "alternate",
    href: `${domain}${path}`,
    title: `Indian Live Sports Hub (${domain.split("//")[1]})`
  }));
}
function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indian Live Sports Hub",
    "url": "https://www.indianlivesportshub.in",
    "logo": "https://www.indianlivesportshub.in/ilsh-logo.png",
    "description": SEO_DESCRIPTION,
    "sameAs": [
      "https://www.youtube.com/@indianlivesportshub",
      "https://www.instagram.com/indianlivesportshub/"
    ]
  };
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: getBaseMeta(),
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23E8971A'/%3E%3Ccircle cx='16' cy='16' r='11' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='5' y1='16' x2='27' y2='16' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cline x1='16' y1='5' x2='16' y2='27' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M9 7.5 Q16 13 16 16 Q16 19 9 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3Cpath d='M23 7.5 Q16 13 16 16 Q16 19 23 24.5' fill='none' stroke='%230C0F14' stroke-width='1.4'/%3E%3C/svg%3E"
      },
      ...getAlternateLinks("/"),
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: sportsCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Figtree:wght@300;400;500;600;700;800;900&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(getJsonLd()) } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ticker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./schedule-BHvLwv8_.mjs");
const Route$7 = createFileRoute("/schedule")({
  head: () => ({
    meta: getBaseMeta({
      title: "Schedule — Indian Live Sports Hub",
      description: "View our upcoming coverage schedule for basketball tournaments across India."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./memories-Cs6mFRNk.mjs");
const Route$6 = createFileRoute("/memories")({
  head: () => ({
    meta: getBaseMeta({
      title: "Memories — Indian Live Sports Hub",
      description: "A collection of unforgettable basketball moments captured across Indian courts."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./covering-OiiDeSE2.mjs");
const Route$5 = createFileRoute("/covering")({
  head: () => ({
    meta: getBaseMeta({
      title: "Live Coverage — Indian Live Sports Hub",
      description: "Currently covering live basketball matches across India. Watch the live stream and highlights."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DqwaZGDS.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: getBaseMeta({
      title: "Contact Us — Indian Live Sports Hub",
      description: "Get in touch with the Indian Live Sports Hub team for event coverage, partnerships, and inquiries."
    })
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./auth-BJWqBGWN.mjs");
const Route$3 = createFileRoute("/auth")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./route-BFsOu0JM.mjs");
const Route$2 = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    const {
      data: roleRow
    } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin").maybeSingle();
    if (!roleRow) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CPpLk8ZV.mjs");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin-DtvpSEq0.mjs");
const Route = createFileRoute("/_authenticated/admin")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ScheduleRoute = Route$7.update({
  id: "/schedule",
  path: "/schedule",
  getParentRoute: () => Route$8
});
const MemoriesRoute = Route$6.update({
  id: "/memories",
  path: "/memories",
  getParentRoute: () => Route$8
});
const CoveringRoute = Route$5.update({
  id: "/covering",
  path: "/covering",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AuthRoute = Route$3.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$8
});
const AuthenticatedRouteRoute = Route$2.update({
  id: "/_authenticated",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const AuthenticatedAdminRoute = Route.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminRoute
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AuthRoute,
  ContactRoute,
  CoveringRoute,
  MemoriesRoute,
  ScheduleRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    // preload on hover/focus
    defaultPreloadStaleTime: 1e4
    // cache preloaded data for 10s
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useMemories as a,
  useCoverage as b,
  useVideos as c,
  useInvalidateAll as d,
  fmt as f,
  router as r,
  useSchedule as u
};
