import { BridgeNowLink } from "@/app/_components/bridge-now-link";
import { AcrossMegaethIcon, MegaethAcrossIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { INFORMATION_LINKS } from "@/app/_constants/links";
import { primaryButtonClass, secondaryButtonClass, sectionSpacing } from "./styles";
import heroBackground from "../_assets/hero.svg";
import Image from "next/image";
import SectionHeading from "./section-heading";

export function CreativeCta() {
  return (
    <section
      className={`relative overflow-clip ${sectionSpacing} pb-10 pt-10 bg-cover sm:bg-none bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    >
      {/* <Image src={heroBackground} alt="" className="absolute -z-30" /> */}
      {/* <div className="absolute px bg-aqua-100 bottom-0 z-10 " /> */}
      <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <SectionHeading title="Start bridging to MegaETH today" />

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <BridgeNowLink section="marketingHero" className={primaryButtonClass}>
            Bridge to MegaETH
          </BridgeNowLink>
          <a
            href={INFORMATION_LINKS.docs.href}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButtonClass}
          >
            Read the docs
          </a>
        </div>
        <div >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#151518] via-[#151518d0] to-transparent z-40" />

          <div className="flex flex-col gap-1 mt-32 z-10">

          <AcrossMegaethIcon/>
          <MegaethAcrossIcon/>
          <AcrossMegaethIcon/>
          <MegaethAcrossIcon/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeCta;
