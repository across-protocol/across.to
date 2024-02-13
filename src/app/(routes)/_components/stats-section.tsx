import { Text } from "../../_components/text";
import { StatBox } from "../../_components/stat-box";

import { getProtocolStats } from "../../_lib/scraper";
import { humanReadableNumber } from "../../_lib/format";

async function getFormattedStatsData() {
  const protocolStats = await getProtocolStats({
    revalidate: 24 * 60 * 60, // Update once a day
  });

  return {
    totalVolumeUsd: `$${humanReadableNumber(protocolStats.totalVolumeUsd)}`,
    totalDeposits: `${humanReadableNumber(protocolStats.totalDeposits)}`,
    avgFillTimeInMinutes: `${protocolStats.avgFillTimeInMinutes < 1 ? "<" : ""} ${Math.max(
      protocolStats.avgFillTimeInMinutes,
      1,
    )}m`,
    bridgeFee: "<$1",
  };
}

export async function StatsSection() {
  const formattedStatsData = await getFormattedStatsData();
  return (
    <section className="container mx-auto flex flex-col gap-10 px-4 sm:gap-16">
      <div className="flex flex-col items-center gap-4">
        <Text variant="cap-case" className="text-aqua-100 md:text-center">
          power in originality
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Production ready <br />
          Empirically Proven
        </Text>
        <Text className="max-w-xl text-center">
          Across is the only cross-chain intents protocol in production today, enabling
          the fastest and lowest-cost interoperability solution without security
          tradeoffs.
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatBox
          title="volume"
          value={formattedStatsData.totalVolumeUsd}
          titleClassName="text-teal-100"
          className="group-hover:border-teal-100"
          dividerClassName="group-hover:bg-teal-100/[.5]"
        />
        <StatBox
          title="transaction"
          value={formattedStatsData.totalDeposits}
          titleClassName="text-orange-100"
          className="group-hover:border-orange-100"
          dividerClassName="group-hover:bg-orange-100/[.5]"
        />
        <StatBox
          title="avg. fill time"
          value={formattedStatsData.avgFillTimeInMinutes}
          titleClassName="text-purple-100"
          className="group-hover:border-purple-100"
          dividerClassName="group-hover:bg-purple-100/[.5]"
        />
        <StatBox
          title="bridge 1 eth"
          value={formattedStatsData.bridgeFee}
          titleClassName="text-aqua-100"
          className="group-hover:border-aqua-100"
          dividerClassName="group-hover:bg-aqua-100/[.5]"
        />
      </div>
    </section>
  );
}
