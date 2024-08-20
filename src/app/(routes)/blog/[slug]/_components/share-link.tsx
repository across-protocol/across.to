"use client";

import { Text } from "@/app/_components/text";
import { BlogPostType } from "@/app/_lib/contentful";
import { TwitterIcon, LinkIcon } from "@/app/_components/icons";
import { useEffect, useState } from "react";
import { twMerge } from "@/app/_lib/tw-merge";

function LinkButton({
  onClick,
  icon: Icon,
}: {
  onClick: () => void;
  icon: typeof TwitterIcon;
}) {
  const [copyClicked, setCopyClicked] = useState(false);
  useEffect(() => {
    if (copyClicked) {
      setTimeout(() => {
        setCopyClicked(false);
      }, 1000);
    }
  }, [copyClicked]);

  const borderColor = copyClicked ? "border-aqua-100" : "border-white-translucent";
  const textColor = copyClicked ? "text-aqua-100" : "text-white";
  return (
    <button
      onClick={() => {
        setCopyClicked(true);
        onClick();
      }}
      className={twMerge(
        borderColor,
        textColor,
        "rounded-3xl border px-4 py-2 transition-colors duration-300",
      )}
    >
      <Icon className="h-4 w-4 transition-colors duration-300" />
    </button>
  );
}

export default function ShareLink({
  entry,
  collapsed,
}: {
  entry: BlogPostType;
  collapsed?: boolean;
}) {
  const url = `https://across.to/blog/${entry.fields.slug}`;

  const buttons = [
    {
      icon: LinkIcon,
      onClick: () => {
        navigator.clipboard.writeText(url);
      },
    },
    {
      icon: TwitterIcon,
      onClick: () => {}, // TODO: Implement Twitter sharing
    },
  ];

  return (
    <div
      className={twMerge(
        "flex w-full gap-5",
        collapsed ? "flex-row items-center justify-center" : "flex-col",
      )}
    >
      <Text variant="body">Share this article</Text>
      <div className="flex flex-row items-center gap-3">
        {buttons.map((button, index) => (
          <LinkButton key={index} {...button} />
        ))}
      </div>
    </div>
  );
}
