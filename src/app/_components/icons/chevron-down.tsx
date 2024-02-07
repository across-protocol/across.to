import { SVGProps } from "react";

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 7L8 11L4 7"
        stroke="#C5D5E0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
