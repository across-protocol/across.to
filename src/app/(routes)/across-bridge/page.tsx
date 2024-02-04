import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Across Bridge",
  description: "Interoperability powered by Intents.",
};

export default function BridgeLanding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Across Bridge
    </main>
  );
}
