"use client"

import { useRouter, useSearchParams } from "next/navigation"

export function CollectionSearchBar() {
  const router = useRouter()
  const params = useSearchParams()
  const q = params.get("q") ?? ""

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("q")?.toString() ?? ""

    const newUrl = query ? `?q=${encodeURIComponent(query)}` : "?"
    router.push(newUrl) // bleibt auf derselben Seite, nur Query ändert sich
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        name="q"
        defaultValue={q}
        placeholder="Produkte suchen…"
        className="flex-1 rounded-md border border-neutral-300 px-3 py-2"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Suchen
      </button>
    </form>
  )
}