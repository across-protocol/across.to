import { twMerge } from "@/app/_lib/tw-merge";

type Props = {
  className?: string;
};

export function IframeContainer({ className, children }: React.PropsWithChildren<Props>) {
  return (
    <span className={twMerge("relative mx-auto block aspect-video w-full ", className)}>
      {children}
    </span>
  );
}
