import { LogoIconProps } from "./types";

export function ArbitrumIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="49"
      viewBox="0 0 43 49"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_564_7460)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.6693 10.9286C41.9058 11.7056 42.6951 13.0402 42.7535 14.4981L42.7535 34.4443C42.6987 35.7532 42.0904 36.9615 41.0563 37.7627L23.1278 48.1455C23.0695 48.1793 23.0088 48.209 22.9455 48.2321C22.4595 48.4098 21.9486 48.5 21.4255 48.5C20.8177 48.5 20.1433 48.3675 19.6745 48.1398C19.6151 48.111 19.4468 48.0183 19.2 47.8799C19.0405 47.7904 18.8462 47.6805 18.6281 47.5564L13.2006 44.4315C12.5577 44.0614 12.3406 43.2378 12.7173 42.5988L12.8623 42.353C13.2334 41.7235 14.0421 41.51 14.6756 41.8744L20.8709 45.4377C21.1653 45.5573 21.5064 45.576 21.8131 45.4941C21.8898 45.4736 21.9615 45.4384 22.0301 45.3986L26.9264 42.5612C27.5826 42.1809 27.7899 41.3307 27.3824 40.6911L21.9489 32.163C21.6794 31.7401 21.6701 31.2017 21.9247 30.7697L24.4447 26.4933C24.9507 25.6347 26.1854 25.6144 26.7193 26.4559L33.5598 37.2377C33.9432 37.8419 34.7351 38.0358 35.3543 37.677L35.9571 37.3276C35.9591 37.3264 35.9597 37.3239 35.9585 37.322L27.2124 23.1769C26.9521 22.7558 26.9464 22.2252 27.1978 21.7987L29.214 18.3774C29.7184 17.5216 30.948 17.4981 31.4847 18.334L37.3296 27.4376C38.0487 28.5577 39.7849 28.0484 39.7849 26.7172L39.7849 14.6073C39.7623 14.1296 39.5086 13.6926 39.104 13.4349L21.9977 3.59527C21.5978 3.39852 21.0901 3.4009 20.6907 3.6015C20.6367 3.62849 3.64267 13.4653 3.56407 13.5216C3.24908 13.7475 3.03988 14.0818 2.97255 14.4565C2.96217 14.513 2.95485 14.5704 2.95139 14.6286L2.97003 26.042C2.9722 27.3704 4.70354 27.8789 5.42375 26.7626L11.8275 16.837C12.9418 15.0182 15.3694 14.4323 17.6231 14.4641L17.9392 14.4725C18.9698 14.4996 19.5809 15.636 19.0354 16.5108L5.36461 38.435C4.98454 39.0445 4.1899 39.2434 3.56751 38.8848L0.667627 37.2137C0.254551 36.9757 1.87018e-07 36.5352 1.84544e-07 36.0585L1.7972e-07 35.1291L7.26014e-08 14.4891C0.0691085 13.1386 0.741902 11.9092 1.84566 11.1182C2.04095 10.9784 2.24775 10.8541 2.46222 10.7481C2.49341 10.7326 2.52167 10.7179 2.55177 10.7005C3.47881 10.1629 19.222 1.03275 19.3626 0.961835C20.5879 0.345594 22.1158 0.346385 23.3389 0.96223L40.6693 10.9286ZM28.0719 16.5502C28.597 15.6595 27.9525 14.536 26.9185 14.5398L23.0389 14.5538C22.5744 14.5555 22.1442 14.7989 21.9035 15.1962L7.2262 39.4165C6.83851 40.0563 7.05292 40.8897 7.70122 41.263L10.8886 43.0982C11.5221 43.4629 12.3311 43.2496 12.7024 42.6199L13.5313 41.2141L28.0719 16.5502Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_564_7460"
          x="-13.5"
          y="-13"
          width="70"
          height="75"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7460"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7460"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint_linear_gradient_aqua_1"
          x1="21.3767"
          y1="0.5"
          x2="21.3767"
          y2="48.5"
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
          x1="22.0447"
          y1="0.5"
          x2="22.0447"
          y2="77.2051"
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
          x1="21.3767"
          y1="0.5"
          x2="21.3767"
          y2="48.5"
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
