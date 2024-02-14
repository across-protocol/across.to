type ProtocolStatsResponse = {
  totalDeposits: number;
  avgFillTime: number;
  totalVolumeUsd: number;
};

type ProtocolStatsFormatted = ProtocolStatsResponse & {
  avgFillTimeInMinutes: number;
};

export async function getProtocolStats(
  nextFetchRequestConfig?: NextFetchRequestConfig,
): Promise<ProtocolStatsFormatted> {
  const response = await fetch(`https://public.api.across.to/deposits/stats`, {
    next: nextFetchRequestConfig,
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch protocol stats: ${response.status} ${response.statusText}`,
    );
  }
  const data = await response.json();
  return formatResult(data);
}

function formatResult(data: ProtocolStatsResponse) {
  return {
    ...data,
    avgFillTimeInMinutes: Math.floor(data.avgFillTime / 60),
  };
}
