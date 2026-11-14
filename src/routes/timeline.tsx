import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { timelineChapters, type TimelineChapter } from "@/lib/timeline-data";
import { Footer, Nav } from "@/components/site-chrome";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline | Kshitiz Trigunayat" },
      {
        name: "description",
        content:
          "The journey of Kshitiz Trigunayat: from Soron and Kasganj in Uttar Pradesh, through Gurgaon and Bhiwadi, to building AI products in Bengaluru.",
      },
      { property: "og:title", content: "Timeline | Kshitiz Trigunayat" },
      { property: "og:description", content: "From Soron, UP to Bengaluru, in chapters." },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: TimelinePage,
});

const TAG_STYLE: Record<TimelineChapter["tag"], string> = {
  Origin: "bg-primary text-bg",
  School: "border border-border text-secondary",
  College: "border border-border text-secondary",
  Work: "border border-primary text-primary",
  Build: "border border-accent text-accent",
  Now: "bg-accent text-on-accent",
};

function TimelinePage() {
  const first = timelineChapters[0]?.year ?? "";
  return (
    <div className="min-h-screen bg-bg text-primary font-body">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-14">
          <div
            aria-hidden
            className="grid-paper absolute inset-0 pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse 70% 70% at 80% 10%, black, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 80% 10%, black, transparent 75%)",
            }}
          />
          <div className="container-x relative">
            <p className="font-mono-label text-secondary">
              Timeline / {first} to now
            </p>
            <h1
              className="font-display font-semibold mt-6"
              style={{ fontSize: "clamp(48px, 10vw, 128px)", lineHeight: 0.92 }}
            >
              From Soron
              <br />
              to <span className="font-serif-italic text-accent">Bengaluru.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-secondary">
              Four towns, three schools, one university, and a run of products and companies along the
              way.
            </p>
          </div>
        </section>

        <section className="container-x pb-24">
          <ol className="relative border-l-2 border-rule ml-1.5 md:ml-0">
            {timelineChapters.map((c) => (
              <li key={c.year + c.title} className="relative pl-7 md:pl-0 md:grid md:grid-cols-12 md:gap-8 py-8 border-b border-border">
                <span
                  aria-hidden
                  className={`absolute -left-[7px] top-10 h-3 w-3 ${c.highlight ? "bg-accent" : "bg-bg border-2 border-rule"}`}
                />
                <div className="md:col-span-3 md:pl-10">
                  <p className="font-display text-2xl md:text-3xl font-semibold">{c.year}</p>
                  <p className="mt-1 font-mono-label text-secondary">{c.place}</p>
                </div>
                <div className="mt-3 md:mt-0 md:col-span-7">
                  <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">{c.title}</h2>
                  <p className="mt-3 text-secondary leading-relaxed max-w-2xl">{c.body}</p>
                </div>
                <div className="mt-4 md:mt-1 md:col-span-2 md:text-right">
                  <span className={`inline-block px-2 py-1 font-mono-label ${TAG_STYLE[c.tag]}`}>{c.tag}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="font-display text-3xl md:text-5xl font-semibold leading-tight">
              Next chapter: <span className="font-serif-italic text-accent">in progress.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                hash="work"
                className="inline-flex h-12 items-center gap-2 bg-accent px-6 font-mono-label text-on-accent hover:bg-primary hover:text-bg transition-colors"
              >
                See the work <ArrowRight size={14} />
              </Link>
              <Link
                to="/"
                hash="contact"
                className="inline-flex h-12 items-center border border-primary px-6 font-mono-label hover:bg-primary hover:text-bg transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
