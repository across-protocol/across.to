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
    body: "Empirically proven as the lowest cost bridge, Across is engineered for best-execution through its gas-optimized contracts, aggregated verification and intents design. It is maximally capital efficient, which ultimately minimizes costs to end users.",
  },
  {
    Icon: <ShieldLargeIcon className="h-14 w-14" />,
    title: "Secure",
    body: "Across’ intents architecture removes risk from end-users by shifting it to 3rd party relayers, who accept this risk in exchange for a fee. Relayers are only repaid after users are correctly filled, as verified by UMA's Optimistic Oracle.",
  },
  {
    Icon: <DoubleChevronRightIcon className="h-14 w-14" />,
    title: "Fast",
    body: "Intent designs enable the fastest bridge experience. By using a competitive network of third party relayers, bridge orders are filled within seconds, an order of magnitude faster than competing bridges.",
  },
  {
    Icon: <DollarIcon className="h-14 w-14" />,
    title: "Superior",
    body: "The Across Bridge is a superior design, offering the lowest cost and fastest way to transfer value between chains, without the security tradeoffs of using representative, lock-and-mint assets or messaging systems.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto -mt-32 flex flex-col gap-16 px-4 sm:gap-24 md:-mt-48">
      <Image
        src={bridge2Image}
        alt="Across settlement layers graphic"
        className="-mb-16 self-center sm:-mb-24 sm:max-w-[514px]"
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
