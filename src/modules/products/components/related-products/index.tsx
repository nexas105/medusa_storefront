import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)
  if (!region) return null

  const queryParams: HttpTypes.StoreProductParams = {
    is_giftcard: false,
    region_id: region.id,
  }

  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags?.length) {
    queryParams.tag_id = product.tags.map((t) => t.id!).filter(Boolean)
  }

  const { response } = await listProducts({ queryParams, countryCode })
  const products = (response.products || []).filter((p) => p.id !== product.id)
  if (!products.length) return null

  const viewAllHref = product.collection
    ? `/collections/${product.collection.handle}`
    : "/store"

  return (
    <section className="product-page-constraint">
      {/* Header */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ui-fg-base">
            Ähnliche Produkte
          </h2>
          <p className="mt-1 text-sm text-ui-fg-subtle">
            Vielleicht passt das hier perfekt zu deiner Auswahl.
          </p>
        </div>

        <LocalizedClientLink
          href={viewAllHref}
          className="text-sm font-medium text-ui-fg-subtle hover:text-ui-fg-base underline underline-offset-4"
        >
          Alle anzeigen
        </LocalizedClientLink>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.slice(0, 12).map((p) => (
          <li
            key={p.id}
            className="group rounded-lg border border-ui-border-base bg-ui-bg-subtle/50 hover:bg-ui-bg-base transition-colors"
          >
            <div className="p-0.5 rounded-lg">
              {/* leichte Hover-Bewegung für die Karte */}
              <div className="transition-transform duration-200 group-hover:-translate-y-0.5">
                <Product region={region} product={p} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile CTA */}
      <div className="mt-8 flex small:hidden justify-center">
        <LocalizedClientLink
          href={viewAllHref}
          className="inline-flex items-center rounded-md border border-ui-border-base bg-ui-bg-base px-4 py-2 text-sm font-medium hover:bg-ui-bg-subtle"
        >
          Mehr Produkte anzeigen
        </LocalizedClientLink>
      </div>
    </section>
  )
}