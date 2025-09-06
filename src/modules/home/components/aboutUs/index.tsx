import Link from "next/link";

type Stat = { label: string; value: string };

export default function AboutUs({
  title = "Hinter Smart Beat",
  kicker = "Was uns antreibt und wofür wir stehen.",
  text = `Bei Smart Beat dreht sich alles um modernste Smartphones und hochwertige Kopfhörer, die deinen Alltag smarter und unterhaltsamer machen. Wir stehen für starke Technik, faire Preise, schnelle Lieferung und persönlichen Service. Unsere Leidenschaft ist es, dir die besten Produkte und Marken im Bereich Mobile und Audio zugänglich zu machen. Technik soll begeistern – genau das ist Smart Beat.`,
  ctaText = "Mehr über uns",
  ctaHref = "/about",
  stats = [
    { value: "1.245+", label: "Zufriedene Kunden" },
    { value: "2.511+", label: "Verkaufte Produkte" },
    { value: "200+", label: "Produkte auf Lager" },
  ] as Stat[],
}: {
  title?: string;
  kicker?: string;
  text?: string;
  ctaText?: string;
  ctaHref?: string;
  stats?: Stat[];
}) {
  return (
    <section className="bg-white">
      <div className="content-container py-12 md:py-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
          {/* Textseite */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              {title.split(" ")[0]}{" "}
              <span className="text-primary-600">{title.split(" ").slice(1).join(" ")}</span>
            </h2>

            <p className="mt-4 font-semibold">{kicker}</p>

            <p className="mt-4 text-neutral-700 leading-7">{text}</p>

            <Link
              href={ctaHref}
              className="inline-flex mt-6 h-10 items-center rounded-full bg-orange-500 px-5 text-white font-semibold hover:bg-orange-600 active:bg-orange-700 transition"
            >
              {ctaText}
            </Link>
          </div>

          {/* KPIs */}
          <div className="grid sm:grid-cols-3 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-neutral-900 text-white px-6 py-6 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-sm text-neutral-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}