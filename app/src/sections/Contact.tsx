import { MaskLines, Reveal } from "@/components/Fx";

const CHANNELS = [
  { k: "商务合作", v: "contact@innp.ai", href: "mailto:contact@innp.ai" },
  { k: "官方网站", v: "www.innp.ai", href: "https://www.innp.ai" },
  { k: "总部地址", v: "中国 · 上海", href: null },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-28 md:py-44 border-t border-[rgba(244,242,236,0.08)] overflow-hidden"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(255,90,31,0.14) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 text-center">
        <Reveal>
          <p
            className="text-[11px] md:text-xs tracking-[0.28em] text-[var(--magma)] mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            05 / START A PROJECT
          </p>
        </Reveal>
        <h2 className="font-bold leading-[1.06] tracking-tight text-[clamp(2.4rem,7vw,6rem)]">
          <MaskLines
            lines={[
              <>准备好点亮</>,
              <>
                你的<span className="text-[var(--magma)]">算力</span>了吗
              </>,
            ]}
          />
        </h2>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-sm md:text-base text-[var(--paper-60)] leading-relaxed">
            无论是万卡集群建设、弹性算力租赁，还是行业 AI 落地——留下需求，音磐解决方案专家将在一个工作日内与您联系。
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@innp.ai?subject=%E7%AE%97%E5%8A%9B%E9%A1%B9%E7%9B%AE%E5%92%A8%E8%AF%A2" className="btn-primary">
              发送需求至 contact@innp.ai
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mx-auto mt-16 md:mt-24 max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(244,242,236,0.1)] border border-[rgba(244,242,236,0.1)] text-left">
            {CHANNELS.map((c) => (
              <div key={c.k} className="bg-[var(--ink)] p-6">
                <p className="text-xs text-[var(--paper-40)] mb-2">{c.k}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="u-link text-sm md:text-base text-[var(--paper)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {c.v}
                  </a>
                ) : (
                  <p className="text-sm md:text-base text-[var(--paper)]">{c.v}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
