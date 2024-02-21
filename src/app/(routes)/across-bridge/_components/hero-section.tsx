import Image from "next/image";

import { Hero } from "@/app/_components/hero";
import { SupportedChainsTicker } from "@/app/_components/supported-chains-ticker";
import { Text } from "@/app/_components/text";
import { BridgeNowLink } from "@/app/_components/bridge-now-link";
import { Button } from "@/app/_components/button";
import bridgeHeroImage from "@/app/_assets/bridge-hero.png";

export function HeroSection() {
  return (
    <Hero>
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 pb-16 pt-8 md:flex-row-reverse md:gap-8 md:pt-16">
        <div className="flex max-w-80 flex-1 sm:max-w-100 md:max-w-full">
          <Image src={bridgeHeroImage} alt="Across bridge ui" priority={true} />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Text
            variant="heading-1"
            className="text-center tracking-tight-5 sm:tracking-tight-2 md:text-left md:tracking-tight-1"
          >
            <span className="text-aqua-100">Lowest</span>{" "}
            <span className="text-light-100">Fees</span>{" "}
            <br className="block sm:hidden md:block" />
            <span className="text-aqua-100">Fastest</span>{" "}
            <span className="text-light-100">Speeds</span>
          </Text>
          <div className="flex w-full flex-row justify-center md:justify-start">
            <Text variant="body-nums" className="max-w-[430px] text-center md:text-left">
              Experience extraordinarily fast and cost-effective cross-chain bridging,
              secured by an intents-based architecture.
            </Text>
          </div>
          <div className="flex flex-row justify-center md:justify-start">
            <BridgeNowLink>
              <Button className="border-aqua-100 bg-aqua-100/[.05] text-aqua-100">
                <Text variant="cap-case-sm">Bridge now</Text>
              </Button>
            </BridgeNowLink>
          </div>
        </div>
      </div>
      <SupportedChainsTicker />
    </Hero>
  );
}
