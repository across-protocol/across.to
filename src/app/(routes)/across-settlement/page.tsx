import { Metadata } from "next";

import { Hero } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "Across Settlement",
  description: "Interoperability powered by Intents.",
};

export default function SettlementLanding() {
  return (
    <main className="z-0 min-h-screen overflow-hidden">
      <Hero>
        <div className="py-10 text-center">Across Settlement</div>
      </Hero>
    </main>
  );
}
