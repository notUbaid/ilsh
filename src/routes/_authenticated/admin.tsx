import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import {
  useVideos,
  useMemories,
  useSchedule,
  useCoverage,
  useInvalidateAll,
  fmt,
  type SchEvent,
} from "@/lib/data";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
});

type Tab = "coverage" | "schedule" | "memories" | "videos";

function AdminPage() {
  const [tab, setTab] = useState<Tab>("coverage");
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  return (
    <>
      <main className="sw" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 5% 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h1 className="sh"><em>Admin</em> Panel</h1>
          <button className="btn btn-ghost-ink btn-sm" onClick={logout}>✕ Sign out</button>
        </div>

        <div
          style={{
            background: "var(--forest-l)",
            border: "1px solid rgba(26,92,53,.2)",
            color: "var(--forest)",
            padding: "14px 18px",
            borderRadius: 12,
            marginBottom: 22,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          ✅ Logged in. All changes save instantly to the live database.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
          <TabBtn active={tab === "coverage"} onClick={() => setTab("coverage")} label="🔴 Covering Now" />
          <TabBtn active={tab === "schedule"} onClick={() => setTab("schedule")} label="📅 Schedule" />
          <TabBtn active={tab === "memories"} onClick={() => setTab("memories")} label="📸 Memories" />
          <TabBtn active={tab === "videos"} onClick={() => setTab("videos")} label="📺 Videos" />
        </div>

        {tab === "coverage" && <CoveragePanel />}
        {tab === "schedule" && <SchedulePanel />}
        {tab === "memories" && <MemoriesPanel />}
        {tab === "videos" && <VideosPanel />}
      </main>
      <Footer />
    </>
  );
}

function TabBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm"}
      style={{ fontWeight: 700 }}
    >
      {label}
    </button>
  );
}

