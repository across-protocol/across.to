import { LogoIconProps } from "./types";

export function BscIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 192" {...props}>
      <path
        fill={`url(#${linearGradientBasedId}_1)`}
        d="M45.031 29.409 95.981 0l50.951 29.409L128.2 40.273 95.982 21.73 63.763 40.273 45.031 29.41Zm101.901 37.089L128.2 55.633 95.982 74.178 63.763 55.633 45.031 66.497v21.73L77.25 106.77v37.089l18.732 10.865 18.732-10.865V106.77l32.218-18.544V66.498Zm0 58.817v-21.729L128.2 114.45v21.729l18.732-10.864Zm13.299 7.68-32.218 18.544v21.729l50.95-29.409V85.042l-18.732 10.864v37.089ZM141.5 47.953l18.731 10.864v21.73l18.732-10.865V47.953L160.231 37.09 141.5 47.953ZM77.25 159.407v21.729L95.982 192l18.732-10.864v-21.729l-18.732 10.864-18.732-10.864ZM45.03 125.315l18.732 10.864V114.45l-18.732-10.864v21.729ZM77.25 47.953l18.732 10.864 18.732-10.864L95.982 37.09 77.25 47.953ZM31.732 58.817l18.731-10.864L31.732 37.09 13 47.953v21.729l18.732 10.864V58.817Zm0 37.09L13 85.041v58.817l50.95 29.409v-21.729l-32.218-18.544V95.906Z"
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
      </defs>
    </svg>
  );
}
