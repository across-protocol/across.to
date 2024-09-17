import { resolvePublishDateToIsoDate, retrieveContentfulEntry } from "@/app/_lib/contentful";
import ContentfulImage from "../[slug]/_components/contentful-image";
import { MetaInfo } from "../[slug]/_components/meta-info";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Text } from "@/app/_components/text";
import Link from "next/link";

export default async function ArticleFullCard({ slug }: { slug: string }) {
  const article = await retrieveContentfulEntry(slug);
  if (!article) {
    return null;
  }
  const description =
    article.fields.description ?? documentToPlainTextString(article.fields.content);

  return (
    <Link
      href={`blog/${slug}`}
      className="group relative order-1 grid  cursor-pointer grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-white-translucent bg-[#ffffff08] p-5 md:order-1 md:grid-cols-2 md:p-10"
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <MetaInfo
          isoCreatedDate={resolvePublishDateToIsoDate(article)}
          content={article.fields.content}
        />
        <Text variant="heading-4" className="line-clamp-2 group-hover:text-aqua-100">
          {article.fields.title}
        </Text>
        <Text variant="body" className="line-clamp-2 text-lg">
          {description}
        </Text>
      </div>
      <div className="md:h-[calc(100% + 80px)] -order-1 -m-5 -mb-0 min-h-40 md:order-1 md:-m-10 md:-mb-10 md:ml-0">
        <ContentfulImage image={article.fields.featuredImage} borderless fillDisplay />
      </div>
    </Link>
  );
}
