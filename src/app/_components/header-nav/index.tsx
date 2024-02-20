"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

import {
  AcrossIcon,
  MenuIcon,
  MinusIcon,
  BridgeIcon,
  PlusIcon,
  CheckmarkSimpleIcon,
  DiscordIcon,
  TwitterIcon,
  MediumIcon,
} from "../icons";
import { Button } from "../button";
import { Text } from "../text";
import { PRODUCT_LINKS, SOCIAL_LINKS } from "@/app/_constants";

import { FlyoutMenu } from "./flyout-menu";
import { MobileMenu } from "./mobile-menu";
import { ProductsSubNav } from "./products-sub-nav";

const productsNavigationItems = [
  {
    ...PRODUCT_LINKS.bridge,
    Icon: BridgeIcon,
    iconClassName: "group-hover:drop-shadow-aqua h-4 w-4",
    iconContainerClassName: "bg-aqua-100/[.05]",
    containerClassName: "group-hover:bg-aqua-100/[.05]",
  },
  {
    ...PRODUCT_LINKS.plus,
    Icon: PlusIcon,
    iconClassName: "group-hover:drop-shadow-teal h-5 w-5",
    iconContainerClassName: "bg-teal-100/[.05]",
    containerClassName: "group-hover:bg-teal-100/[.05]",
  },
  {
    ...PRODUCT_LINKS.settlement,
    Icon: CheckmarkSimpleIcon,
    iconClassName: "group-hover:drop-shadow-purple h-4 w-5",
    iconContainerClassName: "bg-purple-100/[.05]",
    containerClassName: "group-hover:bg-purple-100/[.05]",
  },
];

const communityNavigationItems = [
  {
    ...SOCIAL_LINKS.discord,
    Icon: DiscordIcon,
    iconClassName: "h-4 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
    containerClassName: "group-hover:bg-light-100/[.05]",
  },
  {
    ...SOCIAL_LINKS.twitter,
    Icon: TwitterIcon,
    iconClassName: "h-4 w-4",
    iconContainerClassName: "bg-light-100/[.05]",
    containerClassName: "group-hover:bg-light-100/[.05]",
  },
  {
    ...SOCIAL_LINKS.medium,
    Icon: MediumIcon,
    iconClassName: "h-3 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
    containerClassName: "group-hover:bg-light-100/[.05]",
  },
];

export function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isProductsPath = productsNavigationItems.some((item) =>
    pathname.startsWith(item.href),
  );

  return (
    <header className="sticky top-0 z-10 bg-grey-dark">
      <nav className="mx-auto max-w-7xl p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Link href="/" className="mr-12">
              <AcrossIcon
                className={twMerge(
                  "h-8 w-8 transition",
                  pathname === "/across-plus"
                    ? "fill-teal-100"
                    : pathname === "/across-settlement"
                      ? "fill-purple-100"
                      : "fill-aqua-100",
                )}
              />
            </Link>
            <div className="hidden flex-row items-center gap-6 md:flex">
              <Link href="/">Home</Link>
              <FlyoutMenu buttonLabel="Products" menuItems={productsNavigationItems} />
              <FlyoutMenu
                buttonLabel="Community"
                menuItems={communityNavigationItems}
                useExternalLinks
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              className={twMerge(
                "hidden transition md:block",
                pathname === "/across-plus"
                  ? "border-teal-100 bg-teal-100/[.05] text-teal-100"
                  : pathname === "/across-settlement"
                    ? "border-purple-100 bg-purple-100/[.05] text-purple-100"
                    : "border-aqua-100 bg-aqua-100/[.05] text-aqua-100",
              )}
            >
              <Text variant="cap-case-sm">Bridge now</Text>
            </Button>
            {/* Only show menu button on mobile */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-grey-600 md:hidden"
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
            >
              {isMenuOpen ? <MinusIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* Only show sub-menu when in products-related path */}
      {isProductsPath && !isMenuOpen && (
        <ProductsSubNav navItems={productsNavigationItems} />
      )}
      <div className={isMenuOpen ? "relative" : "hidden"}>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          onClickItem={() => setIsMenuOpen(false)}
          productsNavItems={productsNavigationItems}
          communityNavItems={communityNavigationItems}
          pathname={pathname}
        />
      </div>
    </header>
  );
}
