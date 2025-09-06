"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Heading } from "@medusajs/ui";
import { HeroSlider, HeroItem } from "./slider";

const Hero = () => {
  return (
    <div className="w-full">
      <HeroSlider titles={["Kopfhörer", "Smartphones", "Smartwatches", "Speaker"]}>
        
        {/* Slide 1 – Kopfhörer */}
        <HeroItem className="bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-32 gap-8">
            {/* Text links */}
            <div className="flex-1 text-left space-y-4">
              <Heading level="h1" className="text-4xl sm:text-5xl font-bold">
                Tauche ein in den Sound
              </Heading>
              <Heading level="h2" className="text-lg sm:text-xl text-gray-300">
                Premium Kopfhörer für dein Musikerlebnis
              </Heading>
              <Link href="/shop/headphones">
                <Button variant="secondary" size="large">Jetzt entdecken</Button>
              </Link>
            </div>
            {/* Bild rechts */}
            <div className="flex-1 flex justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Top_view_of_headphones_hanging_from_a_desk_%28Unsplash%29.jpg"
                alt="Premium Kopfhörer"
                width={450}
                height={450}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </HeroItem>

        {/* Slide 2 – Smartphones */}
        <HeroItem className="bg-gradient-to-r from-gray-100 to-gray-300 text-black">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-32 gap-8">
            <div className="flex-1 text-left space-y-4">
              <Heading level="h1" className="text-4xl sm:text-5xl font-bold">
                Next-Gen Smartphones
              </Heading>
              <Heading level="h2" className="text-lg sm:text-xl text-indigo-100">
                Performance trifft Design
              </Heading>
              <Link href="/shop/smartphones">
                <Button variant="secondary" size="large">Modelle ansehen</Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/SmartPhone.jpg"
                alt="Smartphone"
                width={400}
                height={500}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </HeroItem>

        {/* Slide 3 – Smartwatches */}
        <HeroItem className="bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-32 gap-8">
            <div className="flex-1 text-left space-y-4">
              <Heading level="h1" className="text-4xl sm:text-5xl font-bold">
                Smarte Begleiter
              </Heading>
              <Heading level="h2" className="text-lg sm:text-xl text-gray-700">
                Smartwatches für deinen Alltag
              </Heading>
              <Link href="/shop/smartwatches">
                <Button variant="secondary" size="large">Entdecke mehr</Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Lg_smartwatch_%281%29.jpg"
                alt="Smartwatch"
                width={350}
                height={350}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </HeroItem>

        {/* Slide 4 – Speaker */}
        <HeroItem className="bg-gradient-to-r from-gray-100 to-gray-300 text-black">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-32 gap-8">
            <div className="flex-1 text-left space-y-4">
              <Heading level="h1" className="text-4xl sm:text-5xl font-bold">
                Kraftvoller Sound
              </Heading>
              <Heading level="h2" className="text-lg sm:text-xl text-red-100">
                Portable Speaker für jede Party
              </Heading>
              <Link href="/shop/speaker">
                <Button variant="secondary" size="large">Jetzt kaufen</Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/JBL_GO2_Bluetooth_speaker_00_10_27_681000.jpeg"
                alt="Speaker"
                width={400}
                height={400}
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </HeroItem>
      </HeroSlider>
    </div>
  );
};

export default Hero;