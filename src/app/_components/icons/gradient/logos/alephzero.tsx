import { LogoIconProps } from "./types";

export function AlephZeroIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="315"
      height="300"
      viewBox="0 0 315 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M260.584 172.334H310.5C311.693 172.334 312.838 171.86 313.682 171.016C314.526 170.173 315 169.028 315 167.834V131.834C315 130.641 314.526 129.496 313.682 128.652C312.838 127.809 311.693 127.334 310.5 127.334H240.549L185.44 3.55957C184.969 2.49991 184.2 1.59972 183.227 0.967968C182.254 0.336218 181.119 -4.20853e-06 179.959 0H135.041C133.881 -1.39733e-06 132.746 0.336223 131.773 0.967973C130.8 1.59972 130.031 2.49991 129.56 3.55957L74.4521 127.334H4.5C3.30653 127.334 2.16193 127.809 1.31802 128.652C0.474106 129.496 0 130.641 0 131.834V167.834C0 169.028 0.474106 170.173 1.31802 171.016C2.16193 171.86 3.30653 172.334 4.5 172.334H54.416L0.39458 293.669C0.0895059 294.354 -0.0394687 295.105 0.0193812 295.853C0.078231 296.6 0.323039 297.322 0.731549 297.951C1.14006 298.58 1.69932 299.097 2.35848 299.455C3.01764 299.813 3.7558 300 4.50586 300H44.6792C45.8392 300 46.9743 299.664 47.9472 299.032C48.92 298.4 49.6889 297.5 50.1607 296.44L157.5 55.3521L264.839 296.44C265.311 297.5 266.08 298.4 267.053 299.032C268.026 299.664 269.161 300 270.321 300H310.495C311.245 300 311.983 299.813 312.642 299.455C313.301 299.097 313.861 298.58 314.269 297.951C314.677 297.322 314.922 296.601 314.981 295.853C315.04 295.105 314.911 294.355 314.606 293.67L260.584 172.334Z"
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
