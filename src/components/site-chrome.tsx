import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Camera, Menu, Moon, Sun, X } from "lucide-react";
import { SITE } from "@/lib/site";
import type { MediaPlaceholderItem } from "@/lib/projects";

/* ---------------- Theme ---------------- */
type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => setTheme(currentTheme()), []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-9 w-9 items-center justify-center border border-border text-secondary hover:text-primary hover:border-primary transition-colors"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

/* ---------------- Nav ---------------- */
const NAV_LINKS = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Timeline", hash: "timeline" },
  { label: "Writing", hash: "writing" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // hide on scroll down, reveal on scroll up
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 240);
        last = y;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // scroll-spy for the active link
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.hash);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,colors,background-color] duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div
          ref={barRef}
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg font-semibold" aria-label="Home">
            KT<span className="text-accent">/</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className={`relative font-mono-label transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 ${
                  active === l.hash ? "text-primary after:scale-x-100" : "text-secondary after:scale-x-0"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center border border-border"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 top-16 z-40 bg-bg transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-x mt-10 flex flex-col" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border py-5 font-display text-4xl font-semibold hover:text-accent transition-colors"
            >
              {l.label}
              <span className="font-mono-label text-secondary">0{i + 1}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

/* ---------------- Section header ---------------- */
export function SectionHeader({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center justify-between border-t-2 border-rule pt-3">
        <p className="font-mono-label text-primary">
          <span className="text-accent">{index}</span> / {label}
        </p>
        {aside}
      </div>
      <h2
        className="font-display font-semibold mt-5 md:mt-6"
        style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 0.98 }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ---------------- Media placeholder ---------------- */
export function MediaPlaceholder({
  item,
  className = "",
}: {
  item: MediaPlaceholderItem;
  className?: string;
}) {
  return (
    <figure className={`group/media ${className}`}>
      <div className="hatch relative aspect-[4/3] w-full border border-dashed border-border bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-secondary">
          <Camera size={18} aria-hidden />
          <span className="font-mono-label">Photo pending</span>
        </div>
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-secondary">
        <span className="text-primary">{item.event}</span>
        <span className="block font-mono text-[10px] uppercase tracking-widest mt-0.5">
          {item.place} · {item.date}
        </span>
      </figcaption>
    </figure>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">
            Discipline <span className="text-accent">&gt;</span> Motivation.
          </p>
          <p className="mt-2 font-mono-label text-secondary">
            © {new Date().getFullYear()} {SITE.name} · Built in Bengaluru
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${SITE.email}`} className="font-mono-label text-secondary hover:text-accent">
            Email
          </a>
          <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono-label text-secondary hover:text-accent">
            LinkedIn
          </a>
          <a href={SITE.links.github} target="_blank" rel="noopener noreferrer" className="font-mono-label text-secondary hover:text-accent">
            GitHub
          </a>
          <a href={SITE.links.medium} target="_blank" rel="noopener noreferrer" className="font-mono-label text-secondary hover:text-accent">
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
