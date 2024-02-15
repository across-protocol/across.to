import { twJoin } from "tailwind-merge";

import {
  EthereumIcon,
  OptimismIcon,
  PolygonIcon,
  ArbitrumIcon,
  BaseIcon,
  ZkSyncIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";

const chains = [
  {
    label: "Ethereum Mainnet",
    Icon: EthereumIcon,
  },
  {
    label: "Optimism",
    Icon: OptimismIcon,
  },
  {
    label: "Polygon Network",
    Icon: PolygonIcon,
  },
  {
    label: "Arbitrum One",
    Icon: ArbitrumIcon,
  },
  {
    label: "Base",
    Icon: BaseIcon,
  },
  {
    label: "zkSync Era",
    Icon: ZkSyncIcon,
  },
];

const variants = {
  teal: {
    textClassName: "text-teal-100",
    bgClassName: "bg-teal-100/[.05]",
  },
  purple: {
    textClassName: "text-purple-100",
    bgClassName: "bg-purple-100/[.05]",
  },
};

export function SupportedChainsSection(props: { variant: "teal" | "purple" }) {
  return (
    <section className="container mx-auto flex flex-col gap-16 p-5 sm:gap-24 md:px-4">
      <div className="flex flex-col gap-4">
        <Text
          variant="cap-case"
          className={twJoin("text-center", variants[props.variant].textClassName)}
        >
          well connected
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Supported Chains
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {chains.map((chain, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div
              className={twJoin(
                "flex h-20 w-20 flex-col items-center justify-center rounded-2xl",
                variants[props.variant].bgClassName,
              )}
            >
              <chain.Icon className="h-10 w-10" variant={props.variant} />
            </div>
            <Text variant="body" className="capitalize text-light-300">
              {chain.label}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
