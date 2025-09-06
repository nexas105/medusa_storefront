"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsletterCTA({
  title = "Jetzt abonnieren & sparen!",
  subtitle = "Hol dir 5€ Willkommensrabatt! Mit unserem Newsletter bleibst du up to date: neue Produkte, smarte Tipps & exklusive Aktionen direkt in dein Postfach.",
  bgImage = "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1920&auto=format&fit=crop",
}: {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<null | { type: "ok" | "err"; text: string }>(
    null
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMsg({ type: "err", text: "Bitte gib eine gültige E-Mail-Adresse ein." });
      return;
    }
    try {
      setLoading(true);
      // Demo: hier würdest du an dein Backend posten
      await new Promise((r) => setTimeout(r, 800));

      setMsg({ type: "ok", text: "Danke! Prüfe dein Postfach zur Bestätigung." });
      setEmail("");
    } catch {
      setMsg({
        type: "err",
        text: "Upps, etwas ist schiefgelaufen. Versuch’s später erneut.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative content-container py-14 md:py-20">
        <div className="md:ml-auto md:max-w-2xl text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{title}</h2>
          <p className="text-white/90 mb-5">{subtitle}</p>

          <form onSubmit={handleSubmit} className="flex items-stretch gap-3">
            <div className="flex-1">
              <input
                type="email"
                required
                placeholder="E-Mail-Adresse…"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 md:h-12 rounded-full px-5 bg-white text-black placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-12 md:h-12 px-5 md:px-6 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold transition disabled:opacity-70"
              aria-label="Newsletter abonnieren"
            >
              {loading ? "Sende…" : "»»"}
            </button>
          </form>

          <p className="mt-4 text-xs text-white/80">
            WICHTIG: Nach der Anmeldung bekommst du eine E-Mail (bitte auch im
            SPAM-Ordner nachsehen) mit einem Link, um deine Newsletter-Anmeldung
            zu bestätigen. Mit Anmeldung stimmst du den Datenschutzbestimmungen
            zu.
          </p>

          {msg && (
            <div
              className={`mt-3 text-sm ${
                msg.type === "ok" ? "text-emerald-300" : "text-red-300"
              }`}
              role="status"
            >
              {msg.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}