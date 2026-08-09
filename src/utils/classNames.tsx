import { twMerge } from "tailwind-merge";

export const PAGE_GUTTER = "";
export const PAGE_CONTAINER = "w-full mx-auto max-w-[1160px] px-4";

export function mergeClassNames(
  ...classes: (string | undefined | null | false)[]
) {
  return twMerge(classes.filter(Boolean).join(" "));
}
