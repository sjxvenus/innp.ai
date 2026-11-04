import { MaskLines, Reveal } from "@/components/Fx";

const ROWS = [
  {
    no: "01",
    title: "大模型训练与微调",
    en: "LLM TRAINING & FINE-TUNING",
    desc: "万卡并行训练框架与数据工程流水线，从基座选型到指令对齐全流程加速。",
  },
  {
    no: "02",
    title: "金融智能风控",
    en: "FINTECH RISK INTELLIGENCE",
    desc: "实时特征计算与图谱风控模型，毫秒级响应每一笔交易风险。",
  },
  {
    no: "03",
    title: "智能制造质检",
    en: "INDUSTRIAL VISION AI",
    desc: "高精度视觉检测方案落地产线，缺陷识别准确率与吞吐双领先。",
  },
  {
    no: "04",
    title: "自动驾驶数据闭环",
    en: "AUTONOMOUS DRIVING LOOP",
    desc: "海量路采数据的标注、仿真与训练一体化平台，加速算法迭代。",
  },
  {
    no: "05",
    title: "政务与企业知识中枢",
    en: "ENTERPRISE KNOWLEDGE HUB",
    desc: "私有化大模型知识库与智能体协同平台，让组织知识随问随答。",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative z-10 py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 md:mb-20">
          <Reveal>
            <p
              className="text-[11px] md:text-xs tracking-[0.28em] text-[var(--magma)] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              03 / INDUSTRY SOLUTIONS
            </p>
          </Reveal>
          <h2 className="font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,4.2rem)]">
            <MaskLines lines={[<>让算力抵达</>, <>每一个行业现场</>]} />
          </h2>
        </div>

        <div className="border-t border-[rgba(244,242,236,0.1)]">
          {ROWS.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.06}>
              <a
                href="#contact"
                className="sol-row group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-10 py-7 md:py-9 border-b border-[rgba(244,242,236,0.1)] px-2 md:px-4"
                aria-label={`${r.title} — 咨询该解决方案`}
              >
                <span
                  className="text-xs md:text-sm text-[var(--paper-40)] w-8"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {r.no}
                </span>
                <div className="sol-title">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {r.title}
                    <span
                      className="hidden md:inline-block ml-4 align-middle text-[11px] tracking-[0.2em] text-[var(--paper-40)] font-normal"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.en}
                    </span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs md:text-sm text-[var(--paper-60)]">
                    {r.desc}
                  </p>
                </div>
                <span className="sol-arrow text-[var(--magma)]" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
