"use client";

import { SearchIcon } from "@/app/_components/icons";
import { useFilter } from "@/app/_hooks/useFilter";

export default function Filter() {
  const { text, handleTextChange } = useFilter();

  return (
    <div className="sticky top-14 z-10 flex w-full justify-center border-b border-white-translucent bg-grey-dark py-6">
      <div className="flex h-10 items-center gap-2 rounded-full border border-white-translucent bg-[#ffffff08] px-4">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          className="w-80 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
