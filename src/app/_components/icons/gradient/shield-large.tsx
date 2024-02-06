import { SVGProps } from "react";

export function ShieldLargeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="96"
      height="98"
      viewBox="0 0 96 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="96" height="25.7143" rx="6" fill="#6CF9D8" fill-opacity="0.15" />
      <rect
        y="35.0356"
        width="96"
        height="25.7143"
        rx="6"
        fill="#6CF9D8"
        fill-opacity="0.15"
      />
      <rect
        y="70.2856"
        width="96"
        height="25.7143"
        rx="6"
        fill="#6CF9D8"
        fill-opacity="0.15"
      />
      <g filter="url(#filter0_d_564_7400)">
        <path
          d="M43.7598 78.8513C46.2448 80.4572 49.3762 80.4572 51.8612 78.8513C59.0606 74.1988 73.3359 63.1117 73.3359 48.343V31.5693C73.3359 27.7927 71.0139 24.4047 67.4917 23.0422L51.1091 16.7048C48.9867 15.8837 46.6343 15.8837 44.5119 16.7048L28.1294 23.0422C24.6072 24.4047 22.2852 27.7927 22.2852 31.5693V48.343C22.2852 63.1117 36.5604 74.1988 43.7598 78.8513Z"
          fill="url(#paint0_linear_564_7400)"
        />
        <path
          d="M43.7598 78.8513C46.2448 80.4572 49.3762 80.4572 51.8612 78.8513C59.0606 74.1988 73.3359 63.1117 73.3359 48.343V31.5693C73.3359 27.7927 71.0139 24.4047 67.4917 23.0422L51.1091 16.7048C48.9867 15.8837 46.6343 15.8837 44.5119 16.7048L28.1294 23.0422C24.6072 24.4047 22.2852 27.7927 22.2852 31.5693V48.343C22.2852 63.1117 36.5604 74.1988 43.7598 78.8513Z"
          fill="url(#paint1_linear_564_7400)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_564_7400"
          x="9.37759"
          y="7.48382"
          width="76.8659"
          height="89.7819"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.30252" />
          <feGaussianBlur stdDeviation="6.45378" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_564_7400"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_564_7400"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_564_7400"
          x1="47.8105"
          y1="15.4287"
          x2="47.8105"
          y2="81.2573"
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
        <linearGradient
          id="paint1_linear_564_7400"
          x1="47.8105"
          y1="15.4287"
          x2="47.8105"
          y2="81.2573"
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
      </defs>
    </svg>
  );
}
