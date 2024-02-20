import { twMerge } from "@/app/_lib/tw-merge";
import Link from "next/link";

import {
  BridgeIcon,
  PlusIcon,
  CheckmarkSimpleIcon,
  ArrowUpRightIcon,
} from "../../_components/icons";
import { Text } from "../../_components/text";
import { PRODUCT_LINKS } from "../../_constants/links";

const products = [
  {
    ...PRODUCT_LINKS.bridge,
    Icon: BridgeIcon,
    iconClassName: "group-hover:drop-shadow-aqua h-6 w-6",
    iconContainerClassName: "bg-aqua-100/[.05]",
    arrowIconClassName: "stroke-aqua-100",
    containerClassName: [
      "bg-gradient-to-r from-aqua-100/[.05] to-transparent",
      "md:group-hover:bg-gradient-to-r md:group-hover:from-aqua-100/[.05] md:group-hover:to-transparent",
    ],
  },
  {
    ...PRODUCT_LINKS.plus,
    Icon: PlusIcon,
    iconClassName: "group-hover:drop-shadow-teal h-7 w-7",
    iconContainerClassName: "bg-teal-100/[.05]",
    arrowIconClassName: "stroke-teal-100",
    containerClassName: [
      "bg-gradient-to-r from-teal-100/[.05] to-transparent",
      "md:group-hover:bg-gradient-to-r md:group-hover:from-teal-100/[.05] md:group-hover:to-transparent",
    ],
  },
  {
    ...PRODUCT_LINKS.settlement,
    Icon: CheckmarkSimpleIcon,
    iconClassName: "group-hover:drop-shadow-purple h-6 w-7",
    iconContainerClassName: "bg-purple-100/[.05]",
    arrowIconClassName: "stroke-purple-100",
    containerClassName: [
      "bg-gradient-to-r from-purple-100/[.05] to-transparent",
      "md:group-hover:bg-gradient-to-r md:group-hover:from-purple-100/[.05] md:group-hover:to-transparent",
    ],
  },
];

export function ProductsSection() {
  return (
    <section className="container mx-auto mb-12 flex flex-col gap-16 px-4 sm:gap-24 md:mb-24">
      <div className="flex flex-col gap-3 sm:gap-4">
        <Text variant="cap-case" className="text-teal-100">
          Solutions
        </Text>
        <Text variant="heading-2" className="capitalize text-light-200">
          Across Products
        </Text>
        <Text variant="body-nums">
          Fastest and lowest-cost bridging for end-users.
          <br />
          Streamlined interoperability for developers.
        </Text>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        {products.map((product) => (
          <Link key={product.label} href={product.href} className="group flex-1">
            <div
              className={twMerge(
                "flex flex-col rounded-2xl border border-light-100/[.02] p-5 transition md:h-[336px] md:items-center md:bg-none md:px-6 md:pb-16",
                product.containerClassName,
              )}
            >
              <div className="flex w-full flex-row items-center justify-between md:flex-col-reverse">
                <div
                  className={twMerge(
                    "flex h-16 w-16 items-center justify-center rounded-lg shadow-sm",
                    product.iconContainerClassName,
                  )}
                >
                  <product.Icon className={product.iconClassName} />
                </div>
                <div className="md:flex md:h-12 md:w-full md:justify-end">
                  <div
                    className={twMerge(
                      "flex h-12 w-12 items-center justify-center rounded-lg shadow-sm md:hidden md:self-end md:group-hover:flex",
                      product.iconContainerClassName,
                    )}
                  >
                    <ArrowUpRightIcon
                      className={twMerge("", product.arrowIconClassName)}
                    />
                  </div>
                </div>
              </div>
              <Text
                variant="heading-4"
                className="mb-1 mt-4 text-light-200 md:mb-4 md:mt-8"
              >
                {product.label}
              </Text>
              <Text className="text-light-300 md:text-center">{product.description}</Text>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
