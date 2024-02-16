import { ComponentProps } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

import { PartnersTicker } from "./partners-ticker";

type HeroProps = ComponentProps<"section"> & {
  title: string;
};

export function Hero({ className, children, title, ...props }: HeroProps) {
  return (
    <section className={twMerge("min-h-screen", className)} {...props}>
      {children}
      <PartnersTicker title={title} />
    </section>
  );
}
