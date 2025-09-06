"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  date: string;
  text: string;
  rating: number;
  verified?: boolean;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Michael Brust",
    date: "10. März 2025",
    text: "Ich war zuerst skeptisch, aber völlig überzeugt. Wer Innovation mag, hat mit dem Z Flip ein Top-Gerät.",
    rating: 5,
    verified: true,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "t2",
    name: "Sch",
    date: "7. Mai 2025",
    text: "Ich bin Sony-Fan. Handy ist schnell, Empfang top, Akkulaufzeit sehr gut. Begeistert.",
    rating: 5,
    verified: true,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "t3",
    name: "Doni",
    date: "25. Mai 2025",
    text: "Klangqualität fantastisch. Einfach einzurichten, einfach zu bedienen. Klare Empfehlung.",
    rating: 5,
    verified: true,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: "t4",
    name: "Julia R.",
    date: "2. Juni 2025",
    text: "Das Display ist eine Wucht! Farben und Helligkeit sind überragend. Bin sehr zufrieden.",
    rating: 5,
    verified: true,
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: "t5",
    name: "Frank Leh",
    date: "15. Juni 2025",
    text: "Endlich ein Akku, der den ganzen Tag hält – auch bei intensiver Nutzung. Genau das, was ich gesucht habe.",
    rating: 5,
    verified: true,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

export default function Testimonials() {
  return (
    <div className="content-container py-12">
      <h2 className="text-2xl font-bold mb-1">Trusted Feedback</h2>
      <p className="text-neutral-600 mb-6">25.000+ zufriedene Kunden</p>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".testimonials-next",
            prevEl: ".testimonials-prev",
          }}
          pagination={{
            clickable: true,
            el: ".testimonials-pagination",
          }}
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="!h-auto">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200 h-full flex flex-col">
                {/* Kopf */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-100">
                    {t.avatar && (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.date}</div>
                  </div>
                </div>

                {/* Sterne */}
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-neutral-700 flex-1">{t.text}</p>

                {/* Footer */}
                {t.verified && (
                  <div className="mt-3 text-xs text-green-600 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                    Verifizierte Bewertung
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls + Pagination */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            className="testimonials-prev h-10 w-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
            aria-label="Zurück"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 15l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="testimonials-pagination flex gap-2"></div>

          <button
            className="testimonials-next h-10 w-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
            aria-label="Weiter"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}