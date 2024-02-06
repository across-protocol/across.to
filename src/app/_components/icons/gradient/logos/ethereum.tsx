import { LogoIconProps } from "./types";

export function EthereumIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="31"
      height="53"
      viewBox="0 0 31 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_564_7445)">
        <path
          d="M15.2869 0L14.9531 1.14454V34.3565L15.2869 34.6927L30.5671 25.5799L15.2869 0Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
        <path
          d="M15.2802 0L0 25.5799L15.2802 34.6928V18.5727V0Z"
          fill={`url(#${linearGradientBasedId}_2)`}
        />
        <path
          d="M15.2818 39.7078L15.0938 39.9391V51.7699L15.2818 52.3241L30.5712 30.5996L15.2818 39.7078Z"
          fill={`url(#${linearGradientBasedId}_3)`}
        />
        <path
          d="M15.2802 52.3242V39.7078L0 30.5996L15.2802 52.3242Z"
          fill={`url(#${linearGradientBasedId}_4)`}
        />
        <path
          d="M15.2773 34.6912L30.5573 25.5785L15.2773 18.5713V34.6912Z"
          fill={`url(#${linearGradientBasedId}_5)`}
        />
        <path
          d="M0 25.5785L15.28 34.6913V18.5713L0 25.5785Z"
          fill={`url(#${linearGradientBasedId}_6)`}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_564_7445"
          x="-13.5"
          y="-13.5"
          width="58"
          height="80"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7445"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7445"
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
          x1="23.4281"
          y1="0"
          x2="23.4281"
          y2="55.4397"
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
          x1="22.7601"
          y1="0"
          x2="22.7601"
          y2="34.6927"
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
          id="paint_linear_gradient_aqua_2"
          x1="7.6401"
          y1="0"
          x2="7.6401"
          y2="34.6928"
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
          id="paint_linear_gradient_purple_2"
          x1="8.30807"
          y1="0"
          x2="8.30807"
          y2="55.4399"
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
          id="paint_linear_gradient_teal_2"
          x1="7.6401"
          y1="0"
          x2="7.6401"
          y2="34.6928"
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
          id="paint_linear_gradient_aqua_3"
          x1="22.8325"
          y1="30.5996"
          x2="22.8325"
          y2="52.3241"
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
          id="paint_linear_gradient_purple_3"
          x1="23.5005"
          y1="30.5996"
          x2="23.5005"
          y2="65.3159"
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
          id="paint_linear_gradient_teal_3"
          x1="22.8325"
          y1="30.5996"
          x2="22.8325"
          y2="52.3241"
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
          id="paint_linear_gradient_aqua_4"
          x1="7.6401"
          y1="30.5996"
          x2="7.6401"
          y2="52.3242"
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
          id="paint_linear_gradient_purple_4"
          x1="8.30807"
          y1="30.5996"
          x2="8.30807"
          y2="65.3161"
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
          id="paint_linear_gradient_teal_4"
          x1="7.6401"
          y1="30.5996"
          x2="7.6401"
          y2="52.3242"
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
          id="paint_linear_gradient_aqua_5"
          x1="22.9173"
          y1="18.5713"
          x2="22.9173"
          y2="34.6912"
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
          id="paint_linear_gradient_purple_5"
          x1="23.5853"
          y1="18.5713"
          x2="23.5853"
          y2="44.3312"
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
          id="paint_linear_gradient_teal_5"
          x1="22.9173"
          y1="18.5713"
          x2="22.9173"
          y2="34.6912"
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
          id="paint_linear_gradient_aqua_6"
          x1="7.63998"
          y1="18.5713"
          x2="7.63998"
          y2="34.6913"
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
          id="paint_linear_gradient_purple_6"
          x1="8.30795"
          y1="18.5713"
          x2="8.30795"
          y2="44.3314"
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
          id="paint_linear_gradient_teal_6"
          x1="7.63998"
          y1="18.5713"
          x2="7.63998"
          y2="34.6913"
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
      </defs>
    </svg>
  );
}
