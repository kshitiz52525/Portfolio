import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { dncActivations, projects, type Project } from "@/lib/projects";
import { timelineChapters } from "@/lib/timeline-data";
import { blogPosts } from "@/lib/blog-posts";
import { testimonials } from "@/lib/testimonials";
import { mediumPostsQueryOptions, formatPostDate } from "@/lib/medium";
import { HERO_STATS, SITE } from "@/lib/site";
import { Footer, MediaPlaceholder, Nav, SectionHeader } from "@/components/site-chrome";
import { CountUp, WorkShowcase } from "@/components/work-showcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE.name,
          jobTitle: "AI Product Engineer",
          url: "/",
          email: `mailto:${SITE.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          alumniOf: "Atria University",
          sameAs: [SITE.links.github, SITE.links.linkedin, SITE.links.medium],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/** Fade/slide-up rows, cards and headings as they scroll in (staggered by sibling index). */
function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    const sel = [
      "section:not(#top):not(#work) h2",
      "section:not(#top):not(#work) article",
      "section:not(#top):not(#work) li",
      "section:not(#top):not(#work) blockquote",
      "section:not(#top):not(#work) .container-x > div > p",
      "section:not(#top):not(#work) .grid > div",
      "footer > *",
    ].join(",");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sr-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      if (el.closest("#work") || el.getBoundingClientRect().top < window.innerHeight) return;
      const idx = Array.from(el.parentElement?.children ?? []).indexOf(el);
      el.style.setProperty("--sr-delay", `${Math.min(idx, 6) * 70}ms`);
      el.classList.add("sr");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-bg text-primary font-body">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Capabilities />
        <Timeline />
        <Writing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (gridRef.current) gridRef.current.style.transform = `translateY(${y * 0.25}px)`;
        if (titleRef.current) {
          titleRef.current.style.transform = `translateY(${y * -0.08}px)`;
          titleRef.current.style.opacity = String(Math.max(0.15, 1 - y / 800));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
      <div
        ref={gridRef}
        aria-hidden
        className="grid-paper absolute -inset-20 pointer-events-none will-change-transform"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 70% 20%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 20%, black, transparent 75%)",
        }}
      />
      <div className="container-x relative">
        <div className="flex flex-wrap items-center justify-between gap-3 reveal">
          <p className="font-mono-label text-secondary">AI Product Engineer, Bengaluru, India</p>
          <p className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 font-mono-label text-primary">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Now: APM @ Ctruh
          </p>
        </div>

        <h1
          ref={titleRef}
          className="font-display font-semibold mt-10 md:mt-14 reveal will-change-transform"
          style={{ fontSize: "clamp(52px, 12vw, 168px)", lineHeight: 0.88, animationDelay: "120ms" }}
        >
          Kshitiz
          <br />
          Trigunayat<span className="text-accent">.</span>
        </h1>

        <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <p
            className="md:col-span-7 font-display font-medium reveal"
            style={{ fontSize: "clamp(28px, 4.2vw, 52px)", lineHeight: 1.05, animationDelay: "260ms" }}
          >
            I build <span className="font-serif-italic text-accent">AI products</span> and the{" "}
            <span className="font-serif-italic text-accent">distribution</span> to scale them.
          </p>
          <div className="md:col-span-5 reveal" style={{ animationDelay: "380ms" }}>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              I ship LLM-powered products and run on-ground growth. Founder at Planiva. Co-founder at
              DnC Ventures. Associate Product Manager at Ctruh. TiE Global Finalist.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-shine inline-flex h-12 items-center gap-2 bg-accent px-6 font-mono-label text-on-accent hover:bg-primary hover:text-bg hover:-translate-y-0.5 transition-all duration-300"
              >
                View Work <ArrowDownRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 border border-primary px-6 font-mono-label text-primary hover:bg-primary hover:text-bg hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href={SITE.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 px-2 font-mono-label text-secondary hover:text-accent transition-colors"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 reveal" style={{ animationDelay: "500ms" }}>
          <p className="font-mono-label text-secondary mb-3">Scorecard</p>
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-rule">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-5 pr-4 border-b border-border lg:border-b-0 ${
                  i % 2 === 1 ? "pl-4 border-l" : ""
                } ${i >= 1 ? "lg:pl-5 lg:border-l" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display font-semibold text-4xl md:text-5xl"><CountUp value={s.value} /></dd>
                <dd className="mt-2 text-sm text-secondary leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */
function Work() {
  const featured = projects.filter((p) => p.featured);
  const campusClash = projects.find((p) => p.slug === "campus-clash");
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="01"
          label="Selected Work"
          title={
            <>
              Things I&apos;ve <span className="font-serif-italic text-accent">shipped.</span>
            </>
          }
          aside={<p className="font-mono-label text-secondary">{featured.length} entries</p>}
        />
        <WorkShowcase
          projects={featured}
          renderShowcase={(p, i) => (
            <WorkEntry project={p} index={i}>
              {p.slug === "dnc-ventures" && campusClash && <DncExtras campusClash={campusClash} />}
            </WorkEntry>
          )}
        />
      </div>
    </section>
  );
}

function WorkEntry({
  project,
  index,
  children,
}: {
  project: Project;
  index: number;
  children?: React.ReactNode;
}) {
  const outcomes = project.caseStudy.outcomes;
  return (
    <article className="group/entry grid gap-6 md:gap-10 border-t border-border py-10 md:py-14 md:grid-cols-12 transition-colors duration-500 hover:bg-surface/60">
      <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-4">
        <span className="font-display text-4xl md:text-5xl font-semibold text-accent leading-none transition-transform duration-500 group-hover/entry:translate-x-2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono-label text-secondary">{project.year}</span>
      </div>

      <div className="md:col-span-6 min-w-0">
        <p className="font-mono-label text-secondary">{project.category}</p>
        <h3 className="mt-3 font-display font-semibold text-3xl md:text-4xl leading-[1.02]">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-secondary">{project.role}</p>

        <p className="mt-6 border-l-2 border-accent pl-4 font-display text-xl md:text-2xl font-medium leading-snug">
          {project.metric}
        </p>
        <p className="mt-5 text-base text-secondary leading-relaxed">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
          {project.stack.map((s) => (
            <li
              key={s}
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-secondary"
            >
              {s}
            </li>
          ))}
        </ul>

        {children}

        {project.media && project.media.length > 0 && (
          <div className="mt-8">
            <p className="font-mono-label text-secondary mb-3">From the field</p>
            <div className="grid grid-cols-2 gap-3">
              {project.media.map((m) => (
                <MediaPlaceholder key={m.event} item={m} />
              ))}
            </div>
          </div>
        )}

        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="mt-8 inline-flex items-center gap-2 font-mono-label text-primary hover:text-accent transition-colors"
        >
          Read case study <ArrowRight size={14} />
        </Link>
      </div>

      <aside className="md:col-span-4">
        <div className="border border-border bg-surface transition-all duration-500 group-hover/entry:border-accent group-hover/entry:-translate-y-1">
          <p className="font-mono-label text-secondary px-5 pt-4">Scorecard</p>
          <dl className="mt-2">
            {outcomes.map((o) => (
              <div key={o.label} className="flex items-baseline justify-between gap-4 border-t border-border px-5 py-4">
                <dt className="text-sm text-secondary leading-snug">{o.label}</dt>
                <dd className="font-display text-2xl font-semibold text-right shrink-0"><CountUp value={o.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </article>
  );
}

function DncExtras({ campusClash }: { campusClash: Project }) {
  return (
    <div className="mt-8 space-y-4">
      <div className="border border-border bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-mono-label text-accent">Own IP</p>
          <p className="font-mono-label text-secondary">{campusClash.year}</p>
        </div>
        <h4 className="mt-3 font-display text-2xl font-semibold">
          <Link
            to="/work/$slug"
            params={{ slug: campusClash.slug }}
            className="hover:text-accent transition-colors"
          >
            {campusClash.title}
          </Link>
        </h4>
        <p className="mt-1 text-sm text-secondary">{campusClash.role}</p>
        <p className="mt-4 font-medium">{campusClash.metric}</p>
        <p className="mt-2 text-sm text-secondary leading-relaxed">{campusClash.description}</p>
        {campusClash.media && (
          <div className="mt-5 grid grid-cols-2 gap-3">
            {campusClash.media.map((m) => (
              <MediaPlaceholder key={m.event} item={m} />
            ))}
          </div>
        )}
      </div>

      <div className="border border-border bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-mono-label text-accent">Brand activations</p>
          <p className="font-mono-label text-secondary">DnC eSports · 2025–2026</p>
        </div>
        <p className="mt-3 font-medium">50+ activations, 125+ colleges tapped in 6 months.</p>
        <ul className="mt-4">
          {dncActivations.map((a) => (
            <li key={a.name} className="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-1 sm:gap-4 border-t border-border py-3 text-sm">
              <span className="font-medium">{a.name}</span>
              <span className="text-secondary">{a.result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- About ---------------- */
const SPEC: { k: string; v: string }[] = [
  { k: "Based in", v: "Bengaluru, India" },
  { k: "Currently", v: "Associate Product Manager, Ctruh Technologies" },
  { k: "Building", v: "Planiva · DnC Ventures" },
  { k: "Education", v: "B.Tech, Digital Transformations (AI/ML), minor in Business, Atria University" },
  { k: "Recognition", v: "TiE Global University Accelerator finalist" },
  { k: "Off the clock", v: "Music, cricket, badminton" },
];

const CERTS = [
  { name: "NLP with Classification and Vector Spaces", by: "DeepLearning.AI" },
  { name: "NLP with Probabilistic Models", by: "DeepLearning.AI" },
  { name: "Getting Started with AI on Jetson Nano", by: "NVIDIA DLI" },
  { name: "Introduction to Statistics", by: "Stanford Online" },
];

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="About"
          title={
            <>
              Engineer by training. <span className="font-serif-italic text-accent">Operator</span> by habit.
            </>
          }
        />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-secondary">
            <p className="text-xl md:text-2xl leading-snug text-primary">
              I&apos;m an AI product engineer and growth strategist based in Bengaluru. I work where AI
              engineering meets commercial strategy: building LLM systems that ship, and distribution
              that actually converts.
            </p>
            <p>
              I co-founded DnC Ventures with no outside funding. We ran campus and esports campaigns for
              brands like Jio Games, Infinix, MSI, STAN, Strike World and Swish, and built a ground
              network of 300+ campus ambassadors. Our flagship, Campus Clash India, drew 13,456 players
              with Grand Finals at IIT Kharagpur.
            </p>
            <p>
              On the product side, I built Zordie AI&apos;s resume intelligence system, and I&apos;m now
              building agentic AI products at Ctruh. I&apos;m also the founder of Planiva, an agentic
              platform for event planning that was a TiE Global University Accelerator finalist and was
              rated in the top 3% of 5,000+ at Tavastra Startup Village.
            </p>
            <p className="text-primary font-display text-2xl md:text-3xl font-medium leading-tight pt-2">
              I like 0-to-1 problems where the answer hasn&apos;t been written yet.
            </p>
          </div>

          <div className="md:col-span-5 space-y-8">
            <dl className="border-t-2 border-rule">
              {SPEC.map((row) => (
                <div key={row.k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-border py-3.5">
                  <dt className="font-mono-label text-secondary pt-0.5">{row.k}</dt>
                  <dd className="text-sm text-primary leading-relaxed">{row.v}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="font-mono-label text-secondary mb-3">Certifications</p>
              <ul>
                {CERTS.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 border-t border-border py-3 text-sm">
                    <span>{c.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary text-right">{c.by}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
const CAPABILITIES = [
  {
    label: "AI / ML",
    items: ["LLMs", "RAG pipelines", "Agentic systems (LangGraph, CrewAI)", "NLP", "OpenAI API", "Python", "Sentence Transformers"],
  },
  { label: "Backend & data", items: ["FastAPI / Flask", "Postgres", "pgvector", "MCP servers", "Docker"] },
  { label: "Web", items: ["React", "Next.js", "Tailwind", "Vercel"] },
  { label: "Product", items: ["0-to-1 building", "PRDs", "Figma", "Roadmapping", "QA", "User research"] },
  {
    label: "Growth",
    items: ["Zero-CAC distribution", "Campus outreach", "Brand activation", "Content strategy", "Partnerships", "Pricing"],
  },
];

const LOOP = ["Problem", "Research", "PRD", "Architecture", "Prototype", "Launch"];

function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Capabilities"
          title={
            <>
              What I <span className="font-serif-italic text-accent">do.</span>
            </>
          }
        />
        <div>
          {CAPABILITIES.map((g) => (
            <div key={g.label} className="grid grid-cols-1 gap-3 md:grid-cols-12 border-t border-border py-6 md:py-7">
              <p className="md:col-span-3 font-mono-label text-accent pt-1.5">{g.label}</p>
              <p className="md:col-span-9 font-display text-xl md:text-2xl font-medium leading-snug">
                {g.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < g.items.length - 1 && <span className="text-secondary mx-2.5">/</span>}{" "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border border-border bg-surface p-5 md:p-8">
          <p className="font-mono-label text-secondary">How I work</p>
          <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
            {LOOP.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 border border-primary px-3 py-1.5 font-mono-label text-primary">
                  <span className="text-accent">{i + 1}</span>
                  {step}
                </span>
                {i < LOOP.length - 1 && <ArrowRight size={14} className="text-secondary" aria-hidden />}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-secondary max-w-xl">
            The same loop runs whether the output is an agent graph or a 13,000-player tournament. Write
            it down, build the smallest real thing, put it in front of people.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
function Timeline() {
  const chapters = [...timelineChapters].reverse();
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="Timeline"
          title={
            <>
              Kasganj to <span className="font-serif-italic text-accent">Bengaluru.</span>
            </>
          }
          aside={
            <Link to="/timeline" className="font-mono-label text-secondary hover:text-accent inline-flex items-center gap-1.5">
              Full story <ArrowUpRight size={13} />
            </Link>
          }
        />
        <ol>
          {chapters.map((c) => (
            <li
              key={c.year + c.title}
              className="grid gap-2 md:gap-6 border-t border-border py-5 md:grid-cols-12 md:items-baseline"
            >
              <p className="md:col-span-2 font-mono-label text-primary flex items-center gap-2">
                <span
                  aria-hidden
                  className={`h-2 w-2 shrink-0 ${c.highlight ? "bg-accent" : "border border-secondary"}`}
                />
                {c.year}
              </p>
              <div className="md:col-span-7">
                <p className="font-display text-xl md:text-2xl font-semibold leading-tight">{c.title}</p>
                <p className="mt-1.5 text-sm text-secondary leading-relaxed">{c.body}</p>
              </div>
              <p className="md:col-span-3 font-mono text-[10px] uppercase tracking-widest text-secondary md:text-right">
                {c.place} · {c.tag}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Writing ---------------- */
function Writing() {
  const { data } = useQuery(mediumPostsQueryOptions);
  const live = data?.posts ?? [];
  const posts =
    live.length > 0
      ? live.map((p) => ({ title: p.title, link: p.link, date: formatPostDate(p.pubDate), excerpt: p.description }))
      : blogPosts;

  return (
    <section id="writing" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Writing"
          title={
            <>
              Notes from the <span className="font-serif-italic text-accent">build.</span>
            </>
          }
          aside={
            <a
              href={SITE.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-secondary hover:text-accent inline-flex items-center gap-1.5"
            >
              Medium <ArrowUpRight size={13} />
            </a>
          }
        />
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 md:gap-6 border-t border-border py-6 md:grid-cols-12 md:items-baseline"
              >
                <span className="md:col-span-2 font-mono-label text-secondary">{post.date}</span>
                <span className="md:col-span-9">
                  <span className="block font-display text-xl md:text-2xl font-semibold leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-secondary leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  aria-hidden
                  className="hidden md:block md:col-span-1 justify-self-end text-secondary group-hover:text-accent transition-colors"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Testimonials (hidden until real quotes exist) ---------------- */
function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader index="★" label="Said about the work" title="In their words." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border border-border bg-surface p-6">
              <blockquote className="font-serif-italic text-2xl leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="block text-secondary">
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const links = [
    { label: "Email", href: `mailto:${SITE.email}` },
    { label: "LinkedIn", href: SITE.links.linkedin },
    { label: "GitHub", href: SITE.links.github },
    { label: "Medium", href: SITE.links.medium },
    { label: "Resume", href: SITE.links.resume },
  ];
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="06"
          label="Contact"
          title={
            <>
              Let&apos;s build <span className="font-serif-italic text-accent">something.</span>
            </>
          }
        />
        <p className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed">
          Open to AI product roles, LLM engineering contracts and GTM consulting. Email is fastest, and I
          usually reply within a day.
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="group mt-10 inline-flex max-w-full items-center gap-3 font-display font-semibold hover:text-accent transition-colors break-all"
          style={{ fontSize: "clamp(26px, 5.5vw, 72px)", lineHeight: 1.05 }}
        >
          {SITE.email}
          <ArrowUpRight
            className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={36}
            aria-hidden
          />
        </a>
        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-5 border-t-2 border-rule">
          {links.map((l) => {
            const external = l.href.startsWith("http") || l.label === "Resume";
            return (
              <li key={l.label} className="border-b border-border sm:border-b-0 sm:border-r last:border-r-0">
                <a
                  href={l.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-2 px-1 sm:px-4 py-5 font-mono-label text-primary hover:text-accent transition-colors"
                >
                  {l.label}
                  <ArrowUpRight size={14} className="text-secondary group-hover:text-accent" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
