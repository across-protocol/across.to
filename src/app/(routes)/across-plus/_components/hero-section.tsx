import Image from "next/image";

import { Hero } from "@/app/_components/hero";
import { Text } from "@/app/_components/text";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";
import plusHeroSrc from "@/app/_assets/plus-hero.png";
import { INFORMATION_LINKS } from "@/app/_constants";

export function HeroSection() {
  return (
    <Hero title="trusted by top tier protocols">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-8 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={plusHeroSrc} alt="Across plus graphic" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center sm:tracking-tight-1 md:text-left"
          >
            <span className="text-light-100">Cross-Chain</span>{" "}
            <br className="hidden md:block" />
            <span className="text-teal-100">Bridge Hooks</span>{" "}
            <br className="hidden sm:block md:hidden" />
            <span className="text-light-100">
              To
              <br className="hidden md:block" /> Fulfill
            </span>{" "}
            {/* <br className="hidden md:block" /> */}
            <span className="text-teal-100">User Intents</span>
          </Text>
          <div className="flex w-full flex-row justify-center md:justify-start">
            <Text variant="body-nums" className="max-w-[430px] text-center md:text-left">
              Bridge abstraction promotes user onboarding and bootstraps cross-chain
              capital by bundling bridge + protocol actions within dapps.
            </Text>
          </div>
          <a
            className="flex cursor-pointer flex-row items-center justify-center gap-2 text-teal-100 md:justify-start"
            href={INFORMATION_LINKS.docs.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="cap-case">go to docs</Text>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </Hero>
  );
}
