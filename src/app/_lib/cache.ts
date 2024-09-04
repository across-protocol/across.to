import { SearchParams } from "../(routes)/blog/page";

export function createCacheKey(options: { searchParams: SearchParams }) {
  const { searchParams } = options;
  const newParamString = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === "string") {
      newParamString.set(key, value);
    }
  });

  return newParamString.toString();
}
