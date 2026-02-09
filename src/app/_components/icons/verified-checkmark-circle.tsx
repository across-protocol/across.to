import { SVGProps } from "react";

export function VerifiedCheckmarkCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="6.833" fill="#6CF9D8" />
      <path
        d="M4.5346 8.3067L5.4746 7.3601L6.9813 8.8668L10.1813 5.3801L11.1613 6.2868L7.028 10.8001L4.5346 8.3067Z"
        fill="#0A0E13"
      />
    </svg>
  );
}
