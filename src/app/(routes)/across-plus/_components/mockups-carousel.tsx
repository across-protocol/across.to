"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/app/_components/carousel";
import mockupImage1 from "../_assets/mockup-1.png";
import mockupImage2 from "../_assets/mockup-2.png";
import mockupImage3 from "../_assets/mockup-3.png";
import mockupImage4 from "../_assets/mockup-4.png";
import carouselBgImage from "../_assets/carousel-bg.png";
import { twMerge } from "@/app/_lib/tw-merge";

const CAROUSEL_IMAGES = [mockupImage1, mockupImage2, mockupImage3, mockupImage4];

export function MockupsCarousel() {
  return (
    <Carousel
      className="w-full max-w-[794px]"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3_000,
        }),
      ]}
    >
      <CarouselContent className={twMerge("mx-10 gap-2 sm:mx-40 md:mx-52")}>
        {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={image}
                alt="mockup"
                className="opacity-80"
                width={360}
                priority
                quality={100}
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Fade in/out overlays */}
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-grey-dark from-0% via-transparent via-20% bg-fixed md:from-30% md:via-35%" />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-l from-grey-dark from-0% via-transparent via-20% bg-fixed md:from-30% md:via-35%" />
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full overflow-hidden ">
        <Image src={carouselBgImage} alt="carousel bg" />
      </div>
    </Carousel>
  );
}
