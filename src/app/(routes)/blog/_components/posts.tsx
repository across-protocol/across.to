import { Text } from "@/app/_components/text";
import ArticleSnippetCard from "./article-snippet-card";
import ArticleFullCard from "./article-full-card";
import {
  BlogPostWithRelevantEntries,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import { SearchParams } from "../page";

export async function Posts({
  getStartedSnippets,
  recentArticleSlugs,
  searchParams,
}: {
  searchParams: SearchParams;
  recentArticleSlugs: string[];
  getStartedSnippets: (BlogPostWithRelevantEntries | undefined)[];
}) {
  const search = searchParams["search"];
  if (!search) {
    return (
      <>
        <div className="flex w-full flex-col gap-4">
          <Text variant="body" className="text-grey-400">
            Get started with Across
          </Text>
          <div className="w-full overflow-x-scroll scrollbar-hide">
            <div className="grid w-[1024px] grid-cols-3 gap-5 md:w-full">
              {getStartedSnippets.slice(0, 3).map((snippet) => (
                <div className="w-full" key={snippet?.fields.slug}>
                  <ArticleSnippetCard article={snippet!} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <Text variant="body" className="text-grey-400">
            Most recent articles
          </Text>
          {recentArticleSlugs.map((slug) => (
            <ArticleFullCard key={slug} slug={slug} />
          ))}
        </div>
      </>
    );
  } else {
    const searchedSlugs = await retrieveContentfulPublishedSlugs({
      query: search,
    });
    return (
      <div className="flex w-full flex-col gap-4">
        <Text variant="body" className="text-grey-400">
          Search results
        </Text>
        {searchedSlugs.map((slug) => (
          <ArticleFullCard key={slug} slug={slug} />
        ))}
      </div>
    );
  }
}
