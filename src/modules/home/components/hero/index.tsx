"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Heading } from "@medusajs/ui";
import { HeroSlider, HeroItem } from "./slider";

const Hero = () => {
  return (
    <div className="w-full">
      <HeroSlider titles={["Kopfhörer", "Smartphones", "Smartwatches", "Speaker"]}>
        <HeroItem className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5 text-white">
                <Heading level="h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Tauche ein in den Sound
                </Heading>
                <p className="text-base sm:text-lg text-slate-300">
                  Premium Kopfhörer für kompromisslosen Klang.
                </p>
                <Link href="/shop/headphones">
                  <Button size="large">Jetzt entdecken</Button>
                </Link>
              </div>
              <div className="justify-self-center w-full max-w-[560px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Top_view_of_headphones_hanging_from_a_desk_%28Unsplash%29.jpg"
                    alt="Premium Kopfhörer"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroItem>

        <HeroItem className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-200" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 space-y-5 text-slate-900">
                <Heading level="h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Next-Gen Smartphones
                </Heading>
                <p className="text-base sm:text-lg text-slate-700">
                  Performance trifft Design – entdecke die Auswahl.
                </p>
                <Link href="/shop/smartphones">
                  <Button size="large" variant="secondary">Modelle ansehen</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 justify-self-center w-full max-w-[560px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-white">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/67/SmartPhone.jpg"
                    alt="Smartphone"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroItem>

        <HeroItem className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5 text-white">
                <Heading level="h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Smarte Begleiter
                </Heading>
                <p className="text-base sm:text-lg text-slate-300">
                  Smartwatches für deinen Alltag – smart, leicht, stark.
                </p>
                <Link href="/shop/smartwatches">
                  <Button size="large">Entdecke mehr</Button>
                </Link>
              </div>
              <div className="justify-self-center w-full max-w-[560px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Lg_smartwatch_%281%29.jpg"
                    alt="Smartwatch"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroItem>

        <HeroItem className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-200" />
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 space-y-5 text-slate-900">
                <Heading level="h1" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Kraftvoller Sound
                </Heading>
                <p className="text-base sm:text-lg text-slate-700">
                  Portable Speaker für jede Party – überall dabei.
                </p>
                <Link href="/shop/speaker">
                  <Button size="large" variant="secondary">Jetzt kaufen</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 justify-self-center w-full max-w-[560px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-white">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/JBL_GO2_Bluetooth_speaker_00_10_27_681000.jpeg"
                    alt="Speaker"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroItem>
      </HeroSlider>
    </div>
  );
};

export default Hero;