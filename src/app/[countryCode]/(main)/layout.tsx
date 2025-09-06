import { Metadata } from "next"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"

import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout({
  params,
  children,
}: {
  params: { countryCode: string }
  children: React.ReactNode
}) {
  const { countryCode } = params

  // Daten parallel holen
  const [region, customer, cart] = await Promise.all([
    getRegion(countryCode),         // kann null sein
    retrieveCustomer(),
    retrieveCart(),
  ])

  let shippingOptions: StoreCartShippingOption[] = []
  if (cart) {
    const { shipping_options } = await listCartOptions()
    shippingOptions = shipping_options
  }

  return (
    <>
      {/* region kann null sein -> Nav akzeptiert das */}
      <Nav region={region!} cart={cart} />

      {customer && cart && <CartMismatchBanner customer={customer} cart={cart} />}

      {cart && (
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )}

      {children}

      <Footer />
    </>
  )
}