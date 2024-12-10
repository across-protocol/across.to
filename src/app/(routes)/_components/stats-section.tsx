import { Text } from "@/app/_components/text";
import { StatsRow } from "@/app/_components/stats-row";

export function StatsSection() {
  return (
    <section className="container mx-auto flex flex-col gap-10 px-4 sm:gap-16">
      <div className="flex flex-col items-center gap-4">
        <Text variant="cap-case" className="text-aqua-100 md:text-center">
          power in originality
        </Text>
        <Text
          variant="heading-2"
          className="text-center capitalize tracking-tight-2 text-light-200"
        >
          Production ready <br />
          Empirically Proven
        </Text>
        <Text className="max-w-xl text-center">
          Across is the only crosschain intents protocol in production today, enabling
          the fastest and lowest-cost interoperability solution without security
          tradeoffs.
        </Text>
      </div>
      <StatsRow />
    </section>
  );
}
