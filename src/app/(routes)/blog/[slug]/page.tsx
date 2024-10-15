import {
  resolvePublishDateToIsoDate,
  retrieveContentfulEntry,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Divider from "./_components/divider";
import ArticleContent from "./_components/article-content";
import BackgroundBanner from "../_components/background-banner";
import Breadcrumb from "./_components/breadcrumb";
import { MetaInfo } from "./_components/meta-info";
import BackToTopButton from "../_components/back-to-top-button";
import ContentfulImage from "./_components/contentful-image";
import ShareLink from "./_components/share-link";
import ArticleSnippetCard from "../_components/article-snippet-card";
import { Metadata } from "next";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { SITE_BASE_URL } from "@/app/_constants/links";

type SpecificBlogPageProps = { params: { slug: string } };

export async function generateMetadata({
  params,
}: SpecificBlogPageProps): Promise<Metadata> {
  const entry = await retrieveContentfulEntry(params.slug);
  if (!entry) {
    redirect("/404");
  }
  const title = entry.fields.title;
  const description =
    documentToPlainTextString(entry.fields.content).substring(0, 50) + "...";
  const imageUrl = `https:${entry.fields.featuredImage?.fields.file?.url}`;

  return {
    keywords: entry.fields.tag ?? [],
    metadataBase: new URL(SITE_BASE_URL),
    publisher: "Across Protocol",
    alternates: {
      canonical: `/blog/${params.slug}`,
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
      images: [imageUrl],
    },
    openGraph: {
      siteName: "Across Protocol",
      title,
      description,
      images: [imageUrl],
      url: `/blog/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  // Grab all relevant slugs and pipe them into the SSG function
  // so that we can generate static blog pages without needing to
  // use SSR at runtime as much as possible.
  const { slugsForQuery } = await retrieveContentfulPublishedSlugs();
  return slugsForQuery.map((slug) => ({
    slug,
  }));
}

const SubStack = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) =>
  children && (
    <div className={twMerge("row flex flex-col gap-5 lg:gap-6", className)}>
      {children}
    </div>
  );

export default async function SpecificBlogPage({ params }: SpecificBlogPageProps) {
  const entry = await retrieveContentfulEntry(params.slug);
  if (!entry) {
    redirect("/404");
  }
  const fullTitle = entry.fields.title;
  const content = entry.fields.content;
  return (
    <>
      <BackgroundBanner />
      <main className="relative z-[1] mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <div className="absolute right-[-180px] top-24 hidden h-full lg:block">
          <div className="sticky top-24 rounded-3xl border border-white-translucent px-4 py-6">
            <ShareLink entry={entry} />
          </div>
        </div>
        <Breadcrumb fullTitle={fullTitle} />
        <ContentfulImage image={entry.fields.featuredImage} />
        <SubStack className="text-center sm:text-left">
          <MetaInfo
            isoCreatedDate={resolvePublishDateToIsoDate(entry)}
            content={content}
          />
          <h1 className="text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-2">
            {fullTitle}
          </h1>
          {/** Block for Share Links */}
          <Divider className="block lg:hidden" />
          <div className="block w-full lg:hidden">
            <ShareLink entry={entry} collapsed />
          </div>
          <Divider className="block lg:hidden" />
        </SubStack>
        <Divider className="hidden lg:block" />
        <ArticleContent content={content} />
        <SubStack>
          <Divider />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {entry.relevantEntries.map((entry) => (
              <ArticleSnippetCard article={entry} key={entry.sys.id} />
            ))}
          </div>
        </SubStack>
        <BackToTopButton />
      </main>
    </>
  );
}

// Add revalidate for ISR at the page level
export const revalidate = 60; // revalidate every 60 seconds
