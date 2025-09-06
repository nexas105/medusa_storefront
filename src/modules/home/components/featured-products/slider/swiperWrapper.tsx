"use client";

import { HttpTypes } from "@medusajs/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductPreviewCard from "./productCard";

export default function ProductSwiperWrapper({
  products,
  region,
}: {
  products: HttpTypes.StoreProduct[];
  region: HttpTypes.StoreRegion;
}) {
  return (
    <div className="relative">
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  pagination={{
    clickable: true,
    el: ".swiper-pagination",
  }}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  slidesPerView={1.2}
  spaceBetween={16}
  breakpoints={{
    640: { slidesPerView: 2.2, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 24 },
  }}
>
  {/* Slides */}

        {products.map((p) => (
          <SwiperSlide key={p.id} className="!h-auto">
            <ProductPreviewCard product={p} region={region} />
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="swiper-pagination !static mt-6 flex justify-center" />

        {/* Navigation */}
        <div className="swiper-button-prev !left-[-2rem] after:!text-black" />
        <div className="swiper-button-next !right-[-2rem] after:!text-black" />
      </Swiper>
    </div>
  );
}