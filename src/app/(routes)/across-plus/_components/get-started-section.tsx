import Image from "next/image";

import { GetStartedSection } from "@/app/_components/get-started-section";
import plusGetStartedImage from "@/app/_assets/plus-get-started.png";

export function PlusGetStartedSection() {
  return (
    <GetStartedSection
      variant="teal"
      Image={<Image src={plusGetStartedImage} alt="get started image" />}
    />
  );
}
