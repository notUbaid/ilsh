import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as useCoverage, f as fmt } from "./router-C-cEuJqD.mjs";
import { F as Footer } from "./Footer-C6UHtbqS.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/vercel__analytics.mjs";
import "./client-D2okslBf.mjs";
import "../_libs/iceberg-js.mjs";
function CoveringPageSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cov-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cov-hero-inner", style: {
      maxWidth: 820
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-short", style: {
        height: 30,
        maxWidth: 180,
        marginBottom: 18,
        borderRadius: 50
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line", style: {
        height: 64,
        maxWidth: 460,
        marginBottom: 16
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-med", style: {
        marginBottom: 36
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "meta-row", children: [1, 2, 3, 4].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox sk-block", style: {
        minHeight: 80
      } }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 11
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-block", style: {
          width: 160,
          height: 44,
          borderRadius: 50
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-block", style: {
          width: 160,
          height: 44,
          borderRadius: 50
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
  ] });
}
function CoveringPage() {
  const {
    data: cov,
    isLoading
  } = useCoverage();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(CoveringPageSkeleton, {});
  if (!cov?.active) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        padding: "90px 5%",
        textAlign: "center"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ei", children: "🏀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Not on the road right now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We'll be back soon with the next tournament!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/schedule", className: "btn btn-saff", children: "View Our Schedule" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cov-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "cov-hero-rings", viewBox: "0 0 360 360", fill: "none", children: [170, 130, 90, 50].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "180", cy: "180", r, stroke: "#E8971A", strokeWidth: "1", fill: "none" }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cov-hero-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-pill", style: {
          width: "fit-content",
          marginBottom: 6,
          background: "rgba(232,151,26,.12)",
          borderColor: "rgba(232,151,26,.3)",
          color: "var(--saff)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: 7,
            height: 7,
            background: "var(--saff)",
            borderRadius: "50%",
            animation: "blink 1.3s infinite"
          } }),
          "Currently Covering"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cov-big", children: cov.name }),
        cov.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "rgba(255,255,255,.5)",
          fontSize: 14.5,
          maxWidth: 520,
          lineHeight: 1.8
        }, children: cov.note }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "meta-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mbox", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-ico", children: "📍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-l", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-v", children: cov.city })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mbox", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-ico", children: "🏟️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-l", children: "Venue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-v", children: cov.venue })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mbox", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-ico", children: "📅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-l", children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-v", children: fmt(cov.start_date) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mbox", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-ico", children: "🏁" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-l", children: "Until" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mbox-v", children: fmt(cov.end_date) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 11,
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.yt_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-yt", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
            "Watch on YouTube"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.ig_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-ghost", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
            "Instagram Updates"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cov-feed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: 680,
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", style: {
        marginBottom: 10
      }, children: "Coverage Feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", style: {
        marginBottom: 28
      }, children: [
        "Follow the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Action" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feed-box", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "feed-icon", children: "📸" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Real-Time on Instagram & YouTube" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We post live photos, behind-the-scenes moments, and highlights from the court as they happen." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 11,
          justifyContent: "center",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.ig_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-ig", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
            "Open Instagram"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.yt_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-yt", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
            "Full Streams"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
  ] });
}
export {
  CoveringPage as component
};
