import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { StatsSection } from "./_components/stats-section";
import { FeaturesSection } from "./_components/features-section";
import { SupportedChainsSection } from "@/app/_components/supported-chains-section";
import { SettlementGetStartedSection } from "./_components/get-started-section";

export const metadata: Metadata = {
  title: "Across Settlement",
  description: "Interoperability powered by Intents.",
};

export default function SettlementLanding() {
  return (
    <main className="z-0 mb-24 flex min-h-screen flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SupportedChainsSection variant="purple" />
      <SettlementGetStartedSection />
    </main>
  );
}
