import { ComponentProps } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

type Props = ComponentProps<"div">;

export function IconBox({ className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        "flex h-10 min-w-10 items-center justify-center rounded-lg shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
