import { usePathname } from "next/navigation";
import { twMerge } from "@/app/_lib/tw-merge";

import { IconBox } from "../icon-box";

import { NavItem } from "./types";
import CustomLink from "../link";

const classNameOverrides: Record<
  string,
  {
    iconClassName: string;
    currentPathIconClassName: string;
  }
> & {} = {
  "/across-bridge": {
    iconClassName: "h-2 w-2 sm:h-4 sm:w-4",
    currentPathIconClassName: "drop-shadow-aqua-sm sm:drop-shadow-aqua",
  },
  "/across-plus": {
    iconClassName: "h-3 w-3 sm:h-4 sm:w-4",
    currentPathIconClassName: "drop-shadow-teal-sm sm:drop-shadow-teal",
  },
  "/across-settlement": {
    iconClassName: "h-2 w-3 sm:h-4 sm:w-4",
    currentPathIconClassName: "drop-shadow-purple-sm sm:drop-shadow-purple",
  },
};

export function ProductsSubNav(props: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const isCurrentPath = (href: string) => pathname.startsWith(href);

  return (
    <div className="overflow-x-scroll p-4 min-[500px]:overflow-x-hidden">
      <div className="flex flex-row items-center justify-start gap-4 bg-grey-dark min-[500px]:justify-center">
        {props.navItems.map((item) => (
          <span key={item.href} className="group">
            <CustomLink
              preserveQueryParams
              key={item.href}
              href={item.href}
              className={twMerge(
                "flex flex-row items-center gap-3 rounded-xl p-2 pr-5 transition group-hover:shadow-sm sm:rounded-2xl",
                item.containerClassName,
                isCurrentPath(item.href) ? item.iconContainerClassName : "",
              )}
            >
              <IconBox
                className={twMerge(
                  item.iconContainerClassName,
                  "h-6 min-w-6 sm:h-10 sm:min-w-10",
                )}
              >
                <item.Icon
                  className={twMerge(
                    item.iconClassName,
                    classNameOverrides[item.href]?.iconClassName,
                    isCurrentPath(item.href)
                      ? classNameOverrides[item.href]?.currentPathIconClassName
                      : "",
                  )}
                />
              </IconBox>
              <div
                className={twMerge(
                  "whitespace-nowrap text-sm tabular-nums sm:text-md",
                  isCurrentPath(item.href) ? "text-light-100" : "text-grey-400",
                )}
              >
                {item.label}
              </div>
            </CustomLink>
          </span>
        ))}
      </div>
    </div>
  );
}
