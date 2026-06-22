import {
  r as b,
  c as w,
  j as e,
  s as g,
  b as D,
  e as y,
  u as k,
  f as V,
  a as A,
  d as T,
} from "./index-D38jfdRg.js";
import { t as r } from "./index-Dsse7OOg.js";
import { F } from "./Footer-Cj7SbV-q.js";
function M() {
  const [s, o] = b.useState("coverage"),
    d = w(),
    u = async () => {
      (await g.auth.signOut(), r.success("Signed out"), d({ to: "/" }));
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("main", {
        className: "sw",
        style: { maxWidth: 1100, margin: "0 auto", padding: "40px 5% 80px" },
        children: [
          e.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            },
            children: [
              e.jsxs("h1", {
                className: "sh",
                children: [e.jsx("em", { children: "Admin" }), " Panel"],
              }),
              e.jsx("button", {
                className: "btn btn-ghost-ink btn-sm",
                onClick: u,
                children: "✕ Sign out",
              }),
            ],
          }),
          e.jsx("div", {
            style: {
              background: "var(--forest-l)",
              border: "1px solid rgba(26,92,53,.2)",
              color: "var(--forest)",
              padding: "14px 18px",
              borderRadius: 12,
              marginBottom: 22,
              fontSize: 14,
              fontWeight: 600,
            },
            children: "✅ Logged in. All changes save instantly to the live database.",
          }),
          e.jsxs("div", {
            style: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 },
            children: [
              e.jsx(p, {
                active: s === "coverage",
                onClick: () => o("coverage"),
                label: "🔴 Covering Now",
              }),
              e.jsx(p, {
                active: s === "schedule",
                onClick: () => o("schedule"),
                label: "📅 Schedule",
              }),
              e.jsx(p, {
                active: s === "memories",
                onClick: () => o("memories"),
                label: "📸 Memories",
              }),
              e.jsx(p, { active: s === "videos", onClick: () => o("videos"), label: "📺 Videos" }),
            ],
          }),
          s === "coverage" && e.jsx(z, {}),
          s === "schedule" && e.jsx(B, {}),
          s === "memories" && e.jsx(L, {}),
          s === "videos" && e.jsx(I, {}),
        ],
      }),
      e.jsx(F, {}),
    ],
  });
}
function p({ active: s, onClick: o, label: d }) {
  return e.jsx("button", {
    onClick: o,
    className: s ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm",
    style: { fontWeight: 700 },
    children: d,
  });
}
function z() {
  const { data: s, isLoading: o } = D(),
    d = y(),
    [u, m] = b.useState(!1);
  if (o) return e.jsx(v, {});
  const x = async (n) => {
      n.preventDefault();
      const t = new FormData(n.currentTarget);
      m(!0);
      const { error: l } = await g
        .from("coverage")
        .update({
          name: t.get("name") || null,
          city: t.get("city") || null,
          venue: t.get("venue") || null,
          start_date: t.get("start_date") || null,
          end_date: t.get("end_date") || null,
          yt_url: t.get("yt_url") || null,
          ig_url: t.get("ig_url") || null,
          note: t.get("note") || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", 1);
      if ((m(!1), l)) return r.error(l.message);
      (r.success("Coverage saved"), d());
    },
    h = async (n) => {
      const { error: t } = await g.from("coverage").update({ active: n }).eq("id", 1);
      if (t) return r.error(t.message);
      (r.success(n ? "Coverage live" : "Coverage off"), d());
    };
  return e.jsxs("form", {
    onSubmit: x,
    className: "cform",
    children: [
      e.jsx("h2", { className: "cform-t", children: "Coverage Status" }),
      e.jsxs("div", {
        style: { display: "flex", gap: 10, marginBottom: 22 },
        children: [
          e.jsx("button", {
            type: "button",
            onClick: () => h(!0),
            className: s?.active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm",
            children: "● Set Active",
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => h(!1),
            className: s?.active ? "btn btn-ghost-ink btn-sm" : "btn btn-saff btn-sm",
            children: "○ Set Inactive",
          }),
        ],
      }),
      e.jsxs("div", {
        style: f,
        children: [
          e.jsx(a, {
            label: "Tournament Name",
            children: e.jsx("input", {
              className: "fin",
              name: "name",
              defaultValue: s?.name ?? "",
            }),
          }),
          e.jsx(a, {
            label: "City",
            children: e.jsx("input", {
              className: "fin",
              name: "city",
              defaultValue: s?.city ?? "",
            }),
          }),
        ],
      }),
      e.jsx(a, {
        label: "Venue",
        children: e.jsx("input", { className: "fin", name: "venue", defaultValue: s?.venue ?? "" }),
      }),
      e.jsxs("div", {
        style: f,
        children: [
          e.jsx(a, {
            label: "Start Date",
            children: e.jsx("input", {
              className: "fin",
              type: "date",
              name: "start_date",
              defaultValue: s?.start_date ?? "",
            }),
          }),
          e.jsx(a, {
            label: "End Date",
            children: e.jsx("input", {
              className: "fin",
              type: "date",
              name: "end_date",
              defaultValue: s?.end_date ?? "",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        style: f,
        children: [
          e.jsx(a, {
            label: "YouTube Link",
            children: e.jsx("input", {
              className: "fin",
              name: "yt_url",
              defaultValue: s?.yt_url ?? "",
            }),
          }),
          e.jsx(a, {
            label: "Instagram Link",
            children: e.jsx("input", {
              className: "fin",
              name: "ig_url",
              defaultValue: s?.ig_url ?? "",
            }),
          }),
        ],
      }),
      e.jsx(a, {
        label: "Visitor Note",
        children: e.jsx("textarea", {
          className: "fta",
          name: "note",
          rows: 3,
          defaultValue: s?.note ?? "",
        }),
      }),
      e.jsx("button", {
        type: "submit",
        className: "btn btn-saff",
        disabled: u,
        children: u ? "Saving..." : "💾 Save Coverage",
      }),
    ],
  });
}
function B() {
  const { data: s, isLoading: o } = k(),
    d = y(),
    [u, m] = b.useState(!1),
    x = async (t) => {
      t.preventDefault();
      const l = new FormData(t.currentTarget);
      m(!0);
      const { error: j } = await g
        .from("schedule_events")
        .insert({
          name: l.get("name"),
          city: l.get("city"),
          venue: l.get("venue") || null,
          start_date: l.get("start_date"),
          end_date: l.get("end_date") || null,
          status: l.get("status") || "upcoming",
        });
      if ((m(!1), j)) return r.error(j.message);
      (r.success("Event added"), t.target.reset(), d());
    },
    h = async (t) => {
      if (!confirm("Delete this event?")) return;
      const { error: l } = await g.from("schedule_events").delete().eq("id", t);
      if (l) return r.error(l.message);
      (r.success("Deleted"), d());
    },
    n = async (t) => {
      const l =
          t.status === "upcoming" ? "covering" : t.status === "covering" ? "completed" : "upcoming",
        { error: j } = await g.from("schedule_events").update({ status: l }).eq("id", t.id);
      if (j) return r.error(j.message);
      d();
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("form", {
        onSubmit: x,
        className: "cform",
        children: [
          e.jsx("h2", { className: "cform-t", children: "Add Event" }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "Tournament Name",
                children: e.jsx("input", {
                  className: "fin",
                  name: "name",
                  required: !0,
                  placeholder: "Name",
                }),
              }),
              e.jsx(a, {
                label: "City",
                children: e.jsx("input", {
                  className: "fin",
                  name: "city",
                  required: !0,
                  placeholder: "City",
                }),
              }),
            ],
          }),
          e.jsx(a, {
            label: "Venue",
            children: e.jsx("input", { className: "fin", name: "venue", placeholder: "Venue" }),
          }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "Start Date",
                children: e.jsx("input", {
                  className: "fin",
                  type: "date",
                  name: "start_date",
                  required: !0,
                }),
              }),
              e.jsx(a, {
                label: "End Date",
                children: e.jsx("input", { className: "fin", type: "date", name: "end_date" }),
              }),
            ],
          }),
          e.jsx(a, {
            label: "Status",
            children: e.jsxs("select", {
              className: "fsel",
              name: "status",
              defaultValue: "upcoming",
              children: [
                e.jsx("option", { value: "upcoming", children: "Upcoming" }),
                e.jsx("option", { value: "covering", children: "Covering" }),
                e.jsx("option", { value: "completed", children: "Completed" }),
              ],
            }),
          }),
          e.jsx("button", {
            className: "btn btn-saff",
            disabled: u,
            children: u ? "Adding..." : "+ Add Event",
          }),
        ],
      }),
      e.jsx("h2", {
        className: "sh",
        style: { fontSize: 26, margin: "36px 0 16px" },
        children: "All Events",
      }),
      o
        ? e.jsx(v, {})
        : e.jsx("div", {
            style: { display: "grid", gap: 10 },
            children: (s ?? []).map((t) =>
              e.jsxs(
                "div",
                {
                  style: N,
                  children: [
                    e.jsxs("div", {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        e.jsx("div", {
                          style: { fontWeight: 700, fontSize: 15 },
                          children: t.name,
                        }),
                        e.jsxs("div", {
                          style: { fontSize: 13, color: "var(--slate)" },
                          children: [
                            t.city,
                            " · ",
                            V(t.start_date),
                            " ·",
                            " ",
                            e.jsx("span", {
                              style: { color: "var(--saff-d)", fontWeight: 600 },
                              children: t.status,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      className: "btn btn-ghost-ink btn-sm",
                      onClick: () => n(t),
                      children: "↻ Status",
                    }),
                    e.jsx("button", {
                      className: "btn btn-sm",
                      style: { border: "1.5px solid var(--rust)", color: "var(--rust)" },
                      onClick: () => h(t.id),
                      children: "Delete",
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
    ],
  });
}
function L() {
  const { data: s, isLoading: o } = A(),
    d = y(),
    [u, m] = b.useState(!1),
    [x, h] = b.useState(""),
    [n, t] = b.useState(""),
    l = (i) => {
      if (!i) {
        (h(""), t(""));
        return;
      }
      if (i.size > 2 * 1024 * 1024) {
        r.error("Image too large (max 2MB). Pick a smaller photo.");
        return;
      }
      const c = new FileReader();
      ((c.onload = () => {
        (h(c.result), t(i.name));
      }),
        c.readAsDataURL(i));
    },
    j = async (i) => {
      i.preventDefault();
      const c = new FormData(i.currentTarget);
      m(!0);
      const { error: _ } = await g.from("memories").insert({
        title: c.get("title"),
        city: c.get("city"),
        date_label: c.get("date_label") || null,
        tags: (c.get("tags") || "")
          .split(",")
          .map((C) => C.trim())
          .filter(Boolean),
        emoji: c.get("emoji") || "🏀",
        height: Number(c.get("height")) || 200,
        ig_url: c.get("ig_url") || null,
        img_url: x || null,
      });
      if ((m(!1), _)) return r.error(_.message);
      (r.success("Memory added"), i.target.reset(), h(""), t(""), d());
    },
    S = async (i) => {
      if (!confirm("Delete this memory?")) return;
      const { error: c } = await g.from("memories").delete().eq("id", i);
      if (c) return r.error(c.message);
      (r.success("Deleted"), d());
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("form", {
        onSubmit: j,
        className: "cform",
        children: [
          e.jsx("h2", { className: "cform-t", children: "Add Memory" }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "Tournament Name",
                children: e.jsx("input", {
                  className: "fin",
                  name: "title",
                  required: !0,
                  placeholder: "Name",
                }),
              }),
              e.jsx(a, {
                label: "City",
                children: e.jsx("input", {
                  className: "fin",
                  name: "city",
                  required: !0,
                  placeholder: "City",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "Date",
                children: e.jsx("input", {
                  className: "fin",
                  name: "date_label",
                  placeholder: "Jan 2025",
                }),
              }),
              e.jsx(a, {
                label: "Tags (comma-separated)",
                children: e.jsx("input", {
                  className: "fin",
                  name: "tags",
                  placeholder: "Delhi, State, 2025",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "Emoji",
                children: e.jsx("input", { className: "fin", name: "emoji", defaultValue: "🏀" }),
              }),
              e.jsx(a, {
                label: "Card Height (px)",
                children: e.jsx("input", {
                  className: "fin",
                  type: "number",
                  name: "height",
                  defaultValue: 200,
                }),
              }),
            ],
          }),
          e.jsx(a, {
            label: "Instagram Post URL",
            children: e.jsx("input", {
              className: "fin",
              name: "ig_url",
              placeholder: "https://www.instagram.com/p/...",
            }),
          }),
          e.jsx(a, {
            label: "Photo",
            hint: "Pick a photo from your device (JPG/PNG, max 2MB). Leave blank to use emoji.",
            children: e.jsxs("div", {
              style: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
              children: [
                e.jsxs("label", {
                  className: "btn btn-ghost-ink btn-sm",
                  style: { cursor: "pointer", margin: 0 },
                  children: [
                    "📷 Choose from device",
                    e.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      style: { display: "none" },
                      onChange: (i) => l(i.target.files?.[0] ?? null),
                    }),
                  ],
                }),
                x &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("img", {
                        src: x,
                        alt: "",
                        style: {
                          width: 56,
                          height: 56,
                          objectFit: "cover",
                          borderRadius: 8,
                          border: "1px solid var(--w-bdr)",
                        },
                      }),
                      e.jsx("span", {
                        style: { fontSize: 13, color: "var(--slate)" },
                        children: n,
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "btn btn-sm",
                        style: { border: "1.5px solid var(--rust)", color: "var(--rust)" },
                        onClick: () => l(null),
                        children: "Remove",
                      }),
                    ],
                  }),
              ],
            }),
          }),
          e.jsx("button", {
            className: "btn btn-saff",
            disabled: u,
            children: u ? "Adding..." : "+ Add Memory",
          }),
        ],
      }),
      e.jsxs("h2", {
        className: "sh",
        style: { fontSize: 26, margin: "36px 0 16px" },
        children: ["All Memories (", s?.length ?? 0, ")"],
      }),
      o
        ? e.jsx(v, {})
        : e.jsx("div", {
            style: { display: "grid", gap: 10 },
            children: (s ?? []).map((i) =>
              e.jsxs(
                "div",
                {
                  style: N,
                  children: [
                    e.jsx("div", { style: { fontSize: 22 }, children: i.emoji }),
                    e.jsxs("div", {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        e.jsx("div", {
                          style: { fontWeight: 700, fontSize: 15 },
                          children: i.title,
                        }),
                        e.jsxs("div", {
                          style: { fontSize: 13, color: "var(--slate)" },
                          children: [i.city, " · ", i.date_label],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      className: "btn btn-sm",
                      style: { border: "1.5px solid var(--rust)", color: "var(--rust)" },
                      onClick: () => S(i.id),
                      children: "Delete",
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
    ],
  });
}
function I() {
  const { data: s, isLoading: o } = T(),
    d = y(),
    [u, m] = b.useState(!1),
    x = async (n) => {
      n.preventDefault();
      const t = new FormData(n.currentTarget);
      m(!0);
      const { error: l } = await g
        .from("videos")
        .insert({
          title: t.get("title"),
          yt_id: t.get("yt_id") || null,
          tour: t.get("tour") || null,
          date_label: t.get("date_label") || null,
        });
      if ((m(!1), l)) return r.error(l.message);
      (r.success("Video added"), n.target.reset(), d());
    },
    h = async (n) => {
      if (!confirm("Delete this video?")) return;
      const { error: t } = await g.from("videos").delete().eq("id", n);
      if (t) return r.error(t.message);
      (r.success("Deleted"), d());
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("form", {
        onSubmit: x,
        className: "cform",
        children: [
          e.jsx("h2", { className: "cform-t", children: "Add YouTube Video" }),
          e.jsx(a, {
            label: "Video Title",
            children: e.jsx("input", {
              className: "fin",
              name: "title",
              required: !0,
              placeholder: "e.g. Karnataka Championship — Day 1 Live",
            }),
          }),
          e.jsxs("div", {
            style: f,
            children: [
              e.jsx(a, {
                label: "YouTube Video ID",
                hint: "Just the part after v= in the URL",
                children: e.jsx("input", {
                  className: "fin",
                  name: "yt_id",
                  placeholder: "ID from youtube.com/watch?v=XXXX",
                }),
              }),
              e.jsx(a, {
                label: "Tournament",
                children: e.jsx("input", {
                  className: "fin",
                  name: "tour",
                  placeholder: "Tournament name",
                }),
              }),
            ],
          }),
          e.jsx(a, {
            label: "Date",
            children: e.jsx("input", {
              className: "fin",
              name: "date_label",
              placeholder: "May 2025",
            }),
          }),
          e.jsx("button", {
            className: "btn btn-saff",
            disabled: u,
            children: u ? "Adding..." : "+ Add Video",
          }),
        ],
      }),
      e.jsxs("h2", {
        className: "sh",
        style: { fontSize: 26, margin: "36px 0 16px" },
        children: ["All Videos (", s?.length ?? 0, ")"],
      }),
      o
        ? e.jsx(v, {})
        : e.jsx("div", {
            style: { display: "grid", gap: 10 },
            children: (s ?? []).map((n) =>
              e.jsxs(
                "div",
                {
                  style: N,
                  children: [
                    n.yt_id &&
                      e.jsx(e.Fragment, {
                        children: e.jsx("img", {
                          src: `https://img.youtube.com/vi/${n.yt_id}/default.jpg`,
                          alt: "",
                          style: { width: 80, height: 60, objectFit: "cover", borderRadius: 6 },
                        }),
                      }),
                    e.jsxs("div", {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        e.jsx("div", {
                          style: { fontWeight: 700, fontSize: 14 },
                          children: n.title,
                        }),
                        e.jsxs("div", {
                          style: { fontSize: 12, color: "var(--slate)" },
                          children: [n.tour, " · ", n.date_label],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      className: "btn btn-sm",
                      style: { border: "1.5px solid var(--rust)", color: "var(--rust)" },
                      onClick: () => h(n.id),
                      children: "Delete",
                    }),
                  ],
                },
                n.id,
              ),
            ),
          }),
    ],
  });
}
function a({ label: s, hint: o, children: d }) {
  return e.jsxs("div", {
    style: { marginBottom: 4 },
    children: [
      e.jsx("label", { className: "flbl", children: s }),
      d,
      o &&
        e.jsx("div", {
          style: { fontSize: 12, color: "var(--mist)", marginTop: -8, marginBottom: 12 },
          children: o,
        }),
    ],
  });
}
function v() {
  return e.jsx("div", {
    style: { padding: 40, textAlign: "center", color: "var(--mist)" },
    children: "Loading…",
  });
}
const f = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  N = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--parchment)",
    border: "1px solid var(--w-bdr)",
    borderRadius: 12,
    padding: "12px 16px",
  };
export { M as component };
