import { useEffect, useState, type CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

/* ---------- Grid lines with magma light traces ---------- */
const TRACE_CONF = [
  { dur: 8, delay: 0 },
  { dur: 10, delay: 3 },
  { dur: 7, delay: 6 },
  { dur: 11, delay: 2 },
  { dur: 9, delay: 8 },
  { dur: 12, delay: 4 },
  { dur: 6.5, delay: 10 },
  { dur: 10.5, delay: 1.5 },
  { dur: 8.5, delay: 7 },
  { dur: 9.5, delay: 5 },
];

export function GridLines() {
  return (
    <div className="grid-lines" aria-hidden="true">
      {TRACE_CONF.map((c, i) => (
        <div
          key={i}
          className="gl"
          style={
            {
              "--dur": `${c.dur}s`,
              "--delay": `${c.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ---------- Loader: clip-path fill ---------- */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={`loader ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="loader-word">
        音磐 · INNP.AI
        <span className="loader-fill">音磐 · INNP.AI</span>
      </div>
    </div>
  );
}

/* ---------- Line-mask reveal title ---------- */
export function MaskLines({
  lines,
  className = "",
  baseDelay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  baseDelay?: number;
}) {
  const ref = useReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <span style={{ "--d": `${baseDelay + i * 0.12}s` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ---------- Fade-up reveal wrapper ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- Count-up number ---------- */
export function CountUp({
  to,
  duration = 1600,
  suffix = "",
  prefix = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useReveal<HTMLSpanElement>(0.4);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, ref]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
