import { Metadata } from "next";

import { Text } from "@/app/_components/text";

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
        <Text variant="body" className=" text-grey-400 leading-relaxed  mr-6 lg:mr-48">
        Across has proposed transitioning from a token structure to a private company through an ACX token-to-equity conversion and buyout offer. As part of the public temperature check, This survey is intended solely to gauge non-binding interest in two potential pathways that may be explored as part of a broader restructuring discussion:
        <ul className="list-disc list-inside text-left">
          <li>A potential cash liquidity option</li>
          <li>A potential opportunity to participate in an equity-based structure of a future private company, subject to eligibility, documentation, and regulatory considerations</li>
        </ul>
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
