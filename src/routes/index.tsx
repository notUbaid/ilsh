import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCoverage, useVideos, useMemories, useSchedule, fmt } from "@/lib/data";
import { VideoCard, MemoryCard, ScheduleEvent } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { assetUrl } from "@/lib/assets";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import imgCourtAsset from "@/assets/court-empty.jpg.asset.json";
import imgCrowdAsset from "@/assets/crowd-arena.jpg.asset.json";
import imgFounder1Asset from "@/assets/founder-1.jpg.asset.json";
import imgFounder2Asset from "@/assets/founder-2.jpg.asset.json";
import imgHuddleAsset from "@/assets/team-huddle.jpg.asset.json";
import imgFblAsset from "@/assets/fbl-banner.jpg.asset.json";

const heroBg = { url: assetUrl(heroBgAsset) };
const imgCourt = { url: assetUrl(imgCourtAsset) };
const imgCrowd = { url: assetUrl(imgCrowdAsset) };
const imgFounder1 = { url: assetUrl(imgFounder1Asset) };
const imgFounder2 = { url: assetUrl(imgFounder2Asset) };
const imgHuddle = { url: assetUrl(imgHuddleAsset) };
const imgFbl = { url: assetUrl(imgFblAsset) };

export const Route = createFileRoute("/")({ component: Home });

const REAL_SHOTS = [
  { src: imgHuddle.url, cap: "ILSH Youth Squad — Pre-Match Huddle", tag: "Team Spirit" },
  { src: imgCrowd.url, cap: "Packed Arena — National Championship", tag: "Live Coverage" },
  { src: imgFbl.url, cap: "Faridabad Basketball League — Season 2", tag: "Tournament" },
  { src: imgCourt.url, cap: "Indoor Court — Pre-Game Setup", tag: "Behind the Scenes" },
];

