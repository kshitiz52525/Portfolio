import { useEffect, useRef, useState, type ReactNode } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
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
