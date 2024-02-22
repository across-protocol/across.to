import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { BridgeNowSection } from "./_components/bridge-now-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Across Bridge",
  description:
    "Lowest Fees Fastest Speeds. Experience extraordinarily fast and cost-effective cross-chain bridging, secured by an intents-based architecture.",
};

export default function BridgeLanding() {
  return (
    <main className="z-0 mb-24 flex flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <BridgeNowSection />
      <SubscribeSection variant="aqua" />
    </main>
  );
}
