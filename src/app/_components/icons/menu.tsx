import { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="2.75" width="16" height="1.5" fill="#9DAAB3" />
      <rect y="7.25" width="16" height="1.5" fill="#9DAAB3" />
      <rect y="11.75" width="16" height="1.5" fill="#9DAAB3" />
    </svg>
  );
}
