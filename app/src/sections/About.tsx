import { CountUp, MaskLines, Reveal } from "@/components/Fx";

const METRICS = [
  { to: 10000, suffix: "+", k: "GPU 卡在线规模", en: "GPU CARDS ONLINE" },
  { to: 300, suffix: "", k: "PFLOPS 稠密算力", en: "FP16 COMPUTE" },
  { to: 50, suffix: "+", k: "行业头部客户", en: "ENTERPRISE CLIENTS" },
  { to: 3, suffix: "", k: "自建智算中心", en: "SELF-BUILT AIDC" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 md:py-40 border-t border-[rgba(244,242,236,0.08)] bg-[var(--ink-2)]"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24">
          <div>
            <Reveal>
              <p
                className="text-[11px] md:text-xs tracking-[0.28em] text-[var(--magma)] mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                04 / ABOUT INNP
              </p>
            </Reveal>
            <h2 className="font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,4.2rem)]">
              <MaskLines lines={[<>音磐，取意</>, <>「声之磐石」</>]} />
            </h2>
            <Reveal delay={0.25}>
              <div className="mt-8 max-w-xl space-y-5 text-sm md:text-base text-[var(--paper-60)] leading-relaxed">
                <p>
                  上海音磐信息技术有限公司（INNP.AI）总部位于上海，是一家以
                  AI 算力为核心的基础设施与解决方案服务商。我们相信，算力是智能时代的水电煤，而稳定、弹性、可负担的算力供给，是一切 AI 创新的前提。
                </p>
                <p>
                  从第一张 GPU 上架，到万卡集群昼夜轰鸣；从一个行业 POC，到大模型在核心业务中规模落地——音磐以磐石之固，承载客户每一次智能跃迁。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <blockquote className="mt-10 border-l-2 border-[var(--magma)] pl-6 text-lg md:text-xl text-[var(--paper)] font-medium leading-relaxed">
                「让每一份智能，都有磐石可依。」
              </blockquote>
            </Reveal>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-px bg-[rgba(244,242,236,0.08)] border border-[rgba(244,242,236,0.08)] self-center">
            {METRICS.map((m, i) => (
              <div key={m.k} className="bg-[var(--ink-2)] p-7 md:p-9">
                <Reveal delay={i * 0.08}>
                  <p
                    className="text-3xl md:text-4xl font-semibold text-[var(--paper)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <CountUp to={m.to} suffix={m.suffix} />
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-[var(--paper-60)]">{m.k}</p>
                  <p
                    className="mt-1 text-[10px] tracking-[0.16em] text-[var(--paper-40)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {m.en}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
