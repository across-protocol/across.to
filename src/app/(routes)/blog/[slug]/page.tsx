import { ChevronDownIcon } from "@/app/_components/icons";
import { Text } from "@/app/_components/text";
import {
  retrieveContentfulEntry,
  retrieveContentfulPublishedSlugs,
} from "@/app/_lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

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
  // Max title to 40 characters
  const title =
    entry.fields.title.length > 40
      ? entry.fields.title.slice(0, 40) + "..."
      : entry.fields.title;

  const featuredUrl = `https:${entry.fields.featuredImage?.fields.file?.url ?? ""}`;
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 py-10">
      <div className="flex items-center gap-2">
        <Link href="/blog" className="text-sm font-lighter leading-tight ">
          Blog
        </Link>
        <ChevronDownIcon className="-rotate-90" />
        <div className="text-sm font-lighter leading-tight text-aqua-100">{title}</div>
      </div>
      <Image
        className="border-white-translucent rounded-3xl border"
        src={featuredUrl}
        width={800}
        height={400}
        alt={entry.fields.title}
      />
    </main>
  );
}