function Home() {
  const { data: cov } = useCoverage();
  const { data: videos = [] } = useVideos();
  const { data: memories = [] } = useMemories();
  const { data: schedule = [] } = useSchedule();
  const upcoming = schedule.filter((s) => s.status !== "completed").slice(0, 3);
  const nextEvt = schedule
    .filter((s) => s.status === "upcoming")
    .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())[0];

  return (
    <div className="page active">
      <div className="hero hero-img" style={{ backgroundImage: `linear-gradient(90deg, rgba(253,250,244,.92) 0%, rgba(253,250,244,.55) 35%, rgba(253,250,244,0) 55%), url(${heroBg.url})` }}>
        <div className="hero-l">
          <div className="hero-l-deco" />
          <div className="hero-l-deco2" />
          <div>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              India's First Dedicated Basketball Streaming Channel
            </div>
            <h1 className="hero-h1">
              We Cover<br /><em>Every</em><br /><span className="outline">Court.</span>
            </h1>
            <p className="hero-sub">
              From <strong>district grassroots</strong> to <strong>national championships</strong> — we travel across India bringing live basketball to your screens. 24 × 7.
            </p>
            <div className="hero-btns">
              <button className="btn btn-highlight" onClick={() => window.open("https://www.youtube.com/@indianlivesportshub", "_blank")}>
                <i className="fab fa-youtube" />Watch on YouTube
              </button>
              <Link to="/schedule" className="btn btn-ghost">
                <i className="fas fa-calendar-alt" />View Schedule
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
            <a href="https://www.instagram.com/indianlivesportshub/" target="_blank" rel="noreferrer" className="btn btn-sm" style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.7)", gap: 7 }}>
              <i className="fab fa-instagram" style={{ color: "#E1306C" }} />Instagram
            </a>
            <a href="https://www.youtube.com/@indianlivesportshub" target="_blank" rel="noreferrer" className="btn btn-sm" style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.7)", gap: 7 }}>
              <i className="fab fa-youtube" style={{ color: "#FF0000" }} />@indianlivesportshub
            </a>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-r-bg" />
          <div className="hero-stats-grid">
            <div className="hstat"><div className="hstat-n">100K<span style={{ color: "var(--saff)", fontSize: ".5em" }}>+</span></div><div className="hstat-l">YouTube Subs</div></div>
            <div className="hstat"><div className="hstat-n">73K<span style={{ color: "var(--saff)", fontSize: ".5em" }}>+</span></div><div className="hstat-l">Instagram Followers</div></div>
            <div className="hstat"><div className="hstat-n">7K<span style={{ color: "var(--saff)", fontSize: ".5em" }}>+</span></div><div className="hstat-l">Posts</div></div>
            <div className="hstat"><div className="hstat-n" style={{ color: "var(--saff-d)" }}>#1</div><div className="hstat-l">In India</div></div>
          </div>
          <div className="hero-cov-card">
            {cov?.active ? (
              <>
                <div className="hcc-tag"><div className="hcc-dot" />Currently Covering</div>
                <div className="hcc-name">{cov.name}</div>
                <div className="hcc-metas">
                  <div className="hcc-m"><i className="fas fa-map-marker-alt" />{cov.city}</div>
                  <div className="hcc-m"><i className="fas fa-building" />{cov.venue}</div>
                  <div className="hcc-m"><i className="fas fa-calendar-alt" />{fmt(cov.start_date)} — {fmt(cov.end_date)}</div>
                </div>
                <div className="hcc-actions">
                  <a href={cov.yt_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-yt btn-sm"><i className="fab fa-youtube" />Watch Live</a>
                  <a href={cov.ig_url ?? "#"} target="_blank" rel="noreferrer" className="btn btn-sm" style={{ background: "rgba(255,255,255,.1)", color: "white" }}><i className="fab fa-instagram" />Instagram</a>
                </div>
              </>
            ) : (
              <>
                <div className="hcc-tag" style={{ color: "rgba(255,255,255,.5)" }}>Next Tournament</div>
                <div className="hcc-name">{nextEvt ? nextEvt.name : "Coming Soon"}</div>
                <div className="hcc-metas">
                  {nextEvt && <div className="hcc-m"><i className="fas fa-calendar-alt" />{fmt(nextEvt.start_date)}</div>}
                </div>
                <div className="hcc-actions">
                  <Link to="/schedule" className="btn btn-sm btn-saff">View Schedule</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <RealMomentsBand />
      <FoundersBand />

      <div className="sw">
        <div className="sec-head">
          <div>
            <div className="eyebrow">YouTube Channel</div>
            <h2 className="sh">Latest <em>Streams</em></h2>
            <p className="sp">Fresh from the court — most recent tournament coverage.</p>
          </div>
          <button className="va" onClick={() => window.open("https://www.youtube.com/@indianlivesportshub", "_blank")}>
            All Videos <i className="fas fa-arrow-right" />
          </button>
        </div>
        <div className="vgrid">
          {videos.length > 0 ? (
            videos.slice(0, 6).map((v) => <VideoCard key={v.id} v={v} />)
          ) : (
            <div className="empty" style={{ gridColumn: "1/-1" }}>
              <div className="ei">📺</div>
              <h3>Videos coming soon</h3>
              <p>Check back after our next tournament!</p>
            </div>
          )}
        </div>
      </div>

      <div className="divider" />

      <div className="sw sw-alt">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Gallery</div>
            <h2 className="sh">Tournament <em>Memories</em></h2>
            <p className="sp">Moments captured across India's basketball courts.</p>
          </div>
          <Link to="/memories" className="va">All Memories <i className="fas fa-arrow-right" /></Link>
        </div>
        <div className="masonry">
          {memories.length > 0 ? (
            memories.slice(0, 8).map((m) => <MemoryCard key={m.id} m={m} />)
          ) : (
            <div className="empty">
              <div className="ei">📸</div>
              <h3>Memories coming soon</h3>
              <p>Moments from our next tournament will appear here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="band">
        <div className="band-inner">
          <div className="band-left">
            <h2>Subscribe for <em>Live</em> Coverage</h2>
            <p>Don't miss a single match — get every tournament, every state, every court.</p>
          </div>
          <div className="band-right">
            <button className="btn btn-forest" onClick={() => window.open("https://www.youtube.com/@indianlivesportshub", "_blank")}>
              <i className="fab fa-youtube" />Subscribe Now
            </button>
            <button className="btn btn-ghost-ink" onClick={() => window.open("https://www.instagram.com/indianlivesportshub/", "_blank")} style={{ border: "1.5px solid rgba(12,15,20,0.35)", color: "var(--ink)", background: "rgba(12,15,20,0.08)" }}>
              <i className="fab fa-instagram" />Instagram
            </button>
          </div>
        </div>
      </div>

      <div className="sw">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Upcoming Tour</div>
            <h2 className="sh">Next <em>Stops</em></h2>
          </div>
          <Link to="/schedule" className="va">Full Schedule <i className="fas fa-arrow-right" /></Link>
        </div>
        <div>
          {upcoming.length ? (
            upcoming.map((e) => <ScheduleEvent key={e.id} e={e} />)
          ) : (
            <div className="empty"><div className="ei">📅</div><h3>No Upcoming Events</h3><p>Check back soon!</p></div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function RealMomentsBand() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REAL_SHOTS.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="rmb">
      <div className="rmb-inner">
        <div className="rmb-l">
          <div className="eyebrow">Straight From The Court</div>
          <h2 className="sh">Real <em>Moments</em>, Real Hoops.</h2>
          <p className="sp">Unfiltered shots from the tournaments we travel to — packed arenas, empty pre-game courts, and the kids who'll define Indian basketball.</p>
          <div className="rmb-dots">
            {REAL_SHOTS.map((_, k) => (
              <button key={k} className={`rmb-dot ${k === i ? "on" : ""}`} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />
            ))}
          </div>
          <a href="https://www.instagram.com/indianlivesportshub/" target="_blank" rel="noreferrer" className="btn btn-highlight" style={{ marginTop: 18 }}>
            <i className="fab fa-instagram" /> Follow on Instagram
          </a>
        </div>
        <div className="rmb-r">
          {REAL_SHOTS.map((s, k) => (
            <div key={k} className={`rmb-slide ${k === i ? "on" : ""}`} style={{ backgroundImage: `url(${s.src})` }}>
              <div className="rmb-cap">
                <span className="rmb-tag">{s.tag}</span>
                <span>{s.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersBand() {
  return (
    <section className="founders-band">
      <div className="founders-band-inner">
        <div className="founders-band-head">
          <div className="eyebrow">The People Behind The Lens</div>
          <h2 className="sh">Built By <em>Hoopers</em>, For Hoopers.</h2>
        </div>
        <div className="founders-band-grid">
          <div className="founders-band-card">
            <div className="founders-band-photo" style={{ backgroundImage: `url(${imgFounder1.url})` }} />
            <div className="fb-body">
              <div className="fb-role">Founder · On-Ground Lead</div>
              <div className="fb-name">The Vision</div>
              <div className="fb-q">"Every court in India deserves a camera."</div>
            </div>
          </div>
          <div className="founders-band-card">
            <div className="founders-band-photo" style={{ backgroundImage: `url(${imgFounder2.url})` }} />
            <div className="fb-body">
              <div className="fb-role">Co-Founder · Lead Cinematographer</div>
              <div className="fb-name">The Lens</div>
              <div className="fb-q">"We shoot grassroots like it's the NBA Finals."</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
