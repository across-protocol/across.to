import { LogoIconProps, LogoIconVariant } from "./types";

export function ZoraIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_radial_gradient_${variant}`;

  // use the darkest color in the gradient for the border
  const baseColors: Record<LogoIconVariant, string> = {
    purple: "#542999",
    aqua: "#009A76",
    teal: "#00719A",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <defs>
        <radialGradient
          id="paint_radial_gradient_aqua"
          gradientTransform="translate(66.4578 24.3575) scale(75.2908)"
          gradientUnits="userSpaceOnUse"
          r="1"
          cx="0"
          cy="0%"
        >
          <stop offset="15.62%" stopColor="white" />
          <stop offset="39.58%" stopColor="#6CF9D8" />
          <stop offset="72.92%" stopColor="#29997F" />
          <stop offset="90.63%" stopColor="#009A76" />
          <stop offset="100%" stopColor="#009A76" />
        </radialGradient>
        <radialGradient
          id="paint_radial_gradient_purple"
          gradientTransform="translate(66.4578 24.3575) scale(75.2908)"
          gradientUnits="userSpaceOnUse"
          r="1"
          cx="0"
          cy="0%"
        >
          <stop offset="15.62%" stopColor="white" />
          <stop offset="39.58%" stopColor="#A26CF9" />
          <stop offset="72.92%" stopColor="#CCADFF" />
          <stop offset="90.63%" stopColor="#542999" />
          <stop offset="100%" stopColor="#542999" />
        </radialGradient>
        <radialGradient
          id="paint_radial_gradient_teal"
          gradientTransform="translate(66.4578 24.3575) scale(75.2908)"
          gradientUnits="userSpaceOnUse"
          r="1"
          cx="0"
          cy="0%"
        >
          <stop offset="15.62%" stopColor="white" />
          <stop offset="39.58%" stopColor="#6CD3F9" />
          <stop offset="72.92%" stopColor="#ADE9FF" />
          <stop offset="90.63%" stopColor="#00719A" />
          <stop offset="100%" stopColor="#00719A" />
        </radialGradient>
      </defs>
      <g>
        <path
          d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
          fill={`url(#${linearGradientBasedId})`}
        />
        <path
          stroke={baseColors[variant]}
          fill="url(#radial_gradient)"
          strokeWidth="1"
          d="M50,0.5c27.3,0,49.5,22.2,49.5,49.5S77.3,99.5,50,99.5S0.5,77.3,0.5,50S22.7,0.5,50,0.5z"
        />
      </g>
    </svg>
  );
}
