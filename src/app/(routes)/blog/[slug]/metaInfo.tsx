import { Text } from "@/app/_components/text";
import { getReadingTime } from "@/app/_lib/contentful";
import { Document } from "@contentful/rich-text-types";
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

export function MetaInfo({
  isoCreatedDate,
  content,
  preventCenter,
  compact,
}: {
  isoCreatedDate: string;
  content: Document;
  preventCenter?: boolean;
  compact?: boolean;
}) {
  const dateString = DateTime.fromISO(isoCreatedDate).toFormat("MMM dd, yyyy");
  const minutesToRead = getReadingTime(content);
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-3 text-grey-400 sm:justify-start",
        preventCenter ? ["justify-start"] : ["justify-center", "sm:justify-start"],
      )}
    >
      <Text variant={compact ? "cap-case-xs" : "cap-case-sm"}>{dateString}</Text>•
      <Text variant={compact ? "cap-case-xs" : "cap-case-sm"}>
        {minutesToRead} min read
      </Text>
    </div>
  );
}
