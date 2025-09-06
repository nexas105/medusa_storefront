// app/components/nav/meganav.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import type { StoreCollection, StoreRegion, StoreCart } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartDropdown from "@modules/layout/components/cart-dropdown"

type MiniProduct = { id: string; title: string; handle?: string; thumbnail?: string | null }
type ProductsByCollection = Record<string, MiniProduct[]>

type Props = {
  collections: StoreCollection[]
  productsByCollection: ProductsByCollection
  cart?: StoreCart | null
}

const SideMenuItems: Record<string, string> = {
  Start: "/",
  Shop: "/store",
  Account: "/account",
}

export default function MegaNav({ collections, productsByCollection, cart }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  console.log(productsByCollection)
  // ESC zum Schließen
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const menus = useMemo(() => {
    return collections.map((c) => {
      const meta = (c as any).metadata || {}
      return {
        id: c.id,
        label: c.title,
        href: `/collections/${c.handle}`,
        hero: {
          img:
            meta.heroImage ??
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
          title: meta.heroTitle ?? c.title,
          subtitle: meta.heroSubtitle ?? "Jetzt entdecken",
          href: `/collections/${c.handle}`,
        },
        products: productsByCollection[c.id] ?? [],
        columns:
          meta.columns ??
          [
            { title: c.title, items: [{ label: "Alle Produkte", href: `/collections/${c.handle}` }] },
            { title: "Kategorien", items: [] },
            { title: "Highlights", items: [] },
          ],
      }
    })
  }, [collections, productsByCollection])

  const closeMobile = () => setMobileOpen(false)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-screen-2xl px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Left: Mobile Burger + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile: Burger */}
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100"
              aria-label="Navigation öffnen"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <Link href="/" className="text-xl font-semibold">Smartbeat</Link>
          </div>

          {/* Center: Desktop Menüs */}
          <ul className="hidden md:flex items-center h-full gap-2">
            {menus.map((m) => (
              <li key={m.id} className="relative h-full group">
                <button className="h-full px-3 rounded-xl text-sm font-medium text-neutral-700 hover:text-black flex items-center gap-1">
                  {m.label}
                  <svg width="16" height="16" viewBox="0 0 20 20" className="opacity-70">
                    <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>

                {/* Desktop Panel */}
                <div className="pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full">
                  <div className="mt-2 w-[980px] rounded-2xl border border-neutral-200 bg-white shadow-xl">
                    <div className="grid grid-cols-2 gap-6 p-4">
                      {/* Hero Card */}
                      <Link href={m.hero.href} className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200">
                        <div className="relative h-64 w-full">
                          <Image src={m.hero.img} alt={m.hero.title} fill className="object-cover" sizes="(max-width: 980px) 50vw, 490px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                          <div className="text-lg font-semibold">{m.hero.title}</div>
                          <div className="text-sm opacity-90">{m.hero.subtitle}</div>
                        </div>
                      </Link>

                      {/* Rechte Seite */}
                      <div className="grid grid-cols-1 gap-4">
                        {m.products?.length ? (
                          <div>
                            <div className="text-[15px] font-semibold text-neutral-900 mb-2">Highlights</div>
                            <ul className="grid grid-cols-2 gap-3">
                              {m.products.map((p) => (
                                <li key={p.id} className="flex items-center gap-3 rounded-xl p-2 hover:bg-neutral-100">
                                  <div className="relative h-12 w-12 overflow-hidden rounded-lg ring-1 ring-neutral-200 bg-neutral-50">
                                    {p.thumbnail ? (
                                      <Image src={p.thumbnail} alt={p.title} fill className="object-cover" sizes="50px" />
                                    ) : (
                                      <div className="h-full w-full grid place-content-center text-neutral-400 text-xs">Img</div>
                                    )}
                                  </div>
                                  <Link href={p.handle ? `/products/${p.handle}` : "#"} className="text-[14px] text-neutral-800 hover:text-black line-clamp-2">
                                    {p.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-4">
                            {m.columns.map((col: any, idx: number) => (
                              <div key={idx} className="p-2">
                                <div className="text-[15px] font-semibold text-neutral-900 mb-1">{col.title}</div>
                                {col.items?.length ? (
                                  <ul className="space-y-1">
                                    {col.items.map((it: any, i: number) => (
                                      <li key={i}>
                                        <Link href={it.href} className="block rounded-lg px-2 py-1.5 hover:bg-neutral-100 text-[14px] text-neutral-700 hover:text-neutral-900">
                                          {it.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <div className="text-neutral-400 text-[14px] px-2 py-1.5">Noch keine Produkte gefunden.</div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Right: Desktop Quicklinks + Country */}
          <div className="hidden md:flex items-center gap-4">
            {Object.entries(SideMenuItems).map(([name, href]) => (
              <LocalizedClientLink
                key={name}
                href={href}
                className="hover:text-ui-fg-base text-sm"
                data-testid={`${name.toLowerCase()}-link`}
              >
                {name}
              </LocalizedClientLink>
            ))}
            {/* <CartDropdown  /> */}
          <CartDropdown cart={cart} />

          </div>
          {/* Right: Mobile Schnelllinks (Icons/Links optional) */}
          <div className="md:hidden ">
                         <CartDropdown cart={cart} />

          </div>
        </nav>
      </div>

      {/* Mobile Drawer + Overlay */}
      {/* Mobile Drawer + Overlay */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-0 z-[60] ${mobileOpen ? "" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobile}
        />

        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-[86%] max-w-sm z-[61]
    bg-white shadow-xl border-r border-neutral-200
    transition-transform duration-200
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Header */}
          <div className="bg-white flex items-center justify-between h-14 px-4 border-b border-neutral-200">
            <Link href="/" className="text-lg font-semibold" onClick={closeMobile}>
              Smartbeat
            </Link>
            <button
              aria-label="Navigation schließen"
              onClick={closeMobile}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <nav className="bg-white px-4 py-4 space-y-8 overflow-y-auto h-[calc(100vh-56px-80px)]">
            {/* Schnellzugriff */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Schnellzugriff</div>
              <ul className="space-y-2">
                {Object.entries(SideMenuItems).map(([name, href]) => (
                  <li key={name}>
                    <LocalizedClientLink
                      href={href}
                      className="block text-sm text-neutral-800 hover:text-black"
                      onClick={closeMobile}
                      data-testid={`${name.toLowerCase()}-link`}
                    >
                      {name}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kategorien */}
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Kategorien</div>
              <ul className="space-y-3">
                {menus.map((m) => (
                  <li key={m.id} className="rounded-lg border border-neutral-200/60">
                    <details>
                      <summary className="flex items-center justify-between px-3 py-2 cursor-pointer select-none">
                        <span className="text-sm font-medium">{m.label}</span>
                        <svg width="18" height="18" viewBox="0 0 20 20" className="opacity-70">
                          <path d="M6 8l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </summary>

                      <div className="px-3 pb-3">
                        <LocalizedClientLink
                          href={m.href}
                          className="block text-sm text-neutral-800 hover:text-black mb-2"
                          onClick={closeMobile}
                        >
                          Alle Produkte
                        </LocalizedClientLink>

                        {m.products?.length ? (
                          <ul className="divide-y divide-neutral-200/70">
                            {m.products.slice(0, 8).map((p) => (
                              <li key={p.id} className="py-2">
                                <LocalizedClientLink
                                  href={p.handle ? `/products/${p.handle}` : m.href}
                                  className="flex items-center gap-3"
                                  onClick={closeMobile}
                                >
                                  <div className="relative h-12 w-12 overflow-hidden rounded-md ring-1 ring-neutral-200 bg-neutral-50 shrink-0">
                                    {p.thumbnail ? (
                                      <Image src={p.thumbnail} alt={p.title} fill sizes="48px" className="object-cover" />
                                    ) : (
                                      <div className="h-full w-full grid place-content-center text-neutral-400 text-xs">Img</div>
                                    )}
                                  </div>
                                  <span className="text-sm text-neutral-800 line-clamp-2">{p.title}</span>
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-sm text-neutral-400">Noch keine Produkte gefunden.</div>
                        )}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="bg-white h-20 border-t border-neutral-200 px-4 grid place-items-center" />
        </aside>
      </div>


      {/* Mobile Unterkante (Platzhalter für zukünftige Bottom-Nav) */}
      <div className="md:hidden border-t border-neutral-200" />
    </div>
  )
}