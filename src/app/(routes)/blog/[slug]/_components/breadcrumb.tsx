import Link from "next/link";
import { ChevronDownIcon } from "@/app/_components/icons";

export default function Breadcrumb({ fullTitle }: { fullTitle: string }) {
  // Max title to 40 characters
  const title = fullTitle.length > 40 ? fullTitle.slice(0, 40) + "..." : fullTitle;
  return (
    <div className="flex items-center gap-2">
      <Link href="/blog" className="text-sm font-lighter leading-tight ">
        Blog
      </Link>
      <ChevronDownIcon className="-rotate-90" />
      <div className="text-sm font-lighter leading-tight text-aqua-100">{title}</div>
    </div>
  );
}
