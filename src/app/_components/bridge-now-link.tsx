"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";
import { ampli } from "../_amplitude";
import { pageLookup } from "../_lib/amplitude";

type Props = React.ComponentProps<"a"> & {
  section: "navbar" | "marketingHero";
  href?: string;
};

export const bridgeAppBaseUrl = "https://app.across.to";

export function BridgeNowLink(props: Props) {
  return (
    <Suspense>
      <BridgeNowLinkInternal {...props} />
    </Suspense>
  );
}

function BridgeNowLinkInternal({ className, href, section, ...props }: Props) {
  const searchParams = useSearchParams();

  const refParams = searchParams.get("ref") || searchParams.get("referrer");
  const integratorParams = searchParams.get("integrator");

  const params = new URLSearchParams();
  if (refParams) {
    params.set("ref", refParams);
  }
  if (integratorParams) {
    params.set("integrator", integratorParams);
  }

  const bridgeNowLink = `${bridgeAppBaseUrl}/bridge-and-swap?${params.toString()}`;

  const pathname = usePathname();
  const actionCallback = () => {
    ampli.bridgeButtonClicked({
      section: section,
      page: pageLookup(pathname),
    });
  };
  return (
    <a
      onClick={actionCallback}
      className={className}
      href={href ? href : bridgeNowLink}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
