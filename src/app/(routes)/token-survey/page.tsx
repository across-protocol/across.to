import { Metadata } from "next";

import { Text } from "@/app/_components/text";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACX Token Survey",
  description: "Share your feedback on the ACX token.",
};

export default function TokenSurveyPage() {
  return (
    <main className="relative z-[1] mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 lg:px-0">
      <div className="flex flex-col gap-4">
        <Text variant="heading-2" className="leading-[52.80px] ">
          Welcome to the Across Token Survey
        </Text>
        <Text variant="body" className=" text-grey-400 leading-relaxed">
        This survey gauges your non-binding interest in two potential options: a cash liquidity option or participation in a future private company&apos;s equity structure (subject to eligibility and regulatory requirements).Read the full temp check proposal <Link className="text-aqua-100 underline" href="https://across.to/">HERE</Link>.
        </Text>
      </div>

      <div className="w-full overflow-hidden rounded-2xl border border-grey-800/40">
        <iframe
          title="ACX Token Survey"
          src="https://l03pts79sm0.typeform.com/to/eTrw7zrW"
          className="h-[500px] w-full border-0"
          allow="fullscreen; microphone; camera"
          loading="lazy"
        />
      </div>
    </main>
  );
}
