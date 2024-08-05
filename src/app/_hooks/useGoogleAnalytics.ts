import { useCallback } from "react";
import { GOOGLE_ANALYTICS_TAG_ID } from "../_constants";
import { sendGAEvent } from "@next/third-parties/google";

export function useGoogleAnalytics() {
  const isGAEnabled = GOOGLE_ANALYTICS_TAG_ID !== undefined;
  const sendEvent = useCallback(
    (eventName: string, eventProperties: Record<string, unknown>) => {
      if (isGAEnabled) {
        sendGAEvent("event", eventName, eventProperties);
      }
    },
    [isGAEnabled],
  );
  const sendCTAClickEvent = (btnName: string) => sendEvent("cta_click", { btnName });

  return {
    sendEvent,
    sendCTAClickEvent,
  };
}
