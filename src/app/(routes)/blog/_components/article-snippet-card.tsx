import { BlogPostType } from "@/app/_lib/contentful";
import { Text } from "@/app/_components/text";
import Link from "next/link";
import ContentfulImage from "../[slug]/_components/contentful-image";
import { MetaInfo } from "../[slug]/_components/meta-info";

export default function ArticleSnippetCard({
  article,
}: {
  article: BlogPostType;
  expandedOnDesktop?: boolean;
}) {
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
        <Text variant="heading-5" className="line-clamp-2">
          {article.fields.title}
        </Text>
      </div>
    </Link>
  );
}
