import { createFileRoute, Link } from "@tanstack/react-router";
import { useCoverage, fmt } from "@/lib/data";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/covering")({ component: CoveringPage });

function CoveringPageSkeleton() {
  return (
    <div className="page active">
      <div className="cov-hero">
        <div className="cov-hero-inner" style={{ maxWidth: 820 }}>
          <div className="sk-line sk-line-short" style={{ height: 30, maxWidth: 180, marginBottom: 18, borderRadius: 50 }} />
          <div className="sk-line" style={{ height: 64, maxWidth: 460, marginBottom: 16 }} />
          <div className="sk-line sk-line-med" style={{ marginBottom: 36 }} />
          <div className="meta-row">
            {[1, 2, 3, 4].map((k) => (
              <div key={k} className="mbox sk-block" style={{ minHeight: 80 }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 11 }}>
            <div className="sk-block" style={{ width: 160, height: 44, borderRadius: 50 }} />
            <div className="sk-block" style={{ width: 160, height: 44, borderRadius: 50 }} />
          </div>
        </div>
      </div>
      <Footer full={false} />
    </div>
  );
}

function CoveringPage() {
  const { data: cov, isLoading } = useCoverage();

  if (isLoading) return <CoveringPageSkeleton />;

  if (!cov?.active) {
    return (
      <div className="page active">
        <div style={{ padding: "90px 5%", textAlign: "center" }}>
          <div className="empty">
            <div className="ei">🏀</div>
            <h3>Not on the road right now</h3>
            <p>We'll be back soon with the next tournament!</p>
            <br />
            <Link to="/schedule" className="btn btn-saff">View Our Schedule</Link>
          </div>
        </div>
        <Footer full={false} />
      </div>
    );
  }
  return (
    <div className="page active">
      <div className="cov-hero">
        <svg className="cov-hero-rings" viewBox="0 0 360 360" fill="none">
          {[170, 130, 90, 50].map((r) => (
            <circle key={r} cx="180" cy="180" r={r} stroke="#E8971A" strokeWidth="1" fill="none" />
          ))}
        </svg>
        <div className="cov-hero-inner">
          <div className="nav-pill" style={{ width: "fit-content", marginBottom: 6, background: "rgba(232,151,26,.12)", borderColor: "rgba(232,151,26,.3)", color: "var(--saff)" }}>
            <div style={{ width: 7, height: 7, background: "var(--saff)", borderRadius: "50%", animation: "blink 1.3s infinite" }} />
            Currently Covering
          </div>
          <div className="cov-big">{cov.name}</div>
          {cov.note && (
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14.5, maxWidth: 520, lineHeight: 1.8 }}>{cov.note}</p>
          )}
          <div className="meta-row">
            <div className="mbox"><div className="mbox-ico">📍</div><div className="mbox-l">City</div><div className="mbox-v">{cov.city}</div></div>
            <div className="mbox"><div className="mbox-ico">🏟️</div><div className="mbox-l">Venue</div><div className="mbox-v">{cov.venue}</div></div>
            <div className="mbox"><div className="mbox-ico">📅</div><div className="mbox-l">From</div><div className="mbox-v">{fmt(cov.start_date)}</div></div>
            <div className="mbox"><div className="mbox-ico">🏁</div><div className="mbox-l">Until</div><div className="mbox-v">{fmt(cov.end_date)}</div></div>
          </div>
          <div style={{ display: "flex", gap: 11, flexWrap: "wrap" }}>
            <a href={cov.yt_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-yt"><i className="fab fa-youtube" />Watch on YouTube</a>
            <a href={cov.ig_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-ghost"><i className="fab fa-instagram" />Instagram Updates</a>
          </div>
        </div>
      </div>
      <div className="cov-feed">
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Coverage Feed</div>
          <h2 className="sh" style={{ marginBottom: 28 }}>Follow the <em>Action</em></h2>
          <div className="feed-box">
            <span className="feed-icon">📸</span>
            <h3>Real-Time on Instagram & YouTube</h3>
            <p>We post live photos, behind-the-scenes moments, and highlights from the court as they happen.</p>
            <div style={{ display: "flex", gap: 11, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={cov.ig_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-ig"><i className="fab fa-instagram" />Open Instagram</a>
              <a href={cov.yt_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-yt"><i className="fab fa-youtube" />Full Streams</a>
            </div>
          </div>
        </div>
      </div>
      <Footer full={false} />
    </div>
  );
}
