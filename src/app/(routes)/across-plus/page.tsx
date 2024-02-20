import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { UseCasesSection } from "./_components/use-cases-section";
import { SupportedChainsSection } from "@/app/_components/supported-chains-section";
import { PlusGetStartedSection } from "./_components/get-started-section";
import { IntegratedPartnersSection } from "./_components/integrated-partners-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Across Plus",
  description: "Interoperability powered by Intents.",
};

export default function PlusLanding() {
  return (
    <main className="z-0 mb-24 flex min-h-screen flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <SupportedChainsSection variant="teal" />
      <IntegratedPartnersSection />
      <PlusGetStartedSection />
      <SubscribeSection variant="teal" />
    </main>
  );
}
