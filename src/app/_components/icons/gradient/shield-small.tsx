import { SVGProps } from "react";

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4.28571"
        y="4.28571"
        width="87.4286"
        height="87.4286"
        rx="43.7143"
        stroke="url(#paint0_linear_564_7328)"
        strokeOpacity="0.15"
        strokeWidth="8.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="44.57 44.57"
      />
      <path
        d="M44.0242 71.3162C46.4542 72.9433 49.5492 72.9433 51.9792 71.3162C57.5118 67.6115 66.8588 59.8526 66.8588 49.7144V39.2101C66.8588 35.4189 64.519 32.021 60.9772 30.6687L51.2629 26.9596C49.1627 26.1577 46.8406 26.1577 44.7404 26.9596L35.0261 30.6687C31.4843 32.021 29.1445 35.4189 29.1445 39.2101V49.7144C29.1445 59.8526 38.4915 67.6115 44.0242 71.3162Z"
        fill="url(#paint1_linear_564_7328)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_564_7328"
          x1="48"
          y1="0"
          x2="48"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44D2FF" />
          <stop offset="1" stopColor="#44D2FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_564_7328"
          x1="48.0017"
          y1="25.7144"
          x2="48.0017"
          y2="73.7144"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#6CD3F9" />
          <stop offset="0.386534" stopColor="#B1EAFF" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#00719A" />
          <stop offset="0.620948" stopColor="#C1EEFF" />
          <stop offset="0.708229" stopColor="#297B99" />
          <stop offset="0.78803" stopColor="#ADE9FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
