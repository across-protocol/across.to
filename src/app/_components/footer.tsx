import React from "react";
import Link from "next/link";

import {
  AcrossFullIcon,
  BridgeIcon,
  PlusIcon,
  CheckmarkSimpleIcon,
  DiscordIcon,
  TwitterIcon,
  MediumIcon,
  UmaIcon,
  QuestionMarkIcon,
  DocumentIcon,
} from "./icons";
import { IconBox } from "./icon-box";
import { PRODUCT_LINKS, SOCIAL_LINKS, INFORMATION_LINKS } from "@/app/_constants";
import { twMerge } from "tailwind-merge";

const products = [
  {
    ...PRODUCT_LINKS.bridge,
    Icon: BridgeIcon,
    iconClassName: "h-4 w-4",
    iconContainerClassName: "bg-aqua-100/[.05]",
  },
  {
    ...PRODUCT_LINKS.plus,
    Icon: PlusIcon,
    iconClassName: "h-5 w-5",
    iconContainerClassName: "bg-teal-100/[.05]",
  },
  {
    ...PRODUCT_LINKS.settlement,
    Icon: CheckmarkSimpleIcon,
    iconClassName: "h-4 w-5",
    iconContainerClassName: "bg-purple-100/[.05]",
  },
];

const socials = [
  {
    ...SOCIAL_LINKS.discord,
    Icon: DiscordIcon,
    iconClassName: "h-4 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
  {
    ...SOCIAL_LINKS.twitter,
    Icon: TwitterIcon,
    iconClassName: "h-4 w-4",
    iconContainerClassName: "bg-light-100/[.05]",
  },
  {
    ...SOCIAL_LINKS.medium,
    Icon: MediumIcon,
    iconClassName: "h-3 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
];

const information = [
  {
    ...INFORMATION_LINKS.faq,
    Icon: QuestionMarkIcon,
    iconClassName: "h-5 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
  {
    ...INFORMATION_LINKS.docs,
    Icon: DocumentIcon,
    iconClassName: "h-5 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center">
        <div className="sm:mr-16 md:mr-24">
          <AcrossFullIcon />
        </div>
        <div className="mb-40 mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-0 sm:grid-cols-3 lg:gap-x-16">
          <FooterBox label="products" items={products} />
          <FooterBox label="socials" items={socials} useExternalLinks />
          <FooterBox label="information" items={information} useExternalLinks />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-1 lining-nums tabular-nums  text-grey-400">
        Powered by
        <UmaIcon />
      </div>
    </footer>
  );
}

function FooterBox(props: {
  label: string;
  items: typeof products | typeof socials | typeof information;
  useExternalLinks?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xs uppercase lining-nums tabular-nums tracking-wide-4 text-grey-400">
        {props.label}
      </div>
      <div className="flex flex-col gap-5">
        {props.items.map((item) => (
          <div key={item.href} className="flex flex-row items-center gap-3">
            {props.useExternalLinks ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <FooterBoxItem item={item} />
              </a>
            ) : (
              <Link href={item.href}>
                <FooterBoxItem item={item} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterBoxItem(props: {
  item:
    | (typeof products)[number]
    | (typeof socials)[number]
    | (typeof information)[number];
}) {
  return (
    <div className="flex flex-row items-center gap-3 hover:opacity-90">
      <IconBox className={twMerge("h-10 w-10", props.item.iconContainerClassName)}>
        <props.item.Icon className={props.item.iconClassName} />
      </IconBox>
      <div className="text-sm lining-nums tabular-nums">{props.item.label}</div>
    </div>
  );
}
