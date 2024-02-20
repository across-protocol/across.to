import { twMerge } from "@/app/_lib/tw-merge";
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
    iconClassName: "h-8 w-9 md:h-10 md:w-10",
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

export function SupportedChainsSection() {
  return (
    <section className="container mx-auto flex flex-col gap-16 p-5 sm:gap-24 md:px-4">
      <div className="flex flex-col gap-4">
        <Text variant="cap-case" className="text-center text-teal-100">
          well connected
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Supported Chains
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {chains.map((chain, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="h-22 w-22 flex flex-col items-center justify-center rounded-2xl bg-teal-100/[.05] md:h-[108px] md:w-[108px]">
              <chain.Icon
                className={twMerge("h-10 w-10 md:h-12 md:w-12", chain.iconClassName)}
                variant="teal"
              />
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
