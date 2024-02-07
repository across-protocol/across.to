"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

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

import { FlyoutMenu } from "./flyout-menu";
import { MobileMenu } from "./mobile-menu";
import { ProductsSubNav } from "./products-sub-nav";

const productsNavigationItems = [
  {
    label: "Across Bridge",
    description: "Bridge Without Compromise",
    href: "/across-bridge",
    Icon: BridgeIcon,
    iconClassName: "group-hover:drop-shadow-aqua h-4 w-4",
    iconContainerClassName: "bg-aqua-100/[.05]",
    containerClassName: "group-hover:bg-aqua-100/[.05]",
  },
  {
    label: "Across+",
    description: "Cross-chain Bridge hooks to Fullfill User intents",
    href: "/across-plus",
    Icon: PlusIcon,
    iconClassName: "group-hover:drop-shadow-teal h-5 w-5",
    iconContainerClassName: "bg-teal-100/[.05]",
    containerClassName: "group-hover:bg-teal-100/[.05]",
  },
  {
    label: "Across Settlement",
    description: "Cross-chain Intents Settlement Layer",
    href: "/across-settlement",
    Icon: CheckmarkSimpleIcon,
    iconClassName: "group-hover:drop-shadow-purple h-4 w-5",
    iconContainerClassName: "bg-purple-100/[.05]",
    containerClassName: "group-hover:bg-purple-100/[.05]",
  },
];

const communityNavigationItems = [
  {
    label: "Discord",
    description: "Access support and chat with community members",
    href: "https://discord.com/invite/sKSkhTtu8s",
    Icon: DiscordIcon,
    iconClassName: "h-4 w-5",
    iconContainerClassName: "bg-light-100/[.05]",
    containerClassName: "group-hover:bg-light-100/[.05]",
  },
  {
    label: "Twitter",
    description: "Follow for the latest updates on Across",
    href: "https://twitter.com/AcrossProtocol",
    Icon: TwitterIcon,
    iconClassName: "h-4 w-4",
    iconContainerClassName: "bg-light-100/[.05]",
    containerClassName: "group-hover:bg-light-100/[.05]",
  },
  {
    label: "Medium",
    description: "Read deep dives on Across infra and campaigns",
    href: "https://medium.com/across-protocol",
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
    <header className="sticky top-0">
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
            <div className="hidden flex-row items-center gap-6 sm:flex">
              <Link href="/">Home</Link>
              <FlyoutMenu buttonLabel="Products" menuItems={productsNavigationItems} />
              <FlyoutMenu buttonLabel="Community" menuItems={communityNavigationItems} />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              className={twMerge(
                "hidden transition sm:block",
                pathname === "/across-plus"
                  ? "border-teal-100/[.05] bg-teal-100/[.05] text-teal-100"
                  : pathname === "/across-settlement"
                    ? "border-purple-100/[.05] bg-purple-100/[.05] text-purple-100"
                    : "",
              )}
            >
              Bridge now
            </Button>
            {/* Only show menu button on mobile */}
            <button
              className="border-grey-600 flex h-10 w-10 items-center justify-center rounded-full border sm:hidden"
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
