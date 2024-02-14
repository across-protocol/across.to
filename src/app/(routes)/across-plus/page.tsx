import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { UseCasesSection } from "./_components/use-cases-section";

export const metadata: Metadata = {
  title: "Across Plus",
  description: "Interoperability powered by Intents.",
};

export default function PlusLanding() {
  return (
    <main className="z-0 flex min-h-screen flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
    </main>
  );
}
