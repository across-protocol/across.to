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
          The Bridge Across - Exchange Indication Survey
        </Text>
        <Text variant="body" className=" leading-relaxed text-grey-400">
          As it relates to the proposed transition of Across into a private company
          structure, this survey gauges your interest in two potential options: a token
          buy out or equity exchange. This survey signals your participation interest in
          exchange or sale; however, this non-biding survey is contingent on the
          proposal&#39;s vote and legal permissibility. Read the full temp-check proposal{" "}
          <Link className="text-aqua-100 underline" href="https://across.to/">
            HERE
          </Link>
          .
        </Text>
      </div>

      <div className="border-grey-800/40 w-full overflow-hidden rounded-2xl border">
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
