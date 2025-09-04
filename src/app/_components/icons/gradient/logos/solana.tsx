import { LogoIconProps } from "./types";

export function SolanaIcon({ variant = "aqua", ...props }: LogoIconProps) {
  const linearGradientBasedId = `paint_linear_gradient_${variant}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 88" {...props}>
      <path
        fill={`url(#${linearGradientBasedId}_1)`}
        d="m100.48 69.382-16.673 17.42c-.363.378-.801.68-1.288.886a3.959 3.959 0 0 1-1.545.312H1.936c-.378 0-.746-.107-1.062-.309a1.9 1.9 0 0 1-.714-.825 1.841 1.841 0 0 1-.132-1.072c.064-.362.235-.698.492-.966l16.686-17.42a3.872 3.872 0 0 1 1.284-.885 3.96 3.96 0 0 1 1.54-.313h79.034c.378 0 .746.107 1.062.308.315.202.563.489.714.826.15.337.196.709.132 1.071a1.87 1.87 0 0 1-.492.967ZM83.807 34.303a3.873 3.873 0 0 0-1.288-.886 3.96 3.96 0 0 0-1.545-.312H1.936c-.378 0-.746.107-1.062.309a1.9 1.9 0 0 0-.714.825c-.15.337-.196.71-.132 1.071.064.362.235.698.492.967l16.686 17.42c.362.377.799.678 1.284.884a3.96 3.96 0 0 0 1.54.314h79.034c.378 0 .746-.107 1.062-.309.315-.201.563-.488.714-.825a1.844 1.844 0 0 0-.36-2.038l-16.673-17.42ZM1.936 21.791h79.038a3.96 3.96 0 0 0 1.544-.313 3.873 3.873 0 0 0 1.289-.886l16.673-17.42a1.87 1.87 0 0 0 .492-.967 1.843 1.843 0 0 0-.132-1.07 1.906 1.906 0 0 0-.714-.826A1.974 1.974 0 0 0 99.064 0H20.03a3.96 3.96 0 0 0-1.54.314 3.873 3.873 0 0 0-1.284.884L.525 18.618a1.868 1.868 0 0 0-.492.966c-.065.362-.019.734.13 1.07.15.337.398.624.713.826.315.202.683.31 1.06.31Z"
      />
      <defs>
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
      </defs>
    </svg>
  );
}
