import Image from "next/image";

import { Text } from "@/app/_components/text";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";
import settlementHeroImage from "@/app/_assets/settlement-hero.png";
import { INTEGRATION_LINKS } from "@/app/_constants/links";
import { Hero } from "@/app/_components/hero";

export function HeroSection() {
  return (
    <Hero className="md:-mb-[360px]">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-8 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image
            src={settlementHeroImage}
            alt="Across settlement graphic"
            priority={true}
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center sm:tracking-tight-1 md:text-left"
          >
            <span className="text-purple-100">Cross-Chain</span>{" "}
            <span className="text-light-100">Intents</span> <br />
            <span className="text-light-100">Settlement</span>{" "}
            <span className="text-purple-100">Layer</span>
          </Text>
          <div className="flex w-full flex-row justify-center md:justify-start">
            <Text
              variant="body-nums"
              className="max-w-[336px] text-center sm:max-w-[430px] md:text-left"
            >
              The future of interoperability in intents -- Across Settlement is the only
              production-ready, modular settlement layer for cross-chain intents.
            </Text>
          </div>
          <div className="flex self-center md:self-start">
            <a
              className="flex cursor-pointer flex-row items-center justify-center gap-2 text-purple-100 hover:opacity-75 md:justify-start"
              href={INTEGRATION_LINKS.settlement}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="cap-case-sm">go to docs</Text>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100">
                <ArrowRightIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Hero>
  );
}
