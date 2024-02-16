import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { twMerge } from "@/app/_lib/tw-merge";

import { ChevronDownIcon } from "../icons";
import { IconBox } from "../icon-box";

import { NavItem } from "./types";

type Props = {
  buttonLabel: string;
  menuItems: NavItem[];
  className?: string;
  useExternalLinks?: boolean;
};

export function FlyoutMenu({
  useExternalLinks,
  buttonLabel,
  menuItems,
  className,
}: Props) {
  return (
    <Popover className={twMerge("relative", className)}>
      <Popover.Button className="flex cursor-pointer items-center justify-center gap-1 text-md text-light-300 focus-visible:outline-none">
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-grey-light text-sm shadow-sm">
            <div className="p-4">
              {menuItems.map((item) => (
                <span key={item.href} className="group">
                  <Popover.Button
                    as={useExternalLinks ? "a" : Link}
                    href={item.href}
                    className={twMerge(
                      "flex flex-row gap-4 rounded-3xl p-4 transition group-hover:shadow-sm",
                      item.containerClassName,
                    )}
                    target={useExternalLinks ? "_blank" : undefined}
                    rel={useExternalLinks ? "noopener noreferrer" : undefined}
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
