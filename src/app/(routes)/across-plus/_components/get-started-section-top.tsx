import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { GetStartedSection } from "@/app/_components/get-started-section";
import { Carousel, CarouselContent, CarouselItem } from "@/app/_components/carousel";
import { INTEGRATION_LINKS } from "@/app/_constants/links";
import plusGetStartedImage from "@/app/_assets/plus-get-started.png";
import mockupImage1 from "../_assets/mockup-1.png";
import mockupImage2 from "../_assets/mockup-2.png";
import mockupImage3 from "../_assets/mockup-3.png";
import mockupImage4 from "../_assets/mockup-4.png";
import { twMerge } from "@/app/_lib/tw-merge";
import { MockupsCarousel } from "./mockups-carousel";

export function PlusGetStartedSectionTop() {
  return (
    <GetStartedSection
      className="md:-mt-40"
      variant="teal"
      Image={<MockupsCarousel />}
      docsHref={INTEGRATION_LINKS.plus}
      getInTouchHref={INTEGRATION_LINKS.plus}
      getInTouchText="Get started"
      hideGoToDocs
      headingText={
        <>
          Users live on every chain,
          <br />
          but you don&apos;t have to
        </>
      }
    />
  );
}
