"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import CollectionSearchBar from "../searchbar/searchbar"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({ sortBy, 'data-testid': dataTestId }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

return (
    <aside
      className="
        small:sticky small:top-28
        small:min-w-[280px] small:max-w-[320px]
        w-full small:w-auto
        mb-8 small:mb-0 small:mr-8
      "
      aria-label="Filter und Suche"
    >
      <div className="rounded-xl border border-ui-border-base bg-ui-bg-base/70 shadow-sm">
        {/* Header */}
        <div className="px-4 py-3 border-b border-ui-border-base">
          <h2 className="text-sm font-semibold">Filter &amp; Suche</h2>
        </div>

        {/* Suche */}
        <div className="px-4 pt-4">
          <div className="text-xs text-ui-fg-subtle mb-2">Produktsuche</div>
          <div className="rounded-lg border border-ui-border-base bg-white p-2">
            {/* deine bestehende Searchbar verwenden */}
            <CollectionSearchBar />
          </div>
        </div>

        {/* Sortierung */}
        <div className="px-4 py-4 border-t border-ui-border-base">
          <SortProducts
            sortBy={sortBy}
            setQueryParams={setQueryParams}
            data-testid={dataTestId}
          />
        </div>
      </div>
    </aside>
  )
}

export default RefinementList
