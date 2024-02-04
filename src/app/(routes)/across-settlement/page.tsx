import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Across Settlement",
  description: "Interoperability powered by Intents.",
};

export default function SettlementLanding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Settlement
    </main>
  );
}
