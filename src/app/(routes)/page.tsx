import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { TechnologySection } from "./_components/technology-section";
import { StatsSection } from "./_components/stats-section";

export const metadata: Metadata = {
  title: "Home | Across Protocol",
  description: "Interoperability powered by Intents.",
};

export default function Home() {
  return (
    <main className="z-0 flex min-h-screen flex-col gap-16 overflow-hidden px-4">
      <HeroSection />
      <TechnologySection />
      <StatsSection />
    </main>
  );
}
