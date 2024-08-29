import { Text } from "@/app/_components/text";
import BackToTopButton from "./_components/back-to-top-button";
import BackgroundBanner from "./background-banner";
import Filter from "./_components/filter";
import {
  retrieveContentfulEntry,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import ArticleFullCard from "./_components/article-full-card";
import ArticleSnippetCard from "./_components/article-snippet-card";

export default async function BlogHomePage() {
  const recentArticleSlugs = await retrieveContentfulPublishedSlugs({
    limit: 6,
    avoidTags: ["get-started"],
  });
  const getStartedSlugs = await retrieveContentfulPublishedSlugs({
    limit: 3,
    includeTags: ["get-started"],
  });
  const getStartedSnippets = await Promise.all(
    getStartedSlugs.map((s) => retrieveContentfulEntry(s)),
  );

  return (
    <>
      <BackgroundBanner />
      <main className="relative z-[1] mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Text variant="heading-2" className="-mb-6 lg:-mb-8">
          Across Protocol
        </Text>
        <Filter />
        <div className="flex w-full flex-col gap-4">
          <Text variant="body" className="text-grey-400">
            Get started with Across
          </Text>
          <div className="scrollbar-hide w-full overflow-x-scroll">
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
        <BackToTopButton />
      </main>
    </>
  );
}
