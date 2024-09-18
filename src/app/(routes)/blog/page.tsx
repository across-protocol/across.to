import { Text } from "@/app/_components/text";
import BackToTopButton from "./_components/back-to-top-button";
import BackgroundBanner from "./_components/background-banner";
import Filter from "./_components/filter";

import { Suspense } from "react";
import {
  retrieveContentfulPublishedSlugs,
  retrieveContentfulEntry,
} from "@/app/_lib/contentful";
import { Posts } from "./_components/posts";
import { createCacheKey } from "@/app/_lib/cache";
import { Metadata } from "next";
import { SITE_BASE_URL } from "@/app/_constants/links";

export type SearchParams = Record<string, string | undefined>;

type PageProps = {
  searchParams: SearchParams;
};

export default async function BlogHomePage({ searchParams }: PageProps) {
  const recentArticleSlugs = await retrieveContentfulPublishedSlugs({
    limit: 6,
    avoidTags: ["get-started"],
    sortByRecent: true,
  });
  const getStartedSlugs = await retrieveContentfulPublishedSlugs({
    limit: 3,
    includeTags: ["get-started"],
  });
  const getStartedSnippets = await Promise.all(
    getStartedSlugs.map((s) => retrieveContentfulEntry(s)),
  );

  const key = createCacheKey({
    searchParams,
  });

  return (
    <>
      <BackgroundBanner />
      <main className="relative z-[1] mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Text variant="heading-2" className="-mb-6 lg:-mb-8">
          Across Blog
        </Text>
        <Suspense>
          <Filter />
        </Suspense>
        <Suspense
          key={key}
          fallback={
            <h2 className="text-text-secondary text-2xl my-auto flex-1">Searching...</h2>
          }
        >
          <Posts
            getStartedSnippets={getStartedSnippets}
            recentArticleSlugs={recentArticleSlugs}
            searchParams={searchParams}
          />
          <BackToTopButton />
        </Suspense>
      </main>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "Across Blog";
  const description =
    "Explore the latest in cross-chain solutions with the Across blog. Dive into tutorials, updates and announcements that help you leverage our protocol for fast and secure cross-chain transactions.";

  return {
    metadataBase: new URL(SITE_BASE_URL),
    publisher: "Across Protocol",
    title,
    description,
    icons: {
      icon: ["/favicon-32x32.png", "/favicon-16x16.png"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@AcrossProtocol",
      title,
    },
    openGraph: {
      siteName: "Across Protocol",
      title,
      description,
    },
  };
}
