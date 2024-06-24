import { SVGProps } from "react";

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="57"
      height="56"
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        opacity="0.5"
        y="20.5625"
        width="14.875"
        height="14.875"
        rx="3.5"
        fill="#44D2FF"
        fill-opacity="0.15"
      />
      <rect
        x="20.875"
        width="14.875"
        height="14.875"
        rx="3.5"
        fill="#44D2FF"
        fill-opacity="0.15"
      />
      <rect
        opacity="0.2"
        x="20.875"
        y="41.125"
        width="14.875"
        height="14.875"
        rx="3.5"
        fill="#44D2FF"
        fill-opacity="0.15"
      />
      <rect
        opacity="0.5"
        x="41.75"
        y="20.5625"
        width="14.875"
        height="14.875"
        rx="3.5"
        fill="#44D2FF"
        fill-opacity="0.15"
      />
      <path
        d="M28 20V29L34 32M43 29C43 37.2843 36.2843 44 28 44C19.7157 44 13 37.2843 13 29C13 20.7157 19.7157 14 28 14C36.2843 14 43 20.7157 43 29Z"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28 20V29L34 32M43 29C43 37.2843 36.2843 44 28 44C19.7157 44 13 37.2843 13 29C13 20.7157 19.7157 14 28 14C36.2843 14 43 20.7157 43 29Z"
        stroke="url(#paint0_linear_1942_4203)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1942_4203"
          x1="28"
          y1="14"
          x2="28"
          y2="44"
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
