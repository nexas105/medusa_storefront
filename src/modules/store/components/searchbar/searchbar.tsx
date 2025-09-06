"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

export default function CollectionSearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)

  const qParam = params.get("q") ?? ""
  const [value, setValue] = useState(qParam)

  // Wenn sich der URL-Parameter q ändert (Navigation), Feldinhalt synchron halten
  useEffect(() => {
    setValue(qParam)
  }, [qParam])

  const setParam = useCallback(
    (name: string, value?: string) => {
      const p = new URLSearchParams(params)
      if (value && value.trim() !== "") p.set(name, value.trim())
      else p.delete(name)
      return p
    },
    [params]
  )

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next = setParam("q", value)
    next.set("page", "1")
    router.push(`${pathname}?${next.toString()}`)
  }

  function clearSearch() {
    setValue("")                          // Feld sofort leeren
    const next = setParam("q", undefined) // q aus URL entfernen
    next.set("page", "1")
    router.push(`${pathname}?${next.toString()}`)
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          name="q"
          value={value}                               
          onChange={(e) => setValue(e.target.value)}   
          placeholder="Produkte suchen…"
          className="w-full rounded-md border border-neutral-300 px-3 py-2 pr-9 text-sm focus:ring-1 focus:ring-black"
          aria-label="In dieser Kategorie suchen"
        />
        {value && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Suche löschen"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
      >
        <span className="hidden sm:inline">Suchen</span>
        <span className="sm:hidden">🔍</span>
      </button>
    </form>
  )
}