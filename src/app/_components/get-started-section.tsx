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
  className?: string;
  Image: ReactNode;
  variant: "teal" | "purple";
  docsHref: string;
  headingText?: string | ReactNode;
  hideGoToDocs?: boolean;
  getInTouchHref?: string;
  getInTouchText?: string;
}) {
  return (
    <section
      className={twJoin(
        "container mx-auto flex flex-col items-center gap-16 sm:gap-24",
        props.className,
      )}
    >
      {props.Image}
      <Text
        variant="heading-1"
        className="text-center capitalize text-light-100 md:tracking-tight-1"
      >
        {props.headingText || "Ready to get started?"}
      </Text>
      <div className="flex flex-row gap-6">
        <a
          href={props.docsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={twJoin(
            "flex flex-col items-center justify-center rounded-full px-6 py-2 shadow-sm hover:opacity-75",
            variants[props.variant].opacityBgClassName,
            props.hideGoToDocs && "hidden",
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
          href={props.getInTouchHref || SOCIAL_LINKS.discord.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 flex-row items-center justify-center gap-2 px-6 py-2 hover:opacity-75"
        >
          <Text
            variant="cap-case"
            className={twJoin(variants[props.variant].textClassName)}
          >
            {props.getInTouchText || "get in touch"}
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
