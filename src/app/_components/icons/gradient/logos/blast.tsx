import { LogoIconProps } from "./types";

export function BlastIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M33.6978 22.2698L39.8303 19.214L41.9443 12.7256L37.7164 9.64886H9.56521L3.05591 14.4837H36.1466L34.3885 19.9256H21.1187L19.842 23.9023H33.1117L29.3861 35.3512L35.6024 32.2744L37.821 25.4093L33.6559 22.3535L33.6978 22.2698Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M12.4117 30.4326L16.2419 18.5024L11.9931 15.321L5.60938 35.3512H29.3861L30.9768 30.4326H12.4117Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <defs>
        <filter
          id="filter0_b_564_7528"
          x="-13.5"
          y="-13"
          width="72"
          height="73"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7528"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7528"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint_linear_gradient_aqua_1"
          x1="22.5649"
          y1="0.641113"
          x2="22.5649"
          y2="45.6088"
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
          id="paint_linear_gradient_purple_1"
          x1="22.5649"
          y1="0.641113"
          x2="22.5649"
          y2="72.5005"
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
          id="paint_linear_gradient_teal_1"
          x1="22.5649"
          y1="0.641113"
          x2="22.5649"
          y2="45.6088"
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
        <clipPath id="clip0_2_7">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
