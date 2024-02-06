import { SVGProps } from "react";

export type LogoIconVariant = "aqua" | "teal" | "purple";

export type LogoIconProps = SVGProps<SVGSVGElement> & {
  variant?: LogoIconVariant;
};
