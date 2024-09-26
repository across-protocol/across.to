import { useSetQueryParams } from "./useSetQueryParams";
import { useState, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ampli } from "../_amplitude";

export function useFilter() {
  const { params, setParams, removeParams } = useSetQueryParams(["page", "search"]);
  const [text, setText] = useState(params.search ?? "");

  const debouncedSetParam = useDebouncedCallback((value: string) => {
    setParams({
      search: value,
      page: "1", // Reset page to 1 when searching
    });
    if (!!value) {
      ampli.blogSearch({ search: value, page: "marketingBlogHomePage" });
    }
  }, 300);

  function handleTextChange(value: string) {
    setText(value);
    debouncedSetParam(value);
  }

  function handlePageChange(value: number) {
    setParams({
      page: String(value),
    });
  }

  const clearAll = useCallback(() => {
    setText("");
    removeParams(["page", "search"]);
  }, [removeParams]);

  const hasParams = text || params.tag ? true : false;

  return {
    text,
    handleTextChange,
    productParam: params.product,
    tag: params.tag,
    handlePageChange,
    clearAll,
    hasParams,
  };
}
