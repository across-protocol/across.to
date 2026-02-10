import {
  CoinStackIcon,
  DashboardFastIcon,
  ShieldCheckIcon,
  SubscriptionStarIcon,
} from "@/app/_components/icons";
import { sectionSpacing } from "./styles";
import { SectionHeading } from "./section-heading";

const featureCards = [
  {
    title: "Day-1 MegaETH support",
    description: "Bridge USDT0, WETH, and ETH as soon as MegaETH mainnet goes live.",
    Icon: SubscriptionStarIcon,
  },
  {
    title: "Fast fills, minimal latency",
    description:
      "Intent-based routing delivers near-instant settlements so capital moves when you need it.",
    Icon: DashboardFastIcon,
  },
  {
    title: "Battle-tested security",
    description:
      "Across inherits UMA oracle guarantees, optimistic verification, and decentralized relayers.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Capital-efficient design",
    description: "Native netting + single liquidity pool architecture keeps costs low.",
    Icon: CoinStackIcon,
  },
];

export function FeaturesSection() {
  return (
    <section className={`relative ${sectionSpacing} pb-16 pt-6 sm:pb-20`}>
      <SectionHeading title="Why bridge to MegaETH with Across?" />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-4 md:grid-cols-2">
        {featureCards.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-xl  bg-[#1B1B1E] p-7  transition duration-200 hover:-translate-y-1 "
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-aqua-100/10 p-3 text-aqua-100">
              <feature.Icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl tracking-tight relative mt-6 text-heading-4 font-semibold text-light-400">
              {feature.title}
            </h3>
            <p className="relative mt-3 text-lg leading-relaxed text-light-400 opacity-70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
