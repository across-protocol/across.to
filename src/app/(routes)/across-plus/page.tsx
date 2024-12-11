import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { SupportedChainsSection } from "@/app/_components/supported-chains-section";
import { PlusGetStartedSectionBottom } from "./_components/get-started-section-bottom";
import { PlusGetStartedSectionTop } from "./_components/get-started-section-top";
import { IntegratedPartnersSection } from "./_components/integrated-partners-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Across+",
  description:
    "Crosschain Bridge Hooks To Fulfill User Intents. Bridge abstraction promotes user onboarding and bootstraps crosschain capital by bundling bridge + protocol actions within dapps.",
};

export default function PlusLanding() {
  return (
    <main className="z-0 mb-24 flex flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <PlusGetStartedSectionTop />
      <FeaturesSection />
      <SupportedChainsSection variant="teal" />
      <IntegratedPartnersSection />
      <PlusGetStartedSectionBottom />
      <SubscribeSection variant="teal" />
    </main>
  );
}
