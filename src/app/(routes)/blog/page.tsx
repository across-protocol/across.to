import { Text } from "@/app/_components/text";
import BackToTopButton from "./_components/back-to-top-button";
import BackgroundBanner from "./_components/background-banner";
import Filter from "./_components/filter";

import { Suspense } from "react";
import { Posts } from "./_components/posts";
import { createCacheKey } from "@/app/_lib/cache";
import { Metadata } from "next";
import { SITE_BASE_URL } from "@/app/_constants/links";
import Pagination from "./_components/pagination";
import { retrieveContentfulPublishedSlugs } from "@/app/_lib/contentful";

export type SearchParams = Record<string, string | undefined>;

type PageProps = {
  searchParams: SearchParams;
};

export default async function BlogHomePage({ searchParams }: PageProps) {
  const key = createCacheKey({
    searchParams,
  });

  const search = searchParams["search"];
  const isSearch = Boolean(!!search);
  const page = Number(searchParams["page"]);

  const pageNumber = isNaN(page) || !Number.isInteger(page) || page < 1 ? 1 : page;
  const pageLength = 16;

  const { slugsForQuery, totalCount } = await retrieveContentfulPublishedSlugs({
    query: search,
    sortByRecent: true,
    limit: pageLength,
    skip: (pageNumber - 1) * pageLength,
  });

  return (
    <>
      <BackgroundBanner />
      <main className="relative z-[1] mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Text variant="heading-2" className="-mb-6">
          <h1>Across Blog</h1>
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
          <Posts isSearch={isSearch} slugs={slugsForQuery} />
          <Pagination
            pageLength={pageLength}
            totalCount={totalCount}
            currentPage={pageNumber}
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
    alternates: {
      canonical: `/blog`,
    },
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
