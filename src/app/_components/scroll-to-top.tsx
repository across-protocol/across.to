"use client";

import { Text } from "@/app/_components/text";

export default function BackToTopButton() {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="cursor-pointer py-8 text-center lg:pt-16" onClick={onClickHandler}>
      <Text variant="cap-case-sm" className="text-grey-400">
        Back to top
      </Text>
    </div>
  );
}