/* ─────────── COVERAGE ─────────── */
function CoveragePanel() {
  const { data, isLoading } = useCoverage();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = useState(false);

  if (isLoading) return <Loading />;

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase
      .from("coverage")
      .update({
        name: (fd.get("name") as string) || null,
        city: (fd.get("city") as string) || null,
        venue: (fd.get("venue") as string) || null,
        start_date: (fd.get("start_date") as string) || null,
        end_date: (fd.get("end_date") as string) || null,
        yt_url: (fd.get("yt_url") as string) || null,
        ig_url: (fd.get("ig_url") as string) || null,
        note: (fd.get("note") as string) || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Coverage saved");
    invalidate();
  };

  const toggle = async (active: boolean) => {
    const { error } = await supabase.from("coverage").update({ active }).eq("id", 1);
    if (error) return toast.error(error.message);
    toast.success(active ? "Coverage live" : "Coverage off");
    invalidate();
  };

  return (
    <form onSubmit={save} className="cform">
      <h2 className="cform-t">Coverage Status</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
        <button type="button" onClick={() => toggle(true)} className={data?.active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm"}>● Set Active</button>
        <button type="button" onClick={() => toggle(false)} className={!data?.active ? "btn btn-saff btn-sm" : "btn btn-ghost-ink btn-sm"}>○ Set Inactive</button>
      </div>

      <div style={grid2}>
        <Field label="Tournament Name"><input className="fin" name="name" defaultValue={data?.name ?? ""} /></Field>
        <Field label="City"><input className="fin" name="city" defaultValue={data?.city ?? ""} /></Field>
      </div>
      <Field label="Venue"><input className="fin" name="venue" defaultValue={data?.venue ?? ""} /></Field>
      <div style={grid2}>
        <Field label="Start Date"><input className="fin" type="date" name="start_date" defaultValue={data?.start_date ?? ""} /></Field>
        <Field label="End Date"><input className="fin" type="date" name="end_date" defaultValue={data?.end_date ?? ""} /></Field>
      </div>
      <div style={grid2}>
        <Field label="YouTube Link"><input className="fin" name="yt_url" defaultValue={data?.yt_url ?? ""} /></Field>
        <Field label="Instagram Link"><input className="fin" name="ig_url" defaultValue={data?.ig_url ?? ""} /></Field>
      </div>
      <Field label="Visitor Note"><textarea className="fta" name="note" rows={3} defaultValue={data?.note ?? ""} /></Field>
      <button type="submit" className="btn btn-saff" disabled={busy}>{busy ? "Saving..." : "💾 Save Coverage"}</button>
    </form>
  );
}

/* ─────────── SCHEDULE ─────────── */
function SchedulePanel() {
  const { data, isLoading } = useSchedule();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = useState(false);

  const add = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase.from("schedule_events").insert({
      name: fd.get("name") as string,
      city: fd.get("city") as string,
      venue: (fd.get("venue") as string) || null,
      start_date: fd.get("start_date") as string,
      end_date: (fd.get("end_date") as string) || null,
      status: (fd.get("status") as SchEvent["status"]) || "upcoming",
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Event added");
    (e.target as HTMLFormElement).reset();
    invalidate();
  };

  const del = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    const { error } = await supabase.from("schedule_events").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };

  const cycle = async (ev: SchEvent) => {
    const next: SchEvent["status"] = ev.status === "upcoming" ? "covering" : ev.status === "covering" ? "completed" : "upcoming";
    const { error } = await supabase.from("schedule_events").update({ status: next }).eq("id", ev.id);
    if (error) return toast.error(error.message);
    invalidate();
  };

  return (
    <>
      <form onSubmit={add} className="cform">
        <h2 className="cform-t">Add Event</h2>
        <div style={grid2}>
          <Field label="Tournament Name"><input className="fin" name="name" required placeholder="Name" /></Field>
          <Field label="City"><input className="fin" name="city" required placeholder="City" /></Field>
        </div>
        <Field label="Venue"><input className="fin" name="venue" placeholder="Venue" /></Field>
        <div style={grid2}>
          <Field label="Start Date"><input className="fin" type="date" name="start_date" required /></Field>
          <Field label="End Date"><input className="fin" type="date" name="end_date" /></Field>
        </div>
        <Field label="Status">
          <select className="fsel" name="status" defaultValue="upcoming">
            <option value="upcoming">Upcoming</option>
            <option value="covering">Covering</option>
            <option value="completed">Completed</option>
          </select>
        </Field>
        <button className="btn btn-saff" disabled={busy}>{busy ? "Adding..." : "+ Add Event"}</button>
      </form>

      <h2 className="sh" style={{ fontSize: 26, margin: "36px 0 16px" }}>All Events</h2>
      {isLoading ? <Loading /> : (
        <div style={{ display: "grid", gap: 10 }}>
          {(data ?? []).map((ev) => (
            <div key={ev.id} style={rowCard}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{ev.name}</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>
                  {ev.city} · {fmt(ev.start_date)} · <span style={{ color: "var(--saff-d)", fontWeight: 600 }}>{ev.status}</span>
                </div>
              </div>
              <button className="btn btn-ghost-ink btn-sm" onClick={() => cycle(ev)}>↻ Status</button>
              <button className="btn btn-sm" style={{ border: "1.5px solid var(--rust)", color: "var(--rust)" }} onClick={() => del(ev.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────── MEMORIES ─────────── */
function MemoriesPanel() {
  const { data, isLoading } = useMemories();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = useState(false);
  const [imgData, setImgData] = useState<string>("");
  const [imgName, setImgName] = useState<string>("");

  const onPickFile = (file: File | null) => {
    if (!file) { setImgData(""); setImgName(""); return; }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image too large (max 2MB). Pick a smaller photo.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImgData(reader.result as string);
      setImgName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const add = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase.from("memories").insert({
      title: fd.get("title") as string,
      city: fd.get("city") as string,
      date_label: (fd.get("date_label") as string) || null,
      tags: ((fd.get("tags") as string) || "").split(",").map(s => s.trim()).filter(Boolean),
      emoji: (fd.get("emoji") as string) || "🏀",
      height: Number(fd.get("height")) || 200,
      ig_url: (fd.get("ig_url") as string) || null,
      img_url: imgData || null,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Memory added");
    (e.target as HTMLFormElement).reset();
    setImgData(""); setImgName("");
    invalidate();
  };

  const del = async (id: string) => {
    if (!confirm("Delete this memory?")) return;
    const { error } = await supabase.from("memories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };

  return (
    <>
      <form onSubmit={add} className="cform">
        <h2 className="cform-t">Add Memory</h2>
        <div style={grid2}>
          <Field label="Tournament Name"><input className="fin" name="title" required placeholder="Name" /></Field>
          <Field label="City"><input className="fin" name="city" required placeholder="City" /></Field>
        </div>
        <div style={grid2}>
          <Field label="Date"><input className="fin" name="date_label" placeholder="Jan 2025" /></Field>
          <Field label="Tags (comma-separated)"><input className="fin" name="tags" placeholder="Delhi, State, 2025" /></Field>
        </div>
        <div style={grid2}>
          <Field label="Emoji"><input className="fin" name="emoji" defaultValue="🏀" /></Field>
          <Field label="Card Height (px)"><input className="fin" type="number" name="height" defaultValue={200} /></Field>
        </div>
        <Field label="Instagram Post URL"><input className="fin" name="ig_url" placeholder="https://www.instagram.com/p/..." /></Field>

        <Field label="Photo" hint="Pick a photo from your device (JPG/PNG, max 2MB). Leave blank to use emoji.">
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <label className="btn btn-ghost-ink btn-sm" style={{ cursor: "pointer", margin: 0 }}>
              📷 Choose from device
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
              />
            </label>
            {imgData && (
              <>
                <img src={imgData} alt="" style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8, border: "1px solid var(--w-bdr)" }} />
                <span style={{ fontSize: 13, color: "var(--slate)" }}>{imgName}</span>
                <button type="button" className="btn btn-sm" style={{ border: "1.5px solid var(--rust)", color: "var(--rust)" }} onClick={() => onPickFile(null)}>Remove</button>
              </>
            )}
          </div>
        </Field>

        <button className="btn btn-saff" disabled={busy}>{busy ? "Adding..." : "+ Add Memory"}</button>
      </form>

      <h2 className="sh" style={{ fontSize: 26, margin: "36px 0 16px" }}>All Memories ({data?.length ?? 0})</h2>
      {isLoading ? <Loading /> : (
        <div style={{ display: "grid", gap: 10 }}>
          {(data ?? []).map((m) => (
            <div key={m.id} style={rowCard}>
              <div style={{ fontSize: 22 }}>{m.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{m.title}</div>
                <div style={{ fontSize: 13, color: "var(--slate)" }}>{m.city} · {m.date_label}</div>
              </div>
              <button className="btn btn-sm" style={{ border: "1.5px solid var(--rust)", color: "var(--rust)" }} onClick={() => del(m.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────── VIDEOS ─────────── */
function VideosPanel() {
  const { data, isLoading } = useVideos();
  const invalidate = useInvalidateAll();
  const [busy, setBusy] = useState(false);

  const add = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    const { error } = await supabase.from("videos").insert({
      title: fd.get("title") as string,
      yt_id: (fd.get("yt_id") as string) || null,
      tour: (fd.get("tour") as string) || null,
      date_label: (fd.get("date_label") as string) || null,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Video added");
    (e.target as HTMLFormElement).reset();
    invalidate();
  };

  const del = async (id: string) => {
    if (!confirm("Delete this video?")) return;
    const { error } = await supabase.from("videos").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    invalidate();
  };

  return (
    <>
      <form onSubmit={add} className="cform">
        <h2 className="cform-t">Add YouTube Video</h2>
        <Field label="Video Title"><input className="fin" name="title" required placeholder="e.g. Karnataka Championship — Day 1 Live" /></Field>
        <div style={grid2}>
          <Field label="YouTube Video ID" hint="Just the part after v= in the URL">
            <input className="fin" name="yt_id" placeholder="ID from youtube.com/watch?v=XXXX" />
          </Field>
          <Field label="Tournament"><input className="fin" name="tour" placeholder="Tournament name" /></Field>
        </div>
        <Field label="Date"><input className="fin" name="date_label" placeholder="May 2025" /></Field>
        <button className="btn btn-saff" disabled={busy}>{busy ? "Adding..." : "+ Add Video"}</button>
      </form>

      <h2 className="sh" style={{ fontSize: 26, margin: "36px 0 16px" }}>All Videos ({data?.length ?? 0})</h2>
      {isLoading ? <Loading /> : (
        <div style={{ display: "grid", gap: 10 }}>
          {(data ?? []).map((v) => (
            <div key={v.id} style={rowCard}>
              {v.yt_id && <img src={`https://img.youtube.com/vi/${v.yt_id}/default.jpg`} alt="" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 6 }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{v.title}</div>
                <div style={{ fontSize: 12, color: "var(--slate)" }}>{v.tour} · {v.date_label}</div>
              </div>
              <button className="btn btn-sm" style={{ border: "1.5px solid var(--rust)", color: "var(--rust)" }} onClick={() => del(v.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────── shared ─────────── */
function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <label className="flbl">{label}</label>
      {children}
      {hint && <div style={{ fontSize: 12, color: "var(--mist)", marginTop: -8, marginBottom: 12 }}>{hint}</div>}
    </div>
  );
}

function Loading() {
  return <div style={{ padding: 40, textAlign: "center", color: "var(--mist)" }}>Loading…</div>;
}

const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };
const rowCard: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  background: "var(--parchment)",
  border: "1px solid var(--w-bdr)",
  borderRadius: 12,
  padding: "12px 16px",
};
