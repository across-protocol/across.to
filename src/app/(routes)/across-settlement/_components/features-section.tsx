import {
  BlocksConnectedIcon,
  ChecklistIcon,
  CheckmarkIcon,
  CrossChainIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import settlement2Image from "@/app/_assets/settlement-2.png";
import Image from "next/image";

const features = [
  {
    Icon: <BlocksConnectedIcon className="h-14 w-14" />,
    title: "Cross-Chain Intents Settlement",
    body: "Intents are cross-chain limit orders submitted to an RFQ system and fulfilled by relayers with their own capital. Settlement verifies fulfillment and repays relayers. Across’ maximally efficient settlement system reduces cost to relayers, and ultimately, users.",
  },
  {
    Icon: <ChecklistIcon className="h-14 w-14" />,
    title: "Modular by design",
    body: "Across Settlement can accept any intents-based order flow following a standard structure. It seamlessly enables any DEX or application with RFQ order flow to offer best-execution cross-chain swaps from the most competitive network of professional market markets.",
  },
  {
    Icon: <CheckmarkIcon className="h-14 w-14" />,
    title: "aggregated and optimistic verification",
    body: "Across verifies fulfillment optimistically. This enables aggregated, off-chain verification and repayment over a 1-2 hour period, amortizing this cost over thousands of orders, resulting in an order of magnitude gas savings vs. per-fill repayment.",
  },
  {
    Icon: <CrossChainIcon className="h-14 w-14" />,
    title: "Seamless cross-chain management",
    body: "Repayment is made on the relayers’ chain of choice, reducing overhead and complexity of managing cross-chain positions. Lower costs for relayers resulting in lower costs for users.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto flex flex-col gap-16 px-4 sm:gap-24">
      <Image
        src={settlement2Image}
        alt="Across settlement layers graphic"
        className="self-center sm:max-w-[514px]"
      />
      <div className="flex flex-col gap-4">
        <Text variant="cap-case" className="text-center text-purple-100">
          industry-leading performance
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Superior settlement
          <br />
          Best Execution
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:gap-y-16 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title}>
            {feature.Icon}
            <Text variant="heading-4" className="mb-4 mt-8 capitalize text-light-200">
              {feature.title}
            </Text>
            <Text className="max-w-100 text-light-300">{feature.body}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
