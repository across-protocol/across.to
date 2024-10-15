import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { CONTENTFUL_REVALIDATE_SECRET } from "@/app/_constants";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json();
  const slug = body?.fields?.slug?.["en-US"];

  if (typeof slug !== "string") {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  // Revalidate blog post and all related pages
  revalidatePath(`/blog/${slug}`);
  // Revalidate home page
  revalidatePath("/blog");

  return NextResponse.json({ revalidated: true, slug, now: Date.now() });
}
