import Link from "next/link";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { Transition } from "@headlessui/react";

import { UmaIcon } from "../icons";
import { Button } from "../button";
import { IconBox } from "../icon-box";

import { NavItem } from "./types";

export function MobileMenu(props: {
  productsNavItems: NavItem[];
  communityNavItems: NavItem[];
  isMenuOpen: boolean;
  onClickItem: () => void;
  pathname: string;
}) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
      show={props.isMenuOpen}
    >
      <div className="absolute flex min-h-screen w-full flex-col gap-6 bg-grey-dark p-4 md:hidden">
        <Button
          className={twMerge(
            "md:hidden",
            props.pathname === "/across-plus"
              ? "border-teal-100/[.05] bg-teal-100/[.05] text-teal-100"
              : props.pathname === "/across-settlement"
                ? "border-purple-100/[.05] bg-purple-100/[.05] text-purple-100"
                : "",
          )}
        >
          Bridge now
        </Button>
        {props.productsNavItems.map((item) => (
          <span key={item.href} className="group">
            <Link
              href={item.href}
              className={twMerge(
                "flex flex-row gap-4 rounded-3xl p-4 transition group-hover:shadow-sm",
                item.containerClassName,
              )}
              onClick={props.onClickItem}
            >
              <IconBox className={item.iconContainerClassName}>
                <item.Icon className={item.iconClassName} />
              </IconBox>
              <div className="flex flex-col">
                <div className="text-light-100">{item.label}</div>
                <div className="text-sm tabular-nums text-light-300">
                  {item.description}
                </div>
              </div>
            </Link>
          </span>
        ))}
        <div className="w-full border border-light-100/[.02]" />
        <div className="flex flex-row items-center justify-center gap-3">
          {props.communityNavItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <IconBox className="bg-light-100/[.05]">
                <item.Icon className={item.iconClassName} />
              </IconBox>
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <div className="text-sm tabular-nums text-grey-400">Powered by</div>
          <UmaIcon />
        </div>
      </div>
    </Transition>
  );
}
