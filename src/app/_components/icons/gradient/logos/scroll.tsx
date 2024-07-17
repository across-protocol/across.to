import { LogoIconProps } from "./types";

export function ScrollIcon({ variant = "aqua", ...props }: LogoIconProps) {
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
        d="M10.7894 18.9885C9.5984 17.8605 8.7539 16.3965 8.7539 14.652L8.7569 14.4675C8.8529 11.5035 11.2934 9.1185 14.2529 9.024H33.1349C33.6299 9.0405 34.0274 9.396 34.0274 9.897V25.869C34.4639 25.9485 34.6724 26.001 35.0909 26.154C35.4179 26.2725 35.8829 26.5365 35.8829 26.5365V9.897C35.8544 8.382 34.6559 7.164 33.1364 7.164H14.2544C10.1819 7.2315 6.8999 10.5585 6.8999 14.652C6.8999 17.0295 7.9814 19.0545 9.7574 20.4825C9.8759 20.577 9.9929 20.7015 10.3109 20.7C10.8674 20.6985 11.2574 20.262 11.2349 19.7775C11.2154 19.3785 11.0474 19.2315 10.7894 18.987V18.9885Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M32.6536 26.9295H17.8426C16.8481 26.9385 16.0441 27.747 16.0441 28.743V30.867C16.0726 31.851 16.9111 32.694 17.9011 32.694H19.0021V30.867H17.9011V28.788H18.5011C20.3701 28.788 21.7456 30.528 21.7456 32.385C21.7456 34.029 20.2486 36.138 17.7331 35.9685C15.4996 35.8185 14.3011 33.8355 14.3026 32.385V14.3325C14.3026 13.5165 13.6411 12.855 12.8251 12.855H11.3491V14.697H12.4471V32.382C12.3916 35.979 15.0091 37.791 17.7346 37.791L32.6521 37.8345C35.6596 37.8345 38.0986 35.3925 38.0986 32.3805C38.0986 29.3685 35.6611 26.9265 32.6521 26.9265L32.6536 26.9295ZM36.2431 32.502C36.1816 34.434 34.5976 35.9805 32.6536 35.9805L22.2721 35.94C23.1016 34.983 23.6011 33.738 23.6011 32.3835C23.6011 30.252 22.3306 28.7865 22.3306 28.7865H32.6536C34.6366 28.7865 36.2446 30.396 36.2446 32.3835V32.502H36.2431Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M28.6679 13.188H17.5049V15.03H28.6694C29.1779 15.03 29.5904 14.6175 29.5904 14.109C29.5904 13.6005 29.1779 13.188 28.6694 13.188H28.6679Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M28.6679 21.8805H17.5049V23.7225H28.6694C29.1779 23.7225 29.5904 23.31 29.5904 22.8015C29.5904 22.293 29.1779 21.8805 28.6694 21.8805H28.6679Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M30.6329 17.535H17.5049V19.377H30.6329C31.1414 19.377 31.5539 18.9645 31.5539 18.456C31.5539 17.9475 31.1414 17.535 30.6329 17.535Z"
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
