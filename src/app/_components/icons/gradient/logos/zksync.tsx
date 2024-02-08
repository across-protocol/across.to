import { LogoIconProps } from "./types";

export function ZkSyncIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="31"
      viewBox="0 0 56 31"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_564_7544)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.9094 15.792L38.8289 0.638184V11.7363L23.8555 22.8478L38.8289 22.8581V30.9458L53.9094 15.792Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.9094 15.792L38.8289 0.638184V11.7363L23.8555 22.8478L38.8289 22.8581V30.9458L53.9094 15.792Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.757812 15.7856L15.8383 30.9394V19.9589L30.702 8.84005L15.8383 8.82974V0.631836L0.757812 15.7856Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.757812 15.7856L15.8383 30.9394V19.9589L30.702 8.84005L15.8383 8.82974V0.631836L0.757812 15.7856Z"
          fill={`url(#${linearGradientBasedId}_2)`}
        />
      </g>
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
          x1="38.8824"
          y1="0.638184"
          x2="38.8824"
          y2="30.9458"
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
          x1="38.8824"
          y1="0.638184"
          x2="38.8824"
          y2="49.0705"
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
          x1="38.8824"
          y1="0.638184"
          x2="38.8824"
          y2="30.9458"
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
          id="paint_linear_gradient_aqua_2"
          x1="15.7299"
          y1="0.631836"
          x2="15.7299"
          y2="30.9394"
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
          id="paint_linear_gradient_purple_2"
          x1="15.7299"
          y1="0.631836"
          x2="15.7299"
          y2="49.064"
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
          x1="15.7299"
          y1="0.631836"
          x2="15.7299"
          y2="30.9394"
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
        <clipPath id="clip0_564_7528">
          <rect width="45" height="46" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
