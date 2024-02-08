import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "light" | "aqua" | "teal";

type Props = SVGProps<SVGSVGElement> & {
  variant?: Variant;
};

export function ChatIcon({ variant = "aqua", className, ...props }: Props) {
  const linearGradientId = `paint_linear_gradient_${variant}`;
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        variant === "aqua"
          ? "fill-aqua-100"
          : variant === "teal"
            ? "fill-teal-100"
            : "fill-light-100",
        className,
      )}
      {...props}
    >
      <rect width="25.5" height="25.5" rx="6" fillOpacity="0.15" />
      <rect
        opacity="0.5"
        y="35.25"
        width="25.5"
        height="25.5"
        rx="6"
        fillOpacity="0.15"
      />
      <rect opacity="0.2" y="70.5" width="25.5" height="25.5" rx="6" fillOpacity="0.15" />
      <rect x="70.5" width="25.5" height="25.5" rx="6" fillOpacity="0.15" />
      <rect
        opacity="0.5"
        x="70.5"
        y="35.25"
        width="25.5"
        height="25.5"
        rx="6"
        fillOpacity="0.15"
      />
      <rect
        opacity="0.2"
        x="70.5"
        y="70.5"
        width="25.5"
        height="25.5"
        rx="6"
        fillOpacity="0.15"
      />
      <path
        d="M36.0226 71.8907C36.4069 71.7604 36.8268 71.7932 37.192 71.9703C43.0818 74.8273 49.7849 75.5654 56.166 74.0473C62.7531 72.4801 68.564 68.6118 72.5514 63.1393C76.5388 57.6669 78.4405 50.9503 77.9139 44.1998C77.3873 37.4492 74.4669 31.1088 69.6791 26.3209C64.8912 21.5331 58.5508 18.6127 51.8003 18.0861C45.0497 17.5595 38.3331 19.4612 32.8607 23.4486C27.3882 27.436 23.5199 33.2469 21.9528 39.834C20.4346 46.2151 21.1727 52.9182 24.0297 58.808C24.2068 59.1732 24.2396 59.5931 24.1094 59.9774L18.9755 75.1224C18.5764 76.2997 19.7003 77.4236 20.8776 77.0245L36.0226 71.8907Z"
        fill={`url(#${linearGradientId})`}
      />
      <path
        d="M36.0226 71.8907C36.4069 71.7604 36.8268 71.7932 37.192 71.9703C43.0818 74.8273 49.7849 75.5654 56.166 74.0473C62.7531 72.4801 68.564 68.6118 72.5514 63.1393C76.5388 57.6669 78.4405 50.9503 77.9139 44.1998C77.3873 37.4492 74.4669 31.1088 69.6791 26.3209C64.8912 21.5331 58.5508 18.6127 51.8003 18.0861C45.0497 17.5595 38.3331 19.4612 32.8607 23.4486C27.3882 27.436 23.5199 33.2469 21.9528 39.834C20.4346 46.2151 21.1727 52.9182 24.0297 58.808C24.2068 59.1732 24.2396 59.5931 24.1094 59.9774L18.9755 75.1224C18.5764 76.2997 19.7003 77.4236 20.8776 77.0245L36.0226 71.8907Z"
        fill={`url(#${linearGradientId})`}
      />
      <defs>
        <linearGradient
          id="paint_linear_gradient_light"
          x1="48"
          y1="18"
          x2="48"
          y2="78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234414" stopColor="#FDFDFD" />
          <stop offset="0.386534" stopColor="#B6B6B6" />
          <stop offset="0.508728" stopColor="white" />
          <stop offset="0.513716" stopColor="#9A9A9A" />
          <stop offset="0.620948" stopColor="white" />
          <stop offset="0.708229" stopColor="#999999" />
          <stop offset="0.78803" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint_linear_gradient_aqua"
          x1="48"
          y1="18"
          x2="48"
          y2="78"
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
          id="paint_linear_gradient_teal"
          x1="48"
          y1="18"
          x2="48"
          y2="78"
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
