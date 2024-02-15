import Image from "next/image";

import { GetStartedSection } from "@/app/_components/get-started-section";
import settlementLayerImage from "@/app/_assets/settlement-layer.png";

export function SettlementGetStartedSection() {
  return (
    <GetStartedSection
      variant="purple"
      Image={
        <Image
          src={settlementLayerImage}
          alt="get started image"
          className="max-w-100 md:max-w-[576px]"
        />
      }
    />
  );
}
