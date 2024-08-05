"use client";

import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

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
  const params = useSearchParams();
  if (preserveQueryParams && !href.toString().includes("?")) {
    href = `${href.toString()}?${params.toString()}`;
  }
  return <Link href={href} {...props} />;
}

export default function CustonLinkWithSuspense(props: CustomLinkProps) {
  return (
    <Suspense>
      <CustomLink {...props} />
    </Suspense>
  );
}
