export const dynamic = 'force-static';

export default function WiderrufPage() {
  const shop = {
    name: 'Smartbeat GmbH',
    street: 'Musterstraße 12',
    zipCity: '53639 Königswinter',
    country: 'Deutschland',
    email: 'info@smartbeat.de',
    lastUpdate: '27.08.2025',
  } as const;

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Widerrufsbelehrung</h1>
      <p className="mt-3 text-sm text-zinc-500">Verbraucher haben ein gesetzliches Widerrufsrecht. Nachfolgend findest du die gesetzlich vorgeschriebene Belehrung über die Voraussetzungen und Folgen des Widerrufs.</p>

      <section className="mt-8 text-zinc-700 space-y-2">
        <h2 className="text-xl font-semibold">Widerrufsrecht</h2>
        <p>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen hast.</p>
        <p>Um dein Widerrufsrecht auszuüben, musst du uns ({shop.name}, {shop.street}, {shop.zipCity}, {shop.country}, E-Mail: {shop.email}) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
        <p>Zur Wahrung der Frist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>
      </section>

      <section className="mt-8 text-zinc-700 space-y-2">
        <h2 className="text-xl font-semibold">Folgen des Widerrufs</h2>
        <p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist.</p>
        <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.</p>
        <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.</p>
        <p>Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtet hast, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von vierzehn Tagen absendest.</p>
        <p>Du trägst die unmittelbaren Kosten der Rücksendung der Waren.</p>
        <p>Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
      </section>

      <section className="mt-8 text-zinc-700 space-y-2">
        <h2 className="text-xl font-semibold">Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h2>
        <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.</p>
        <p>Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung von Waren, wenn diese nach der Lieferung aufgrund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden.</p>
      </section>

      <div className="mt-12 text-xs text-zinc-500">Stand: {shop.lastUpdate}</div>
    </main>
  );
}
