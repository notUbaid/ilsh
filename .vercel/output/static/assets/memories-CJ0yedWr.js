import { a as i, j as s } from "./index-DMhGgcvu.js";
import { M as o, b as m } from "./Skeletons-CLVflFyJ.js";
import { F as t } from "./Footer-BLHjArDh.js";
function d() {
  const { data: e = [], isLoading: a } = i();
  return s.jsxs("div", {
    className: "page active",
    children: [
      s.jsxs("div", {
        className: "sw",
        children: [
          s.jsx("div", { className: "eyebrow", children: "Gallery" }),
          s.jsxs("h1", {
            className: "sh",
            style: { marginBottom: 12 },
            children: ["Tournament ", s.jsx("em", { children: "Memories" })],
          }),
          s.jsx("p", {
            className: "sp",
            style: { marginBottom: 32 },
            children: "Every tournament, every city — captured across India's courts.",
          }),
          a
            ? s.jsx(o, { count: 12 })
            : e.length
              ? s.jsx("div", {
                  className: "masonry",
                  children: e.map((r) => s.jsx(m, { m: r }, r.id)),
                })
              : s.jsxs("div", {
                  className: "empty",
                  children: [
                    s.jsx("div", { className: "ei", children: "📸" }),
                    s.jsx("h3", { children: "No memories yet" }),
                  ],
                }),
        ],
      }),
      s.jsx(t, { full: !1 }),
    ],
  });
}
export { d as component };
