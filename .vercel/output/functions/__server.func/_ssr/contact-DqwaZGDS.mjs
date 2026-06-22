import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-CN47ePur.mjs";
import { F as Footer } from "./Footer-Dm_v_uht.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
function ContactPage() {
  const [f, setF] = reactExports.useState({
    name: "",
    email: "",
    type: "Event Coverage Request",
    message: ""
  });
  const [busy, setBusy] = reactExports.useState(false);
  const send = async (e) => {
    e.preventDefault();
    if (!f.name || !f.email) {
      toast.error("Fill name and email");
      return;
    }
    setBusy(true);
    const {
      error
    } = await supabase.from("contact_messages").insert({
      name: f.name,
      email: f.email,
      type: f.type,
      message: f.message
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Message sent! We'll be in touch.");
      setF({
        name: "",
        email: "",
        type: "Event Coverage Request",
        message: ""
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page active", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sw", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "sh", style: {
        marginBottom: 12
      }, children: [
        "Contact ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "sp", style: {
        marginBottom: 48
      }, children: "Coverage requests, sponsorships, media inquiries — we'd love to hear from you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cgrid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ccard", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ccard-t", children: "Direct Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "citem", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cico", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-envelope" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cilbl", children: "Business" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cival", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:indianlivesportshub96@gmail.com", children: "indianlivesportshub96@gmail.com" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "citem", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cico", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-envelope" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cilbl", children: "Partner" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cival", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sandeepsharma3392@gmail.com", children: "sandeepsharma3392@gmail.com" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "citem", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cico", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-map-marker-alt" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cilbl", children: "Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cival", children: "Plot No. 1936A, Sector 55, Faridabad, Haryana" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "citem", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cico", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-basketball-ball" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cilbl", children: "Coverage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cival", children: "District · State · National · International" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ccard", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ccard-t", children: "Follow Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "soc-grid", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/indianlivesportshub/", target: "_blank", rel: "noreferrer", className: "soc ig", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sico ig", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-instagram" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-n", children: "Instagram" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-h", children: "@indianlivesportshub" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.youtube.com/@indianlivesportshub", target: "_blank", rel: "noreferrer", className: "soc yt", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sico yt", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-youtube" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-n", children: "YouTube" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-h", children: "@indianlivesportshub" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:indianlivesportshub96@gmail.com", className: "soc em", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sico em", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-envelope" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-n", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-h", children: "Business inquiries" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.youtube.com/@indianlivesportshub", target: "_blank", rel: "noreferrer", className: "soc bb", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sico bb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-basketball-ball" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-n", children: "Sandy Singh" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "soc-h", children: "#sandyfbdrider" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "cform", onSubmit: send, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cform-t", children: "Send a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", value: f.name, onChange: (e) => setF({
            ...f,
            name: e.target.value
          }), placeholder: "Full name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "email", value: f.email, onChange: (e) => setF({
            ...f,
            email: e.target.value
          }), placeholder: "your@email.com", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Inquiry Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "fsel", value: f.type, onChange: (e) => setF({
            ...f,
            type: e.target.value
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Event Coverage Request" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sponsorship / Partnership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Media Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General Question" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "fta", value: f.message, onChange: (e) => setF({
            ...f,
            message: e.target.value
          }), placeholder: "Tell us about your tournament or how we can help..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn btn-saff", style: {
            width: "100%",
            justifyContent: "center",
            padding: "13px 24px"
          }, disabled: busy, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane" }),
            busy ? "Sending..." : "Send Message"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { full: false })
  ] });
}
export {
  ContactPage as component
};
