import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Warenkorb
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
     Dein Warenkorb ist leer. Ändere das – nutze den Link unten, um unsere Produkte zu entdecken.
      </Text>
      <div>
        <InteractiveLink href="/store">Entdecke unsere Produte</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
