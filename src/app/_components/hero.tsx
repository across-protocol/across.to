import { ComponentProps } from "react";

type HeroProps = ComponentProps<"section">;

export function Hero({ className, children, ...props }: HeroProps) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
}
