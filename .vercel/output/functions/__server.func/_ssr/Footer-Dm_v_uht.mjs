import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function Footer({ full = true }) {
  if (!full) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fbot", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Indian Live Sports Hub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "⚙ Admin" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fb-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logo-words", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-top", style: { color: "white", fontSize: 20 }, children: "Indian Live Sports Hub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-bot", children: "India's Basketball Voice" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "India's first dedicated basketball streaming channel. From district grassroots to national championships — we cover every court." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fc-t", children: "Pages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flinks", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/memories", children: "Memories" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/schedule", children: "Schedule" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/covering", children: "Covering Now" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fc-t", children: "Watch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flinks", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.youtube.com/@indianlivesportshub", target: "_blank", rel: "noreferrer", children: "YouTube" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/indianlivesportshub/", target: "_blank", rel: "noreferrer", children: "Instagram" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fc-t", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flinks", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:indianlivesportshub96@gmail.com", children: "indianlivesportshub96@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sandeepsharma3392@gmail.com", children: "sandeepsharma3392@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", style: { color: "rgba(232,151,26,.7)" }, children: "⚙ Admin Panel" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fbot", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Indian Live Sports Hub · All rights reserved" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Admin Login" })
    ] })
  ] });
}
export {
  Footer as F
};
