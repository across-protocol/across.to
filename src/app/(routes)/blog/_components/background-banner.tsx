import Image from "next/image";
import backgroundBanner from "@/app/_assets/blog-background.png";

export default function BackgroundBanner() {
  return (
    <Image
      className="absolute -top-32 left-1/3 z-0 hidden sm:block"
      src={backgroundBanner.src}
      alt="background-banner"
      width={514}
      height={536}
    />
  );
}
