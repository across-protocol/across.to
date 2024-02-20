import { extendTailwindMerge } from "tailwind-merge";

// Custom twMerge configuration because we modified the tailwind.config.js file.
// https://github.com/dcastil/tailwind-merge/blob/v2.2.1/docs/configuration.md#configuration
export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      colors: [
        "transparent",
        "light",
        "grey",
        "black",
        "aqua",
        "orange",
        "purple",
        "teal",
      ],
    },
    classGroups: {
      tracking: [
        {
          tracking: [
            "tight-1",
            "tight-2",
            "tight-3",
            "tight-4",
            "tight-5",
            "tight-6",
            "wide-4",
          ],
        },
      ],
      "font-size": [
        {
          text: ["heading-1", "heading-2", "heading-3", "heading-4"],
        },
      ],
      "font-weight": ["text-lighter"],
      "max-w": ["max-w-100"],
      animate: [
        {
          animate: ["scroll-infinite"],
        },
      ],
      "drop-shadow": [
        { "drops-shadow": ["aqua-sm", "aqua", "teal-sm", "teal", "purple-sm", "purple"] },
      ],
    },
  },
});
