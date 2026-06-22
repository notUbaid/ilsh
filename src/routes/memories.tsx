import { createFileRoute } from "@tanstack/react-router";
import { useMemories } from "@/lib/data";
import { MemoryCard } from "@/components/Cards";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/memories")({ component: MemoriesPage });

function MemoriesPage() {
  const { data: memories = [] } = useMemories();
  return (
    <div className="page active">
      <div className="sw">
        <div className="eyebrow">Gallery</div>
        <h1 className="sh" style={{ marginBottom: 12 }}>Tournament <em>Memories</em></h1>
        <p className="sp" style={{ marginBottom: 32 }}>Every tournament, every city — captured across India's courts.</p>
        <div className="masonry">
          {memories.length ? (
            memories.map((m) => <MemoryCard key={m.id} m={m} />)
          ) : (
            <div className="empty"><div className="ei">📸</div><h3>No memories yet</h3></div>
          )}
        </div>
      </div>
      <Footer full={false} />
    </div>
  );
}
