import Image from "next/image";

import { Ticker } from "./ticker";

import balancerLogoSrc from "@/app/_assets/logos/balancer.svg";
import bungeeLogoSrc from "@/app/_assets/logos/bungee.svg";
import chainhopLogoSrc from "@/app/_assets/logos/chainhop.svg";
import dodoLogoSrc from "@/app/_assets/logos/dodo.svg";
import jumperLogoSrc from "@/app/_assets/logos/jumper.svg";
import lifiLogoSrc from "@/app/_assets/logos/li-fi.svg";
import okxLogoSrc from "@/app/_assets/logos/okx.svg";
import pooltogetherLogoSrc from "@/app/_assets/logos/pooltogether.svg";
import rangoLogoSrc from "@/app/_assets/logos/rango.svg";
import snxLogoSrc from "@/app/_assets/logos/snx.svg";
import socketLogoSrc from "@/app/_assets/logos/socket.svg";
import xyLogoSrc from "@/app/_assets/logos/xy.svg";
import tahoLogoSrc from "@/app/_assets/logos/taho.svg";
import swingLogoSrc from "@/app/_assets/logos/swing.svg";
import metamaskLogoSrc from "@/app/_assets/logos/metamask.svg";
import uniswapLogoSrc from "@/app/_assets/logos/uniswap.svg";
import kyberswapLogoSrc from "@/app/_assets/logos/kyberswap.svg";
import pancakeswapLogoSrc from "@/app/_assets/logos/pancakeswap.svg";
import maldaLogoSrc from "@/app/_assets/logos/malda.svg";

const partners = [
  {
    logo: <Image src={xyLogoSrc} alt="xy logo" />,
  },
  {
    logo: <Image src={tahoLogoSrc} alt="taho logo" />,
  },
  {
    logo: <Image src={swingLogoSrc} alt="swing logo" />,
  },
  {
    logo: <Image src={metamaskLogoSrc} alt="metamask logo" />,
  },
  {
    logo: <Image src={balancerLogoSrc} alt="balancer logo" />,
  },
  {
    logo: <Image src={bungeeLogoSrc} alt="bungee logo" />,
  },
  {
    logo: <Image src={chainhopLogoSrc} alt="chainhop logo" />,
  },
  {
    logo: <Image src={dodoLogoSrc} alt="dodo logo" />,
  },
  {
    logo: <Image src={jumperLogoSrc} alt="jumper logo" />,
  },
  {
    logo: <Image src={lifiLogoSrc} alt="lifi logo" />,
  },
  {
    logo: <Image src={okxLogoSrc} alt="okx logo" />,
  },
  {
    logo: <Image src={pooltogetherLogoSrc} alt="pooltogether logo" />,
  },
  {
    logo: <Image src={rangoLogoSrc} alt="rango logo" />,
  },
  {
    logo: <Image src={snxLogoSrc} alt="snx logo" />,
  },
  {
    logo: <Image src={socketLogoSrc} alt="socket logo" />,
  },
  {
    logo: <Image src={uniswapLogoSrc} alt="uniswap logo" />,
  },
  {
    logo: <Image src={kyberswapLogoSrc} className="px-8" alt="kyberswap logo" />,
  },
  {
    logo: <Image src={pancakeswapLogoSrc} className="px-4" alt="pancakeswap logo" />,
  },
  {
    logo: <Image src={maldaLogoSrc} className="px-8" alt="malda logo" />,
  },
];

export function PartnersTicker() {
  return (
    <Ticker title={"trusted by top tier applications"} items={partners} variant="30" />
  );
}
