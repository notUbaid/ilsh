import type { Video, Memory, SchEvent } from "@/lib/data";
import { fmt } from "@/lib/data";

export function VideoCard({ v }: { v: Video }) {
  const href = v.yt_id ? `https://youtu.be/${v.yt_id}` : "https://www.youtube.com/@indianlivesportshub";
  return (
    <div className="vcard rev vis" onClick={() => window.open(href, "_blank")}>
      <div className="vthumb">
        {v.yt_id ? (
          <img
            src={`https://img.youtube.com/vi/${v.yt_id}/hqdefault.jpg`}
            alt={v.title}
            loading="lazy"
          />
        ) : (
          <div className="vthumb-ph">🏀</div>
        )}
        <div className="vplay"><div className="vplay-btn"><i className="fas fa-play" /></div></div>
      </div>
      <div className="vinfo">
        <div className="vtag">🏀 {v.tour}</div>
        <div className="vtitle">{v.title}</div>
        <div className="vmeta">
          <span style={{ color: "#FF0000" }}>▶ YouTube</span>
          <span>{v.date_label}</span>
        </div>
      </div>
    </div>
  );
}

export function MemoryCard({ m }: { m: Memory }) {
  const bg = m.bg || "#FEF4E0";
  const h = m.height || 180;
  return (
    <div
      className="mcard rev vis"
      style={{ cursor: m.ig_url ? "pointer" : "default" }}
      onClick={() => m.ig_url && window.open(m.ig_url, "_blank")}
    >
      <div className="mimg-wrap" style={{ minHeight: h }}>
        <div className="mcity">{m.city}</div>
        {m.img_url ? (
          <img
            src={m.img_url}
            alt={m.title}
            loading="lazy"
            style={{ width: "100%", height: h, objectFit: "cover", display: "block" }}
          />
        ) : (
          <div className="mimg-ph" style={{ background: bg, height: h }}>
            {m.emoji || "🏀"}
          </div>
        )}
        <div className="mcard-ov"><div className="mcard-ov-t">▶ View on Instagram</div></div>
      </div>
      <div className="mcard-info">
        <div className="mcard-t">{m.title}</div>
        <div className="mcard-m">
          <i className="fas fa-map-marker-alt" />
          {m.city} · {m.date_label}
        </div>
      </div>
    </div>
  );
}

export function ScheduleEvent({ e }: { e: SchEvent }) {
  const d = new Date(e.start_date);
  const mo = d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();
  const dy = d.getDate();
  const end = e.end_date ? ` — ${fmt(e.end_date)}` : "";
  const badge =
    e.status === "covering"
      ? <span className="sbadge covering">● Covering Now</span>
      : e.status === "upcoming"
      ? <span className="sbadge upcoming">◷ Upcoming</span>
      : <span className="sbadge completed">✓ Completed</span>;
  return (
    <div className={`sevent ${e.status} rev vis`}>
      <div className="sdbox">
        <div className="sdbox-m">{mo}</div>
        <div className="sdbox-d">{dy}</div>
      </div>
      <div>
        <div className="sname">{e.name}</div>
        <div className="sdets">
          <span className="sdet"><i className="fas fa-map-marker-alt" />{e.city}</span>
          {e.venue && <span className="sdet"><i className="fas fa-building" />{e.venue}</span>}
          <span className="sdet"><i className="fas fa-calendar" />{fmt(e.start_date)}{end}</span>
        </div>
      </div>
      {badge}
    </div>
  );
}
