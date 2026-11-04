import { MaskLines, Reveal } from "@/components/Fx";

const ITEMS = [
  {
    no: "01",
    en: "AI HARDWARE",
    title: "AI 算力设备",
    desc: "GPU 训练服务器、推理一体机与液冷整机柜，覆盖从单机八卡到万卡集群的全栈硬件形态，支持 IB / RoCE 高速组网交付。",
    tags: ["训练服务器", "推理一体机", "液冷机柜", "集群组网"],
  },
  {
    no: "02",
    en: "GPU CLOUD",
    title: "算力云",
    desc: "弹性 GPU 云主机与裸金属集群，按秒计费、分钟级交付。专有资源池保障大客户算力独占，跨可用区容灾让训练永不中断。",
    tags: ["弹性云主机", "裸金属", "按秒计费", "专有资源池"],
  },
  {
    no: "03",
    en: "AI SOLUTIONS",
    title: "AI 解决方案",
    desc: "大模型训练微调、企业知识库与行业智能体平台，从 POC 验证到私有化部署全周期陪跑，让 AI 在真实业务中创造价值。",
    tags: ["大模型微调", "知识库", "智能体", "私有化部署"],
  },
  {
    no: "04",
    en: "AIDC BUILD",
    title: "智算中心",
    desc: "智算中心规划设计、建设交付与托管运营一体化服务，以液冷与智能调度实现 PUE 极致优化，筑造绿色算力底座。",
    tags: ["规划设计", "建设交付", "托管运维", "PUE 优化"],
  },
];

export default function Business() {
  return (
    <section id="business" className="relative z-10 py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Section head */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-24">
          <div>
            <Reveal>
              <p
                className="text-[11px] md:text-xs tracking-[0.28em] text-[var(--magma)] mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                01 / CORE BUSINESS
              </p>
            </Reveal>
            <h2 className="font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,4.2rem)]">
              <MaskLines lines={[<>四位一体的</>, <>算力服务矩阵</>]} />
            </h2>
          </div>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-sm md:text-base text-[var(--paper-60)] leading-relaxed">
              硬件、云平台、行业方案与基础设施纵深协同，任何一环皆可独立交付，亦可组合为完整的算力战略。
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(244,242,236,0.1)]">
          {ITEMS.map((it, i) => (
            <Reveal
              key={it.no}
              delay={i * 0.1}
              className="border-b border-r border-[rgba(244,242,236,0.1)]"
            >
              <article className="group h-full p-7 md:p-8 flex flex-col min-h-[340px] transition-colors duration-300 hover:bg-[var(--ink-3)]">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs tracking-[0.2em] text-[var(--paper-40)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {it.no}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.18em] text-[var(--paper-40)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {it.en}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-[var(--magma)] transition-colors duration-300">
                  {it.title}
                </h3>
                <p className="text-sm text-[var(--paper-60)] leading-relaxed flex-1">
                  {it.desc}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] px-3 py-1 border border-[rgba(244,242,236,0.14)] rounded-full text-[var(--paper-60)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
