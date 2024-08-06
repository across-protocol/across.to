import { LogoIconProps } from "./types";

export function RedstoneIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{ maskType: "luminance" }}
      fill={`url(#${linearGradientBasedId}_5)`}
      {...props}
    >
      <g clipPath="url(#redstone-a)">
        <mask
          id="redstone-b"
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M200 0H0v200h200V0Z" />
        </mask>
        <g mask="url(#redstone-b)">
          <path d="M75 75H50V50h25v25Z" opacity=".75" />
          <path d="M75 100H50V75h25v25ZM75 125H50v-25h25v25Z" />
          <path d="M75 150H50v-25h25v25ZM150 75h-25V50h25v25Z" opacity=".75" />
          <path d="M150 100h-25V75h25v25ZM150 125h-25v-25h25v25Z" />
          <path d="M150 150h-25v-25h25v25Z" opacity=".75" />
          <path d="M100 150H75v-25h25v25ZM125 150h-25v-25h25v25ZM100 75H75V50h25v25ZM125 75h-25V50h25v25Z" />
          <path fillOpacity=".25" d="M100 0H75v25h25V0Z" />
          <path
            fillOpacity=".75"
            d="M125 175h-25v-25h25v25ZM175 100h-25v25h25v-25ZM50 125H25v-25h25v25ZM125 25h-25v25h25V25Z"
          />
          <path
            fillOpacity=".25"
            d="M125 0h-25v25h25V0ZM100 200H75v-25h25v25ZM125 200h-25v-25h25v25ZM200 75h-25v25h25V75ZM200 100h-25v25h25v-25ZM25 125H0v-25h25v25ZM25 100H0V75h25v25Z"
          />
          <path
            fillOpacity=".75"
            d="M100 25H75v25h25V25ZM100 175H75v-25h25v25ZM175 75h-25v25h25V75ZM50 100H25V75h25v25Z"
          />
        </g>
      </g>
    </svg>
  );
}
