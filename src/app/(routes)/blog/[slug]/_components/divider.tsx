import { twMerge } from "@/app/_lib/tw-merge";

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={twMerge("h-0 w-full border-t border-white-translucent", className)}
    ></div>
  );
}
