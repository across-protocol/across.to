import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { PartnersCarousel } from "./partners-carousel";

type HeroProps = ComponentProps<"section">;

export function Hero({ className, children, ...props }: HeroProps) {
  return (
    <section className={twMerge("min-h-screen", className)} {...props}>
      {children}
      <PartnersCarousel />
    </section>
  );
}
