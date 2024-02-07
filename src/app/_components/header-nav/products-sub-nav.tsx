import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { IconBox } from "../icon-box";

import { NavItem } from "./types";

export function ProductsSubNav(props: { navItems: NavItem[] }) {
  const pathname = usePathname();
  const isCurrentPath = (href: string) => pathname.startsWith(href);

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {props.navItems.map((item) => (
        <span key={item.href} className="group">
          <Link
            key={item.href}
            href={item.href}
            className={twMerge(
              "flex flex-row items-center gap-3 rounded-2xl p-2 pr-5 transition group-hover:shadow-sm",
              item.containerClassName,
              isCurrentPath(item.href) ? item.iconContainerClassName : "",
            )}
          >
            <IconBox className={item.iconContainerClassName}>
              <item.Icon
                className={item.iconClassName}
                data-is-current={isCurrentPath(item.href)}
              />
            </IconBox>
            <div
              className={twMerge(
                isCurrentPath(item.href) ? "text-light-100" : "text-grey-400",
              )}
            >
              {item.label}
            </div>
          </Link>
        </span>
      ))}
    </div>
  );
}
