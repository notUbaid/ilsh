import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as Footer } from "./Footer-C6UHtbqS.mjs";
import { s as supabase } from "./client-D2okslBf.mjs";
import { b as useCoverage, d as useInvalidateAll, u as useSchedule, f as fmt, a as useMemories, c as useVideos } from "./router-C-cEuJqD.mjs";
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
import "../_libs/iceberg-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/vercel__analytics.mjs";
function AdminPage() {
  const [tab, setTab] = reactExports.useState("coverage");
  const navigate = useNavigate();
  const logout = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "sw", style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "40px 5% 80px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "sh", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Admin" }),
          " Panel"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost-ink btn-sm", onClick: logout, children: "✕ Sign out" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        background: "var(--forest-l)",
        border: "1px solid rgba(26,92,53,.2)",
        color: "var(--forest)",
        padding: "14px 18px",
        borderRadius: 12,
        marginBottom: 22,
        fontSize: 14,
        fontWeight: 600
      }, children: "✅ Logged in. All changes save instantly to the live database." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginBottom: 28
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "coverage", onClick: () => setTab("coverage"), label: "🔴 Covering Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "schedule", onClick: () => setTab("schedule"), label: "📅 Schedule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "memories", onClick: () => setTab("memories"), label: "📸 Memories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabBtn, { active: tab === "videos", onClick: () => setTab("videos"), label: "📺 Videos" })
      ] }),
      tab === "coverage" && /* @__PURE__ */ jsxRuntimeExports.jsx(CoveragePanel, {}),
      tab === "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsx(SchedulePanel, {}),
      tab === "memories" && /* @__PURE__ */ jsxRuntimeExports.jsx(MemoriesPanel, {}),
      tab === "videos" && /* @__PURE__ */ jsxRuntimeExports.jsx(VideosPanel, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function TabBtn({
  active,
  onClick,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm", style: {
    fontWeight: 700
  }, children: label });
}
function CoveragePanel() {
  const {
    data,
    isLoading
  } = useCoverage();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = reactExports.useState(false);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {});
  const save = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const {
      error
    } = await supabase.from("coverage").update({
      name: fd.get("name") || null,
      city: fd.get("city") || null,
      venue: fd.get("venue") || null,
      start_date: fd.get("start_date") || null,
      end_date: fd.get("end_date") || null,
      yt_url: fd.get("yt_url") || null,
      ig_url: fd.get("ig_url") || null,
      note: fd.get("note") || null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", 1);
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Coverage saved");
    invalidate();
  };
  const toggle = async (active) => {
    const {
      error
    } = await supabase.from("coverage").update({
      active
    }).eq("id", 1);
    if (error) return toast.error(error.message);
    toast.success(active ? "Coverage live" : "Coverage off");
    invalidate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: save, className: "cform", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "cform-t", children: "Coverage Status" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      gap: 10,
      marginBottom: 22
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggle(true), className: data?.active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm", children: "● Set Active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggle(false), className: !data?.active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm", children: "○ Set Inactive" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tournament Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "name", defaultValue: data?.name ?? "" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "city", defaultValue: data?.city ?? "" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Venue", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "venue", defaultValue: data?.venue ?? "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Start Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "date", name: "start_date", defaultValue: data?.start_date ?? "" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "End Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "date", name: "end_date", defaultValue: data?.end_date ?? "" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "YouTube Link", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "yt_url", defaultValue: data?.yt_url ?? "" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Instagram Link", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "ig_url", defaultValue: data?.ig_url ?? "" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Visitor Note", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "fta", name: "note", rows: 3, defaultValue: data?.note ?? "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn btn-saff", disabled: busy, children: busy ? "Saving..." : "💾 Save Coverage" })
  ] });
}
function SchedulePanel() {
  const {
    data,
    isLoading
  } = useSchedule();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = reactExports.useState(false);
  const add = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const {
      error
    } = await supabase.from("schedule_events").insert({
      name: fd.get("name"),
      city: fd.get("city"),
      venue: fd.get("venue") || null,
      start_date: fd.get("start_date"),
      end_date: fd.get("end_date") || null,
      status: fd.get("status") || "upcoming"
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Event added");
    e.target.reset();
    invalidate();
  };
  const del = async (id) => {
    if (!confirm("Delete this event?")) return;
    const {
      error
    } = await supabase.from("schedule_events").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };
  const cycle = async (ev) => {
    const next = ev.status === "upcoming" ? "covering" : ev.status === "covering" ? "completed" : "upcoming";
    const {
      error
    } = await supabase.from("schedule_events").update({
      status: next
    }).eq("id", ev.id);
    if (error) return toast.error(error.message);
    invalidate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "cform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "cform-t", children: "Add Event" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tournament Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "name", required: true, placeholder: "Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "city", required: true, placeholder: "City" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Venue", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "venue", placeholder: "Venue" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Start Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "date", name: "start_date", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "End Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "date", name: "end_date" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "fsel", name: "status", defaultValue: "upcoming", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "upcoming", children: "Upcoming" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "covering", children: "Covering" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-saff", disabled: busy, children: busy ? "Adding..." : "+ Add Event" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "sh", style: {
      fontSize: 26,
      margin: "36px 0 16px"
    }, children: "All Events" }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 10
    }, children: (data ?? []).map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        flex: 1,
        minWidth: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontWeight: 700,
          fontSize: 15
        }, children: ev.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          fontSize: 13,
          color: "var(--slate)"
        }, children: [
          ev.city,
          " · ",
          fmt(ev.start_date),
          " ·",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "var(--saff-d)",
            fontWeight: 600
          }, children: ev.status })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost-ink btn-sm", onClick: () => cycle(ev), children: "↻ Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-sm", style: {
        border: "1.5px solid var(--rust)",
        color: "var(--rust)"
      }, onClick: () => del(ev.id), children: "Delete" })
    ] }, ev.id)) })
  ] });
}
function MemoriesPanel() {
  const {
    data,
    isLoading
  } = useMemories();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = reactExports.useState(false);
  const [imgData, setImgData] = reactExports.useState("");
  const [imgName, setImgName] = reactExports.useState("");
  const onPickFile = (file) => {
    if (!file) {
      setImgData("");
      setImgName("");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image too large (max 2MB). Pick a smaller photo.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImgData(reader.result);
      setImgName(file.name);
    };
    reader.readAsDataURL(file);
  };
  const add = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const {
      error
    } = await supabase.from("memories").insert({
      title: fd.get("title"),
      city: fd.get("city"),
      date_label: fd.get("date_label") || null,
      tags: (fd.get("tags") || "").split(",").map((s) => s.trim()).filter(Boolean),
      emoji: fd.get("emoji") || "🏀",
      height: Number(fd.get("height")) || 200,
      ig_url: fd.get("ig_url") || null,
      img_url: imgData || null
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Memory added");
    e.target.reset();
    setImgData("");
    setImgName("");
    invalidate();
  };
  const del = async (id) => {
    if (!confirm("Delete this memory?")) return;
    const {
      error
    } = await supabase.from("memories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "cform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "cform-t", children: "Add Memory" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tournament Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "title", required: true, placeholder: "Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "city", required: true, placeholder: "City" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "date_label", placeholder: "Jan 2025" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tags (comma-separated)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "tags", placeholder: "Delhi, State, 2025" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Emoji", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "emoji", defaultValue: "🏀" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Card Height (px)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", type: "number", name: "height", defaultValue: 200 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Instagram Post URL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "ig_url", placeholder: "https://www.instagram.com/p/..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Photo", hint: "Pick a photo from your device (JPG/PNG, max 2MB). Leave blank to use emoji.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "btn btn-ghost-ink btn-sm", style: {
          cursor: "pointer",
          margin: 0
        }, children: [
          "📷 Choose from device",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", style: {
            display: "none"
          }, onChange: (e) => onPickFile(e.target.files?.[0] ?? null) })
        ] }),
        imgData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgData, alt: "", style: {
            width: 56,
            height: 56,
            objectFit: "cover",
            borderRadius: 8,
            border: "1px solid var(--w-bdr)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: 13,
            color: "var(--slate)"
          }, children: imgName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-sm", style: {
            border: "1.5px solid var(--rust)",
            color: "var(--rust)"
          }, onClick: () => onPickFile(null), children: "Remove" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-saff", disabled: busy, children: busy ? "Adding..." : "+ Add Memory" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", style: {
      fontSize: 26,
      margin: "36px 0 16px"
    }, children: [
      "All Memories (",
      data?.length ?? 0,
      ")"
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 10
    }, children: (data ?? []).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 22
      }, children: m.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        flex: 1,
        minWidth: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontWeight: 700,
          fontSize: 15
        }, children: m.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          fontSize: 13,
          color: "var(--slate)"
        }, children: [
          m.city,
          " · ",
          m.date_label
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-sm", style: {
        border: "1.5px solid var(--rust)",
        color: "var(--rust)"
      }, onClick: () => del(m.id), children: "Delete" })
    ] }, m.id)) })
  ] });
}
function VideosPanel() {
  const {
    data,
    isLoading
  } = useVideos();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = reactExports.useState(false);
  const add = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const {
      error
    } = await supabase.from("videos").insert({
      title: fd.get("title"),
      yt_id: fd.get("yt_id") || null,
      tour: fd.get("tour") || null,
      date_label: fd.get("date_label") || null
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Video added");
    e.target.reset();
    invalidate();
  };
  const del = async (id) => {
    if (!confirm("Delete this video?")) return;
    const {
      error
    } = await supabase.from("videos").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "cform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "cform-t", children: "Add YouTube Video" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Video Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "title", required: true, placeholder: "e.g. Karnataka Championship — Day 1 Live" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "YouTube Video ID", hint: "Just the part after v= in the URL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "yt_id", placeholder: "ID from youtube.com/watch?v=XXXX" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tournament", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "tour", placeholder: "Tournament name" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "fin", name: "date_label", placeholder: "May 2025" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-saff", disabled: busy, children: busy ? "Adding..." : "+ Add Video" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "sh", style: {
      fontSize: 26,
      margin: "36px 0 16px"
    }, children: [
      "All Videos (",
      data?.length ?? 0,
      ")"
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 10
    }, children: (data ?? []).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: rowCard, children: [
      v.yt_id && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://img.youtube.com/vi/${v.yt_id}/default.jpg`, alt: "", style: {
        width: 80,
        height: 60,
        objectFit: "cover",
        borderRadius: 6
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        flex: 1,
        minWidth: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontWeight: 700,
          fontSize: 14
        }, children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          fontSize: 12,
          color: "var(--slate)"
        }, children: [
          v.tour,
          " · ",
          v.date_label
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-sm", style: {
        border: "1.5px solid var(--rust)",
        color: "var(--rust)"
      }, onClick: () => del(v.id), children: "Delete" })
    ] }, v.id)) })
  ] });
}
function Field({
  label,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    marginBottom: 4
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "flbl", children: label }),
    children,
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: 12,
      color: "var(--mist)",
      marginTop: -8,
      marginBottom: 12
    }, children: hint })
  ] });
}
function Loading() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 40,
    textAlign: "center",
    color: "var(--mist)"
  }, children: "Loading…" });
}
const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14
};
const rowCard = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  background: "var(--parchment)",
  border: "1px solid var(--w-bdr)",
  borderRadius: 12,
  padding: "12px 16px"
};
export {
  AdminPage as component
};
