import * as amplitude from "@amplitude/analytics-browser";
import { ampli } from "../_amplitude";
import {
  AMPLITUDE_KEY,
  IS_PROD,
  AMPLITUDE_SERVER_URL,
  AMPLITUDE_LOGGING,
  AMPLITUDE_PAGE_LOOKUP,
} from "../_constants";

export async function initializeAmplitude(setLoaded: (loaded: boolean) => void) {
  if (IS_PROD && AMPLITUDE_KEY) {
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
    // Set loaded to true
    setLoaded(true);
    // Output that Amplitude has been initialized
    console.info("Amplitude instrumentation initialized");
  }
}

export function pageLookup(pathname: string) {
  return AMPLITUDE_PAGE_LOOKUP[pathname] ?? "404Page";
}
