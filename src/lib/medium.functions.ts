import { createServerFn } from "@tanstack/react-start";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  guid: string;
}

const MEDIUM_FEED =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kshitiz52.525";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const getMediumPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ posts: MediumPost[]; error?: string }> => {
    try {
      const res = await fetch(MEDIUM_FEED, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`RSS proxy returned ${res.status}`);
      const data = (await res.json()) as { items?: any[] };
      const posts: MediumPost[] = (data.items ?? []).map((item) => {
        const text = stripHtml(item.description ?? "");
        return {
          title: item.title ?? "",
          link: item.link ?? "",
          pubDate: item.pubDate ?? "",
          thumbnail: item.thumbnail || item.enclosure?.link || "",
          description: text.length > 180 ? text.slice(0, 180) + "…" : text,
          guid: item.guid ?? item.link ?? item.title,
        };
      });
      return { posts };
    } catch (err) {
      return {
        posts: [],
        error: err instanceof Error ? err.message : "Failed to fetch posts",
      };
    }
  },
);
