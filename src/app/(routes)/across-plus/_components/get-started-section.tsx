import Image from "next/image";

import { GetStartedSection } from "@/app/_components/get-started-section";
import plusGetStartedImage from "@/app/_assets/plus-get-started.png";
import { INTEGRATION_LINKS } from "@/app/_constants/links";

export function PlusGetStartedSection() {
  return (
    <GetStartedSection
      variant="teal"
      Image={<Image src={plusGetStartedImage} alt="get started image" />}
      docsHref={INTEGRATION_LINKS.plus}
    />
  );
}
