

export const dynamic = 'force-static';

export default function ImpressumPage() {
  const data = {
    company: 'Smartbeat GmbH',
    street: 'Musterstraße 12',
    zipCity: '53639 Königswinter',
    country: 'Deutschland',
    managing: 'Tobias Ludwig',
    phone: '+49 2223 123456',
    email: 'info@smartbeat.de',
    web: 'https://smartbeat.de',
    vatId: 'DE123456789',
    taxId: '',
    registerCourt: 'Amtsgericht Bonn',
    registerNo: 'HRB 123456',
    supervisory: 'Verbraucherzentrale NRW, Mintropstraße 27, 40215 Düsseldorf',
    contentResponsible: 'Tobias Ludwig, Anschrift wie oben',
    hosting: 'Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA',
    imageCredits: 'Eigene Produktfotos, Hersteller-Pressebilder',
    lastUpdate: '27.08.2025',
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <section className="mt-8 space-y-1 text-zinc-700">
        <div className="font-medium">Angaben gemäß § 5 TMG</div>
        <div>{data.company}</div>
        <div>{data.street}</div>
        <div>{data.zipCity}</div>
        <div>{data.country}</div>
      </section>

      <section className="mt-8 space-y-1 text-zinc-700">
        <div className="font-medium">Vertreten durch</div>
        <div>{data.managing}</div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Kontakt</div>
        <div className="mt-2 space-y-1">
          <div>Telefon: <a href={`tel:${data.phone.replace(/\s/g,'')}`} className="underline decoration-dotted underline-offset-4">{data.phone}</a></div>
          <div>E-Mail: <a href={`mailto:${data.email}`} className="underline decoration-dotted underline-offset-4">{data.email}</a></div>
          <div>Web: <a href={data.web} className="underline decoration-dotted underline-offset-4" target="_blank" rel="noopener noreferrer">{data.web}</a></div>
        </div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Registereintrag</div>
        <div className="mt-2 space-y-1">
          <div>Eintragung im Handelsregister</div>
          <div>Registergericht: {data.registerCourt}</div>
          <div>Registernummer: {data.registerNo}</div>
        </div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Umsatzsteuer</div>
        <div className="mt-2 space-y-1">
          <div>USt-IdNr.: {data.vatId || 'wird nachgereicht'}</div>
          {data.taxId ? <div>Steuernummer: {data.taxId}</div> : null}
        </div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Aufsichtsbehörde</div>
        <div className="mt-2">{data.supervisory}</div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Verantwortlich i.S.d. § 18 Abs. 2 MStV</div>
        <div className="mt-2">{data.contentResponsible}</div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">EU‑Streitschlichtung</div>
        <p className="mt-2">Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4">https://ec.europa.eu/consumers/odr</a>. Unsere E‑Mail‑Adresse findest du oben im Impressum.</p>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Verbraucher­streitbeilegung/Universalschlichtungsstelle</div>
        <p className="mt-2">Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Haftung für Inhalte</div>
        <p className="mt-2">Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Haftung für Links</div>
        <p className="mt-2">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Urheberrecht</div>
        <p className="mt-2">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorinnen und Autoren.</p>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Bildnachweise</div>
        <div className="mt-2">{data.imageCredits}</div>
      </section>

      <section className="mt-8 text-zinc-700">
        <div className="font-medium">Hosting</div>
        <div className="mt-2">{data.hosting}</div>
      </section>

      <div className="mt-12 text-xs text-zinc-500">Stand: {data.lastUpdate}</div>
    </main>
  );
}