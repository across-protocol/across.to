import {
  ArrowUpIcon,
  ShieldIcon,
  ChatIcon,
  ArrowUpRightThickIcon,
} from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
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
    body: "Cross-chain intents are cross-chain limit orders plus a protocol action to execute on destination. Simply attach the intent order standard to protocol actions to create seamless cross-chain experiences.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto flex flex-col gap-16 px-4 sm:gap-24              ">
      <div className="flex flex-col gap-4">
        <Text variant="cap-case" className="text-center text-teal-100">
          +users +TVL +chains
        </Text>
        <Text variant="heading-2" className="text-center capitalize text-light-200">
          Seamless Cross-chain Onboarding
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:gap-y-16 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title}>
            {feature.Icon}
            <Text variant="heading-4" className="mb-4 mt-8 capitalize text-light-200">
              {feature.title}
            </Text>
            <Text className="text-light-300">{feature.body}</Text>
          </div>
        ))}
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-teal-100/[.02] p-6 shadow-md sm:items-start">
          <div className="flex flex-col items-center justify-center self-center rounded-lg bg-teal-100/[.05] p-2">
            <Text variant="cap-case" className="text-teal-100">
              across.to/docs
            </Text>
          </div>
          <div>
            <Text className="max-w-100 text-light-300">
              Visit the Across+ documentation page to learn the ins and outs of how
              we&apos;ve built the system.
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
      </div>
    </section>
  );
}
