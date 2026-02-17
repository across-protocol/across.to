"use client";

import { useEffect } from "react";

import { setAttribution } from "@/app/_lib/attribution";

export function AttributionCapture() {
  useEffect(() => {
    setAttribution();
  }, []);

  return null;
}
