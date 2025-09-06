import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

function PayBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-ui-border-base bg-ui-bg-base px-2 py-1">
      <svg width="18" height="12" viewBox="0 0 36 24" className="opacity-80">
        <rect x="1" y="3" width="34" height="18" rx="3" className="fill-current text-ui-fg-subtle/20" />
        <rect x="5" y="7" width="10" height="2" className="fill-current text-ui-fg-subtle/50" />
        <rect x="5" y="11" width="18" height="2" className="fill-current text-ui-fg-subtle/50" />
      </svg>
      <span className="text-xs text-ui-fg-subtle">{children}</span>
    </span>
  )
}

export default async function Footer() {
  const year = new Date().getFullYear()
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="w-screen ">
      <div>
        <div className="rounded-xl overflow-hidden border border-ui-border-base bg-ui-bg-subtle">
          <div className="grid md:grid-cols-[340px_1fr]">
            {/* linke Marken-Spalte */}
            <div className="bg-black text-white p-8 md:p-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white text-black grid place-items-center text-sm font-bold">
                  S·B
                </div>
                <div className="text-2xl font-semibold">Smart Beat</div>
              </div>
              <div className="text-sm text-white/70">Smartphones &amp; mehr</div>
              <p className="text-sm leading-6 text-white/80">
                Bei Smart Beat findest du modernste Smartphones, leistungsstarke Tablets und hochwertige Kopfhörer – alles
                an einem Ort, zu fairen Preisen. Wir verbinden Technik, Qualität und Service, damit du genau das bekommst,
                was du brauchst: Technik, die begeistert.
              </p>
              <Text className="text-xs text-white/50">© {year} Smart Beat.</Text>
            </div>

            {/* rechte Spalten */}
            <div className="p-8 md:p-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Kategorien */}
                {productCategories && productCategories.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold mb-3">Kategorien</div>
                    <ul className="space-y-2 text-sm text-ui-fg-subtle">
                      {productCategories.slice(0, 6).map((c) => (
                        <li key={c.id}>
                          <LocalizedClientLink
                            href={`/categories/${c.handle}`}
                            className="hover:text-ui-fg-base"
                          >
                            {c.name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Collections */}
                {collections && collections.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold mb-3">Kollektionen</div>
                    <ul className="space-y-2 text-sm text-ui-fg-subtle">
                      {collections.slice(0, 6).map((c) => (
                        <li key={c.id}>
                          <LocalizedClientLink
                            href={`/collections/${c.handle}`}
                            className="hover:text-ui-fg-base"
                          >
                            {c.title}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rechtliches */}
                <div>
                  <div className="text-sm font-semibold mb-3">Rechtliches</div>
                  <ul className="space-y-2 text-sm text-ui-fg-subtle">
                    <li><LocalizedClientLink href="/agb" className="hover:text-ui-fg-base">AGB</LocalizedClientLink></li>
                    <li><LocalizedClientLink href="/datenschutz" className="hover:text-ui-fg-base">Datenschutz</LocalizedClientLink></li>
                    <li><LocalizedClientLink href="/impressum" className="hover:text-ui-fg-base">Impressum</LocalizedClientLink></li>
                    <li><LocalizedClientLink href="/widerruf" className="hover:text-ui-fg-base">Widerruf</LocalizedClientLink></li>
                  </ul>
                </div>

                {/* Sicher Bezahlen */}
                <div>
                  <div className="text-sm font-semibold mb-3">Sicher Bezahlen</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <PayBadge>Kreditkarte</PayBadge>
                      <PayBadge>SEPA</PayBadge>
                      <PayBadge>PayPal</PayBadge>
                    </div>
                    <div className="flex items-center gap-2">
                      <PayBadge>Apple&nbsp;Pay</PayBadge>
                      <PayBadge>Google&nbsp;Pay</PayBadge>
                    </div>
                    <div className="flex items-center gap-2">
                      <PayBadge>Klarna</PayBadge>
                      <PayBadge>Vorkasse</PayBadge>
                    </div>
                  </div>
                </div>
              </div>

              {/* untere Zeile */}
              <div className="mt-10 flex items-center justify-end gap-5 text-xs text-ui-fg-muted">
                <span>Onlineshop by Tobias Ludwig</span>
                <a href="mailto:mail@example.com" className="hover:text-ui-fg-base">Mail</a>
                <a href="https://example.com" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">Website</a>
                <a href="https://github.com/yourrepo" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}