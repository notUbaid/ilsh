import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-CN47ePur.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as Footer } from "./Footer-Dm_v_uht.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function AuthPage() {
  const [mode, setMode] = reactExports.useState("signin");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const {
        error
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`
        }
      });
      setBusy(false);
      if (error) toast.error(error.message);
      else {
        toast.success("Account created — signing you in...");
        navigate({
          to: "/admin"
        });
      }
    } else {
      const {
        error
      } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      setBusy(false);
      if (error) toast.error(error.message);
      else navigate({
        to: "/admin"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw", style: {
      maxWidth: 480,
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Admin Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "sh", style: {
        marginBottom: 12
      }, children: mode === "signin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Admin ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Login" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Create ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Admin" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", style: {
        marginBottom: 32
      }, children: mode === "signin" ? "Sign in to manage your website content." : "First sign-up automatically becomes the site admin." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "cform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "password", required: true, minLength: 6, value: password, onChange: (e) => setPassword(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn btn-saff", disabled: busy, style: {
          width: "100%",
          justifyContent: "center",
          padding: "13px 24px"
        }, children: busy ? "Please wait..." : mode === "signin" ? "Login" : "Create Admin Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "btn btn-ghost-ink btn-sm", style: {
          marginTop: 14,
          width: "100%",
          justifyContent: "center"
        }, children: mode === "signin" ? "First time? Create admin account" : "Already have an account? Sign in" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
  ] });
}
export {
  AuthPage as component
};
