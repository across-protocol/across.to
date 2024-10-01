import { LogoIconProps } from "./types";

export function OptimismIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="31"
      viewBox="0 0 61 31"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_564_7453)">
        <path
          d="M11.8766 30.2764C8.53843 30.2764 5.80338 29.4986 3.67145 27.943C1.56756 26.3597 0.515625 24.1097 0.515625 21.193C0.515625 20.5819 0.585754 19.8319 0.726014 18.943C1.09069 16.943 1.60964 14.5403 2.28289 11.7347C4.19041 4.09582 9.11349 0.276367 17.0521 0.276367C19.2121 0.276367 21.1477 0.637479 22.8589 1.3597C24.57 2.05415 25.9164 3.1097 26.8983 4.52636C27.88 5.91526 28.371 7.58192 28.371 9.52637C28.371 10.1097 28.3009 10.8458 28.1607 11.7347C27.7398 14.2069 27.2349 16.6097 26.6459 18.943C25.664 22.7486 23.9669 25.5958 21.5545 27.4847C19.1419 29.3458 15.9161 30.2764 11.8766 30.2764ZM12.4657 24.2764C14.0366 24.2764 15.369 23.818 16.4631 22.9013C17.5851 21.9847 18.3846 20.5819 18.8614 18.6931C19.5067 16.0819 19.9975 13.8041 20.3342 11.8597C20.4464 11.2764 20.5025 10.6791 20.5025 10.068C20.5025 7.54025 19.17 6.27637 16.5051 6.27637C14.9342 6.27637 13.5877 6.73471 12.4657 7.65137C11.3716 8.56804 10.5862 9.97081 10.1093 11.8597C9.60439 13.7208 9.09946 15.9986 8.59453 18.6931C8.48231 19.2485 8.42621 19.8319 8.42621 20.443C8.42621 22.9985 9.7727 24.2764 12.4657 24.2764Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
        <path
          d="M32.6469 29.859C32.379 29.859 32.1641 29.7858 32.0019 29.6393C31.9522 29.5944 31.9121 29.5397 31.8821 29.4798C31.7821 29.28 31.7564 29.0593 31.8053 28.8174L37.612 1.73405C37.6681 1.42849 37.8224 1.17849 38.0749 0.98405C38.3273 0.789605 38.5939 0.692383 38.8744 0.692383L50.0669 0.692383C53.1807 0.692383 55.6773 1.33127 57.5568 2.60906C59.4643 3.88683 60.4181 5.73405 60.4181 8.15071C60.4181 8.84515 60.334 9.56737 60.1657 10.3174C59.4643 13.5118 58.0477 15.8729 55.9158 17.4008C53.8119 18.9285 50.9225 19.6923 47.2477 19.6923L42.6475 19.6923C42.0177 19.6923 41.4738 20.1329 41.3432 20.749L39.6317 28.8174C39.5756 29.123 39.4213 29.3729 39.1688 29.5674C38.9164 29.7618 38.65 29.859 38.3693 29.859L32.6469 29.859ZM47.5423 13.9424C48.7205 13.9424 49.7444 13.6229 50.614 12.984C51.5117 12.3452 52.1007 11.4285 52.3812 10.234C52.4654 9.76182 52.5075 9.34516 52.5075 8.98404C52.5075 8.17849 52.269 7.56738 51.7922 7.15071C51.3153 6.70627 50.5018 6.48405 49.3517 6.48405L45.3801 6.48405C44.7515 6.48405 44.2082 6.92318 44.0764 7.53788L43.0491 12.3295C42.8712 13.1596 43.5039 13.9424 44.3529 13.9424L47.5423 13.9424Z"
          fill={`url(#${linearGradientBasedId}_2)`}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_564_7453"
          x="-13.5"
          y="-13.5"
          width="88"
          height="58"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7453"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7453"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint_linear_gradient_aqua_1"
          x1="22.7601"
          y1="0"
          x2="22.7601"
          y2="34.6927"
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
          x1="14.4433"
          y1="0.276367"
          x2="14.4433"
          y2="48.2171"
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
          x1="22.7601"
          y1="0"
          x2="22.7601"
          y2="34.6927"
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
          x1="7.6401"
          y1="0"
          x2="7.6401"
          y2="34.6928"
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
          x1="46.0997"
          y1="0.692383"
          x2="46.0997"
          y2="47.3013"
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
          x1="7.6401"
          y1="0"
          x2="7.6401"
          y2="34.6928"
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
