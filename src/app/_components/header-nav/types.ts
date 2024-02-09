import { SVGProps } from "react";

export type NavItem = {
  label: string;
  description: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  iconClassName: string;
  iconContainerClassName: string;
  containerClassName: string;
};
