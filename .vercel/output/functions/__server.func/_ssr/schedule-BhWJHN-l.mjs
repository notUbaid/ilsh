import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useSchedule } from "./router-CUzuktmw.mjs";
import { S as ScheduleSkeleton, a as ScheduleEvent } from "./Skeletons-C3lMKKiH.mjs";
import { F as Footer } from "./Footer-Dm_v_uht.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./client-CN47ePur.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function SchedulePage() {
  const { data: schedule = [], isLoading } = useSchedule();
  const groups = {};
  [...schedule]
    .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
    .forEach((e) => {
      const k = new Date(e.start_date)
        .toLocaleDateString("en-IN", {
          month: "long",
          year: "numeric",
        })
        .toUpperCase();
      (groups[k] ||= []).push(e);
    });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "page active",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "sw",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "eyebrow",
            children: "Tour Schedule",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
            className: "sh",
            style: {
              marginBottom: 12,
            },
            children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Journey" }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "sp",
            style: {
              marginBottom: 38,
            },
            children:
              "Follow our complete itinerary as we move city to city covering Indian basketball.",
          }),
          isLoading
            ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleSkeleton, { count: 6 })
            : schedule.length === 0
              ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "empty",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "ei",
                      children: "📅",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No schedule yet" }),
                  ],
                })
              : Object.entries(groups).map(([mo, evs]) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "smonth-head",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className: "smonth-word",
                              children: mo,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className: "smonth-line",
                            }),
                          ],
                        }),
                        evs.map((e) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleEvent, { e }, e.id),
                        ),
                      ],
                    },
                    mo,
                  ),
                ),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false }),
    ],
  });
}
export { SchedulePage as component };
