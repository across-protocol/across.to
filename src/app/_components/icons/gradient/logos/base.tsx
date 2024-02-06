import { LogoIconProps } from "./types";

export function BaseIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="47"
      viewBox="0 0 45 47"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_564_7528)" filter="url(#filter0_b_564_7528)">
        <path d="M22.5227 45.6088C34.9333 45.6088 45.001 35.5456 45.001 23.1249C45.001 10.7113 34.9403 0.641113 22.5227 0.641113C10.7524 0.641113 1.08573 9.70502 0.128906 21.2319H29.8326V25.0109H0.128906C1.08573 36.5449 10.7524 45.6088 22.5227 45.6088Z" />
        <path
          d="M22.5227 45.6088C34.9333 45.6088 45.001 35.5456 45.001 23.1249C45.001 10.7113 34.9403 0.641113 22.5227 0.641113C10.7524 0.641113 1.08573 9.70502 0.128906 21.2319H29.8326V25.0109H0.128906C1.08573 36.5449 10.7524 45.6088 22.5227 45.6088Z"
          fill={`url(#${linearGradientBasedId}_1)`}
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <stop offset="0.234414" stop-color="#6CF9D8" />
          <stop offset="0.386534" stop-color="#B1FFED" />
          <stop offset="0.508728" stop-color="white" />
          <stop offset="0.513716" stop-color="#009A76" />
          <stop offset="0.620948" stop-color="#C1FFF0" />
          <stop offset="0.708229" stop-color="#29997F" />
          <stop offset="0.78803" stop-color="#ADFFEC" />
        </linearGradient>
        <linearGradient
          id="paint_linear_gradient_purple_1"
          x1="22.5649"
          y1="0.641113"
          x2="22.5649"
          y2="72.5005"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stop-color="#A26CF9" />
          <stop offset="0.386534" stop-color="#CEB1FF" />
          <stop offset="0.508728" stop-color="white" />
          <stop offset="0.513716" stop-color="#3B009A" />
          <stop offset="0.620948" stop-color="#D8C1FF" />
          <stop offset="0.708229" stop-color="#542999" />
          <stop offset="0.78803" stop-color="#CCADFF" />
        </linearGradient>
        <linearGradient
          id="paint_linear_gradient_teal_1"
          x1="22.5649"
          y1="0.641113"
          x2="22.5649"
          y2="45.6088"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stop-color="#6CD3F9" />
          <stop offset="0.386534" stop-color="#B1EAFF" />
          <stop offset="0.508728" stop-color="white" />
          <stop offset="0.513716" stop-color="#00719A" />
          <stop offset="0.620948" stop-color="#C1EEFF" />
          <stop offset="0.708229" stop-color="#297B99" />
          <stop offset="0.78803" stop-color="#ADE9FF" />
        </linearGradient>
        <clipPath id="clip0_564_7528">
          <rect width="45" height="46" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
