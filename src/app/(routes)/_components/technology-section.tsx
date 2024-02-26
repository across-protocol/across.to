import { ChatIcon, FeatherIcon, BlocksDiagonalIcon } from "../../_components/icons";
import { Text } from "../../_components/text";
import landingTechnologySrc from "../../_assets/landing-tech.png";
import landingTechnologyMobileSrc from "../../_assets/landing-tech-mobile.png";

const sections = [
  {
    Icon: ChatIcon,
    title: "User-Centric",
    body: "Cross-chain intents are a cross-chain limit order plus an action to execute. Intents replace explicit execution steps with user outcomes, allowing relayers to compete to provide the optimal execution path for the user.",
  },
  {
    Icon: FeatherIcon,
    title: "Elegant Abstraction",
    body: "Unlike complex trusted message passing solutions Across connects users to dapps via intents, not just blockchains to blockchains. Developers only need to embed a standard order in protocol actions to create seamless cross-chain experiences.",
  },
  {
    Icon: BlocksDiagonalIcon,
    title: "Modular Interoperability",
    body: (
      <>
        Cross-chain intents are powered by a modular system of 3 layers:
        <ol className="list-decimal pl-6">
          <li>Request for quote mechanism</li>
          <li>Network of competitive relayers</li>
          <li>Settlement layer to escrow user input funds, verify, and repay relayers</li>
        </ol>
      </>
    ),
  },
];

export function TechnologySection() {
  return (
    <section className="container mx-auto flex flex-col gap-16 px-4 sm:gap-24              ">
      <div className="flex flex-col gap-4">
        <Text variant="cap-case" className="text-aqua-100 md:text-center">
          the technology
        </Text>
        <Text variant="heading-2" className="capitalize text-light-200 md:text-center">
          How intents work
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title}>
            <section.Icon className="mb-8 h-14 w-14" />
            <Text variant="heading-4" className="mb-4 text-light-200">
              {section.title}
            </Text>
            <Text className="text-light-300">{section.body}</Text>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex max-w-100 flex-1 sm:max-w-lg md:max-w-[638px]">
          <picture>
            <source srcSet={landingTechnologySrc.src} media="(min-width: 760px)" />
            <img src={landingTechnologyMobileSrc.src} alt="MDN" />
          </picture>
        </div>
      </div>
    </section>
  );
}
