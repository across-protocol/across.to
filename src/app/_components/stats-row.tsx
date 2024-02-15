import { StatBox, Props as StatBoxProps } from "./stat-box";

import { getProtocolStats } from "../_lib/scraper";
import { humanReadableNumber } from "../_lib/format";

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

type OverrideStatBoxProps = Pick<
  StatBoxProps,
  "titleClassName" | "className" | "dividerClassName"
>;

export async function StatsRow(props: {
  volumeBoxProps?: OverrideStatBoxProps;
  transactionBoxProps?: OverrideStatBoxProps;
  avgFillTimeBoxProps?: OverrideStatBoxProps;
  bridgeFeeBoxProps?: OverrideStatBoxProps;
}) {
  const formattedStatsData = await getFormattedStatsData();
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatBox
        title="volume"
        value={formattedStatsData.totalVolumeUsd}
        titleClassName="text-teal-100"
        className="group-hover:border-teal-100"
        dividerClassName="group-hover:bg-teal-100/[.5]"
        {...props.volumeBoxProps}
      />
      <StatBox
        title="transaction"
        value={formattedStatsData.totalDeposits}
        titleClassName="text-orange-100"
        className="group-hover:border-orange-100"
        dividerClassName="group-hover:bg-orange-100/[.5]"
        {...props.transactionBoxProps}
      />
      <StatBox
        title="avg. fill time"
        value={formattedStatsData.avgFillTimeInMinutes}
        titleClassName="text-purple-100"
        className="group-hover:border-purple-100"
        dividerClassName="group-hover:bg-purple-100/[.5]"
        {...props.avgFillTimeBoxProps}
      />
      <StatBox
        title="bridge 1 eth"
        value={formattedStatsData.bridgeFee}
        titleClassName="text-aqua-100"
        className="group-hover:border-aqua-100"
        dividerClassName="group-hover:bg-aqua-100/[.5]"
        {...props.bridgeFeeBoxProps}
      />
    </div>
  );
}
