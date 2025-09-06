import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductSwiperWrapper from "./swiperWrapper"
import InteractiveLink from "@modules/common/components/interactive-link"

export default async function ProductSlide({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
      limit: 8,
    },
  })

  if (!pricedProducts || pricedProducts.length === 0) return null

  return (
    <div className="content-container py-4 small:py-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{collection.title}</h2>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Alle anzeigen
        </InteractiveLink>
      </div>

      <ProductSwiperWrapper products={pricedProducts} region={region} />
    </div>
  )
}