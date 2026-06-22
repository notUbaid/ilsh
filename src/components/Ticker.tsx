import { useCoverage, fmt } from "@/lib/data";

export function Ticker() {
  const { data: cov } = useCoverage();
  if (!cov?.active) return null;
  const items = (
    <>
      <div className="ticker-item">
        <i className="fas fa-map-marker-alt" />
        {cov.name} · {cov.city}
      </div>
      <div className="ticker-item">
        <i className="fas fa-building" />
        {cov.venue}
      </div>
      <div className="ticker-item">
        <i className="fas fa-calendar-alt" />
        {fmt(cov.start_date)} — {fmt(cov.end_date)}
      </div>
      <div className="ticker-item">
        <i className="fab fa-youtube" />
        Watch on YouTube
      </div>
      <div className="ticker-item">
        <i className="fab fa-instagram" />
        Follow on Instagram
      </div>
    </>
  );
  return (
    <div className="ticker" style={{ display: "flex" }}>
      <div className="ticker-label">
        <div className="ticker-dot" />
        Live Now
      </div>
      <div className="ticker-track">
        <div className="ticker-inner">
          {items}
          {items}
        </div>
      </div>
    </div>
  );
}
