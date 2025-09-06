// modules/home/components/top-kategorie.tsx
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import type { HttpTypes } from "@medusajs/types"

type Cat = HttpTypes.StoreProductCategory

export default function TopKategorie({ categories }: { categories: Cat[] }) {
  const roots = (categories || []).filter((c) => !c.parent_category)
  if (!roots.length) return null

  return (
    <section aria-labelledby="top-kat-title">
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h2 id="top-kat-title" className="text-2xl font-semibold tracking-tight">
            Top-Kategorien
          </h2>
          <p className="text-sm text-ui-fg-subtle">Finde schnell die passende Kategorie</p>
        </div>
      </header>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-4">
        {roots.slice(0, 8).map((cat) => (
          <li key={cat.id}>
            {/* Karte als Container (KEIN <a>!) */}
            <div className="group relative rounded-xl border border-ui-border-base bg-ui-bg-base/60 hover:bg-ui-bg-base transition-colors p-4 cursor-pointer">
              {/* Stretched link: absolut, macht gesamte Karte klickbar */}
              <LocalizedClientLink
                href={`/categories/${cat.handle}`}
                aria-label={cat.name}
                className="absolute inset-0 rounded-xl z-10"
              />

              {/* Inhalt */}
              <div className="relative z-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">{cat.name}</h3>
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ui-border-base group-hover:bg-ui-bg-subtle"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20">
                      <path d="M7 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                {/* Chips: eigene Links, NICHT Nachfahren des stretched links */}
                {!!cat.category_children?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.category_children.slice(0, 6).map((child) => (
                      <LocalizedClientLink
                        key={child.id}
                        href={`/categories/${child.handle}`}
                        className="relative z-30 text-xs px-2 py-1 rounded-full border border-ui-border-base text-ui-fg-subtle hover:text-ui-fg-base hover:border-ui-fg-base bg-ui-bg-base"
                      >
                        {child.name}
                      </LocalizedClientLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}