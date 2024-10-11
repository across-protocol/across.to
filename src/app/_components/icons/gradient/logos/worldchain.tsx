import { LogoIconProps } from "./types";

export function WorldChainIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `world-chain-paint_linear_gradient_${variant}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      color={`url(#${linearGradientBasedId}_1)`}
      {...props}
    >
      <rect
        width="100%"
        height="100%"
        id="path-to-animate"
        rx="256"
        fill={`url(#${linearGradientBasedId}_2)`}
        mask="url(#clip-path-world-chain)"
      />
      <defs>
        <mask id="clip-path-world-chain">
          <rect width="100%" height="100%" fill="white" />
          <path d="M408.049 191.472c-8.294-19.601-20.149-37.168-35.251-52.27-15.102-15.103-32.708-26.957-52.27-35.252C300.222 95.343 278.703 91 256.481 91c-22.184 0-43.742 4.343-64.048 12.951-19.601 8.294-37.169 20.149-52.27 35.251-15.102 15.102-26.957 32.708-35.252 52.27C96.343 211.739 92 233.297 92 255.481c0 22.183 4.343 43.741 12.951 64.047 8.294 19.601 20.149 37.168 35.251 52.27 15.102 15.102 32.708 26.957 52.27 35.251C212.778 415.618 234.297 420 256.519 420c22.184 0 43.742-4.343 64.048-12.951 19.601-8.294 37.168-20.149 52.27-35.251 15.102-15.102 26.957-32.708 35.252-52.27 8.568-20.306 12.95-41.825 12.95-64.047-.039-22.184-4.421-43.742-12.99-64.009Zm-206.187 48.554c6.847-26.292 30.791-45.737 59.235-45.737h114.205c7.356 14.203 12.051 29.657 13.89 45.737h-187.33Zm187.33 30.909a132.686 132.686 0 0 1-13.89 45.737H261.097c-28.405 0-52.349-19.446-59.235-45.737h187.33ZM162.033 161.033c25.236-25.235 58.765-39.124 94.448-39.124 35.681 0 69.211 13.889 94.446 39.124.767.773 1.524 1.555 2.27 2.348h-92.1c-24.609 0-47.732 9.586-65.143 26.996-13.693 13.694-22.535 30.947-25.705 49.688h-46.441c3.404-29.852 16.667-57.474 38.225-79.032Zm94.448 228.058c-35.683 0-69.212-13.889-94.448-39.124-21.558-21.558-34.821-49.18-38.225-78.993h46.441c3.13 18.741 12.012 35.995 25.705 49.689 17.411 17.41 40.534 26.996 65.143 26.996h92.139c-.743.782-1.526 1.564-2.269 2.347-25.236 25.157-58.805 39.085-94.486 39.085Z" />
        </mask>

        <linearGradient
          id="world-chain-paint_linear_gradient_teal_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
        <linearGradient
          id="world-chain-paint_linear_gradient_purple_1"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
          id="world-chain-paint_linear_gradient_teal_2"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
        <linearGradient
          id="world-chain-paint_linear_gradient_purple_2"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
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
      </defs>
    </svg>
  );
}
