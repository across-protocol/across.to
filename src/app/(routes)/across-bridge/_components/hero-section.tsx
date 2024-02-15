import Image from "next/image";

import { Hero } from "@/app/_components/hero";
import { Text } from "@/app/_components/text";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";
import { INFORMATION_LINKS } from "@/app/_constants";
import bridgeHeroImage from "@/app/_assets/bridge-hero.png";

export function HeroSection() {
  return (
    <Hero title="supported chains">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-8 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={bridgeHeroImage} alt="Across bridge ui" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center tracking-tight-5 sm:tracking-tight-2 md:text-left md:tracking-tight-1"
          >
            <span className="text-aqua-100">Bridge</span>{" "}
            <span className="text-light-100">Without</span>{" "}
            <br className="block sm:hidden md:block" />
            <span className="text-aqua-100">Compromise</span>
          </Text>
          <div className="flex w-full flex-row justify-center md:justify-start">
            <Text variant="body-nums" className="max-w-[430px] text-center md:text-left">
              Experience extraordinarily fast and cost-effective cross-chain bridging,
              secured by an intents-based architecture.
            </Text>
          </div>
          <a
            className="flex cursor-pointer flex-row items-center justify-center gap-2 text-aqua-100 md:justify-start"
            href={INFORMATION_LINKS.docs.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="cap-case">bridge now</Text>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-aqua-100">
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </Hero>
  );
}
