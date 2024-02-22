"use client";

import * as amplitude from "@amplitude/analytics-browser";
import { useEffect, useState } from "react";
import { ampli } from "../_amplitude";
import { AMPLITUDE_KEY } from "../_constants";
import {
  AMPLITUDE_LOGGING,
  AMPLITUDE_SERVER_URL,
  IS_PROD,
} from "../_constants/environment";
import { useRouter } from "next/router";

export function useAmplitude() {
  const [isAmplitudeInitialized, setIsAmplitudeInitialized] = useState(false);
  const router = useRouter();

  // Tracking page views on client side
  useEffect(() => {}, [router.pathname]);

  // Initialize Amplitude
  useEffect(() => {
    if (!isAmplitudeInitialized) {
      initializeAmplitude(setIsAmplitudeInitialized);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

async function initializeAmplitude(setLoaded: (loaded: boolean) => void) {
  if (AMPLITUDE_KEY) {
    amplitude.init(AMPLITUDE_KEY, undefined, {
      serverUrl: AMPLITUDE_SERVER_URL,
      identityStorage: "none",
      logLevel:
        IS_PROD || !AMPLITUDE_LOGGING
          ? amplitude.Types.LogLevel.Error
          : amplitude.Types.LogLevel.Debug,
      defaultTracking: {
        attribution: true,
        pageViews: false,
        sessions: false,
        fileDownloads: false,
        formInteractions: false,
      },
    });
    ampli.load({
      client: { instance: amplitude, configuration: {} },
    });
    // Log that the application has been loaded
    ampli.applicationLoaded();
    // Set loaded to true
    setLoaded(true);
    // Output that Amplitude has been initialized
    console.info("Amplitude instrumentation initialized");
  }
}
