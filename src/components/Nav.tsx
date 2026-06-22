import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { assetUrl } from "@/lib/assets";
import logoAsset from "@/assets/ilsh-logo.png.asset.json";

const logoUrl = assetUrl(logoAsset);

const links = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/schedule", label: "Schedule" },
  { to: "/covering", label: "Covering Now" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <div className="logo-mark" style={{ background: "transparent", border: "none", padding: 0 }}>
          <img src={logoUrl} alt="ILSH" width={42} height={42} style={{ display: "block", borderRadius: "50%" }} />
        </div>
        <div className="logo-words">
          <div className="logo-top">Indian Live Sports Hub</div>
          <div className="logo-bot">India's Basketball Voice</div>
        </div>
      </Link>
      <ul className={`nav-center ${open ? "mob" : ""}`}>
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              onClick={() => setOpen(false)}
              className={pathname === l.to ? "act" : ""}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <a
          href="https://www.youtube.com/@indianlivesportshub"
          target="_blank"
          rel="noreferrer"
          className="nav-yt"
        >
          <i className="fab fa-youtube" />YouTube
        </a>
        <button
          className="nav-pill"
          onClick={() => navigate({ to: "/covering" })}
          aria-label="Currently covering — view live coverage"
        >
          <div
            style={{
              width: 6,
              height: 6,
              background: "var(--saff)",
              borderRadius: "50%",
              animation: "blink 1.3s infinite",
            }}
          />
          Live
        </button>
        <button
          className="burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
