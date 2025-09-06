"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  return (
    <div className="flex flex-col items-center gap-y-6">
      {/* Hauptbild */}
      <Container className="relative aspect-[4/5] w-full max-w-xl overflow-hidden bg-ui-bg-subtle">
        {activeImage?.url && (
          <Image
            src={activeImage.url}
            priority
            alt={`Produktbild ${activeIndex + 1}`}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 80vw, 800px"
            className="object-cover rounded-md"
          />
        )}
      </Container>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[4/5] w-20 rounded-md overflow-hidden border ${
              index === activeIndex
                ? "border-black"
                : "border-transparent hover:border-ui-border-base"
            }`}
          >
            {image.url && (
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery