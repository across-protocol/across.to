import Image from "next/image";

import { Hero } from "../../_components/hero";
import { Text } from "../../_components/text";
import { ArrowRightIcon } from "../../_components/icons/arrow-right";
import landingHeroSrc from "../../_assets/landing-1.png";
import { INFORMATION_LINKS } from "../../_constants";

export function HeroSection() {
  return (
    <Hero title="trusted by top applications">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-0 md:pr-2 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={landingHeroSrc} alt="Across protocol diagram" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text variant="heading-1" className="text-center md:text-left">
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
          <a
            className="flex cursor-pointer flex-row items-center justify-center gap-2 text-aqua-100 md:justify-start"
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
    </Hero>
  );
}
