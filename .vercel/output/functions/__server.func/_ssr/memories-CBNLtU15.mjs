import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useMemories } from "./router-CUzuktmw.mjs";
import { M as MemoriesGridSkeleton, b as MemoryCard } from "./Skeletons-C3lMKKiH.mjs";
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
function MemoriesPage() {
  const {
    data: memories = [],
    isLoading
  } = useMemories();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "sh", style: {
        marginBottom: 12
      }, children: [
        "Tournament ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Memories" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", style: {
        marginBottom: 32
      }, children: "Every tournament, every city — captured across India's courts." }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MemoriesGridSkeleton, { count: 12 }) : memories.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "masonry", children: memories.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryCard, { m }, m.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ei", children: "📸" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No memories yet" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
  ] });
}
export {
  MemoriesPage as component
};
