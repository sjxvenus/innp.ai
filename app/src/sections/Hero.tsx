import { MaskLines, Reveal } from "@/components/Fx";

const STATS = [
  { v: "10,000+", k: "GPU 卡集群规模" },
  { v: "300 PFLOPS", k: "FP16 稠密算力" },
  { v: "99.99%", k: "服务可用性 SLA" },
  { v: "7 × 24", k: "全时段专家运维" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      {/* Radial magma glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(58% 44% at 78% 30%, rgba(255,90,31,0.16) 0%, rgba(255,90,31,0.05) 42%, transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-10 pt-36 pb-10 md:pb-14">
        {/* Eyebrow */}
        <Reveal delay={0.1}>
          <p
            className="flex items-center gap-3 text-[11px] md:text-xs tracking-[0.28em] text-[var(--paper-60)] mb-8 md:mb-12"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="status-dot" aria-hidden="true" />
            SHANGHAI INNP INFORMATION TECHNOLOGY CO., LTD.
          </p>
        </Reveal>

        {/* Headline */}
        <h1 className="font-bold leading-[1.04] tracking-tight text-[clamp(2.9rem,9.5vw,8.2rem)]">
          <MaskLines
            baseDelay={0.5}
            lines={[
              <>以磐石之固</>,
              <>
                载<span className="text-[var(--magma)]">智能</span>之重
              </>,
            ]}
          />
        </h1>

        {/* Sub + CTA */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <Reveal delay={0.85} className="max-w-xl">
            <p className="text-base md:text-lg text-[var(--paper-60)] leading-relaxed">
              上海音磐信息技术有限公司，专注{" "}
              <span className="text-[var(--paper)]">AI 算力设备</span>、
              <span className="text-[var(--paper)]">算力云</span> 与{" "}
              <span className="text-[var(--paper)]">AI 解决方案</span>
              ——从万卡集群建设到行业智能落地，为大模型时代提供一站式算力基座。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                获取解决方案
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#cloud" className="btn-ghost">
                探索算力云
              </a>
            </div>
          </Reveal>

          <Reveal delay={1.0}>
            <p
              className="hidden md:block text-right text-[11px] leading-loose tracking-[0.18em] text-[var(--paper-40)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              COMPUTE INFRASTRUCTURE
              <br />
              GPU CLOUD · AI SOLUTIONS
              <br />
              SHANGHAI, CHINA — 31.23°N 121.47°E
            </p>
          </Reveal>
        </div>

        {/* Data strip */}
        <Reveal delay={1.1}>
          <dl className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-[rgba(244,242,236,0.1)]">
            {STATS.map((s) => (
              <div
                key={s.k}
                className="pt-5 pr-6 md:pt-6 border-r last:border-r-0 border-[rgba(244,242,236,0.06)] [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <dd
                  className="text-2xl md:text-3xl font-semibold text-[var(--paper)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.v}
                </dd>
                <dt className="mt-1 text-xs md:text-sm text-[var(--paper-40)]">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
