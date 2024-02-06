import { Metadata } from "next";

import * as icons from "@/app/_components/icons";

export const metadata: Metadata = {
  title: "Across Bridge",
  description: "Interoperability powered by Intents.",
};

export default function IconsPage() {
  return (
    <main className="container mx-auto flex flex-wrap gap-4 p-12">
      {Object.entries(icons).map(([name, Icon]) => (
        <div key={name} className="flex flex-col items-center gap-4">
          <Icon />
          <code>{name}</code>
        </div>
      ))}
    </main>
  );
}
