import { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_564_7550)" filter="url(#filter0_b_564_7550)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0281 3.75137C24.0281 1.67955 22.3485 0 20.2767 0C18.2049 0 16.5253 1.67955 16.5253 3.75137V16.2589H4.02871C1.95689 16.2589 0.277344 17.9385 0.277344 20.0103C0.277344 22.0821 1.95689 23.7616 4.02871 23.7616H16.5253V36.2486C16.5253 38.3204 18.2049 40 20.2767 40C22.3485 40 24.0281 38.3204 24.0281 36.2486V23.7616H36.526C38.5978 23.7616 40.2773 22.0821 40.2773 20.0103C40.2773 17.9385 38.5978 16.2589 36.526 16.2589H24.0281V3.75137Z"
          fill="url(#paint0_linear_564_7550)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0281 3.75137C24.0281 1.67955 22.3485 0 20.2767 0C18.2049 0 16.5253 1.67955 16.5253 3.75137V16.2589H4.02871C1.95689 16.2589 0.277344 17.9385 0.277344 20.0103C0.277344 22.0821 1.95689 23.7616 4.02871 23.7616H16.5253V36.2486C16.5253 38.3204 18.2049 40 20.2767 40C22.3485 40 24.0281 38.3204 24.0281 36.2486V23.7616H36.526C38.5978 23.7616 40.2773 22.0821 40.2773 20.0103C40.2773 17.9385 38.5978 16.2589 36.526 16.2589H24.0281V3.75137Z"
          fill="url(#paint1_linear_564_7550)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_564_7550"
          x="-12"
          y="-12"
          width="65"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7550"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7550"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_564_7550"
          x1="20.2773"
          y1="0"
          x2="20.2773"
          y2="39.8076"
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
          id="paint1_linear_564_7550"
          x1="20.2773"
          y1="0"
          x2="20.2773"
          y2="40"
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
        <clipPath id="clip0_564_7550">
          <rect width="41" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
