import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { TechnologySection } from "./_components/technology-section";
import { StatsSection } from "./_components/stats-section";
import { ProductsSection } from "./_components/products-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Home | Across Protocol",
  description:
    "Interoperability powered by Intents. A new paradigm in crosschain experiences, seamlessly connecting users with applications.",
};

export default function Home() {
  return (
    <main className="z-0 flex flex-col gap-24 overflow-hidden px-4 sm:gap-32 md:gap-48">
      <HeroSection />
      <ProductsSection />
      <TechnologySection />
      <StatsSection />
      <SubscribeSection variant="aqua" />
    </main>
  );
}
