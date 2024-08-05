"use client";

import { PopupButton } from "@typeform/embed-react";

import { Text } from "@/app/_components/text";
import { ArrowRightIcon } from "@/app/_components/icons/arrow-right";
import { INTEGRATION_LINKS } from "@/app/_constants/links";
import { useGoogleAnalytics } from "@/app/_hooks/useGoogleAnalytics";
import { useAmplitude } from "@/app/_hooks/useAmplitude";
import { ampli } from "@/app/_amplitude";

export function TypeformButton() {
  const { sendCTAClickEvent } = useGoogleAnalytics();
  const { isAmpliInitialized } = useAmplitude();

  const onStarted = () => {
    if (isAmpliInitialized) {
      ampli.ctaButtonClicked({
        page: "marketingAcrossPlusPage",
        section: "marketingHero",
      });
    }
    sendCTAClickEvent("across-plus-cta");
  };

  return (
    <>
      <PopupButton
        id={INTEGRATION_LINKS.form}
        className="flex cursor-pointer flex-row items-center justify-center gap-2 text-teal-100 hover:opacity-75 md:justify-start"
        onStarted={onStarted}
      >
        <Text variant="cap-case-sm">learn more</Text>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
          <ArrowRightIcon />
        </div>
      </PopupButton>
    </>
  );
}
