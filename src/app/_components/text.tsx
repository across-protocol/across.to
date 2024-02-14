import { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

type TextVariant = keyof typeof textBaseClasses;

type Props = ComponentProps<"div"> & {
  variant?: TextVariant;
};

const textBaseClasses = {
  body: "text-md",
  "cap-case":
    "text-medium text-xs uppercase lining-nums tabular-nums tracking-wide-4 sm:text-md",
  "heading-1":
    "text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-2 md:text-heading-1",
  "heading-2":
    "text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-2",
  "heading-3":
    "text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-3",
  "heading-4":
    "text-heading-4 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-4",
  "body-nums": "text-md lining-nums tabular-nums sm:text-lg",
  "body-nums-sm": "text-sm lining-nums tabular-nums",
};

export function Text({ variant = "body", className, children, ...props }: Props) {
  return (
    <div className={twJoin(textBaseClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
