import Image from "next/image";

import { Hero } from "../../_components/hero";
import { ArrowRightIcon } from "../../_components/icons/arrow-right";
import landingHeroSrc from "../../_assets/landing-1.png";
import { INFORMATION_LINKS } from "../../_constants";

export function HeroSection() {
  return (
    <Hero>
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={landingHeroSrc} alt="Picture of the author" />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="text-center text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-2 md:text-left md:text-heading-1">
            <span className="text-aqua-100">Interoperability</span>
            <br />
            <span className="text-light-100">Powered By</span>{" "}
            <br className="hidden md:block" />
            <span className="text-aqua-100">Intents</span>
          </h1>
          <p className="max-w-[433px] text-center lining-nums tabular-nums sm:text-lg md:text-left">
            A new paradigm in cross-chain experiences, seamlessly connecting users with
            applications.
          </p>
          <a
            className="flex cursor-pointer flex-row items-center justify-center gap-2 text-aqua-100 md:justify-start"
            href={INFORMATION_LINKS.docs.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-medium text-xs uppercase lining-nums tabular-nums tracking-wide-4 sm:text-md">
              start building
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-aqua-100">
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </Hero>
  );
}
