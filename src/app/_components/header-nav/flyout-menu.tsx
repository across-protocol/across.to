import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { ChevronDownIcon } from "../icons";
import { IconBox } from "../icon-box";

import { NavItem } from "./types";

type Props = {
  buttonLabel: string;
  menuItems: NavItem[];
  className?: string;
};

export function FlyoutMenu({ buttonLabel, menuItems, className }: Props) {
  return (
    <Popover className={twMerge("relative", className)}>
      <Popover.Button className="text-md text-light-300 flex cursor-pointer items-center justify-center gap-1">
        {buttonLabel}
        <ChevronDownIcon />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={twMerge(
            "absolute left-40 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4",
          )}
        >
          <div className="bg-grey-light w-screen max-w-md flex-auto overflow-hidden rounded-3xl text-sm shadow-sm">
            <div className="p-4">
              {menuItems.map((item) => (
                <span key={item.href} className="group">
                  <Popover.Button
                    as={Link}
                    href={item.href}
                    className={twMerge(
                      "flex flex-row gap-4 rounded-3xl p-4 transition group-hover:shadow-sm",
                      item.containerClassName,
                    )}
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
                  </Popover.Button>
                </span>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
