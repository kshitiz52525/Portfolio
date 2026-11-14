import { queryOptions } from "@tanstack/react-query";
import { getMediumPosts, type MediumPost } from "./medium.functions";

export type { MediumPost };

export const mediumPostsQueryOptions = queryOptions({
  queryKey: ["medium-posts"],
  queryFn: () => getMediumPosts(),
  staleTime: 60 * 60 * 1000, // 1 hour
  retry: 1,
});

export function formatPostDate(pubDate: string): string {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
