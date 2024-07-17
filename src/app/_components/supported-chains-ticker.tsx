import Image from "next/image";

import { Ticker } from "./ticker";

import zkLogoSrc from "@/app/_assets/logos/zk.svg";
import opLogoSrc from "@/app/_assets/logos/op.svg";
import baseLogoSrc from "@/app/_assets/logos/base.svg";
import ethLogoSrc from "@/app/_assets/logos/eth.svg";
import arbLogoSrc from "@/app/_assets/logos/arb.svg";
import maticLogoSrc from "@/app/_assets/logos/matic.svg";
import lineaLogoSrc from "@/app/_assets/logos/linea.svg";
import modeLogoSrc from "@/app/_assets/logos/mode.svg";
import blastLogoSrc from "@/app/_assets/logos/blast.svg";
import scrollLogoSrc from "@/app/_assets/logos/scroll.svg";
import liskLogoSrc from "@/app/_assets/logos/lisk.svg";

const chains = [
  {
    logo: <Image src={zkLogoSrc} alt="zk logo" />,
  },
  {
    logo: <Image src={opLogoSrc} alt="op logo" />,
  },
  {
    logo: <Image src={baseLogoSrc} alt="base logo" />,
  },
  {
    logo: <Image src={ethLogoSrc} alt="eth logo" />,
  },
  {
    logo: <Image src={arbLogoSrc} alt="arb logo" />,
  },
  {
    logo: <Image src={maticLogoSrc} alt="matic logo" />,
  },
  {
    logo: <Image src={lineaLogoSrc} alt="linea logo" />,
  },
  {
    logo: <Image src={modeLogoSrc} alt="mode logo" />,
  },
  {
    logo: <Image src={blastLogoSrc} alt="blast logo" />,
  },
  {
    logo: <Image src={scrollLogoSrc} alt="scroll logo" />,
  },
  {
    logo: <Image src={liskLogoSrc} alt="lisk logo" />,
  },
];

export function SupportedChainsTicker() {
  return <Ticker title={"supported chains"} items={chains} />;
}
