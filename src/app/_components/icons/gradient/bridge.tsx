import { SVGProps } from "react";

export function BridgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_564_7547)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 8C13.5428 8 8 13.5332 8 20.7477V36C8 38.2091 6.20914 40 4 40C1.79086 40 0 38.2091 0 36V20.7477C0 9.46317 8.78411 0 20 0C31.2159 0 40 9.46317 40 20.7477V36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36V20.7477C32 13.5332 26.4572 8 20 8Z"
          fill="url(#paint0_linear_564_7547)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_564_7547"
          x1="20"
          y1="-10.9706"
          x2="20"
          y2="50.1865"
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
        <clipPath id="clip0_564_7547">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
