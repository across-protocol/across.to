import Image from "next/image";

import {
  CodeIcon,
  ShieldLargeIcon,
  DoubleChevronRightIcon,
  DollarIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { FeaturesGrid } from "@/app/_components/features-grid";
import bridge2Image from "@/app/_assets/bridge-2.png";

const features = [
  {
    Icon: <CodeIcon className="h-14 w-14" />,
    title: "efficient",
    body: "With Across, bridging your tokens at the fastest speed and lowest cost does not come with security tradeoffs. How? At Across, only bridge users or bridge LPs never shoulder the risks associated with cross-chain transfers.",
  },
  {
    Icon: <ShieldLargeIcon className="h-14 w-14" />,
    title: "Secure",
    body: "Using canonical assets is the only trustless way to transfer value, which is why Across only circulates genuine tokens, never representative or synthetic assets. In every transfer facilitated by Across, user assets are never put at risk.",
  },
  {
    Icon: <DoubleChevronRightIcon className="h-14 w-14" />,
    title: "Fast",
    body: "Intents architecture enables the fastest bridge experience. By using a network of third party relayers, incentivized to quickly fill transfers, fill times are usually completed in a few seconds.",
  },
  {
    Icon: <DollarIcon className="h-14 w-14" />,
    title: "Superior",
    body: "Canonical assets are the only trustless way to transfer value, which is why Across only circulates canonical tokens, never representative or synthetic ones. In every transfer at Across, users always receive canonical assets.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto -mt-32 flex flex-col gap-16 px-4 sm:gap-24 md:-mt-48">
      <Image
        src={bridge2Image}
        alt="Across settlement layers graphic"
        className="self-center sm:max-w-[514px]"
      />
      <div className="flex flex-col gap-4">
        <Text variant="cap-case" className="text-center text-aqua-100">
          built for safe travels
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Engineered for best execution
        </Text>
      </div>
      <FeaturesGrid features={features} />
    </section>
  );
}
