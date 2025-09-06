"use client";

import { Children, PropsWithChildren, ReactElement, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";

type HeroSliderProps = PropsWithChildren<{ titles: string[] }>;
type HeroItemProps = PropsWithChildren<{ className?: string }>;

export function HeroSlider({ children, titles }: HeroSliderProps) {
  const slides = Children.toArray(children) as ReactElement<HeroItemProps>[];
  const swiperRef = useRef<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="w-full h-[75vh]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          className="w-full h-full"
        >
          {slides.map((child, i) => {
            const cls = child.props.className ?? "";
            return (
              <SwiperSlide key={i} className="!w-full !h-full">
                <div
                  className={`w-full h-full flex items-center justify-center border-b border-ui-border-base bg-ui-bg-subtle ${cls}`}
                >
                  {child.props.children}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="mt-6 mx-auto max-w-4xl flex gap-3">
        {titles.map((t, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className="flex-1 flex flex-col items-center"
          >
            <div
              className={[
                "h-2 w-full rounded-full transition-colors",
                i === activeIndex ? "bg-black" : "bg-gray-300 hover:bg-gray-400",
              ].join(" ")}
            />
            <span
              className={[
                "mt-2 text-sm transition-colors",
                i === activeIndex ? "text-black font-medium" : "text-gray-500",
              ].join(" ")}
            >
              {t}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function HeroItem({ children, className }: HeroItemProps) {
  return <div className={className}>{children}</div>;
}