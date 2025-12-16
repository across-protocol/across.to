import React from "react";

import {
  AcrossFullIcon,
  BridgeIcon,
  PlusIcon,
  CheckmarkSimpleIcon,
  DiscordIcon,
  TwitterIcon,
  MediumIcon,
  UmaIcon,
  DocumentIcon,
  DiscourseIcon,
  GitHubIcon,
  NewspaperIcon,
} from "./icons";
import { IconBox } from "./icon-box";
import { PRODUCT_LINKS, SOCIAL_LINKS, INFORMATION_LINKS } from "@/app/_constants";
import { twMerge } from "@/app/_lib/tw-merge";
import CustomLink from "./link";
import Link from "next/link";
import { TERMS_OF_SERVICE, PRIVACY_POLICY } from "../_constants/links";

type LinkType = {
  label: string;
  href: string;
  description?: string;
  Icon?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  iconClassName?: string;
  iconContainerClassName?: string;
  highlightLink?: boolean;
};

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
  {
    ...SOCIAL_LINKS.discourse,
    Icon: DiscourseIcon,
    iconClassName: "h-4 w-4",
    iconContainerClassName: "bg-light-100/[.05]",
  },
];

const bridgeRoutes = [
  "Solana",
  "Unichain",
  "Arbitrum",
  "Optimism",
  "Linea",
  "Polygon",
  "Base",
  "World Chain",
  "zkSync",
].map((chain) => ({
  href: `https://app.across.to/${chain.toLowerCase().replaceAll(" ", "")}`,
  label: `Bridge to ${chain}`,
  highlightLink: true,
}));

const information = [
  {
    ...INFORMATION_LINKS.blog,
    Icon: NewspaperIcon,
    iconClassName: "h-5 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
  {
    ...INFORMATION_LINKS.docs,
    Icon: DocumentIcon,
    iconClassName: "h-5 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
  },
  {
    ...INFORMATION_LINKS.github,
    Icon: GitHubIcon,
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
        <div className="mb-40 mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-0 lg:grid-cols-4 lg:gap-x-16">
          <FooterBox label="products" items={products} />
          <FooterBox label="socials" items={socials} useExternalLinks />
          <FooterBox label="resources" items={information} useExternalLinks />
          <FooterBox label="routes" items={bridgeRoutes} useExternalLinks compressed />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-row items-center justify-center gap-1 lining-nums tabular-nums  text-grey-400">
          Secured by
          <UmaIcon />
        </div>
        <div className="h-[1px] w-1/2 max-w-[12rem] bg-gradient-to-r from-transparent via-grey-500 to-transparent"></div>
        <div className="-mt-2 flex flex-row items-center gap-4">
          <Link className="text-grey-400" href={TERMS_OF_SERVICE}>
            Terms of Service
          </Link>
          <span className="text-grey-500">•</span>
          <Link className="text-grey-400" href={PRIVACY_POLICY}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterBox(props: {
  label: string;
  items: LinkType[];
  useExternalLinks?: boolean;
  compressed?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xs uppercase lining-nums tabular-nums tracking-wide-4 text-grey-400">
        {props.label}
      </div>
      <div className={twMerge("flex flex-col", props.compressed ? "gap-3" : "gap-5")}>
        {props.items.map((item) => (
          <div key={item.href} className="flex flex-row items-center gap-3">
            {props.useExternalLinks && !item.href.startsWith("/") ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <FooterBoxItem item={item} />
              </a>
            ) : (
              <CustomLink href={item.href} preserveQueryParams>
                <FooterBoxItem item={item} />
              </CustomLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterBoxItem(props: { item: LinkType }) {
  const Icon = props.item.Icon;
  return (
    <div className="flex flex-row items-center gap-3 hover:opacity-90">
      {Icon && (
        <IconBox className={twMerge("h-10 w-10", props.item.iconContainerClassName)}>
          <Icon className={props.item.iconClassName} />
        </IconBox>
      )}
      <div
        className={twMerge(
          "text-sm lining-nums tabular-nums",
          props.item.highlightLink ? "text-light-100" : "text-white",
        )}
      >
        {props.item.label}
      </div>
    </div>
  );
}
