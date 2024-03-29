import { SVGProps } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

export function DoubleChevronRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-12 w-12", className)}
      {...props}
    >
      <rect
        opacity="0.5"
        y="35.25"
        width="25.5"
        height="25.5"
        rx="6"
        fill="#6CF9D8"
        fillOpacity="0.15"
      />
      <rect
        opacity="0.5"
        x="70.5"
        y="35.25"
        width="25.5"
        height="25.5"
        rx="6"
        fill="#6CF9D8"
        fillOpacity="0.15"
      />
      <rect
        x="36.2148"
        width="25.5"
        height="25.5"
        rx="6"
        fill="#6CF9D8"
        fillOpacity="0.15"
      />
      <rect
        opacity="0.5"
        x="36.2148"
        y="35.25"
        width="25.5"
        height="25.5"
        rx="6"
        fill="#6CF9D8"
        fillOpacity="0.15"
      />
      <rect
        opacity="0.2"
        x="36.2148"
        y="70.5"
        width="25.5"
        height="25.5"
        rx="6"
        fill="#6CF9D8"
        fillOpacity="0.15"
      />
      <path
        d="M52 68.001L72 48.001L52 28.001"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 68.001L72 48.001L52 28.001"
        stroke="url(#paint0_linear_564_7414)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 68.001L44 48.001L24 28.001"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 68.001L44 48.001L24 28.001"
        stroke="url(#paint1_linear_564_7414)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_564_7414"
          x1="72"
          y1="48.001"
          x2="52"
          y2="48.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#6CF9D8" />
          <stop offset="0.386534" stopColor="#B1FFED" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#009A76" />
          <stop offset="0.620948" stopColor="#C1FFF0" />
          <stop offset="0.708229" stopColor="#29997F" />
          <stop offset="0.78803" stopColor="#ADFFEC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_564_7414"
          x1="44"
          y1="48.001"
          x2="24"
          y2="48.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#6CF9D8" />
          <stop offset="0.386534" stopColor="#B1FFED" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#009A76" />
          <stop offset="0.620948" stopColor="#C1FFF0" />
          <stop offset="0.708229" stopColor="#29997F" />
          <stop offset="0.78803" stopColor="#ADFFEC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
