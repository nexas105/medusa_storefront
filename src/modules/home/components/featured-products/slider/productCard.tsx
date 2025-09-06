"use client";

import Link from "next/link";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";

const LOCALE = "de-DE";

function formatAmount(a: number | null | undefined, c: string, locale = LOCALE) {
  if (a == null) return "";
  return new Intl.NumberFormat(locale, { style: "currency", currency: c }).format(a);
}

export default function ProductPreviewCard({
  product,
  region,
}: {
  product: HttpTypes.StoreProduct;
  region: HttpTypes.StoreRegion;
}) {
  const imgs = product.images?.map((i) => i.url).filter(Boolean) ?? [];
  const thumb = product.thumbnail ?? imgs[0] ?? "";
  const hoverImg = imgs[1] ?? null;

  const v = product.variants?.[0];
  const price = v?.calculated_price?.calculated_amount ?? v?.calculated_price?.amount ?? null;
  const compare = v?.calculated_price?.calculated_compare_at_amount ?? v?.calculated_price?.compare_at_amount ?? null;
  const hasSale = compare != null && price != null && compare > price;
  const discountPct = hasSale ? Math.round(((compare! - price!) / compare!) * 100) : null;

  return (
    <Link
      href={`/products/${product.handle}`}
      aria-label={product.title}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-lg"
    >
      <div className="rounded-lg overflow-hidden bg-ui-bg-subtle border border-ui-border-base">
        <div className="relative aspect-[4/5]">
          {thumb ? (
            <>
              <Image
                src={thumb}
                alt={product.title}
                fill
                sizes="(min-width:1024px) 24vw, (min-width:768px) 32vw, 90vw"
                loading="lazy"
                className="object-cover transition duration-700 ease-out opacity-0 blur-sm will-change-transform"
                onLoadingComplete={(img) => {
                  img.classList.remove("opacity-0", "blur-sm")
                }}
              />

              {hoverImg && (
                <Image
                  src={hoverImg}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 24vw, (min-width:768px) 32vw, 90vw"
                  loading="lazy"
                  className="object-cover opacity-0 blur-sm transition duration-700 ease-out
               group-hover:opacity-100 group-hover:blur-0
               absolute inset-0"
                  onLoadingComplete={(img) => {
                    img.classList.remove("opacity-0", "blur-sm")
                  }}
                />

              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-ui-fg-muted">
              Kein Bild
            </div>
          )}

          {hasSale && (
            <div className="absolute left-2 top-2 rounded-full bg-red-600 text-white text-xs px-2 py-1">
              -{discountPct}%
            </div>
          )}
        </div>

        <div className="p-3">
          <div className="text-sm line-clamp-1">{product.title}</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-base font-medium">
              {price != null ? formatAmount(price, region.currency_code, LOCALE) : ""}
            </span>
            {hasSale && (
              <span className="text-sm text-ui-fg-muted line-through">
                {formatAmount(compare!, region.currency_code, LOCALE)}
              </span>
            )}
          </div>

          {/* Optionen als Chips */}
          {product.options && product.options.length > 0 && (
            <div className="mt-3 space-y-2">
              {product.options.map((opt) => (
                <div key={opt.id} className="flex flex-wrap gap-1 text-xs">
                  <span className="text-ui-fg-muted mr-1 font-medium">{opt.title}:</span>
                  {opt.values?.map((v) => (
                    <span
                      key={v.id}
                      className="px-2 py-0.5 rounded-full bg-ui-bg-base border border-ui-border-base text-ui-fg-subtle"
                    >
                      {v.value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}