import Image from "next/image";

import { Ticker } from "./ticker";

import zkLogoSrc from "@/app/_assets/logos/zk.svg";
import opLogoSrc from "@/app/_assets/logos/op.svg";
import baseLogoSrc from "@/app/_assets/logos/base.svg";
import ethLogoSrc from "@/app/_assets/logos/eth.svg";
import arbLogoSrc from "@/app/_assets/logos/arb.svg";
import maticLogoSrc from "@/app/_assets/logos/matic.svg";

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
];

export function SupportedChainsTicker() {
  return <Ticker title={"supported chains"} items={chains} />;
}
