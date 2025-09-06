import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import ProductSlide from "@modules/home/components/featured-products/slider"
import { HttpTypes } from "@medusajs/types"
import Testimonials from "@modules/home/components/testimotials"
import { listCategories } from "@lib/data/categories"
import TopKategorie from "@modules/home/components/top-kategorie"
import Brands from "@modules/home/components/brands"
import NewsletterCTA from "@modules/home/components/newletter"
import AboutUs from "@modules/home/components/aboutUs"

export const metadata: Metadata = {
  title: "Smart Beat Smartphones und Kopfhörer",
  description: "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

// Optional – wenn du immer frische Collections willst
// export const revalidate = 0

export default async function Home({
  params,
}: {
  params: { countryCode: string }
}) {
  const { countryCode } = params

  // ✅ parallel laden
  const [region, collectionsRes, categories] = await Promise.all([
    getRegion(countryCode),
    listCollections({ fields: "id,handle,title" }),
    listCategories(),
  ])

  const collections = collectionsRes?.collections ?? []

  if (!region) {
    console.error("Region not found for countryCode:", countryCode)
    return null
  }

  if (!collections.length) {
    console.warn("No collections returned")
    // Du kannst hier auch einen Fallback-Block rendern statt null
    // return <EmptyState />
  }

  const landingPageComponents = [
    <div className="bg-ui-tag-neutral-bg" key="c1">
      <div className="content-container p-12">
          <TopKategorie categories={categories!}/>
      </div>
    </div>,
    <div key="c2" className="bg-ui-tag-neutral-bg"><Testimonials /></div>,

    <div key="extra-c4" className="bg-ui-tag-neutral-bg"><Brands /></div>,
<NewsletterCTA

  />,

  <AboutUs />
  ]

  return (
    <>
      <Hero />
      <div className="py-12 space-y-12">
        {collections.map((col, idx) => (
          <div key={`block-${idx}`} className="space-y-12">
            {/* Zuerst der ProductSlide */}
            <ProductSlide collection={col} region={region} />

            {/* Dann die passende LandingPage-Komponente (falls vorhanden) */}
            {landingPageComponents[idx] && landingPageComponents[idx]}
          </div>
        ))}

        {/* Falls es mehr LandingPageComponents als Collections gibt */}
        {landingPageComponents.slice(collections.length).map((comp, idx) => (
          <div key={`extra-${idx}`}>{comp}</div>
        ))}
      </div>
    </>
  )
}