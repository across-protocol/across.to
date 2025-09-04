import { twMerge } from "@/app/_lib/tw-merge";
import {
  EthereumIcon,
  OptimismIcon,
  PolygonIcon,
  ArbitrumIcon,
  BaseIcon,
  ZkSyncIcon,
  LineaIcon,
  ModeIcon,
  BlastIcon,
  ScrollIcon,
  LiskIcon,
  RedstoneIcon,
  ZoraIcon,
  WorldChainIcon,
  InkIcon,
  SoneiumIcon,
  UnichainIcon,
  HyperliquidIcon,
  BscIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { SolanaIcon } from "./icons/gradient/logos/solana";

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
    iconClassName: "h-8 w-8 md:h-10 md:w-10",
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
  {
    label: "Linea",
    Icon: LineaIcon,
  },
  {
    label: "Mode",
    Icon: ModeIcon,
  },
  {
    label: "Blast",
    Icon: BlastIcon,
  },
  {
    label: "Scroll",
    Icon: ScrollIcon,
  },
  {
    label: "Lisk",
    Icon: LiskIcon,
    containerClassName: "",
  },
  {
    label: "Redstone",
    Icon: RedstoneIcon,
    containerClassName: "",
  },
  {
    label: "Zora",
    Icon: ZoraIcon,
    containerClassName: "",
  },
  {
    label: "World Chain",
    Icon: WorldChainIcon,
  },
  {
    label: "Ink",
    Icon: InkIcon,
  },
  {
    label: "Soneium",
    Icon: SoneiumIcon,
  },
  {
    label: "Unichain",
    Icon: UnichainIcon,
  },
  {
    label: "Hyperliquid",
    Icon: HyperliquidIcon,
  },
  {
    label: "BSC Chain",
    Icon: BscIcon,
  },
  {
    label: "Solana",
    Icon: SolanaIcon,
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
          className={twMerge("text-center", variants[props.variant].textClassName)}
        >
          well connected
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Supported Chains
        </Text>
      </div>
      <div className="grid w-full max-w-[800px] grid-cols-[repeat(auto-fill,minmax(var(--item-size),1fr))] gap-x-12 gap-y-12 [--item-size:88px] sm:self-center md:[--item-size:102px]">
        {chains.map((chain, index) => (
          <div
            key={index}
            className={twMerge(
              "flex flex-col items-center gap-4 justify-self-center",
              chain.containerClassName,
            )}
          >
            <div
              className={twMerge(
                "flex h-[--item-size] w-[--item-size] flex-col items-center justify-center rounded-2xl",
                variants[props.variant].bgClassName,
              )}
            >
              <chain.Icon
                className={twMerge("h-10 w-10 md:h-12 md:w-12", chain.iconClassName)}
                variant={props.variant}
              />
            </div>
            <Text variant="body" className="text-center capitalize text-light-300">
              {chain.label}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
