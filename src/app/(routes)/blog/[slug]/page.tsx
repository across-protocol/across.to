import { Text } from "@/app/_components/text";
import {
  retrieveContentfulEntry,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import Image from "next/image";
import { redirect } from "next/navigation";
import BackgroundBanner from "./backgroundBanner";
import Breadcrumb from "./breadcrumb";
import { MetaInfo } from "./metaInfo";
import FeaturedImage from "./featuredImage";

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
      <main className="z-10 mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Breadcrumb fullTitle={fullTitle} />
        <FeaturedImage url={imageUrl} title={fullTitle} />
        <div className="row flex flex-col gap-5 text-center sm:text-left lg:gap-6">
          <MetaInfo isoCreatedDate={dateCreatedAt} content={content} />
          <Text variant="heading-2">{fullTitle}</Text>
          <section></section>
        </div>
        <div className="border-white h-0 w-full border-t border-white-translucent"></div>
      </main>
    </>
  );
}
