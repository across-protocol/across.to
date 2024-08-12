import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import { createClient } from "contentful";
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "../_constants";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document } from "@contentful/rich-text-types";
import words from "lodash.words";

const contentType = "acrossBlogPost";
const averageReadingSpeed = 238; // words per minute

type TypeAcrossBlogPostFields = {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  tag: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  featuredImage: EntryFieldTypes.AssetLink;
  publishDate: EntryFieldTypes.Date;
  description: EntryFieldTypes.Symbol;
};

type TypeAcrossBlogPostSkeleton = EntrySkeletonType<
  TypeAcrossBlogPostFields,
  "acrossBlogPost"
>;
export type BlogPostType = Entry<
  TypeAcrossBlogPostSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;

function getProductionClient() {
  return createClient({
    space: CONTENTFUL_SPACE_ID ?? "",
    accessToken: CONTENTFUL_ACCESS_TOKEN ?? "",
  });
}

export async function retrieveContentfulPublishedSlugs(): Promise<string[]> {
  const client = getProductionClient();
  const options = {
    content_type: contentType,
    select: "fields.slug",
    "fields.content[exists]": true,
    "fields.slug[exists]": true,
  } as const;
  const entries =
    await client.withoutUnresolvableLinks.getEntries<TypeAcrossBlogPostSkeleton>(options);
  return entries.items.map((item) => item.fields.slug);
}

export async function retrieveContentfulEntry(
  entrySlugId: string,
  relevantEntryCount = 4,
) {
  const client = getProductionClient();
  const options = {
    content_type: contentType,
    limit: 1,
    "fields.slug[match]": entrySlugId,
  } as const;
  const entries =
    await client.withoutUnresolvableLinks.getEntries<TypeAcrossBlogPostSkeleton>(options);
  const entry = entries.items[0];
  if (!entry) {
    return undefined;
  }
  const relevantEntries = await retrieveRelevantContentfulEntries(
    entrySlugId,
    entry.fields.tag ?? [],
    relevantEntryCount,
  );
  return {
    ...entry,
    relevantEntries,
  };
}

export async function retrieveRelevantContentfulEntries(
  entrySlugId: string,
  tags: string[],
  limit: number,
): Promise<BlogPostType[]> {
  const client = getProductionClient();
  const options = {
    content_type: contentType,
    limit,
    "fields.content[exists]": true, // no empty posts
    "fields.tag[in]": tags.join(","), // get posts with same tags
    "fields.slug[nin]": entrySlugId, // don't include current post
    "fields.slug[exists]": true, // no empty slugs

    // TODO: Update existing posts to have publishDate
    // "fields.publishDate[exists]": true, // no empty dates
    // order: "-fields.publishDate", // sorted latest first
  } as const;
  const entries =
    await client.withoutUnresolvableLinks.getEntries<TypeAcrossBlogPostSkeleton>(options);
  return entries.items;
}

export function getReadingTime(content: Document): number {
  const rawText = documentToPlainTextString(content);
  const wordCount = words(rawText).length;
  return Math.round(wordCount / averageReadingSpeed);
}
