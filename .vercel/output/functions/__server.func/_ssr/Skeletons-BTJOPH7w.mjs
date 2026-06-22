import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as fmt } from "./router-Leb6AsHr.mjs";
function VideoCard({ v }) {
  const href = v.yt_id
    ? `https://youtu.be/${v.yt_id}`
    : "https://www.youtube.com/@indianlivesportshub";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "vcard",
    onClick: () => window.open(href, "_blank"),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "vthumb",
        children: [
          v.yt_id
            ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: `https://img.youtube.com/vi/${v.yt_id}/mqdefault.jpg`,
                alt: v.title,
                width: 320,
                height: 180,
                loading: "lazy",
                decoding: "async",
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "vthumb-ph",
                children: "🏀",
              }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "vplay",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "vplay-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-play" }),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "vinfo",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "vtag",
            children: ["🏀 ", v.tour],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vtitle", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "vmeta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                style: { color: "#FF0000" },
                children: "▶ YouTube",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v.date_label }),
            ],
          }),
        ],
      }),
    ],
  });
}
function MemoryCard({ m }) {
  const bg = m.bg || "#FEF4E0";
  const h = m.height || 180;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "mcard",
    style: { cursor: m.ig_url ? "pointer" : "default" },
    onClick: () => m.ig_url && window.open(m.ig_url, "_blank"),
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mimg-wrap",
        style: { minHeight: h },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcity", children: m.city }),
          m.img_url
            ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: m.img_url,
                alt: m.title,
                loading: "lazy",
                decoding: "async",
                style: { width: "100%", height: h, objectFit: "cover", display: "block" },
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "mimg-ph",
                style: { background: bg, height: h },
                children: m.emoji || "🏀",
              }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "mcard-ov",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "mcard-ov-t",
              children: "▶ View on Instagram",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mcard-info",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-t", children: m.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "mcard-m",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-map-marker-alt" }),
              m.city,
              " · ",
              m.date_label,
            ],
          }),
        ],
      }),
    ],
  });
}
function ScheduleEvent({ e }) {
  const d = new Date(e.start_date);
  const mo = d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();
  const dy = d.getDate();
  const end = e.end_date ? ` — ${fmt(e.end_date)}` : "";
  const badge =
    e.status === "covering"
      ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "sbadge covering",
          children: "● Covering Now",
        })
      : e.status === "upcoming"
        ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "sbadge upcoming",
            children: "◷ Upcoming",
          })
        : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "sbadge completed",
            children: "✓ Completed",
          });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `sevent ${e.status}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "sdbox",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sdbox-m", children: mo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sdbox-d", children: dy }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sname", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "sdets",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                className: "sdet",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", {
                    className: "fas fa-map-marker-alt",
                  }),
                  e.city,
                ],
              }),
              e.venue &&
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                  className: "sdet",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-building" }),
                    e.venue,
                  ],
                }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                className: "sdet",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-calendar" }),
                  fmt(e.start_date),
                  end,
                ],
              }),
            ],
          }),
        ],
      }),
      badge,
    ],
  });
}
function VideoCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "vcard sk-card",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "vthumb sk-block",
        style: { aspectRatio: "16/9" },
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "vinfo",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-line sk-line-short",
            style: { marginBottom: 10 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-line",
            style: { marginBottom: 6 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-line sk-line-med",
            style: { marginBottom: 14 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            style: { display: "flex", gap: 12 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-xs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-xs" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function VideoGridSkeleton({ count = 6 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "vgrid",
    "aria-label": "Loading videos…",
    children: Array.from({ length: count }, (_, i) =>
      /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCardSkeleton, {}, i),
    ),
  });
}
function MemoryCardSkeleton({ height = 200 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "mcard sk-card",
    "aria-hidden": "true",
    style: { marginBottom: 16 },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-block", style: { height } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mcard-info",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-line",
            style: { marginBottom: 8 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-med" }),
        ],
      }),
    ],
  });
}
function MemoriesGridSkeleton({ count = 8 }) {
  const heights = [180, 220, 200, 240, 190, 210, 230, 200];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "masonry",
    "aria-label": "Loading memories…",
    children: Array.from({ length: count }, (_, i) =>
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MemoryCardSkeleton,
        { height: heights[i % heights.length] },
        i,
      ),
    ),
  });
}
function ScheduleEventSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "sevent sk-card",
    "aria-hidden": "true",
    style: { marginBottom: 12 },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "sdbox sk-block",
        style: { width: 80, minHeight: 74, borderRadius: 12 },
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        style: { flex: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-line",
            style: { marginBottom: 10, maxWidth: 260 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            style: { display: "flex", gap: 12 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-xs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-xs" }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "sk-line sk-line-xs",
        style: { width: 80, alignSelf: "center" },
      }),
    ],
  });
}
function ScheduleSkeleton({ count = 4 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    "aria-label": "Loading schedule…",
    children: Array.from({ length: count }, (_, i) =>
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleEventSkeleton, {}, i),
    ),
  });
}
function CoverageCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "hero-cov-card sk-card",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "sk-line sk-line-short",
        style: { marginBottom: 12 },
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "sk-line",
        style: { height: 28, marginBottom: 14 },
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-med" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sk-line sk-line-med" }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        style: { display: "flex", gap: 9 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-block",
            style: { width: 110, height: 36, borderRadius: 50 },
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "sk-block",
            style: { width: 90, height: 36, borderRadius: 50 },
          }),
        ],
      }),
    ],
  });
}
export {
  CoverageCardSkeleton as C,
  MemoriesGridSkeleton as M,
  ScheduleSkeleton as S,
  VideoGridSkeleton as V,
  ScheduleEvent as a,
  MemoryCard as b,
  VideoCard as c,
};
