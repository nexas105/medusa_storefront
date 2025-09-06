// modules/home/components/brands.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Brand = {
  name: string;
  logo: string;   // URL zum Logo (SVG/PNG)
  href?: string;  // Link zur Marke/Kategorie
};

export default function Brands({
  title = "Unsere Marken – Deine Auswahl",
  brands,
}: {
  title?: string;
  brands?: Brand[];
}) {
  const items: Brand[] =
    brands && brands.length
      ? brands
      : [
          {
            name: "Apple",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            href: "/brands/apple",
          },
          {
            name: "Samsung",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
            href: "/brands/samsung",
          },
          {
            name: "Sony",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg",
            href: "/brands/sony",
          },
          {
            name: "Beats",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/0/09/Beats_Electronics_logo.svg",
            href: "/brands/beats",
          },
          {
            name: "Xiaomi",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
            href: "/brands/xiaomi",
          },
          {
            name: "Huawei",
            logo:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/HUAWEI_logo.svg",
            href: "/brands/huawei",
          },
        ];

  return (
    <section className=" py-12">
      <div className="content-container">
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          {title}
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {items.map((b, i) => {
            const badge = (
              <span
                className={[
                  "relative inline-flex items-center justify-center",
                  "rounded-full ring-1 ring-neutral-200/70",
                  // Größen (responsive)
                  "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32",
                  // alternierend leicht getönt wie im Screenshot
                  i % 2 === 0 ? "bg-amber-50" : "bg-white",
                  // Animation
                  "transition-transform duration-200 hover:scale-[1.03]",
                ].join(" ")}
              >
                {/* Logo */}
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  sizes="(min-width: 1024px) 8rem, (min-width: 640px) 7rem, 6rem"
                  className="object-contain p-6 sm:p-7 md:p-8"
                />
              </span>
            );

            return (
              <li key={b.name} className="shrink-0">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
                    aria-label={b.name}
                  >
                    {badge}
                  </Link>
                ) : (
                  badge
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}