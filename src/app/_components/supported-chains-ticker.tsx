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
import redstoneLogoSrc from "@/app/_assets/logos/redstone.svg";
import zoraLogoSrc from "@/app/_assets/logos/zora.svg";
import worldChainIconSrc from "@/app/_assets/logos/world-chain.svg";
import alephZeroIconSrc from "@/app/_assets/logos/alephzero.svg";
import inkLogoSrc from "@/app/_assets/logos/ink.svg";
import soneiumLogoSrc from "@/app/_assets/logos/soneium.svg";

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
  {
    logo: <Image src={redstoneLogoSrc} alt="redstone logo" />,
  },
  {
    logo: <Image src={zoraLogoSrc} alt="zora logo" />,
  },
  {
    logo: <Image className="px-4" src={worldChainIconSrc} alt="world chain logo" />,
  },
  {
    logo: <Image className="px-4" src={alephZeroIconSrc} alt="aleph zero" />,
  },
  {
    logo: <Image className="px-16" src={inkLogoSrc} alt="ink logo" />,
  },
  {
    logo: <Image className="px-4" src={soneiumLogoSrc} alt="soneium logo" />,
  },
];

export function SupportedChainsTicker() {
  return <Ticker title={"supported chains"} items={chains} />;
}
