import { LogoIconProps } from "./types";

export function PolygonIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="45"
      viewBox="0 0 49 45"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_564_7457)">
        <path
          d="M37.275 14.3619C36.3928 13.8577 35.2585 13.8577 34.2503 14.3619L27.1927 18.5208L22.4036 21.1674L15.472 25.3264C14.5898 25.8305 13.4555 25.8305 12.4473 25.3264L7.02802 22.0496C6.14582 21.5455 5.51567 20.5373 5.51567 19.403L5.51567 13.1016C5.51567 12.0933 6.01979 11.0851 7.02802 10.455L12.4473 7.30423C13.3295 6.80011 14.4637 6.80011 15.472 7.30423L20.8912 10.581C21.7734 11.0851 22.4036 12.0933 22.4036 13.2276L22.4036 15.074C22.4036 16.1011 23.5161 16.7425 24.405 16.2279L26.5274 14.9991C26.9392 14.7607 27.1927 14.321 27.1927 13.8452L27.1927 10.3289C27.1927 9.32069 26.6886 8.31246 25.6803 7.68231L15.598 1.75895C14.7158 1.25483 13.5815 1.25483 12.5733 1.75895L2.23891 7.80834C1.23068 8.31246 0.726563 9.32069 0.726563 10.3289L0.726563 22.1757C0.726563 23.1839 1.23068 24.1921 2.23891 24.8223L12.4473 30.7456C13.3295 31.2498 14.4637 31.2498 15.472 30.7456L22.4036 26.7127L27.1927 23.9401L34.1243 19.9071C35.0065 19.403 36.1407 19.403 37.149 19.9071L42.5682 23.0579C43.4504 23.562 44.0806 24.5702 44.0806 25.7045L44.0806 32.0059C44.0806 33.0142 43.5765 34.0224 42.5682 34.6525L37.275 37.8033C36.3928 38.3074 35.2585 38.3074 34.2503 37.8033L28.8311 34.6525C27.9489 34.1484 27.3187 33.1402 27.3187 32.0059L27.3187 30.2856C27.3187 29.2585 26.2062 28.6171 25.3173 29.1317L23.1949 30.3605C22.7831 30.5989 22.5296 31.0386 22.5296 31.5144L22.5296 34.9046C22.5296 35.9128 23.0337 36.9211 24.042 37.5512L34.2503 43.4746C35.1325 43.9787 36.2668 43.9787 37.275 43.4746L47.4834 37.5512C48.3656 37.0471 48.9957 36.0389 48.9957 34.9046L48.9957 22.9318C48.9957 21.9236 48.4916 20.9154 47.4834 20.2852L37.275 14.3619Z"
          fill={`url(#${linearGradientBasedId}_1)`}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_564_7457"
          x="-13.5"
          y="-13"
          width="76"
          height="71"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_564_7457"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_564_7457"
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
          x1="24.1971"
          y1="1.38086"
          x2="24.1971"
          y2="69.2518"
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
      </defs>
    </svg>
  );
}
