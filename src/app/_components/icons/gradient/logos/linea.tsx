import { LogoIconProps } from "./types";

export function LineaIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="47"
      height="48"
      viewBox="0 0 47 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1811_6092"
        maskUnits="userSpaceOnUse"
        x="0"
        y="-1"
        width="47"
        height="49"
      >
        <path
          d="M46.9193 -0.00756836H0.835938V47.9924H46.9193V-0.00756836Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1811_6092)">
        <path
          d="M39.1083 47.9923H0.835938V7.78125H9.59268V40.1993H39.1083V47.9881V47.9923Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
        <path
          d="M39.1079 15.5701C43.4218 15.5701 46.919 12.0829 46.919 7.78128C46.919 3.47962 43.4218 -0.00756836 39.1079 -0.00756836C34.7936 -0.00756836 31.2969 3.47962 31.2969 7.78128C31.2969 12.0829 34.7936 15.5701 39.1079 15.5701Z"
          fill={`url(#${linearGradientBasedId}_2)`}
        />
      </g>
      <defs>
        <linearGradient
          id="paint_linear_gradient_teal_1"
          x1="19.9721"
          y1="7.78125"
          x2="19.9721"
          y2="47.9923"
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
        <linearGradient
          id="paint_linear_gradient_purple_1"
          x1="19.9721"
          y1="7.78125"
          x2="19.2307"
          y2="55.1192"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#A26CF9" />
          <stop offset="0.386534" stopColor="#CEB1FF" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#3B009A" />
          <stop offset="0.620948" stopColor="#D8C1FF" />
          <stop offset="0.708229" stopColor="#542999" />
          <stop offset="0.78803" stopColor="#CCADFF" />
        </linearGradient>
        <linearGradient
          id="paint_linear_gradient_teal_2"
          x1="39.1079"
          y1="-0.00756836"
          x2="39.1079"
          y2="15.5701"
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
        <linearGradient
          id="paint_linear_gradient_purple_2"
          x1="39.1079"
          y1="-0.00756836"
          x2="38.8353"
          y2="18.3315"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#A26CF9" />
          <stop offset="0.386534" stopColor="#CEB1FF" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#3B009A" />
          <stop offset="0.620948" stopColor="#D8C1FF" />
          <stop offset="0.708229" stopColor="#542999" />
          <stop offset="0.78803" stopColor="#CCADFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
