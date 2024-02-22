export const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
export const AMPLITUDE_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_KEY;
export const AMPLITUDE_SERVER_URL = process.env.NEXT_PUBLIC_AMPLITUDE_SERVER_URL;
export const AMPLITUDE_LOGGING =
  process.env.NEXT_PUBLIC_AMPLITUDE_DEBUG_LOGGING === "true";
export const GIT_COMMIT_HASH = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? "";
