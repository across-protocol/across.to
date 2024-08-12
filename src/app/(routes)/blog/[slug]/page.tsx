import { Text } from "@/app/_components/text";
import {
  retrieveContentfulEntry,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import { redirect } from "next/navigation";
import BackgroundBanner from "./backgroundBanner";
import Breadcrumb from "./breadcrumb";
import Divider from "./divider";
import FeaturedImage from "./featuredImage";
import { MetaInfo } from "./metaInfo";
import ArticleContent from "./articleContent";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import ArticleSnippetCard from "../ArticleSnippetCard";

type SpecificBlogPageProps = { params: { slug: string } };

export async function generateStaticParams() {
  // Grab all relevant slugs and pipe them into the SSG function
  // so that we can generate static blog pages without needing to
  // use SSR at runtime as much as possible.
  const slugs = await retrieveContentfulPublishedSlugs();
  return slugs.map((slug) => ({
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
  const imageUrl = entry.fields.featuredImage?.fields.file?.url;
  const fullTitle = entry.fields.title;
  const dateCreatedAt = entry.sys.createdAt;
  const content = entry.fields.content;
  return (
    <>
      <BackgroundBanner offsetTop={-127} />
      <main className="z-[1] mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Breadcrumb fullTitle={fullTitle} />
        <FeaturedImage url={imageUrl} title={fullTitle} />
        <SubStack className="text-center sm:text-left">
          <MetaInfo isoCreatedDate={dateCreatedAt} content={content} />
          <h1 className="text-heading-3 font-lighter lining-nums tabular-nums tracking-tight-5 sm:text-heading-2">
            {fullTitle}
          </h1>
        </SubStack>
        <Divider />
        <ArticleContent content={content} />
        <SubStack>
          <Divider />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {entry.relevantEntries.map((entry) => (
              <ArticleSnippetCard article={entry} />
            ))}
          </div>
        </SubStack>
      </main>
    </>
  );
}
