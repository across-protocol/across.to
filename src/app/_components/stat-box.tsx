import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "./text";

type Props = ComponentProps<"div"> & {
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
          "group flex flex-col rounded-2xl border border-grey-600 px-4 pb-6 transition",
          className,
        )}
        {...props}
      >
        <div
          className={twMerge(
            "mb-4 h-1 w-11 self-center rounded-b-[12px] rounded-t-none bg-grey-600",
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
