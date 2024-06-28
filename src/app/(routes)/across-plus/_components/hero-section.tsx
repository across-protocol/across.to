import Image from "next/image";

import { Hero } from "@/app/_components/hero";
import { Text } from "@/app/_components/text";
import plusHeroSrc from "@/app/_assets/plus-hero.png";
import { TypeformButton } from "./typeform-button";

export function HeroSection() {
  return (
    <Hero>
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-8 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={plusHeroSrc} alt="Across plus graphic" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center sm:tracking-tight-1 md:text-left"
          >
            <span className="text-light-100">Your Users,</span>
            <br />
            <span className="text-teal-100">From Any Chain.</span>
          </Text>
          <div className="flex w-full flex-row justify-center md:justify-start">
            <Text variant="body-nums" className="max-w-[430px] text-center md:text-left">
              Now users can use your app, from any
              <br />
              chain, in seconds, for cents.
            </Text>
          </div>
          <div className="flex self-center md:self-start">
            <TypeformButton />
          </div>
        </div>
      </div>
    </Hero>
  );
}
