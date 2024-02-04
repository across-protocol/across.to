import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Across Plus",
  description: "Interoperability powered by Intents.",
};

export default function PlusLanding() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Across+
    </main>
  );
}
