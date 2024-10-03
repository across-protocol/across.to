import { Text } from "@/app/_components/text";
import ArticleFullCard from "./article-full-card";

export async function Posts({ isSearch, slugs }: { isSearch: boolean; slugs: string[] }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Text variant="body" className="text-grey-400">
        {isSearch ? "Search results" : "Most recent articles"}
      </Text>
      {slugs.map((slug) => (
        <ArticleFullCard key={slug} slug={slug} />
      ))}
    </div>
  );
}
