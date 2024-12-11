import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { StatsSection } from "./_components/stats-section";
import { FeaturesSection } from "./_components/features-section";
import { SupportedChainsSection } from "@/app/_components/supported-chains-section";
import { SettlementGetStartedSection } from "./_components/get-started-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Across Settlement",
  description:
    "Crosschain Intents Settlement Layer. The future of interoperability is intents -- Across Settlement is the only production-ready, modular settlement layer for crosschain intents.",
};

export default function SettlementLanding() {
  return (
    <main className="z-0 mb-24 flex flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SupportedChainsSection variant="purple" />
      <SettlementGetStartedSection />
      <SubscribeSection variant="purple" />
    </main>
  );
}
