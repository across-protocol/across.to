import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { PartnersTicker } from "./partners-ticker";

type HeroProps = ComponentProps<"section">;

export function Hero({ className, children, ...props }: HeroProps) {
  return (
    <section className={twMerge("min-h-screen", className)} {...props}>
      {children}
      <PartnersTicker />
    </section>
  );
}
