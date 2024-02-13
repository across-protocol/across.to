import { Metadata } from "next";

import { Hero } from "@/app/_components/hero";

export const metadata: Metadata = {
  title: "Home | Across Protocol",
  description: "Interoperability powered by Intents.",
};

export default function Home() {
  return (
    <main className="z-0 min-h-screen overflow-hidden">
      <Hero>
        <div className="py-10 text-center">Home</div>
      </Hero>
    </main>
  );
}
