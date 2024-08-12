import Image from "next/image";

export default function FeaturedImage({ url, title }: { url?: string; title: string }) {
  return (
    url && (
      <Image
        className="rounded-3xl border border-white-translucent"
        src={`https:${url}`}
        width={800}
        height={400}
        alt={title}
      />
    )
  );
}
