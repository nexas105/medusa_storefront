

export const dynamic = 'force-static';

export default function DatenschutzPage() {
  const shop = {
    name: 'Smartbeat GmbH',
    street: 'Musterstraße 12',
    zipCity: '53639 Königswinter',
    country: 'Deutschland',
    email: 'info@smartbeat.de',
    web: 'https://smartbeat.de',
    lastUpdate: '27.08.2025',
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-3 text-sm text-zinc-500">Wir freuen uns über dein Interesse an unserem Onlineshop. Der Schutz deiner Privatsphäre ist uns sehr wichtig. Nachfolgend informieren wir dich über den Umgang mit deinen Daten.</p>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung ist {shop.name}, {shop.street}, {shop.zipCity}, {shop.country}, E‑Mail: {shop.email}.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>Wir erheben personenbezogene Daten, wenn du uns diese im Rahmen deiner Bestellung, bei einer Kontaktaufnahme oder bei der Registrierung freiwillig mitteilst. Pflichtfelder werden als solche gekennzeichnet. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">3. Nutzung deiner Daten</h2>
        <p>Wir verwenden die von dir mitgeteilten Daten zur Erfüllung und Abwicklung deiner Bestellung, zur Bearbeitung deiner Anfragen sowie ggf. für den Versand unseres Newsletters, sofern du diesem ausdrücklich zugestimmt hast.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">4. Weitergabe von Daten</h2>
        <p>Zur Vertragserfüllung geben wir deine Daten an das mit der Lieferung beauftragte Versandunternehmen sowie an das mit der Zahlungsabwicklung beauftragte Kreditinstitut weiter, soweit dies zur Lieferung bestellter Waren oder zur Zahlungsabwicklung erforderlich ist.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">5. Newsletter</h2>
        <p>Wenn du unseren Newsletter abonnierst, verwenden wir deine E‑Mail‑Adresse für eigene Werbezwecke, bis du dich vom Newsletter abmeldest. Die Abmeldung ist jederzeit möglich.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">6. Cookies & Tracking</h2>
        <p>Wir verwenden Cookies und ähnliche Technologien, um den Besuch unserer Website attraktiv zu gestalten, bestimmte Funktionen zu ermöglichen und die Nutzung statistisch auszuwerten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">7. Analyse-Tools und Werbung</h2>
        <p>Wir setzen ggf. Analysetools wie Google Analytics oder vergleichbare Dienste ein. Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">8. Zahlungsanbieter</h2>
        <p>Zur Zahlungsabwicklung nutzen wir Zahlungsdienste wie PayPal, Klarna oder Stripe. Diese erhalten die für den Zahlungsvorgang erforderlichen Daten. Für die Verarbeitung dieser Daten ist der jeweilige Anbieter verantwortlich.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">9. Deine Rechte</h2>
        <p>Du hast das Recht auf Auskunft über deine bei uns gespeicherten Daten, sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Außerdem kannst du der Verarbeitung deiner Daten jederzeit widersprechen.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">10. Datensicherheit</h2>
        <p>Wir treffen technische und organisatorische Maßnahmen, um deine Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">11. Hosting</h2>
        <p>Unsere Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Mit Vercel besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">12. Änderung dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.</p>
      </section>

      <div className="mt-12 text-xs text-zinc-500">Stand: {shop.lastUpdate}</div>
    </main>
  );
}