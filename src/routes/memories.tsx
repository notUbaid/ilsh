import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMemories } from "@/lib/data";
import { MemoryCard } from "@/components/Cards";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/memories")({ component: MemoriesPage });

function MemoriesPage() {
  const { data: memories = [] } = useMemories();
  const [tag, setTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(memories.flatMap((m) => m.tags)))];
  const filtered = tag === "All" ? memories : memories.filter((m) => m.tags.includes(tag));
  return (
    <div className="page active">
      <div className="sw">
        <div className="eyebrow">Gallery</div>
        <h1 className="sh" style={{ marginBottom: 12 }}>Tournament <em>Memories</em></h1>
        <p className="sp" style={{ marginBottom: 32 }}>Every tournament, every city — captured across India's courts.</p>
        <div className="filters">
          {tags.map((t) => (
            <button key={t} className={`fb ${tag === t ? "on" : ""}`} onClick={() => setTag(t)}>{t}</button>
          ))}
        </div>
        <div className="masonry">
          {filtered.length ? (
            filtered.map((m) => <MemoryCard key={m.id} m={m} />)
          ) : (
            <div className="empty"><div className="ei">📸</div><h3>No memories for "{tag}"</h3></div>
          )}
        </div>
      </div>
      <Footer full={false} />
    </div>
  );
}
