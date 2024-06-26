import Image from "next/image";

import { GetStartedSection } from "@/app/_components/get-started-section";
import plusGetStartedImage from "../_assets/mockups-preview.png";
import { INTEGRATION_LINKS } from "@/app/_constants/links";

export function PlusGetStartedSectionBottom() {
  return (
    <GetStartedSection
      variant="teal"
      Image={<Image src={plusGetStartedImage} alt="get started image" />}
      docsHref={INTEGRATION_LINKS.plus}
      hideGoToDocs
      getInTouchHref={INTEGRATION_LINKS.plus}
      getInTouchText="Get started"
    />
  );
}
