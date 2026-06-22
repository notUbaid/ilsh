import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", type: "Event Coverage Request", message: "" });
  const [busy, setBusy] = useState(false);
  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.email) {
      toast.error("Fill name and email");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: f.name,
      email: f.email,
      type: f.type,
      message: f.message,
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Message sent! We'll be in touch.");
      setF({ name: "", email: "", type: "Event Coverage Request", message: "" });
    }
  };
  return (
    <div className="page active">
      <div className="sw">
        <div className="eyebrow">Get In Touch</div>
        <h1 className="sh" style={{ marginBottom: 12 }}>
          Contact <em>Us</em>
        </h1>
        <p className="sp" style={{ marginBottom: 48 }}>
          Coverage requests, sponsorships, media inquiries — we'd love to hear from you.
        </p>
        <div className="cgrid">
          <div>
            <div className="ccard">
              <div className="ccard-t">Direct Contact</div>
              <div className="citem">
                <div className="cico">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <div className="cilbl">Business</div>
                  <div className="cival">
                    <a href="mailto:indianlivesportshub96@gmail.com">
                      indianlivesportshub96@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="citem">
                <div className="cico">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <div className="cilbl">Partner</div>
                  <div className="cival">
                    <a href="mailto:sandeepsharma3392@gmail.com">sandeepsharma3392@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="citem">
                <div className="cico">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <div className="cilbl">Address</div>
                  <div className="cival">Plot No. 1936A, Sector 55, Faridabad, Haryana</div>
                </div>
              </div>
              <div className="citem">
                <div className="cico">
                  <i className="fas fa-basketball-ball" />
                </div>
                <div>
                  <div className="cilbl">Coverage</div>
                  <div className="cival">District · State · National · International</div>
                </div>
              </div>
            </div>
            <div className="ccard">
              <div className="ccard-t">Follow Us</div>
              <div className="soc-grid">
                <a
                  href="https://www.instagram.com/indianlivesportshub/"
                  target="_blank"
                  rel="noreferrer"
                  className="soc ig"
                >
                  <div className="sico ig">
                    <i className="fab fa-instagram" />
                  </div>
                  <div>
                    <div className="soc-n">Instagram</div>
                    <div className="soc-h">@indianlivesportshub</div>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@indianlivesportshub"
                  target="_blank"
                  rel="noreferrer"
                  className="soc yt"
                >
                  <div className="sico yt">
                    <i className="fab fa-youtube" />
                  </div>
                  <div>
                    <div className="soc-n">YouTube</div>
                    <div className="soc-h">@indianlivesportshub</div>
                  </div>
                </a>
                <a href="mailto:indianlivesportshub96@gmail.com" className="soc em">
                  <div className="sico em">
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <div className="soc-n">Email</div>
                    <div className="soc-h">Business inquiries</div>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@indianlivesportshub"
                  target="_blank"
                  rel="noreferrer"
                  className="soc bb"
                >
                  <div className="sico bb">
                    <i className="fas fa-basketball-ball" />
                  </div>
                  <div>
                    <div className="soc-n">Sandy Singh</div>
                    <div className="soc-h">#sandyfbdrider</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <form className="cform" onSubmit={send}>
            <div className="cform-t">Send a Message</div>
            <label className="flbl">Your Name</label>
            <input
              className="fin"
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
              placeholder="Full name"
              required
            />
            <label className="flbl">Email</label>
            <input
              className="fin"
              type="email"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
              placeholder="your@email.com"
              required
            />
            <label className="flbl">Inquiry Type</label>
            <select
              className="fsel"
              value={f.type}
              onChange={(e) => setF({ ...f, type: e.target.value })}
            >
              <option>Event Coverage Request</option>
              <option>Sponsorship / Partnership</option>
              <option>Media Inquiry</option>
              <option>General Question</option>
            </select>
            <label className="flbl">Message</label>
            <textarea
              className="fta"
              value={f.message}
              onChange={(e) => setF({ ...f, message: e.target.value })}
              placeholder="Tell us about your tournament or how we can help..."
            />
            <button
              type="submit"
              className="btn btn-saff"
              style={{ width: "100%", justifyContent: "center", padding: "13px 24px" }}
              disabled={busy}
            >
              <i className="fas fa-paper-plane" />
              {busy ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <Footer full={false} />
    </div>
  );
}
