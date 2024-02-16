import { ComponentProps } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

type ButtonProps = ComponentProps<"button">;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "h-10 rounded-full border border-aqua-100/[.05] bg-aqua-100/[.05] px-6 py-2 shadow-sm hover:opacity-80",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
