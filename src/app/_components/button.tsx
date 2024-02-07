import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "tracking-wide-4 text-aqua-100 bg-aqua-100/[.05] border-aqua-100/[.05] h-10 rounded-full border px-6 py-2 text-xs uppercase shadow-sm hover:opacity-80",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
