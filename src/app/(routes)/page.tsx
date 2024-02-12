import { Metadata } from "next";

import { HeroSection } from "./_components/hero";

export const metadata: Metadata = {
  title: "Home | Across Protocol",
  description: "Interoperability powered by Intents.",
};

export default function Home() {
  return (
    <main className="z-0 min-h-screen overflow-hidden">
      <HeroSection />
    </main>
  );
}
