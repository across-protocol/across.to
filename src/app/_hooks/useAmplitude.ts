import { useEffect, useState } from "react";
import { ampli } from "../_amplitude";
import { AMPLITUDE_KEY } from "../_constants";
import {
  AMPLITUDE_LOGGING,
  AMPLITUDE_SERVER_URL,
  GIT_COMMIT_HASH,
  IS_PROD,
} from "../_constants/environment";
import { initializeAmplitude, pageLookup } from "../_lib/amplitude";

export function useAmplitude() {
  const [isAmplitudeInitialized, setIsAmplitudeInitialized] = useState(false);
  const [isInitialPageView, setIsInitialPageView] = useState(true);
  const pathname = typeof window !== "undefined" ? window.location.pathname : undefined;

  // Tracking page views on client side
  useEffect(() => {
    if (isAmplitudeInitialized && pathname) {
      const referrer = document.referrer;
      const origin = window.location.origin;
      ampli.pageViewed({
        gitCommitHash: GIT_COMMIT_HASH,
        page: pageLookup(pathname),
        path: pathname,
        referrer,
        origin,
        isInitialPageView,
      });
    }
    setIsAmplitudeInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Initialize Amplitude
  useEffect(() => {
    if (!isAmplitudeInitialized) {
      initializeAmplitude(setIsAmplitudeInitialized);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
