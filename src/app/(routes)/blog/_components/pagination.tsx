"use client";

import { useFilter } from "@/app/_hooks/useFilter";
import { twMerge } from "@/app/_lib/tw-merge";

export default function Pagination({
  pageLength,
  currentPage,
  totalCount,
}: {
  pageLength: number;
  currentPage: number;
  totalCount: number;
}) {
  const { handlePageChange } = useFilter();

  const pageChangeHandler = (page: number) => {
    handlePageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(totalCount / pageLength);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex items-start justify-center gap-1 lg:gap-3">
      <PageButton
        text="Previous"
        isDisabled={!hasPrevious}
        isAqua={false}
        onClick={() => pageChangeHandler(currentPage - 1)}
      />
      {Array.from({ length: totalPages }).map((_, index) => (
        <PageButton
          key={index}
          text={`${index + 1}`}
          isDisabled={false}
          isAqua={index + 1 === currentPage}
          onClick={() => pageChangeHandler(index + 1)}
        />
      ))}
      <PageButton
        text="Next"
        isDisabled={!hasNext}
        isAqua={false}
        onClick={() => pageChangeHandler(currentPage + 1)}
      />
    </div>
  );
}

const PageButton = ({
  text,
  isDisabled,
  onClick,
  isAqua,
}: {
  text: string;
  isDisabled: boolean;
  isAqua: boolean;
  onClick?: () => void;
}) => (
  <div
    className={twMerge(
      "flex items-center justify-center gap-2 rounded-full px-4 py-2",
      isDisabled ? "opacity-25" : "cursor-pointer",
      isAqua
        ? "bg-aqua-100/5 text-aqua-100"
        : "border border-white-translucent text-grey-400",
    )}
    onClick={isDisabled ? undefined : onClick}
  >
    {text}
  </div>
);
