import { twMerge } from "@/app/_lib/tw-merge";
import Image from "next/image";
import backgroundBanner from "../../../_assets/blog-background.png";

export default function BackgroundBanner({ offsetTop }: { offsetTop: number }) {
  return (
    <Image
      className={twMerge(
        "absolute left-1/3 z-0 hidden sm:block lg:left-1/2",
        `top-[${offsetTop}px]`,
      )}
      src={backgroundBanner.src}
      alt="background-banner"
      width={514}
      height={536}
    />
  );
}
