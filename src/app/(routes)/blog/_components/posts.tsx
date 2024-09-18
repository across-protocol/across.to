import { Text } from "@/app/_components/text";
import ArticleFullCard from "./article-full-card";
import { retrieveContentfulPublishedSlugs } from "@/app/_lib/contentful";
import { SearchParams } from "../page";
import { useState } from "react";

export async function Posts({ searchParams }: { searchParams: SearchParams }) {
  const search = searchParams["search"];
  const isSearch = Boolean(!!search);
  const pageLength = 6;
  const searchedSlugs = await retrieveContentfulPublishedSlugs({
    query: search ? decodeURI(search) : undefined,
    sortByRecent: true,
    limit: pageLength,
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <Text variant="body" className="text-grey-400">
        {isSearch ? "Search results" : "Most recent articles"}
      </Text>
      {searchedSlugs.map((slug) => (
        <ArticleFullCard key={slug} slug={slug} />
      ))}
    </div>
  );
}
