import { ComponentProps } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

type HeroProps = ComponentProps<"section">;

export function Hero({ className, children, ...props }: HeroProps) {
  return (
    <section className={twMerge("min-h-screen", className)} {...props}>
      {children}
    </section>
  );
}
