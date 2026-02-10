import Image from "next/image";

import { AcrossIcon, VerifiedCheckmarkCircleIcon } from "@/app/_components/icons";
import megaEthSrc from "@/app/_assets/logos/megaeth-light.svg";

import { BridgeNowLink, bridgeAppBaseUrl } from "@/app/_components/bridge-now-link";
import { primaryButtonClass, sectionSpacing } from "./styles";
import heroBackground from "../_assets/hero.svg";

const heroHighlights = [
  { label: "$35B+ volume bridged", Icon: VerifiedCheckmarkCircleIcon },
  { label: "ZERO EXPLOITS", Icon: VerifiedCheckmarkCircleIcon },
  { label: "USED BY TOP PROTOCOLS", Icon: VerifiedCheckmarkCircleIcon },
];

export function HeroSection() {
  return (
    <section
      className={`relative overflow-clip ${sectionSpacing} bg-cover bg-center bg-no-repeat pb-16 pt-10 sm:bg-contain sm:pt-14`}
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
      <Image
        src={heroBackground}
        alt=""
        className="absolute left-0  top-0 -z-30  hidden md:flex"
        priority
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full">
              <AcrossIcon className="text-white h-12 w-12" />
            </div>
            <div className="h-8 w-0.5 rounded-xl  bg-[#e0f3ff42]" />
            <Image src={megaEthSrc} alt="MegaETH logo" width={52} height={56} priority />
          </div>

          <div className="space-y-4">
            <h1 className="inline-block bg-gradient-to-r from-[#E0F3FF66] via-[#E0F3FF] to-[#E0F3FF66] bg-clip-text text-heading-1 font-medium leading-tight text-transparent">
              Bridge to MegaETH with Across
            </h1>
            <p className="text-base mx-auto max-w-3xl leading-relaxed text-grey-400 sm:text-heading-4">
              Fast, secure bridging for MegaETH mainnet — Day-1 support for USDT, WBTC,
              and ETH.
            </p>
          </div>

          <BridgeNowLink
            section="marketingHero"
            className={primaryButtonClass}
            href={`${bridgeAppBaseUrl}/megaeth?utmsource=landingpage&utmmedium=website&utmcampaign=megaethlandingpage20260210`}
          >
            Bridge to MegaETH
          </BridgeNowLink>

          <div className="flex flex-col items-start justify-center gap-x-8 gap-y-3 pt-32 lg:flex-row lg:items-center">
            {heroHighlights.flatMap(({ label, Icon }, index) => [
              <div key={label} className="flex items-center gap-2">
                <span className="flex shrink-0 items-center justify-center rounded-full ">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="tracking-wide text-sm font-medium uppercase text-[#e0f3ffc1]">
                  {label}
                </span>
              </div>,
              ...(index < heroHighlights.length - 1
                ? [
                    <span
                      key={`sep-${label}`}
                      className="bg-white/30 h-1.5 w-1.5 shrink-0 rounded-full"
                    />,
                  ]
                : []),
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
