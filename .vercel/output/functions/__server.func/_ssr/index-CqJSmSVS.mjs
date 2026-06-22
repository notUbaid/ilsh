import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as useCoverage, c as useVideos, a as useMemories, u as useSchedule, f as fmt } from "./router-C-cEuJqD.mjs";
import { C as CoverageCardSkeleton, V as VideoGridSkeleton, c as VideoCard, M as MemoriesGridSkeleton, b as MemoryCard, S as ScheduleSkeleton, a as ScheduleEvent } from "./Skeletons-CkzesKLT.mjs";
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
const REAL_SHOTS = [{
  src: "/youth-squad.jpeg",
  cap: "ILSH Youth Squad — Pre-Match Huddle",
  tag: "Team Spirit"
}, {
  src: "/crowded-court.jpg",
  cap: "Packed Arena — National Championship",
  tag: "Live Coverage"
}, {
  src: "/faridabad-league.jpg",
  cap: "Faridabad Basketball League — Season 2",
  tag: "Tournament"
}, {
  src: "/court-ground-at-night.jpg",
  cap: "Indoor Court — Pre-Game Setup",
  tag: "Behind the Scenes"
}, {
  src: "/another-winning-team.jpg",
  cap: "Champions — Another Trophy, Another City",
  tag: "Winners"
}, {
  src: "/person-holding-camera.jpg",
  cap: "Behind the Lens — Every Moment Captured",
  tag: "On the Ground"
}];
function Home() {
  const {
    data: cov,
    isLoading: covLoading
  } = useCoverage();
  const {
    data: videos = [],
    isLoading: videosLoading
  } = useVideos();
  const {
    data: memories = [],
    isLoading: memoriesLoading
  } = useMemories();
  const {
    data: schedule = [],
    isLoading: scheduleLoading
  } = useSchedule();
  const upcoming = schedule.filter((s) => s.status !== "completed").slice(0, 3);
  const nextEvt = schedule.filter((s) => s.status === "upcoming").sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero hero-img", style: {
      backgroundImage: `linear-gradient(90deg, rgba(253,250,244,.92) 0%, rgba(253,250,244,.55) 35%, rgba(253,250,244,0) 55%), url(/hero-bg.jpg)`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-l", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-l-deco" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-l-deco2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-badge-dot" }),
            "India's First Dedicated Basketball Streaming Channel"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-h1", children: [
            "We Cover",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Every" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "outline", children: "Court." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "hero-sub", children: [
            "From ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "district grassroots" }),
            " to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "national championships" }),
            " — we travel across India bringing live basketball to your screens. 24 × 7."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-btns", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-highlight", onClick: () => window.open("https://www.youtube.com/@indianlivesportshub", "_blank"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
              "Watch on YouTube"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/schedule", className: "btn btn-ghost", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-calendar-alt" }),
              "View Schedule"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 24
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/indianlivesportshub/", target: "_blank", rel: "noreferrer", className: "btn btn-sm btn-ig", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
            "Instagram"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.youtube.com/@indianlivesportshub", target: "_blank", rel: "noreferrer", className: "btn btn-sm btn-yt", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
            "@indianlivesportshub"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-r", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-r-bg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-stats-grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat-n", children: [
              "100K",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "var(--saff)",
                fontSize: ".5em"
              }, children: "+" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hstat-l", children: "YouTube Subs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat-n", children: [
              "73K",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "var(--saff)",
                fontSize: ".5em"
              }, children: "+" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hstat-l", children: "Instagram Followers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat-n", children: [
              "7K",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "var(--saff)",
                fontSize: ".5em"
              }, children: "+" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hstat-l", children: "Posts" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hstat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hstat-n", style: {
              color: "var(--saff-d)"
            }, children: "#1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hstat-l", children: "In India" })
          ] })
        ] }),
        covLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CoverageCardSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-cov-card", children: cov?.active ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-tag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-dot" }),
            "Currently Covering"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-name", children: cov.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-metas", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-m", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-map-marker-alt" }),
              cov.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-m", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-building" }),
              cov.venue
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-m", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-calendar-alt" }),
              fmt(cov.start_date),
              " — ",
              fmt(cov.end_date)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.yt_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-yt btn-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
              "Watch Live"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cov.ig_url ?? "#", target: "_blank", rel: "noreferrer", className: "btn btn-sm", style: {
              background: "rgba(255,255,255,.1)",
              color: "white"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
              "Instagram"
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-tag", style: {
            color: "rgba(255,255,255,.5)"
          }, children: "Next Tournament" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-name", children: nextEvt ? nextEvt.name : "Coming Soon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-metas", children: nextEvt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hcc-m", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-calendar-alt" }),
            fmt(nextEvt.start_date)
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hcc-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/schedule", className: "btn btn-sm btn-saff", children: "View Schedule" }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RealMomentsBand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FoundersBand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "YouTube Channel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", children: [
            "Latest ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Streams" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", children: "Fresh from the court — most recent tournament coverage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "va", onClick: () => window.open("https://www.youtube.com/@indianlivesportshub", "_blank"), children: [
          "All Videos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right" })
        ] })
      ] }),
      videosLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoGridSkeleton, { count: 6 }) : videos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vgrid", children: videos.slice(0, 6).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { v }, v.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty", style: {
        gridColumn: "1/-1"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ei", children: "📺" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Videos coming soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check back after our next tournament!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw sw-alt", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", children: [
            "Tournament ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Memories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", children: "Moments captured across India's basketball courts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/memories", className: "va", children: [
          "All Memories ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right" })
        ] })
      ] }),
      memoriesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MemoriesGridSkeleton, { count: 8 }) : memories.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "masonry", children: memories.slice(0, 8).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryCard, { m }, m.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ei", children: "📸" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Memories coming soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Moments from our next tournament will appear here." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "band", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "band-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "band-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "Subscribe for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Live" }),
          " Coverage"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Don't miss a single match — get every tournament, every state, every court." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "band-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-forest", onClick: () => window.open("https://www.youtube.com/@indianlivesportshub", "_blank"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }),
          "Subscribe Now"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-ghost-ink", onClick: () => window.open("https://www.instagram.com/indianlivesportshub/", "_blank"), style: {
          border: "1.5px solid rgba(12,15,20,0.35)",
          color: "var(--ink)",
          background: "rgba(12,15,20,0.08)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
          "Instagram"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Upcoming Tour" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Stops" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/schedule", className: "va", children: [
          "Full Schedule ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: scheduleLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleSkeleton, { count: 3 }) : upcoming.length ? upcoming.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleEvent, { e }, e.id)) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ei", children: "📅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No Upcoming Events" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check back soon!" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function RealMomentsBand() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REAL_SHOTS.length), 4200);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "rmb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rmb-inner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rmb-l", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Straight From The Court" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", children: [
        "Real ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Moments" }),
        ", Real Hoops."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", children: "Unfiltered shots from the tournaments we travel to — packed arenas, empty pre-game courts, and the kids who'll define Indian basketball." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rmb-dots", children: REAL_SHOTS.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `rmb-dot ${k === i ? "on" : ""}`, onClick: () => setI(k), "aria-label": `Slide ${k + 1}` }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/indianlivesportshub/", target: "_blank", rel: "noreferrer", className: "btn btn-highlight", style: {
        marginTop: 18
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }),
        " Follow on Instagram"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rmb-r", children: REAL_SHOTS.map((s, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rmb-slide ${k === i ? "on" : ""}`, style: {
      backgroundImage: `url(${s.src})`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rmb-cap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rmb-tag", children: s.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.cap })
    ] }) }, k)) })
  ] }) });
}
function FoundersBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "founders-band", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "founders-band-inner", style: {
    maxWidth: 760
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "founders-band-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "The Visionary Behind The Lens" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", children: [
        "Built By ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Hoopers" }),
        ", For Hoopers."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "founders-band-grid", style: {
      gridTemplateColumns: "1fr"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "founders-band-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "founders-band-photo", style: {
        backgroundImage: `url(/co-founder.jpg)`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fb-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-role", children: "Founder · On-Ground Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-name", children: "Sandy Singh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fb-q", children: '"Every court in India deserves a camera."' })
      ] })
    ] }) })
  ] }) });
}
export {
  Home as component
};
