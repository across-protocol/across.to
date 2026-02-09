"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/app/_components/icons";
import bridge1 from "../_assets/bridge-guide-1.svg";
import bridge2 from "../_assets/bridge-guide-2.svg";
import bridge3 from "../_assets/bridge-guide-3.svg";
import bridge4 from "../_assets/bridge-guide-4.svg";
import SectionHeading from "./section-heading";
import { BridgeNowLink, bridgeAppBaseUrl } from "@/app/_components/bridge-now-link";
import { primaryButtonClass, sectionSpacing } from "./styles";

export default function BridgeGuideSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const computeItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 3.5; // lg and up
      if (width >= 768) return 2.5; // md
      return 1.2; // mobile
    };

    const update = () => setItemsPerView(computeItems());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const steps = [
    {
      number: "1.",
      title: "Select your source chain",
      description:
        "Across uses an intent-based design to deliver near-instant transfers. Assets are filled in minutes, not hours—so users can move capital exactly when they need it.",
      image: bridge1,
    },
    {
      number: "2.",
      title: "Choose MegaETH as the destination",
      description:
        "Select MegaETH as the destination chain here to be able to instantly bridge your funds using Across. Your assets will arrive quickly and securely.",
      image: bridge2,
    },
    {
      number: "3.",
      title: "Bridge instantly via Across ",
      description:
        "Every transfer is secured through optimistic verification and decentralized relayers. No trusted intermediaries, just strong, protocol-level security guarantees.",
      image: bridge3,
    },
    {
      number: "4.",
      title: "Fund your MegaETH wallet",
      description:
        "Your wallet on MegaETH will now have the bridged funds. You can also add more tokens to this wallet from other chains using Across securely and instantly.",
      image: bridge4,
    },
  ];

  const maxStep = Math.max(steps.length - itemsPerView, 0);

  const nextStep = () => {
    setCurrentStep((step) => Math.min(step + 1, maxStep));
  };

  const prevStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  return (
    <div className="min-h-screen p-8 text-light-400">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="How to bridge to MegaETH" />

        {/* Carousel Container */}
        <div className="relative mb-5 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStep * (100 / itemsPerView)}%)` }}
          >
            {/* Step 1 - From */}
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="relative flex h-full  flex-col justify-between rounded-3xl bg-[#1B1B1E] p-8">
                  <div className="flex basis-1/2 justify-center ">
                    <Image src={step.image} alt={step.title} className="" priority />
                  </div>

                  <div className="mt-8 basis-1/2">
                    <span className="mb-4 block text-heading-1 font-thin text-aqua-100">
                      {step.number}
                    </span>
                    <h3 className="mb-3 text-heading-3 font-semibold">{step.title}</h3>
                    <p className="text-lg leading-relaxed text-light-400/70">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between boxes */}
                <div
                  className={`${step.number === "4." ? "" : "absolute -right-6 top-1/2 z-10 -translate-y-1/2"} `}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#151518] bg-[#1B1B1E] shadow-lg">
                    <span className="text-xl text-light-400/50">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mb-5 flex justify-end gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1E] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRightIcon className="h-6 w-6 rotate-180 contrast-75" />
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === maxStep}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1E] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRightIcon className="h-6 w-6 contrast-75" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <BridgeNowLink
            section="marketingHero"
            className={primaryButtonClass}
            href={`${bridgeAppBaseUrl}/megaeth`}
          >
            Bridge to MegaETH
          </BridgeNowLink>
        </div>
      </div>
    </div>
  );
}
