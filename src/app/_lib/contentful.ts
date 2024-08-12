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
  featuredImage: EntryFieldTypes.AssetLink;
};

type TypeAcrossBlogPostSkeleton = EntrySkeletonType<
  TypeAcrossBlogPostFields,
  "acrossBlogPost"
>;
type TypeAcrossBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAcrossBlogPostSkeleton, Modifiers, Locales>;

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

export async function retrieveContentfulEntry(entrySlugId: string) {
  const client = getProductionClient();
  const options = {
    content_type: contentType,
    limit: 1,
    "fields.slug[match]": entrySlugId,
  } as const;
  const entries =
    await client.withoutUnresolvableLinks.getEntries<TypeAcrossBlogPostSkeleton>(options);
  return entries.total ? entries.items[0] : undefined;
}

export function getReadingTime(content: Document): number {
  const rawText = documentToPlainTextString(content);
  const wordCount = words(rawText).length;
  return Math.round(wordCount / averageReadingSpeed);
}
