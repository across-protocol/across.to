import { BlogPostType } from "@/app/_lib/contentful";

export default function ShareLink({
  entry,
  collapsed,
}: {
  entry: BlogPostType;
  collapsed?: boolean;
}) {
  const url = `https://across.to/blog/${entry.fields.slug}`;

  return <p> hi</p>;
}
