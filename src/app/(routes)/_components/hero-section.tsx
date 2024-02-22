import Image from "next/image";

import { PartnersTicker } from "@/app/_components/partners-ticker";
import { Hero } from "@/app/_components/hero";
import { Text } from "@/app/_components/text";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";
import landingHeroSrc from "@/app/_assets/landing-hero.png";
import { INFORMATION_LINKS } from "@/app/_constants";
import { Button } from "@/app/_components/button";
import { BridgeNowLink } from "@/app/_components/bridge-now-link";
import { twMerge } from "@/app/_lib/tw-merge";

export function HeroSection() {
  return (
    <Hero>
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-0 md:pr-2 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={landingHeroSrc} alt="Across protocol diagram" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center sm:tracking-tight-1 md:text-left"
          >
            <span className="text-aqua-100">Interoperability</span>
            <br />
            <span className="text-light-100">Powered By</span>{" "}
            <br className="hidden md:block" />
            <span className="text-aqua-100">Intents</span>
          </Text>
          <Text variant="body-nums" className="max-w-[433px] text-center md:text-left">
            A new paradigm in cross-chain experiences, seamlessly connecting users with
            applications.
          </Text>
          <BridgeNowLink className="self-center md:self-start">
            <Button
              className={twMerge(
                "border-aqua-100 bg-aqua-100/[.05] text-aqua-100 transition",
              )}
            >
              <Text variant="cap-case-sm">Bridge now</Text>
            </Button>
          </BridgeNowLink>
          <div className="flex self-center md:self-start">
            <a
              className="flex cursor-pointer flex-row items-center justify-center gap-2 text-aqua-100 hover:opacity-75 md:justify-start"
              href={INFORMATION_LINKS.docs.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="cap-case-sm">start building</Text>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-aqua-100">
                <ArrowRightIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
      <PartnersTicker />
    </Hero>
  );
}
