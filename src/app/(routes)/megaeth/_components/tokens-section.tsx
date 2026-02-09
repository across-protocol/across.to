import { EthIcon, WbtcIcon, UsdtIcon, ArrowRightIcon } from "@/app/_components/icons";
import { sectionSpacing } from "./styles";
import { SectionHeading } from "./section-heading";

type TokenCardProps = {
  label: string;
  Icon: typeof EthIcon;
  glow: string;
};

const tokenCards: TokenCardProps[] = [
  { label: "USDT0", Icon: UsdtIcon, glow: "rgba(108,249,216,0.35)" },
  { label: "ETH", Icon: EthIcon, glow: "rgba(240,255,251,0.25)" },
  { label: "WBTC", Icon: WbtcIcon, glow: "rgba(227,109,58,0.25)" },
];

export function TokensSection() {
  return (
    <section className={`relative ${sectionSpacing} py-16 sm:py-20`}>
      <SectionHeading title="Supported tokens on MegaETH" />
      <div className=" mx-auto mt-10 flex max-w-6xl flex-col gap-6 lg:flex-row">
        {tokenCards.map((token) => (
          <a
            key={token.label}
            href="https://app.across.to/bridge-and-swap/megaeth"
            className="w-full"
          >
            <TokenCard key={token.label} {...token} />
          </a>
        ))}
      </div>
    </section>
  );
}

function TokenCard({ label, Icon, glow }: TokenCardProps) {
  return (
    <div className=" group relative flex flex-1 flex-col items-center gap-12 rounded-2xl border border-transparent bg-[#1B1B1E] p-6 transition  duration-200 hover:-translate-y-2 hover:border-aqua-100/50">
      <div className=" flex items-center justify-center rounded-full text-light-100">
        <Icon className="h-20 w-20 border border-light-100" />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="text-heading-3 font-normal text-light-400">{label}</div>
        <div className="rounded-full  border border-light-400/10 p-2 text-heading-3 font-medium text-light-400 contrast-50 transition">
          <ArrowRightIcon className=" h-8 w-8 -rotate-45 text-light-100" />
        </div>
      </div>
    </div>
  );
}

export default TokensSection;
