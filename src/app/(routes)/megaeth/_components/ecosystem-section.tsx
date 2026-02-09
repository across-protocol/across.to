import { MoveIcon, TimeIcon, LiquidityIcon } from "@/app/_components/icons";
import { sectionSpacing } from "./styles";
import { SectionHeading } from "./section-heading";

const ecosystemItems = [
  { title: "Move capital into MegaETH instantly", Icon: MoveIcon },
  { title: "Traders needing ETH, WBTC, or stablecoins fast", Icon: TimeIcon },
  { title: "Bootstrap liquidity for your protocol at launch", Icon: LiquidityIcon },
];

export function EcosystemSection() {
  return (
    <section className={`relative ${sectionSpacing} py-16 sm:py-20`}>
      <SectionHeading title="Built for the MegaETH ecosystem" />
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {ecosystemItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-row items-center gap-4 px-3  text-left sm:flex-col sm:text-center "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-100/10 p-3 text-aqua-100">
              <item.Icon className="h-5 w-5" />
            </div>
            <p className="text-heading-4 font-normal leading-relaxed text-light-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EcosystemSection;
