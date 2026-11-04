import { useEffect, useState } from "react";

const LINKS = [
  { label: "核心业务", en: "BUSINESS", href: "#business" },
  { label: "算力云", en: "CLOUD", href: "#cloud" },
  { label: "解决方案", en: "SOLUTIONS", href: "#solutions" },
  { label: "关于音磐", en: "ABOUT", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(6,8,16,0.82)] backdrop-blur-md border-b border-[rgba(244,242,236,0.08)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 h-[72px] flex items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-baseline gap-2 group"
            aria-label="音磐 INNP 首页"
          >
            <span className="text-xl font-bold tracking-wide">
              音磐<span className="text-[var(--magma)]">.</span>
            </span>
            <span
              className="text-xs tracking-[0.22em] text-[var(--paper-60)] group-hover:text-[var(--paper)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              INNP.AI
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="主导航">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="u-link text-sm text-[var(--paper-60)] hover:text-[var(--paper)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              预约咨询
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] cursor-pointer"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-6 h-[1.5px] bg-[var(--paper)] transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--paper)] transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--paper)] transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(6,8,16,0.96)] backdrop-blur-xl flex flex-col justify-center px-8 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="移动端导航菜单"
        >
          <nav className="flex flex-col gap-2" aria-label="移动端主导航">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-4 border-b border-[rgba(244,242,236,0.08)]"
              >
                <span
                  className="text-xs text-[var(--magma)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{i + 1}
                </span>
                <span className="text-3xl font-semibold group-hover:text-[var(--magma)] transition-colors">
                  {l.label}
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] text-[var(--paper-40)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {l.en}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-10 self-start"
          >
            预约咨询
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
