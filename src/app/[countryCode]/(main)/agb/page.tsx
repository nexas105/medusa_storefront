export const dynamic = 'force-static';

export default function AgbPage() {
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
      <h1 className="text-3xl font-semibold tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="mt-3 text-sm text-zinc-500">Bitte lies diese AGB sorgfältig. Mit deiner Bestellung akzeptierst du die nachstehenden Bedingungen.</p>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">1. Geltungsbereich</h2>
        <p>Diese AGB gelten für alle Bestellungen über den Onlineshop {shop.name} unter {shop.web}. Abweichende Bedingungen der Kundschaft werden nicht anerkannt, es sei denn, wir stimmen ihrer Geltung ausdrücklich zu.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">2. Vertragspartner und Kontakt</h2>
        <p>Vertragspartner ist die {shop.name}, {shop.street}, {shop.zipCity}, {shop.country}. Kontakt: E‑Mail {shop.email}.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">3. Angebot und Vertragsschluss</h2>
        <p>Die Darstellung von Produkten im Onlineshop stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe einer Bestellung. Durch Abschluss des Bestellvorgangs gibst du ein verbindliches Angebot ab. Der Kaufvertrag kommt zustande, wenn wir deine Bestellung durch eine Auftragsbestätigung per E‑Mail annehmen oder die Ware versenden.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">4. Preise, Versandkosten und Zahlungsarten</h2>
        <p>Alle Preise verstehen sich in Euro inklusive der gesetzlichen Umsatzsteuer. Gegebenenfalls anfallende Versandkosten werden im Bestellprozess angezeigt. Akzeptierte Zahlungsarten werden im Checkout ausgewiesen.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">5. Lieferung, Verfügbarkeit, Teillieferungen</h2>
        <p>Wir liefern innerhalb Deutschlands. Lieferzeiten werden auf der Produktseite oder im Checkout angegeben. Ist ein Artikel dauerhaft nicht verfügbar, behalten wir uns vor, die Annahme deiner Bestellung abzulehnen. Teillieferungen sind zulässig, soweit sie dir zumutbar sind; zusätzliche Versandkosten entstehen dir dadurch nicht.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">6. Eigentumsvorbehalt</h2>
        <p>Bis zur vollständigen Bezahlung bleibt die Ware unser Eigentum.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">7. Widerrufsrecht für Verbraucher</h2>
        <p>Verbraucher haben ein gesetzliches Widerrufsrecht. Nachfolgend findest du die Widerrufsbelehrung.</p>
        <div className="mt-4 rounded-xl ring-1 ring-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-medium">Widerrufsbelehrung</h3>
          <p className="mt-2">Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen hast.</p>
          <p className="mt-2">Um dein Widerrufsrecht auszuüben, musst du uns ({shop.name}, {shop.street}, {shop.zipCity}, {shop.country}, E‑Mail {shop.email}) mittels einer eindeutigen Erklärung (z. B. per E‑Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
          <p className="mt-2">Zur Wahrung der Frist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>
          <h4 className="mt-4 font-medium">Folgen des Widerrufs</h4>
          <p className="mt-2">Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, es wurde ausdrücklich etwas anderes vereinbart.</p>
          <p className="mt-2">Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.</p>
          <p className="mt-2">Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtet hast, an uns zurückzusenden oder zu übergeben. Du trägst die unmittelbaren Kosten der Rücksendung der Waren, sofern nicht anders angegeben.</p>
          <p className="mt-2">Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
          <p className="mt-2 text-xs text-zinc-500">Hinweis: Für versiegelte Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, erlischt das Widerrufsrecht, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
        </div>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">8. Gewährleistung</h2>
        <p>Es gilt das gesetzliche Mängelhaftungsrecht. Bei Mängeln kannst du zunächst Nacherfüllung verlangen. Schlägt diese fehl, kannst du nach den gesetzlichen Vorschriften vom Vertrag zurücktreten, den Kaufpreis mindern und ggf. Schadensersatz verlangen.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">9. Haftung</h2>
        <p>Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit haften wir nur für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden aus der Verletzung einer wesentlichen Vertragspflicht; in letzterem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">10. Datenschutz</h2>
        <p>Informationen zur Verarbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung unter {shop.web}/datenschutz.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">11. Streitbeilegung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>

      <section className="mt-8 space-y-2 text-zinc-700">
        <h2 className="text-xl font-semibold">12. Schlussbestimmungen</h2>
        <p>Es gilt deutsches Recht unter Ausschluss des UN‑Kaufrechts. Zwingende Verbraucherschutzvorschriften des Staates, in dem du deinen gewöhnlichen Aufenthalt hast, bleiben unberührt. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
      </section>

      <div className="mt-12 text-xs text-zinc-500">Stand: {shop.lastUpdate}</div>
    </main>
  );
}
