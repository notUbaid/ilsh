import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/auth")({ component: AuthPage });

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setBusy(false);
      if (error) toast.error(error.message);
      else { toast.success("Account created — signing you in..."); navigate({ to: "/admin" }); }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) toast.error(error.message);
      else navigate({ to: "/admin" });
    }
  };

  return (
    <div className="page active">
      <div className="sw" style={{ maxWidth: 480, margin: "0 auto" }}>
        <div className="eyebrow">Admin Access</div>
        <h1 className="sh" style={{ marginBottom: 12 }}>{mode === "signin" ? <>Admin <em>Login</em></> : <>Create <em>Admin</em></>}</h1>
        <p className="sp" style={{ marginBottom: 32 }}>
          {mode === "signin" ? "Sign in to manage your website content." : "First sign-up automatically becomes the site admin."}
        </p>
        <form onSubmit={submit} className="cform">
          <label className="flbl">Email</label>
          <input className="fin" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="flbl">Password</label>
          <input className="fin" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn btn-saff" disabled={busy} style={{ width: "100%", justifyContent: "center", padding: "13px 24px" }}>
            {busy ? "Please wait..." : mode === "signin" ? "Login" : "Create Admin Account"}
          </button>
          <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="btn btn-ghost-ink btn-sm" style={{ marginTop: 14, width: "100%", justifyContent: "center" }}>
            {mode === "signin" ? "First time? Create admin account" : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
      <Footer full={false} />
    </div>
  );
}
