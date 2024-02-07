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
      <div className="bg-grey-dark absolute flex min-h-screen w-full flex-col gap-6 p-4 sm:hidden">
        <Button className="sm:hidden">Bridge now</Button>
        {props.productsNavItems.map((item) => (
          <span key={item.href} className="group">
            <Link
              key={item.href}
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
                <div className="text-light-300 text-sm tabular-nums">
                  {item.description}
                </div>
              </div>
            </Link>
          </span>
        ))}
        <div className="border-light-100/[.02] w-full border" />
        <div className="flex flex-row items-center justify-center gap-3">
          {props.communityNavItems.map((item) => (
            <IconBox className="bg-light-100/[.05]" key={item.label}>
              <item.Icon className={item.iconClassName} />
            </IconBox>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <div className="text-grey-400 text-sm tabular-nums">Powered by</div>
          <UmaIcon />
        </div>
      </div>
    </Transition>
  );
}
