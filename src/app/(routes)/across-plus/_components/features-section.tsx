import {
  ArrowUpIcon,
  ShieldIcon,
  ChatIcon,
  ArrowUpRightThickIcon,
  DollarIcon,
  DollarIcon2,
  ChartUpIcon,
  ClockIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { FeaturesGrid } from "@/app/_components/features-grid";
import { INTEGRATION_LINKS } from "@/app/_constants/links";

const features = [
  {
    Icon: <ArrowUpIcon className="h-14 w-14" />,
    title: "Elevate your UX",
    body: "Users want to use apps, not bridges. Across+ upgrades your UI by bundling bridge transactions into your user's actions.",
  },
  {
    Icon: <DollarIcon2 className="h-14 w-14" />,
    title: "Deepen your Liquidity",
    body: "Unlock access to liquidity on all supported chains while keeping your app’s liquidity where it is.",
  },
  {
    Icon: <ChartUpIcon className="h-14 w-14" />,
    title: "Grow faster with less work",
    body: "Reach users on new chains without adding to the maintenance requirements of your app.",
  },
  {
    Icon: <ClockIcon className="h-14 w-14" />,
    title: "Easy Integration",
    body: "Add Across+ to your dapp without any smart contract work.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto flex flex-col gap-16 px-4 sm:gap-24">
      <div className="flex flex-col gap-4">
        <Text
          variant="cap-case"
          className="text-center text-xs text-teal-100 sm:text-xs md:text-xs"
        >
          +deposit +lend +swap +mint
        </Text>
        <Text
          variant="heading-2"
          className="text-center capitalize tracking-tight-2 text-light-200"
        >
          Seamless Cross-chain
          <br />
          Onboarding
        </Text>
      </div>
      <FeaturesGrid features={features} />
    </section>
  );
}
