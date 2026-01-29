import { LogoIconProps } from "./types";

export function InkIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100 50C100 22.3858 77.6142 -1.20706e-06 50 0C22.3858 1.20706e-06 -1.20706e-06 22.3858 0 50C1.20706e-06 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50ZM57.1364 87.4208C57.1364 90.8128 54.3524 93.57 50.4008 93.6491C50.2913 93.6501 50.1817 93.6506 50.072 93.6508H49.928C25.8534 93.6119 6.3492 74.0837 6.3492 50.0001C6.3492 25.8924 25.8923 6.34929 50 6.34928C50.13 6.34928 50.2599 6.34985 50.3896 6.35099C54.8489 6.43041 57.1364 9.18744 57.1364 12.5792C57.1364 16.0313 54.0849 18.5714 50.8519 18.5714C47.6191 18.5715 47.4603 18.5715 44.3657 18.8194C41.2711 19.0674 38.0711 21.6076 38.0711 25.0494C38.0711 28.5117 40.8836 31.2998 44.3657 31.2998H71.8109C75.2828 31.2998 78.0953 34.088 78.0953 37.5298C78.0953 40.9716 75.2828 43.7598 71.8109 43.7598H29.5381C26.056 43.7598 23.2435 46.5582 23.2435 50.0102C23.2435 53.4521 26.056 56.2402 29.5381 56.2402H50.852C54.3239 56.2402 57.1364 59.0284 57.1364 62.4804C57.1364 65.9222 54.3239 68.7104 50.852 68.7104H44.3657C40.8836 68.7104 38.0711 71.4986 38.0711 74.9404C38.0711 78.3924 40.9536 80.9122 44.3657 81.1704C44.6347 81.1908 44.8806 81.2095 45.1072 81.2268C46.3081 81.3183 46.9642 81.3683 47.6212 81.3957C48.4125 81.4286 49.2051 81.4286 50.9524 81.4286C54.4242 81.4286 57.1364 83.979 57.1364 87.4208Z"
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
