"use client";

import { Fragment, useEffect, useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { ArrowUpRightThickIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";

import addLiquidityImage from "@/app/_assets/plus-use-case-add-liquidity.png";
import addLiquidityTabletImage from "@/app/_assets/plus-use-case-add-liquidity-tablet.png";
import addLiquidityMobileImage from "@/app/_assets/plus-use-case-add-liquidity-mobile.png";

/**
 * NOTE: This needs to be in sync with the `duration-[sliderInterval]` in the `<Transition>` component.
 * ```
 * <Transition
 *    enter="transition transform ease-linear duration-[5000ms]"
 * ```
 */
const sliderInterval = 5000;

const useCases = [
  {
    tabButtonLabel: "Add Liquidity",
    title: "Bootstrap Liquidity",
    body: "Secure TVL and consolidate capital on your protocol's home chain using Across+. Bridge + LP bundled functions allow protocols to sidestep elaborate multichain deployments and pull capital rather than chase it.",
    learnMoreLink: "https://docs.across.to/additional-info/faq",
    listTitle: "key features",
    listItems: (
      <>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Seamlessly onboard cross-chain LPs</span> with
            bridge + LP bundles
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Bridge + LP + stake</span> in a single user
            action
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Consolidate liquidity pool management</span>{" "}
            by pulling liquidity to your chain
          </Text>
        </li>
      </>
    ),
    images: {
      desktop: addLiquidityImage,
      tablet: addLiquidityTabletImage,
      mobile: addLiquidityMobileImage,
    },
  },
  {
    tabButtonLabel: "Long Perpetual",
    title: "Trade from any chain",
    body: "Increase dapp trading volume by enabling users to enter into a perp position from any chain. Implementing cross-chain bridge hooks for perpetuals enhances UX, streamlining dapp-level interactions. Reduce user steps, decrease transaction time and increase user engagement.",
    learnMoreLink: "https://docs.across.to/additional-info/faq",
    listTitle: "value props",
    listItems: (
      <>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Increase cross-chain trading volume</span>{" "}
            with bridge + long perp bundles
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Expand bundles to include</span> destination
            chain gas token functions
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Upgrade trading UX</span> by significantly
            simplifying user journies
          </Text>
        </li>
      </>
    ),
    // TODO: Get correct images
    images: {
      desktop: addLiquidityImage,
      tablet: addLiquidityTabletImage,
      mobile: addLiquidityMobileImage,
    },
  },
  {
    tabButtonLabel: "Buy NFT",
    title: "Unlock New Ecosystems",
    body: "Onboard NFT collectors from their home chain with bridge + buy NFT bundled contract functions using Across+. Bridge abstraction eliminates cross-chain learning curve hurdles and Across’ reliably fast transfer speeds prevents missed opportunities on timed mints and auctions.",
    learnMoreLink: "https://docs.across.to/additional-info/faq",
    listTitle: "value props",
    listItems: (
      <>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">
              Connect with users across various chains
            </span>{" "}
            with bridge + buy NFT bundles
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Harness Across bridge speed</span> to avoid
            missed NFT opportunities for users
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Remove hurdles</span> by allowing users to
            trade from their home chain
          </Text>
        </li>
      </>
    ),
    // TODO: Get correct images
    images: {
      desktop: addLiquidityImage,
      tablet: addLiquidityTabletImage,
      mobile: addLiquidityMobileImage,
    },
  },
];

export function UseCasesSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [stopAutoSlide, setStopAutoSlide] = useState(false);

  useEffect(() => {
    if (stopAutoSlide) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % useCases.length);
    }, sliderInterval);

    return () => clearInterval(interval);
  }, [stopAutoSlide]);

  return (
    <section className="container mx-auto flex flex-col gap-16 p-5 sm:gap-24 md:px-4">
      <Tab.Group
        selectedIndex={currentSlideIndex}
        onChange={setCurrentSlideIndex}
        as="div"
        className="-m-5 rounded-3xl border border-light-100/[.02] p-5 md:-m-12 md:p-12"
      >
        <Tab.List className="mb-5 flex flex-row flex-wrap gap-4 md:mb-12">
          {useCases.map((useCase, index) => (
            <UseCaseTab
              tabLabel={useCase.tabButtonLabel}
              showAnimation={!stopAutoSlide}
              key={index}
            />
          ))}
        </Tab.List>
        <Tab.Panels>
          {useCases.map((useCase, index) => (
            <UseCasePanel
              key={index}
              useCase={useCase}
              onMouseEnter={() => setStopAutoSlide(true)}
              onMouseLeave={() => setStopAutoSlide(false)}
            />
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}

function UseCaseTab(props: { tabLabel: string; showAnimation?: boolean }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div className="flex flex-col focus-visible:outline-none">
          <button
            className={twMerge(
              "rounded-xl border border-black-700 px-4 py-2 text-grey-400 shadow-sm",
              selected ? "bg-teal-100/[.05] text-teal-100" : "bg-transparent",
            )}
          >
            {props.tabLabel}
          </button>
          <div className="mx-2 h-[1px] overflow-x-hidden rounded-bl-2xl">
            <Transition
              appear={true}
              show={selected && Boolean(props.showAnimation)}
              // NOTE: `duration-[${sliderInterval}ms]` needs to be in sync with value of
              // variable `sliderInterval`.
              enter="transition transform ease-linear duration-[5000ms]"
              enterFrom="translate-x-0"
              enterTo="-translate-x-full"
              leave="transition duration-[0ms] transform"
              leaveFrom="-translate-x-full"
              leaveTo="-translate-x-full"
            >
              <div className={twMerge("h-[1px] w-full bg-teal-100")} />
            </Transition>
          </div>
        </div>
      )}
    </Tab>
  );
}

function UseCasePanel({
  useCase,
  onMouseEnter,
  onMouseLeave,
}: {
  useCase: (typeof useCases)[0];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <Tab.Panel onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {({ selected }) => (
        <Transition
          appear={true}
          show={selected}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-4">
                <Text variant="cap-case-xs" className="text-teal-100">
                  Use cases
                </Text>
                <Text variant="heading-4" className="text-light-100">
                  {useCase.title}
                </Text>
                <Text variant="body">{useCase.body}</Text>
              </div>
              <div className="flex flex-1 flex-col md:justify-center">
                <Text
                  variant="cap-case"
                  className="mb-3 text-grey-400 sm:text-xs md:text-xs"
                >
                  {useCase.listTitle}
                </Text>
                <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-teal-100">
                  {useCase.listItems}
                </ul>
              </div>
            </div>
            <div>
              <a
                className="mt-4 flex cursor-pointer flex-row items-center gap-1"
                href={useCase.learnMoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text variant="cap-case" className="text-teal-100 sm:text-xs md:text-xs">
                  learn more
                </Text>
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-100">
                  <ArrowUpRightThickIcon className="stroke-grey-dark" />
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center rounded-3xl bg-teal-100/[.02] shadow-sm">
              <div className="flex max-w-100 flex-1 sm:max-w-lg md:max-w-full">
                <picture>
                  <img src={useCase.images.mobile.src} alt="use case graphic" />
                  <source srcSet={useCase.images.tablet.src} media="(min-width: 760px)" />
                  <source
                    srcSet={useCase.images.desktop.src}
                    media="(min-width: 900px)"
                  />
                </picture>
              </div>
            </div>
          </div>
        </Transition>
      )}
    </Tab.Panel>
  );
}
