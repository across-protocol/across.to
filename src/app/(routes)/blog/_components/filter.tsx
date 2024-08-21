"use client";

import { useFilter } from "@/app/_hooks/useFilter";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Filter() {
  const { text, handleTextChange, tag, productParam, clearAll } = useFilter();

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          // Check if the target is intersecting and at the top of the viewport
          setIsIntersecting(entry.boundingClientRect.top <= 0 && entry.isIntersecting);
        },
        {
          threshold: 0, // Trigger as soon as any part of the target is visible
          root: null, // The viewport is the root
          rootMargin: "0px 0px -100% 0px", // Ensure we only trigger when the top reaches the top
        },
      ),
    [],
  );

  useEffect(() => {
    const target = ref.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observer]);

  return (
    <div
      className="sticky top-14 flex w-full justify-center border-b border-white-translucent py-6"
      ref={ref}
    >
      <p> {JSON.stringify(isIntersecting)}</p>
    </div>
  );
}
