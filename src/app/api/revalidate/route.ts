import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { CONTENTFUL_REVALIDATE_SECRET } from "@/app/_constants";

export function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // revalidate ALL data. for home page and the articles pages
  revalidatePath("/blog", "layout");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
