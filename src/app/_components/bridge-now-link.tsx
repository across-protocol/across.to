"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = React.ComponentProps<"a">;

const bridgeAppBaseUrl = "https://app.across.to";

export function BridgeNowLink(props: Props) {
  return (
    <Suspense>
      <_BridgeNowLink {...props} />
    </Suspense>
  );
}

function _BridgeNowLink({ className, ...props }: Props) {
  const searchParams = useSearchParams();

  const refParams = searchParams.get("ref") || searchParams.get("referrer");
  const bridgeNowLink = `${bridgeAppBaseUrl}/bridge${refParams ? `?ref=${refParams}` : ""}`;

  return (
    <a
      className={className}
      href={bridgeNowLink}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
