"use client";

import Link, { LinkProps } from "next/link";
import React from "react";

type CustomLinkProps = LinkProps & {
  preserveQueryParams?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/**
 * A comparable component to Next.js's Link component that allows for custom behavior. Specifically, the add to
 * using this component is the ability to preserve query params when navigating to a new page. If set, the query params
 * will be preserved when navigating to the new page. Providing new query params will effectively override this behavior.
 */
function CustomLink({ href, preserveQueryParams, ...props }: CustomLinkProps) {
  if (preserveQueryParams && !href.toString().includes("?")) {
    const currentQueryParams = new URLSearchParams(window.location.search);
    href = `${href.toString()}?${currentQueryParams.toString()}`;
  }
  return <Link href={href} {...props} />;
}

export default CustomLink;
