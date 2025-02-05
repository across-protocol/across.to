import { LogoIconProps } from "./types";

export function DoctorWhoIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `doctor-who-paint_linear_gradient_${variant}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 105" {...props}>
      <defs>
        <linearGradient
          id="doctor-who-paint_linear_gradient_teal_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
          id="doctor-who-paint_linear_gradient_purple_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
          id="doctor-who-paint_linear_gradient_teal_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
          id="doctor-who-paint_linear_gradient_purple_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
      <path
        id="path-to-animate"
        fill-rule="evenodd"
        fill={`url(#${linearGradientBasedId}_1)`}
        d="M20 0H85a20 20 0 0 1 20 20V85a20 20 0 0 1-20 20H20a20 20 0 0 1-20-20V20A20 20 0 0 1 20 0Z M94 51.71c-22.495 0-40.71-18.234-40.71-40.71h-1.58v40.71H11v1.58c22.494 0 40.71 18.233 40.71 40.71h1.58V53.29H94v-1.58Z"
      />
    </svg>
  );
}
