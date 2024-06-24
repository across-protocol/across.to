import { SVGProps } from "react";

export function ChartUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_1942_3398" fill="white">
        <rect width="56" height="56" rx="3.5" />
      </mask>
      <rect
        width="56"
        height="56"
        rx="3.5"
        stroke="url(#paint0_linear_1942_3398)"
        stroke-opacity="0.15"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="26 26"
        mask="url(#path-1-inside-1_1942_3398)"
      />
      <path
        d="M14 39L22.445 28.0528C23.2456 27.0149 24.8115 27.0149 25.6121 28.0528L28.2307 31.4472C29.0314 32.4851 30.5972 32.4851 31.3979 31.4472L41 19"
        stroke="black"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M14 39L22.445 28.0528C23.2456 27.0149 24.8115 27.0149 25.6121 28.0528L28.2307 31.4472C29.0314 32.4851 30.5972 32.4851 31.3979 31.4472L41 19"
        stroke="url(#paint1_linear_1942_3398)"
        stroke-width="5"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1942_3398"
          x1="28"
          y1="0"
          x2="28"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#44D2FF" />
          <stop offset="1" stop-color="#44D2FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1942_3398"
          x1="27.5"
          y1="19"
          x2="27.5"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stop-color="#6CD3F9" />
          <stop offset="0.386534" stop-color="#B1EAFF" />
          <stop offset="0.508728" stop-color="white" />
          <stop offset="0.513716" stop-color="#00719A" />
          <stop offset="0.620948" stop-color="#C1EEFF" />
          <stop offset="0.708229" stop-color="#297B99" />
          <stop offset="0.78803" stop-color="#ADE9FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
