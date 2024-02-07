import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { IconBox } from "../icon-box";

import { NavItem } from "./types";

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
    <div className="min-w-3xl overflow-x-scroll p-4 sm:overflow-x-hidden">
      <div className="bg-grey-dark flex flex-row items-center justify-start gap-4 sm:justify-center">
        {props.navItems.map((item) => (
          <span key={item.href} className="group">
            <Link
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
                  "sm:text-md whitespace-nowrap text-sm tabular-nums",
                  isCurrentPath(item.href) ? "text-light-100" : "text-grey-400",
                )}
              >
                {item.label}
              </div>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
