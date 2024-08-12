import { Text } from "@/app/_components/text";
import { getReadingTime } from "@/app/_lib/contentful";
import { Document } from "@contentful/rich-text-types";
import { DateTime } from "luxon";

export function MetaInfo({
  isoCreatedDate,
  content,
}: {
  isoCreatedDate: string;
  content: Document;
}) {
  const dateString = DateTime.fromISO(isoCreatedDate).toFormat("MMM dd, yyyy");
  const minutesToRead = getReadingTime(content);
  return (
    <div className="flex items-center justify-center gap-3  text-grey-400 sm:justify-start">
      <Text variant="cap-case-sm">{dateString}</Text>•
      <Text variant="cap-case-sm">{minutesToRead} min read</Text>
    </div>
  );
}
