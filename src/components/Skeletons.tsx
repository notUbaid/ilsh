/* Reusable skeleton shapes that match the real card layouts */

export function VideoCardSkeleton() {
  return (
    <div className="vcard sk-card" aria-hidden="true">
      <div className="vthumb sk-block" style={{ aspectRatio: "16/9" }} />
      <div className="vinfo">
        <div className="sk-line sk-line-short" style={{ marginBottom: 10 }} />
        <div className="sk-line" style={{ marginBottom: 6 }} />
        <div className="sk-line sk-line-med" style={{ marginBottom: 14 }} />
        <div style={{ display: "flex", gap: 12 }}>
          <div className="sk-line sk-line-xs" />
          <div className="sk-line sk-line-xs" />
        </div>
      </div>
    </div>
  );
}

export function VideoGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="vgrid" aria-label="Loading videos…">
      {Array.from({ length: count }, (_, i) => (
        <VideoCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function MemoryCardSkeleton({ height = 200 }: { height?: number }) {
  return (
    <div className="mcard sk-card" aria-hidden="true" style={{ marginBottom: 16 }}>
      <div className="sk-block" style={{ height }} />
      <div className="mcard-info">
        <div className="sk-line" style={{ marginBottom: 8 }} />
        <div className="sk-line sk-line-med" />
      </div>
    </div>
  );
}

export function MemoriesGridSkeleton({ count = 8 }: { count?: number }) {
  // Vary heights slightly for a realistic masonry feel
  const heights = [180, 220, 200, 240, 190, 210, 230, 200];
  return (
    <div className="masonry" aria-label="Loading memories…">
      {Array.from({ length: count }, (_, i) => (
        <MemoryCardSkeleton key={i} height={heights[i % heights.length]} />
      ))}
    </div>
  );
}

export function ScheduleEventSkeleton() {
  return (
    <div className="sevent sk-card" aria-hidden="true" style={{ marginBottom: 12 }}>
      <div className="sdbox sk-block" style={{ width: 80, minHeight: 74, borderRadius: 12 }} />
      <div style={{ flex: 1 }}>
        <div className="sk-line" style={{ marginBottom: 10, maxWidth: 260 }} />
        <div style={{ display: "flex", gap: 12 }}>
          <div className="sk-line sk-line-xs" />
          <div className="sk-line sk-line-xs" />
        </div>
      </div>
      <div className="sk-line sk-line-xs" style={{ width: 80, alignSelf: "center" }} />
    </div>
  );
}

export function ScheduleSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div aria-label="Loading schedule…">
      {Array.from({ length: count }, (_, i) => (
        <ScheduleEventSkeleton key={i} />
      ))}
    </div>
  );
}

export function CoverageCardSkeleton() {
  return (
    <div className="hero-cov-card sk-card" aria-hidden="true">
      <div className="sk-line sk-line-short" style={{ marginBottom: 12 }} />
      <div className="sk-line" style={{ height: 28, marginBottom: 14 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        <div className="sk-line sk-line-med" />
        <div className="sk-line sk-line-med" />
      </div>
      <div style={{ display: "flex", gap: 9 }}>
        <div className="sk-block" style={{ width: 110, height: 36, borderRadius: 50 }} />
        <div className="sk-block" style={{ width: 90, height: 36, borderRadius: 50 }} />
      </div>
    </div>
  );
}
