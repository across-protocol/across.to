import { useEffect, useState } from "react";
import { ampli } from "../_amplitude";
import { GIT_COMMIT_HASH } from "../_constants/environment";
import { pageLookup } from "../_lib/amplitude";
import { usePathname } from "next/navigation";
import { useAmplitude } from "./useAmplitude";

export function usePageTracking() {
  const [isInitialPageView, setIsInitialPageView] = useState(true);
  const { isAmpliInitialized } = useAmplitude();

  const pathname = usePathname();

  // Tracking page views on client side
  useEffect(() => {
    if (isAmpliInitialized && pathname) {
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
    setIsInitialPageView(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAmpliInitialized]);
}
