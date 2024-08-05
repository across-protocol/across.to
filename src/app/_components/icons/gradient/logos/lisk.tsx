import { LogoIconProps } from "./types";

export function LiskIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="39"
      height="45"
      viewBox="0 0 39 45"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_9_35)">
        <path
          d="M14.89 44.934L20.7667 38.3309C20.8658 38.2318 20.7998 38.0668 20.6347 38.0668H14.1637C14.1306 38.0668 14.0646 38.0338 14.0316 38.0007L8.55104 31.8599C8.51802 31.7938 8.48501 31.7278 8.51802 31.6618L17.6963 15.9134C17.7293 15.8474 17.7293 15.7814 17.6963 15.7484L13.8995 9.21131C13.8335 9.11226 13.6684 9.11226 13.6024 9.21131L0.0330623 32.5202C4.69295e-05 32.5862 4.69295e-05 32.6522 0.0330623 32.7183L10.9281 44.967C10.9612 45 10.9942 45.033 11.0602 45.033H14.7579C14.7909 45 14.857 44.967 14.89 44.934Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
        <path
          d="M18.9178 0.0990462L15.088 6.6361C15.055 6.70213 15.055 6.76816 15.088 6.80117L19.0498 13.6023L29.5487 31.6288C29.5818 31.6948 29.5818 31.7608 29.5157 31.8269L23.9691 38.0337L18.0594 44.7029C17.9603 44.8019 18.0264 44.967 18.1914 44.967H27.0396C27.0726 44.967 27.1386 44.934 27.1716 44.901L38.0667 32.6522C38.0997 32.5862 38.1328 32.5202 38.0997 32.4541L19.1819 0.0990462C19.1489 -0.0330154 18.9838 -0.0330154 18.9178 0.0990462Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
      </g>
      {/* <defs>
    <clipPath id="clip0_9_35">
      <rect width="38.0998" height="45" fill="white" />
    </clipPath>
  </defs> */}
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
