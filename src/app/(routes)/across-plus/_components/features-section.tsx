import {
  ArrowUpIcon,
  ShieldIcon,
  ChatIcon,
  ArrowUpRightThickIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { FeaturesGrid } from "@/app/_components/features-grid";
import { INFORMATION_LINKS } from "@/app/_constants";

const features = [
  {
    Icon: <ArrowUpIcon className="h-14 w-14" />,
    title: "Web2-Grade UX",
    body: "Users want to use apps, not bridges. Across+ upgrades dapp UX by abstracting bridging to the background for a Web2-like experience.",
  },
  {
    Icon: <ShieldIcon className="h-14 w-14" />,
    title: "Secure by Design",
    body: "Most cross-chain messaging solutions increase trust assumptions vs. the chains they connect. Across+ actions are not cross-chain messages -- they are actions to execute when assets are delivered on the destination.",
  },
  {
    Icon: <ChatIcon variant="teal" className="h-14 w-14" />,
    title: "intents-based Architecture",
    body: "Cross-chain intents are cross-chain limit orders plus a protocol action to execute on destination. Simply embed the intent order standard in protocol actions to create seamless cross-chain experiences.",
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
          +users +TVL +chains
        </Text>
        <Text
          variant="heading-2"
          className="text-center capitalize tracking-tight-2 text-light-200"
        >
          Seamless Cross-chain Onboarding
        </Text>
      </div>
      <FeaturesGrid features={features}>
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-teal-100/[.02] p-6 shadow-md sm:items-start">
          <div className="flex flex-col items-center justify-center self-center rounded-lg bg-teal-100/[.05] p-2">
            <Text variant="cap-case" className="text-teal-100">
              across.to/docs
            </Text>
          </div>
          <div>
            <Text className="max-w-100 text-light-300">
              Visit our documentation page to learn more about the benefits of integrating
              Across+.
            </Text>
            <a
              className="mt-4 flex cursor-pointer flex-row items-center gap-1"
              href={INFORMATION_LINKS.docs.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text variant="cap-case" className="text-teal-100 sm:text-xs md:text-xs">
                visit docs
              </Text>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-100">
                <ArrowUpRightThickIcon className="stroke-grey-dark" />
              </div>
            </a>
          </div>
        </div>
      </FeaturesGrid>
    </section>
  );
}
