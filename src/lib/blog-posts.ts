export interface BlogPost {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}

// Static fallback list — keeps the section live without a server-side RSS proxy.
// Sourced from medium.com/@kshitiz52.525 (June 2026 snapshot).
export const blogPosts: BlogPost[] = [
  {
    title: "From Zero to Conquering: How 2026 Became the Year of the Breakthrough",
    link: "https://medium.com/@kshitiz52.525/780d641b4bce",
    date: "Apr 2026",
    excerpt:
      "A reflection on the year that turned years of bets into compounding outcomes — TiE Global, DnC, Planiva and the GTM playbooks behind them.",
  },
  {
    title: "I Was a TiE Accelerator Finalist at 21",
    link: "https://medium.com/@kshitiz52.525/82c150e16a2e",
    date: "Nov 2025",
    excerpt:
      "Going from a college dorm idea to the top 3% of 5,000+ global applicants. What the journey actually looked like — the pitches, the rejections, the rewrites.",
  },
  {
    title:
      "How I Am Building a Startup, Mastering AI, and Finding My Way in Bangalore",
    link: "https://medium.com/@kshitiz52.525/b11c7f7d07b2",
    date: "Oct 2025",
    excerpt:
      "Notes on operating in the AI capital of India as a college student — what to optimize for, what to ignore, and the daily compounding loops.",
  },
  {
    title: "Beyond the Code: Why AI Makes Human Coders Indispensable",
    link: "https://medium.com/@kshitiz52.525/aa46b3d6e1ec",
    date: "Jul 2025",
    excerpt:
      "The skills that get more valuable as the models get better — taste, system design, and the ability to ship in ambiguous environments.",
  },
  {
    title: "Forget Tomorrow: Why Starting Your AI Journey TODAY Is Your Superpower",
    link: "https://medium.com/@kshitiz52.525/c8760da79bb5",
    date: "Jul 2025",
    excerpt:
      "A practical letter to anyone hesitating to start. The on-ramps, the first 90 days, and how to build a portfolio that compounds.",
  },
];
