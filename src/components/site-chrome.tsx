import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Camera } from "lucide-react";
import { SITE } from "@/lib/site";
import type { MediaPlaceholderItem } from "@/lib/projects";

/* ---------------- Nav ---------------- */
const NAV_LINKS = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Journey", hash: "timeline" },
  { label: "Writing", hash: "writing" },
  { label: "Contact", hash: "contact" },
];

/**
 * Minimal bar: Menu on the left, signature in the middle, Intro on the right.
 * The menu opens a full-screen black page with the links in large type.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const onHome = useLocation({ select: (l) => l.pathname === "/" });

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[transform,background-color] duration-700 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "bg-bg/80 backdrop-blur-md" : ""}`}
      >
        <div
          ref={barRef}
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/70"
          style={{ transform: "scaleX(0)" }}
        />
        <div className="container-x grid h-20 grid-cols-[1fr_auto_1fr] items-center">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="font-mono-label group relative z-[60] flex items-center gap-3 justify-self-start text-primary"
          >
            <span aria-hidden className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </span>
            <span className="hidden transition-colors group-hover:text-accent sm:inline">
              {open ? "Close" : "Menu"}
            </span>
          </button>

          <Link
            to="/"
            aria-label="Home"
            onClick={() => setOpen(false)}
            className="font-serif-italic relative z-[60] justify-self-center text-xl leading-none sm:text-2xl md:text-3xl"
          >
            Kshitiz Trigunayat
          </Link>

          {onHome ? (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new Event("replay-intro"));
              }}
              className="font-mono-label justify-self-end text-secondary transition-colors hover:text-primary"
            >
              Intro
            </button>
          ) : (
            <Link
              to="/"
              hash="contact"
              className="font-mono-label justify-self-end text-secondary transition-colors hover:text-primary"
            >
              Contact
            </Link>
          )}
        </div>
      </header>

      <div
        className="fixed inset-0 z-[55] flex items-center justify-center bg-black transition-opacity duration-700"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
        }}
      >
        <nav className="text-center" aria-label="Primary">
          <ul className="space-y-2 md:space-y-3">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.hash}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(16px)",
                  transition: `opacity .9s ease ${150 + i * 90}ms, transform .9s cubic-bezier(.22,1,.36,1) ${150 + i * 90}ms`,
                }}
              >
                <Link
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="font-display block text-5xl leading-tight text-primary transition-colors duration-300 hover:text-accent hover:italic md:text-7xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-mono-label mt-12 flex items-center justify-center gap-6 text-secondary">
            <a
              href={SITE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={SITE.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Medium
            </a>
          </div>
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
    <div className="mb-10 md:mb-14">
      <div className="flex items-center justify-between border-b border-rule/50 pb-4">
        <p className="font-mono-label text-secondary">
          <span className="text-accent">{index}</span>
          <span className="mx-3 text-rule">—</span>
          {label}
        </p>
        {aside}
      </div>
      <h2
        className="font-display mt-8 md:mt-10"
        style={{ fontSize: "clamp(36px, 5.6vw, 80px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
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
      <div className="hatch relative flex aspect-[4/3] w-full items-center justify-center border border-border bg-surface">
        <div className="flex flex-col items-center gap-2 text-secondary">
          <Camera size={18} strokeWidth={1.2} aria-hidden />
          <span className="font-mono-label">Photo pending</span>
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-secondary">
        <span className="text-primary">{item.event}</span>
        <span className="font-mono-label mt-1 block text-[11px]">
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
      <div className="container-x flex flex-col items-center gap-6 py-14 text-center">
        <p className="font-serif-italic text-3xl">Kshitiz Trigunayat</p>
        <div className="font-mono-label flex flex-wrap justify-center gap-x-8 gap-y-2 text-secondary">
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
            Email
          </a>
          <a
            href={SITE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={SITE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={SITE.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Medium
          </a>
        </div>
        <p className="font-mono-label text-[11px] text-secondary/70">
          © {new Date().getFullYear()} {SITE.name} · Bengaluru
        </p>
      </div>
    </footer>
  );
}
