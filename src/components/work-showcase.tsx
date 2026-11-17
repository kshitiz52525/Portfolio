import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { ArrowUpRight, LayoutGrid, List, Rows3, Search } from "lucide-react";
import type { Project } from "@/lib/projects";

/* ---------- filters ---------- */
const FILTERS = ["All", "AI & Product", "Growth & GTM", "Ops & Education"] as const;
type Filter = (typeof FILTERS)[number];
type View = "showcase" | "grid" | "index";

const GROUP: Record<string, Exclude<Filter, "All">> = {
  planiva: "AI & Product",
  ctruh: "AI & Product",
  "zordie-ai": "AI & Product",
  "dnc-ventures": "Growth & GTM",
  "campus-clash": "Growth & GTM",
  wrestlefan: "Growth & GTM",
  "nasscom-ai-curriculum": "Ops & Education",
  "jio-games": "Ops & Education",
  desportz: "Ops & Education",
};
const groupOf = (p: Project): Exclude<Filter, "All"> => GROUP[p.slug] ?? "Growth & GTM";

/* ---------- hooks ---------- */
function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useInView<T extends Element>(once = true, margin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) io.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, margin]);
  return [ref, seen] as const;
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "none" : "translateY(28px)",
        transition: `opacity .8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Count-up for numbers inside strings ("₹8L", "13,456", "50+") ---------- */
export function CountUp({ value }: { value: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const match = value.match(/(\d[\d,]*\.?\d*)/);
  const [text, setText] = useState(value);
  useEffect(() => {
    if (!match || !seen || prefersReducedMotion()) return;
    const raw = match[1];
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const useCommas = raw.includes(",");
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4);
      const n = target * eased;
      let s = decimals ? n.toFixed(decimals) : Math.round(n).toString();
      if (useCommas) s = Number(s).toLocaleString("en-IN", { maximumFractionDigits: decimals });
      setText(value.replace(raw, s));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    setText(value.replace(raw, "0"));
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {text}
    </span>
  );
}

/* ---------- Spotlight + tilt wrapper ---------- */
function Interactive({
  children,
  className = "",
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      const rx = (0.5 - y / r.height) * 7;
      const ry = (x / r.width - 0.5) * 9;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    }
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight-card ${className}`}
      style={{ transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .3s" }}
    >
      {children}
    </div>
  );
}

/* ---------- Marquee of stack ---------- */
function StackMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-border py-3 mb-8" aria-hidden>
      <div className="marquee-track flex w-max gap-8">
        {row.map((s, i) => (
          <span key={i} className="font-mono-label text-secondary flex items-center gap-8 whitespace-nowrap">
            {s} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Grid card ---------- */
function GridCard({ project, index }: { project: Project; index: number }) {
  return (
    <Interactive className="group relative h-full border border-border bg-surface hover:border-accent overflow-hidden">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="relative z-10 flex h-full flex-col p-6 md:p-7"
      >
        <span className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
        <div className="flex items-start justify-between">
          <span className="font-display text-5xl font-semibold leading-none text-accent/90 transition-transform duration-500 group-hover:-translate-y-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className="mt-6 font-mono-label text-secondary">
          {project.category} · {project.year}
        </p>
        <h4 className="mt-2 font-display text-2xl font-semibold leading-[1.05]">{project.title}</h4>
        <p className="mt-4 border-l-2 border-accent pl-3 text-sm font-medium leading-snug">{project.metric}</p>
        <p className="mt-3 text-sm leading-relaxed text-secondary line-clamp-3 transition-all group-hover:line-clamp-none">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, 5).map((s) => (
            <li
              key={s}
              className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-secondary transition-colors group-hover:border-accent/50"
            >
              {s}
            </li>
          ))}
        </ul>
      </Link>
    </Interactive>
  );
}

/* ---------- Index row ---------- */
function IndexRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-t border-border py-5 md:grid-cols-[3.5rem_1.2fr_1fr_auto] md:py-6 overflow-hidden"
    >
      <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-accent-soft transition-transform duration-500 ease-out group-hover:scale-y-100" />
      <span className="relative font-mono-label text-secondary">{String(index + 1).padStart(2, "0")}</span>
      <span className="relative font-display text-xl md:text-3xl font-semibold leading-tight transition-transform duration-500 group-hover:translate-x-3">
        {project.title}
      </span>
      <span className="relative hidden text-sm text-secondary md:block transition-all duration-500 group-hover:text-primary">
        {project.metric}
      </span>
      <span className="relative flex items-center gap-3">
        <span className="font-mono-label text-secondary">{project.year}</span>
        <ArrowUpRight
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
        />
      </span>
    </Link>
  );
}

/* ---------- Main ---------- */
export function WorkShowcase({
  projects,
  renderShowcase,
}: {
  projects: Project[];
  renderShowcase: (p: Project, i: number) => ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<View>("showcase");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach((p) => (c[groupOf(p)] = (c[groupOf(p)] ?? 0) + 1));
    return c;
  }, [projects]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (filter === "All" || groupOf(p) === filter) &&
        (!q || [p.title, p.category, p.description, ...p.stack].join(" ").toLowerCase().includes(q)),
    );
  }, [projects, filter, query]);

  const allStack = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.stack))), [projects]);

  const views: { id: View; label: string; icon: ReactNode }[] = [
    { id: "showcase", label: "Showcase", icon: <Rows3 size={14} /> },
    { id: "grid", label: "Grid", icon: <LayoutGrid size={14} /> },
    { id: "index", label: "Index", icon: <List size={14} /> },
  ];

  return (
    <div>
      <StackMarquee items={allStack} />

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
          {FILTERS.map((f) => {
            const on = f === filter;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(f)}
                className={`group relative overflow-hidden border px-4 py-2 font-mono-label transition-all duration-300 hover:-translate-y-0.5 ${
                  on ? "border-accent bg-accent text-on-accent" : "border-border text-secondary hover:border-accent hover:text-primary"
                }`}
              >
                {f}
                <sup className={`ml-1.5 ${on ? "" : "text-accent"}`}>{counts[f] ?? 0}</sup>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 border border-border px-3 py-2 transition-colors focus-within:border-accent">
            <Search size={14} className="text-secondary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search work, stack…"
              aria-label="Search work"
              className="w-36 bg-transparent text-sm outline-none placeholder:text-secondary md:w-44"
            />
          </label>
          <div className="flex border border-border" role="group" aria-label="Layout">
            {views.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                aria-pressed={view === v.id}
                title={v.label}
                className={`flex items-center gap-1.5 px-3 py-2 font-mono-label transition-colors ${
                  view === v.id ? "bg-primary text-primary-foreground" : "text-secondary hover:text-primary"
                }`}
              >
                {v.icon}
                <span className="hidden sm:inline">{v.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="border-t border-border py-16 text-center text-secondary reveal">
          Nothing matches “{query}”. Try another keyword.
        </p>
      ) : (
        <div key={`${filter}-${view}-${query}`}>
          {view === "showcase" &&
            visible.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 3) * 60}>
                {renderShowcase(p, i)}
              </Reveal>
            ))}

          {view === "grid" && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <div
                  key={p.slug}
                  className="reveal"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <GridCard project={p} index={i} />
                </div>
              ))}
            </div>
          )}

          {view === "index" && (
            <div className="border-b border-border">
              {visible.map((p, i) => (
                <div key={p.slug} className="reveal" style={{ animationDelay: `${i * 50}ms` }}>
                  <IndexRow project={p} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
