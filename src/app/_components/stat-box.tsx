import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "./text";

export type Props = ComponentProps<"div"> & {
  title: string;
  titleClassName: string;
  value: string;
  dividerClassName?: string;
};

export function StatBox({
  className,
  title,
  titleClassName,
  value,
  dividerClassName,
  ...props
}: Props) {
  return (
    <div className="group">
      <div
        className={twMerge(
          "group flex flex-col rounded-2xl border border-light-100/[.02] px-4 pb-6 transition sm:pb-10",
          className,
        )}
        {...props}
      >
        <div
          className={twMerge(
            "mb-6 h-1 w-11 self-center rounded-b-[12px] rounded-t-none bg-grey-600 sm:mb-10",
            dividerClassName,
          )}
        />
        <Text variant="cap-case" className={twMerge("mb-2 text-center", titleClassName)}>
          {title}
        </Text>
        <Text variant="heading-3" className="text-center">
          {value}
        </Text>
      </div>
    </div>
  );
}
