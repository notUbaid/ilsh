import { createFileRoute } from "@tanstack/react-router";
import { getBaseMeta } from "@/components/SEO";
import { useSchedule } from "@/lib/data";
import { ScheduleEvent } from "@/components/Cards";
import { ScheduleSkeleton } from "@/components/Skeletons";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: getBaseMeta({
      title: "Schedule — Indian Live Sports Hub",
      description: "View our upcoming coverage schedule for basketball tournaments across India.",
    }),
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const { data: schedule = [], isLoading } = useSchedule();
  const groups: Record<string, typeof schedule> = {};
  [...schedule]
    .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
    .forEach((e) => {
      const k = new Date(e.start_date)
        .toLocaleDateString("en-IN", { month: "long", year: "numeric" })
        .toUpperCase();
      (groups[k] ||= []).push(e);
    });

  return (
    <div className="page active">
      <div className="sw">
        <div className="eyebrow">Tour Schedule</div>
        <h1 className="sh" style={{ marginBottom: 12 }}>Our <em>Journey</em></h1>
        <p className="sp" style={{ marginBottom: 38 }}>
          Follow our complete itinerary as we move city to city covering Indian basketball.
        </p>
        {isLoading ? (
          <ScheduleSkeleton count={6} />
        ) : schedule.length === 0 ? (
          <div className="empty"><div className="ei">📅</div><h3>No schedule yet</h3></div>
        ) : (
          Object.entries(groups).map(([mo, evs]) => (
            <div key={mo}>
              <div className="smonth-head">
                <div className="smonth-word">{mo}</div>
                <div className="smonth-line" />
              </div>
              {evs.map((e) => <ScheduleEvent key={e.id} e={e} />)}
            </div>
          ))
        )}
      </div>
      <Footer full={false} />
    </div>
  );
}
