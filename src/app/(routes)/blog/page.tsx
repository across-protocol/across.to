import { Text } from "@/app/_components/text";
import BackToTopButton from "./_components/back-to-top-button";
import BackgroundBanner from "./background-banner";
import Filter from "./_components/filter";
import { retrieveContentfulPublishedSlugs } from "@/app/_lib/contentful";
import ArticleFullCard from "./_components/article-full-card";

export default async function BlogHomePage() {
  const slugs = await retrieveContentfulPublishedSlugs();

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
            Most recent articles
          </Text>
          {slugs.map((slug) => (
            <ArticleFullCard key={slug} slug={slug} />
          ))}
        </div>

        <BackToTopButton />
      </main>
    </>
  );
}
