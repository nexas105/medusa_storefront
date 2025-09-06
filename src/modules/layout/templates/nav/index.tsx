// app/components/nav/index.tsx (Server Component)
import { listCollections } from "@lib/data/collections"
import { listProducts } from "@lib/data/products"
import MegaNav from "./meganav"
import { HttpTypes } from "@medusajs/types"

type ProductsByCollection = Record<
  string,
  Array<{
    id: string
    title: string
    handle?: string
    thumbnail?: string | null
  }>
>

export default async function Nav({
  region,
  cart
}: {
  region: HttpTypes.StoreRegion
  cart?: HttpTypes.StoreCart | null
}) {
  // 1) Collections & Regions parallel laden
  const [{ collections }] = await Promise.all([
    // expand=products gibt es je nach Medusa-Setup; wenn nicht stabil, Produkte separat laden (siehe unten)
    listCollections({ fields: "id,handle,title,metadata" }),
  ])

  // 2) Für alle Collections Produkte parallel laden (limitier Zahl pro Menü)
  //    -> vermeidet n+1 so gut es geht (Parallelisierung), aber hält Antwort klein
  const productsByCollection: ProductsByCollection = {}

  await Promise.all(
    collections.map(async (collection) => {
      try {
        const {
          response: { products },
        } = await listProducts({
          regionId: region.id,
          limit: 8,
          queryParams: {
            //@ts-ignore
            collection_id: collection.id,
            fields: "*variants.calculated_price",
          },
        })

        productsByCollection[collection.id] = products.map((p: any) => ({
          id: p.id,
          title: p.title,
          handle: p.handle,
          thumbnail: p.thumbnail ?? null,
        }))
      } catch {
        productsByCollection[collection.id] = []
      }
    })
  )

  return (
    <MegaNav
    cart={cart}
      collections={collections}
      productsByCollection={productsByCollection}
    />
  )
}