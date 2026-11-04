const NAV = [
  { label: "核心业务", href: "#business" },
  { label: "算力云", href: "#cloud" },
  { label: "解决方案", href: "#solutions" },
  { label: "关于音磐", href: "#about" },
  { label: "联系我们", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(244,242,236,0.1)] bg-[var(--ink)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 md:pt-24 pb-10">
        {/* Giant wordmark */}
        <p
          aria-hidden="true"
          className="select-none text-center font-bold leading-none tracking-tight text-[clamp(3.4rem,14vw,13rem)] text-[rgba(244,242,236,0.07)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          INNP.AI
        </p>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-[rgba(244,242,236,0.08)] pt-8">
          <div>
            <p className="text-sm font-semibold">
              上海音磐信息技术有限公司
            </p>
            <p
              className="mt-1 text-[11px] tracking-[0.16em] text-[var(--paper-40)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              SHANGHAI INNP INFORMATION TECHNOLOGY CO., LTD.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="页脚导航">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="u-link text-xs md:text-sm text-[var(--paper-60)] hover:text-[var(--paper)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-[var(--paper-40)]">
          <p>© 2026 上海音磐信息技术有限公司 · 版权所有</p>
          <p style={{ fontFamily: "var(--font-mono)" }}>
            COMPUTE · CLOUD · INTELLIGENCE — WWW.INNP.AI
          </p>
        </div>
      </div>
    </footer>
  );
}
