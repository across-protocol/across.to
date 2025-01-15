import { LogoIconProps } from "./types";

export function SoneiumIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;

  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.125"
        y="0.149658"
        width="180"
        height="180.003"
        rx="90"
        fill={`url(#${linearGradientBasedId}_bg)`}
      />
      <path
        d="M79.019 107.825C66.3252 110.841 52.4038 107.4 42.5041 97.495C29.7054 84.698 27.2073 65.7083 36.4532 50.666C40.2713 44.4554 43.8981 40.7427 47.0315 37.622C59.9474 24.7568 83.67 1.3391 83.67 1.3391C61.5202 -3.0459 37.6622 3.3374 20.5026 20.5012C-6.8342 47.8352 -6.8342 92.16 20.5026 119.494C28.9775 127.968 39.0808 133.809 49.8133 137.034L79.0252 107.825H79.019Z"
        fill={`url(#${linearGradientBasedId}_1)`}
      />
      <path
        d="M60.9827 32.17C73.6766 29.1541 87.598 32.5955 97.498 42.5004C110.296 55.2977 112.794 74.2872 103.549 89.329C99.731 95.54 96.104 99.253 92.97 102.374C80.054 115.239 56.332 138.656 56.332 138.656C78.4815 143.041 102.34 136.658 119.499 119.494C146.836 92.16 146.836 47.8352 119.499 20.5013C111.024 12.0273 100.921 6.1867 90.189 2.9612L60.9766 32.17H60.9827Z"
        fill={`url(#${linearGradientBasedId}_2)`}
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
