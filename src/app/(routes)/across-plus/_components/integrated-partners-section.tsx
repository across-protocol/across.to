"use client";

import { Fragment, useEffect, useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import Image from "next/image";

import { twMerge } from "@/app/_lib/tw-merge";
import { ArrowRightIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";

import teleOrdinalLogoSrc from "../_assets/tele-ordinal-logo.png";
import teleOrdinalProfileSrc from "../_assets/tele-ordinal-profile.png";
import onthisLogoSrc from "../_assets/onthis-logo.png";
import onthisProfileSrc from "../_assets/onthis-profile.png";

/**
 * NOTE: This needs to be in sync with the `duration-[sliderInterval]` in the `<Transition>` component.
 * ```
 * <Transition
 *    enter="transition transform ease-linear duration-[5000ms]"
 * ```
 */
const sliderInterval = 20000;

const partners = [
  {
    logo: teleOrdinalLogoSrc,
    profile: teleOrdinalProfileSrc,
    partner: "TeleOrdinal",
    description: (
      <>
        TeleOrdinal has integrated Across+ to facilitate crosschain bidding on Ordinals
        (Bitcoin NFTs). The feature allows users to participate in Ordinal auctions via
        TeleOrdinal using stablecoins from their desired chains.
      </>
    ),
    quote: (
      <>
        We chose Across+ to expand TeleOrdinal, our crosschain Ordinals marketplace, to
        new EVMs for its fast and cost-effective bridging. The solution made integration
        remarkably straightforward, enabling seamless token transfers and crosschain
        contract calls.
      </>
    ),
    name: "Mahyar Daneshpajooh",
    title: "Founder",
  },
  {
    logo: onthisLogoSrc,
    profile: onthisProfileSrc,
    partner: "Onthis",
    description: (
      <>
        The OnThis product, Shortcuts, sends ETH to human-readable contracts to bridge,
        swap, stake, mint, and more, directly from a user’s wallet. Across+ powers these
        crosschain bundled transactions.
      </>
    ),
    quote: (
      <>
        We selected Across+ because it enables users to initiate specific actions on the
        destination chain immediately after completing their deposit. Additionally, Across
        has fast and dependable bridging times, underpinned by the security and efficiency
        of UMA&apos;s optimistic oracle. This integration ensures a seamless and secure
        transfer experience.
      </>
    ),
    name: "Igor Yuzo",
    title: "Founder",
  },
];

export function IntegratedPartnersSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [stopAutoSlide, setStopAutoSlide] = useState(false);

  useEffect(() => {
    if (stopAutoSlide) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % partners.length);
    }, sliderInterval);

    return () => clearInterval(interval);
  }, [stopAutoSlide]);

  const nextSlideIndex = (currentSlideIndex + 1) % partners.length;

  return (
    <section className="container mx-auto flex flex-col rounded-3xl border border-light-100/[.02] p-4 md:p-12">
      <div className="mb-12 flex flex-col gap-4">
        <Text variant="cap-case" className="text-teal-100">
          how they use across+
        </Text>
        <Text variant="heading-3" className="text-light-100">
          Integrated partners
        </Text>
      </div>

      <Tab.Group
        selectedIndex={currentSlideIndex}
        onChange={setCurrentSlideIndex}
        as="div"
      >
        {({ selectedIndex }) => (
          <>
            <Tab.Panels>
              {partners.map((partner, index) => (
                <IntegratedPartnerPanel
                  showAnimation={selectedIndex === index && !stopAutoSlide}
                  key={index}
                  partner={partner}
                  onMouseEnter={() => setStopAutoSlide(true)}
                  onMouseLeave={() => setStopAutoSlide(false)}
                />
              ))}
            </Tab.Panels>
            <div className="mt-8 flex flex-row items-center justify-between">
              <Tab.List className="flex flex-row gap-1">
                {partners.map((partner, index) => (
                  <PartnerTab key={index} />
                ))}
              </Tab.List>
              <button
                onClick={() => setCurrentSlideIndex(nextSlideIndex)}
                className="flex flex-row items-center gap-1 hover:opacity-75"
              >
                <Text variant="cap-case" className="text-teal-100">
                  Next: {partners[nextSlideIndex].partner}
                </Text>
                <div className="flex h-5 w-5 flex-col items-center justify-center rounded-full bg-teal-100">
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </button>
            </div>
          </>
        )}
      </Tab.Group>
    </section>
  );
}

function PartnerTab() {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={twMerge(
            "flex h-2 w-2 cursor-pointer flex-col rounded-full focus-visible:outline-none",
            selected ? "bg-teal-100" : "bg-teal-100/[.25]",
          )}
        />
      )}
    </Tab>
  );
}

function IntegratedPartnerPanel({
  partner,
  showAnimation,
  onMouseEnter,
  onMouseLeave,
}: {
  partner: (typeof partners)[0];
  showAnimation: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <Tab.Panel onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {({ selected }) => (
        <>
          <div className="mb-8 h-[1px] overflow-x-hidden rounded-bl-2xl">
            {selected ? (
              showAnimation ? (
                <Transition
                  appear={true}
                  show={showAnimation}
                  // NOTE: `duration-[${sliderInterval}ms]` needs to be in sync with value of
                  // variable `sliderInterval`.
                  enter="transition transform ease-linear duration-[20000ms]"
                  enterFrom="translate-x-0"
                  enterTo="-translate-x-full"
                  leave="transition duration-[0ms] transform"
                  leaveFrom="-translate-x-full"
                  leaveTo="-translate-x-full"
                >
                  <div className={twMerge("h-[1px] w-full bg-teal-100")} />
                </Transition>
              ) : (
                <div className={twMerge("h-[1px] w-full bg-teal-100")} />
              )
            ) : null}
          </div>
          <Transition
            appear={true}
            show={selected}
            enter="transition duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-500"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-8">
                <Image
                  src={partner.logo}
                  alt={`integrated partner logo ${partner.partner}`}
                />
                <Text variant="body-nums">{partner.description}</Text>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-light-100/[.05] bg-light-100/[.02] p-6">
                <Text>&quot;{partner.quote}&quot;</Text>
                <div className="flex flex-row items-center gap-3">
                  <Image
                    src={partner.profile}
                    alt={`integrated partner profile ${partner.name}`}
                  />
                  <div>
                    <Text>{partner.name}</Text>
                    <Text>{partner.title}</Text>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </>
      )}
    </Tab.Panel>
  );
}
