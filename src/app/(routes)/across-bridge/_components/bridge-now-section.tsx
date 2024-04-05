import Image from "next/image";

import { Text } from "@/app/_components/text";
import { BridgeNowLink } from "@/app/_components/bridge-now-link";
import { Button } from "@/app/_components/button";
import bridgeNowImage from "@/app/_assets/bridge-now.png";

export function BridgeNowSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-16 sm:gap-24">
      <Image
        src={bridgeNowImage}
        alt="screenshot of bridge ui"
        className="min-[455px]:max-w-[455px]"
      />
      <Text
        variant="heading-1"
        className="text-center capitalize text-light-100 md:tracking-tight-1"
      >
        Experience The Best Bridge
      </Text>
      <div className="flex flex-row items-center">
        <BridgeNowLink section="marketingHero">
          <Button className="border-aqua-100 bg-aqua-100/[.05] text-aqua-100">
            <Text variant="cap-case-sm">Bridge now</Text>
          </Button>
        </BridgeNowLink>
      </div>
    </section>
  );
}
