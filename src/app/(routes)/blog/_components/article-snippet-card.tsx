import { BlogPostType } from "@/app/_lib/contentful";
import { Text } from "@/app/_components/text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Link from "next/link";
import ContentfulImage from "../[slug]/_components/contentful-image";
import { MetaInfo } from "../[slug]/_components/meta-info";

export default function ArticleSnippetCard({
  article,
}: {
  article: BlogPostType;
  expandedOnDesktop?: boolean;
}) {
  const description =
    article.fields.description ??
    `${documentToPlainTextString(article.fields.content).substring(0, 25)}...`;
  return (
    <Link
      href={`/blog/${article.fields.slug}`}
      className="relative isolate flex w-full flex-col items-start justify-center gap-0 overflow-hidden rounded-3xl border border-white-translucent "
    >
      <ContentfulImage image={article.fields.featuredImage} borderless />
      <div className="flex flex-col gap-4 p-5">
        <MetaInfo
          isoCreatedDate={article.sys.createdAt}
          content={article.fields.content}
          preventCenter
        />
        <Text variant="heading-5">{article.fields.title}</Text>
        <Text variant="body">{description}</Text>
      </div>
    </Link>
  );
}
