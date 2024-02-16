import Image from "next/image";

import { ArrowRightIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import plusGetStartedImage from "@/app/_assets/plus-get-started.png";
import { INFORMATION_LINKS } from "@/app/_constants";

export function GetStartedSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-16 sm:gap-24">
      <Image src={plusGetStartedImage} alt="get started image" />
      <Text variant="heading-1" className="tracking-tight-1">
        Ready to get started?
      </Text>
      <div className="flex flex-row gap-6">
        <a
          href={INFORMATION_LINKS.docs.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 flex-col items-center justify-center rounded-full bg-teal-100/[.05] px-6 py-2 shadow-sm"
        >
          <Text variant="cap-case-xs" className="text-teal-100">
            go to docs
          </Text>
        </a>
        {/* TODO: Use correct link */}
        <a href="#" className="flex flex-row items-center justify-center gap-2 px-6 py-2">
          <Text variant="cap-case-xs" className="text-teal-100">
            get it touch
          </Text>
          <div className="flex h-5 w-5 flex-col items-center justify-center rounded-full bg-teal-100">
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </section>
  );
}
