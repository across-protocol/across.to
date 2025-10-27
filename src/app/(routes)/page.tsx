import { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { TechnologySection } from "./_components/technology-section";
import { StatsSection } from "./_components/stats-section";
import { ProductsSection } from "./_components/products-section";
import { SubscribeSection } from "@/app/_components/subscribe-section";

export const metadata: Metadata = {
  title: "Fast, Cheap, Secure Crosschain Bridge for ETH, WBTC, USDC & USDT",
  description:
    "Bridge assets across Ethereum, BSC, Solana, Base, Arbitrum, Hyperliquid and many more. Fast, cheap, secure crosschain transfers powered by intents.",
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
