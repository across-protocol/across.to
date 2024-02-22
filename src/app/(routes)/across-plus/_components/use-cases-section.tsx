"use client";

import { Fragment, useEffect, useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import { twMerge } from "@/app/_lib/tw-merge";

import { ArrowUpRightThickIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";

import addLiquidityImage from "@/app/_assets/plus-use-case-add-liquidity.png";
import addLiquidityMobileImage from "@/app/_assets/plus-use-case-add-liquidity-mobile.png";
import lendImage from "@/app/_assets/plus-use-case-lend.png";
import lendMobileImage from "@/app/_assets/plus-use-case-lend-mobile.png";
import buyNftImage from "@/app/_assets/plus-use-case-buy-nft.png";
import buyNftMobileImage from "@/app/_assets/plus-use-case-buy-nft-mobile.png";
import { INTEGRATION_LINKS } from "@/app/_constants/links";

/**
 * NOTE: This needs to be in sync with the `duration-[sliderInterval]` in the `<Transition>` component.
 * ```
 * <Transition
 *    enter="transition transform ease-linear duration-[5000ms]"
 * ```
 */
const sliderInterval = 15000;

const useCases = [
  {
    tabButtonLabel: "Bootstrap Liquidity",
    title: "Bootstrap Liquidity",
    body: "Secure TVL and consolidate capital on your protocol's home chain using Across+. Bridge + LP bundled functions allow protocols to sidestep elaborate multichain deployments and pull capital rather than chase it.",
    learnMoreLink: INTEGRATION_LINKS.plus,
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
            <span className="text-teal-100">Consolidate liquidity</span> by pulling
            liquidity to the protocol’s native chain(s)
          </Text>
        </li>
      </>
    ),
    images: {
      desktop: addLiquidityImage,
      mobile: addLiquidityMobileImage,
    },
  },
  {
    tabButtonLabel: "Lend",
    title: "Expand Markets",
    body: "With Across+ lending protocols can attract liquidity and users from any chain. Increase TVL and expand user reach by accepting deposits from any chain to any market.",
    learnMoreLink: INTEGRATION_LINKS.plus,
    listTitle: "value props",
    listItems: (
      <>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Increase TVL</span> with bridge + lend bundles
            for users on any chain
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Expand user reach</span> by enabling users to
            supply from their home chain
          </Text>
        </li>
        <li>
          <Text variant="body-nums-sm" className="text-light-200">
            <span className="text-teal-100">Consolidate liquidity</span> by pulling
            liquidity to the protocol&apos;s native chain(s)
          </Text>
        </li>
      </>
    ),
    images: {
      desktop: lendImage,
      mobile: lendMobileImage,
    },
  },
  {
    tabButtonLabel: "Buy NFT",
    title: "Unlock New Ecosystems",
    body: "Onboard NFT collectors from their home chain with bridge + buy NFT bundled contract functions using Across+. Bridge abstraction eliminates cross-chain learning curve hurdles and Across’ reliably fast transfer speeds prevents missed opportunities on timed mints and auctions.",
    learnMoreLink: INTEGRATION_LINKS.plus,
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
    images: {
      desktop: buyNftImage,
      mobile: buyNftMobileImage,
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
            {selected ? (
              props.showAnimation ? (
                <Transition
                  appear={true}
                  show={true}
                  // NOTE: `duration-[${sliderInterval}ms]` needs to be in sync with value of
                  // variable `sliderInterval`.
                  enter="transition transform ease-linear duration-[15000ms]"
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
          enter="transition duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition duration-500"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-1 flex-col gap-4">
                <Text variant="cap-case" className="text-teal-100">
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
                className="mt-4 flex cursor-pointer flex-row items-center gap-1 hover:opacity-75"
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
            <div className="flex flex-col items-center">
              <div className="flex max-w-[336px] flex-1 md:max-w-full">
                <picture>
                  <source
                    srcSet={useCase.images.desktop.src}
                    media="(min-width: 900px)"
                  />
                  <img src={useCase.images.mobile.src} alt="use case graphic" />
                </picture>
              </div>
            </div>
          </div>
        </Transition>
      )}
    </Tab.Panel>
  );
}
