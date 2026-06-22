import { Link } from "@tanstack/react-router";

export function Footer({ full = true }: { full?: boolean }) {
  if (!full) {
    return (
      <footer>
        <div className="fbot">
          <span>© 2026 Indian Live Sports Hub</span>
          <Link to="/auth">⚙ Admin</Link>
        </div>
      </footer>
    );
  }
  return (
    <footer>
      <div className="ft">
        <div className="fb-brand">
          <div className="logo-words">
            <div className="logo-top" style={{ color: "white", fontSize: 20 }}>
              Indian Live Sports Hub
            </div>
            <div className="logo-bot">India's Basketball Voice</div>
          </div>
          <p>
            India's first dedicated basketball streaming channel. From district
            grassroots to national championships — we cover every court.
          </p>
        </div>
        <div>
          <div className="fc-t">Pages</div>
          <ul className="flinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/memories">Memories</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/covering">Covering Now</Link></li>
          </ul>
        </div>
        <div>
          <div className="fc-t">Watch</div>
          <ul className="flinks">
            <li>
              <a href="https://www.youtube.com/@indianlivesportshub" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/indianlivesportshub/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="fc-t">Contact</div>
          <ul className="flinks">
            <li><a href="mailto:indianlivesportshub96@gmail.com">indianlivesportshub96@gmail.com</a></li>
            <li><a href="mailto:sandeepsharma3392@gmail.com">sandeepsharma3392@gmail.com</a></li>
            <li>
              <Link to="/auth" style={{ color: "rgba(232,151,26,.7)" }}>
                ⚙ Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <span>© 2026 Indian Live Sports Hub · All rights reserved</span>
        <Link to="/auth">Admin Login</Link>
      </div>
    </footer>
  );
}
