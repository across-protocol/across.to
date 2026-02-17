const COOKIE_NAME = "across_attribution";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
] as const;

interface Attribution {
  referrer: string;
  referring_domain: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  timestamp: number;
}

export function getAttribution(): Attribution | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
  } catch {
    return null;
  }
}

export function setAttribution(): void {
  if (getAttribution()) return;

  const params = new URLSearchParams(window.location.search);
  const utmValues = Object.fromEntries(
    UTM_PARAMS.map((key) => [key, params.get(key)]),
  ) as Pick<Attribution, (typeof UTM_PARAMS)[number]>;

  let referringDomain = "";
  try {
    if (document.referrer) {
      referringDomain = new URL(document.referrer).hostname;
    }
  } catch {
    // invalid referrer URL
  }

  const hasReferrer = document.referrer !== "";
  const hasUtm = UTM_PARAMS.some((key) => utmValues[key] !== null);
  if (!hasReferrer && !hasUtm) return;

  const attribution: Attribution = {
    referrer: document.referrer,
    referring_domain: referringDomain,
    ...utmValues,
    timestamp: Date.now(),
  };

  const value = encodeURIComponent(JSON.stringify(attribution));
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; domain=.across.to; path=/; Secure; SameSite=Lax`;
}
