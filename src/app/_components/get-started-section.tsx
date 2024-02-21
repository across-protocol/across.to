import { ArrowRightIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import { SOCIAL_LINKS } from "@/app/_constants";
import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

const variants = {
  teal: {
    textClassName: "text-teal-100",
    bgClassName: "bg-teal-100",
    opacityBgClassName: "bg-teal-100/[.05]",
  },
  purple: {
    textClassName: "text-purple-100",
    bgClassName: "bg-purple-100",
    opacityBgClassName: "bg-purple-100/[.05]",
  },
};

export function GetStartedSection(props: {
  Image: ReactNode;
  variant: "teal" | "purple";
  docsHref: string;
}) {
  return (
    <section className="container mx-auto flex flex-col items-center gap-16 sm:gap-24">
      {props.Image}
      <Text variant="heading-1" className="text-light-100 md:tracking-tight-1">
        Ready to get started?
      </Text>
      <div className="flex flex-row gap-6">
        <a
          href={props.docsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={twJoin(
            "flex flex-col items-center justify-center rounded-full px-6 py-2 shadow-sm",
            variants[props.variant].opacityBgClassName,
          )}
        >
          <Text
            variant="cap-case"
            className={twJoin(variants[props.variant].textClassName)}
          >
            go to docs
          </Text>
        </a>
        <a
          href={SOCIAL_LINKS.discord.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 flex-row items-center justify-center gap-2 px-6 py-2"
        >
          <Text
            variant="cap-case"
            className={twJoin(variants[props.variant].textClassName)}
          >
            get in touch
          </Text>
          <div
            className={twJoin(
              "flex h-5 w-5 flex-col items-center justify-center rounded-full",
              variants[props.variant].bgClassName,
            )}
          >
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </section>
  );
}
