"use client";

import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { AMPLITUDE_KEY } from "../_constants";
import { initializeAmplitude } from "../_lib/amplitude";

const isAmpliDisabled = !Boolean(AMPLITUDE_KEY);

export const AmpliContext = createContext<{
  isAmpliInitialized: boolean;
  isAmpliDisabled: boolean;
}>({
  isAmpliInitialized: false,
  isAmpliDisabled,
});

export function AmpliProvider({ children }: { children: ReactNode }) {
  const [isAmpliInitialized, setIsAmpliInitialized] = useState(false);
  // Initialize Amplitude
  useEffect(() => {
    console.log("isAmpliInitialized", isAmpliInitialized);
    console.log("isAmpliDisabled", isAmpliDisabled);
    if (!isAmpliInitialized && !isAmpliDisabled) {
      initializeAmplitude(setIsAmpliInitialized);
    }
    if (isAmpliDisabled) {
      console.debug("Amplitude instrumentation is disabled.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AmpliContext.Provider
      value={{
        isAmpliInitialized,
        isAmpliDisabled,
      }}
    >
      {children}
    </AmpliContext.Provider>
  );
}

export function useAmplitude() {
  const context = useContext(AmpliContext);
  return context;
}
