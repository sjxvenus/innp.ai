import { MaskLines, Reveal } from "@/components/Fx";

const FEATURES = [
  {
    k: "分钟级交付",
    v: "镜像即开即用，万卡资源池分钟级调度，算力随业务弹性伸缩。",
  },
  {
    k: "按秒计费",
    v: "细粒度计量模型，闲置即释放，让每一分预算都花在有效训练上。",
  },
  {
    k: "专属资源池",
    v: "物理隔离的裸金属集群，性能零损耗，数据不出域，满足合规要求。",
  },
  {
    k: "跨区容灾",
    v: "多可用区冗余架构与 checkpoint 自动托管，训练任务永不中断。",
  },
];

const SPECS = [
  { name: "innp.h800.8x", gpu: "8 × H800 80G NVLink", price: "¥ 18.40 /卡·时", ok: true },
  { name: "innp.a800.8x", gpu: "8 × A800 80G NVLink", price: "¥ 11.20 /卡·时", ok: true },
  { name: "innp.l40s.4x", gpu: "4 × L40S 48G", price: "¥ 4.60 /卡·时", ok: true },
  { name: "innp.h20.8x", gpu: "8 × H20 96G", price: "¥ 9.80 /卡·时", ok: false },
];

export default function Cloud() {
  return (
    <section
      id="cloud"
      className="relative z-10 py-24 md:py-40 border-t border-[rgba(244,242,236,0.08)] bg-[var(--ink-2)]"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Copy side */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p
                className="text-[11px] md:text-xs tracking-[0.28em] text-[var(--magma)] mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                02 / INNP CLOUD
              </p>
            </Reveal>
            <h2 className="font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,4.2rem)]">
              <MaskLines lines={[<>一朵为训练</>, <>而生的算力云</>]} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-lg text-sm md:text-base text-[var(--paper-60)] leading-relaxed">
                音磐算力云将顶级 GPU 集群、自研调度引擎与 RDMA 高性能网络封装为开箱即用的云服务——你只需关心模型，其余交给磐石。
              </p>
            </Reveal>

            <div className="mt-12 space-y-0 border-t border-[rgba(244,242,236,0.1)]">
              {FEATURES.map((f, i) => (
                <Reveal key={f.k} delay={0.25 + i * 0.08}>
                  <div className="grid grid-cols-[128px_1fr] md:grid-cols-[160px_1fr] gap-4 py-5 border-b border-[rgba(244,242,236,0.1)]">
                    <h3 className="text-sm md:text-base font-semibold text-[var(--paper)]">
                      {f.k}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--paper-60)] leading-relaxed">
                      {f.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Console panel */}
          <Reveal delay={0.15}>
            <div className="border border-[rgba(244,242,236,0.12)] bg-[var(--ink)] rounded-lg overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(244,242,236,0.1)]">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(244,242,236,0.18)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(244,242,236,0.18)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--magma)]" />
                </div>
                <span
                  className="text-[11px] tracking-[0.18em] text-[var(--paper-40)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  INNP-CLOUD / CONSOLE
                </span>
                <span className="flex items-center gap-2 text-[11px] text-[var(--magma)]" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="status-dot" aria-hidden="true" />
                  LIVE
                </span>
              </div>

              {/* Instance table */}
              <div className="px-5 py-4" style={{ fontFamily: "var(--font-mono)" }}>
                <p className="text-[11px] text-[var(--paper-40)] mb-3">
                  $ innpcl instance list --region=cn-shanghai
                </p>
                <ul className="space-y-1">
                  {SPECS.map((s) => (
                    <li
                      key={s.name}
                      className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 px-3 py-3 rounded hover:bg-[rgba(244,242,236,0.04)] transition-colors"
                    >
                      <div>
                        <p className="text-sm text-[var(--paper)]">{s.name}</p>
                        <p className="text-[11px] text-[var(--paper-40)]">{s.gpu}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[var(--magma-soft)]">{s.price}</p>
                        <p className={`text-[11px] ${s.ok ? "text-emerald-400/80" : "text-[var(--paper-40)]"}`}>
                          {s.ok ? "● AVAILABLE" : "○ QUEUE"}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Divider metrics */}
                <div className="mt-5 grid grid-cols-3 gap-px bg-[rgba(244,242,236,0.08)] border border-[rgba(244,242,236,0.08)] rounded overflow-hidden text-center">
                  {[
                    { v: "3.2Tbps", k: "RDMA 互联" },
                    { v: "99.99%", k: "可用性" },
                    { v: "< 1min", k: "故障切换" },
                  ].map((m) => (
                    <div key={m.k} className="bg-[var(--ink)] px-2 py-4">
                      <p className="text-base md:text-lg text-[var(--paper)]">{m.v}</p>
                      <p className="text-[10px] mt-1 text-[var(--paper-40)]" style={{ fontFamily: "var(--font-sans)" }}>
                        {m.k}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="caret mt-5 text-[12px] text-[var(--paper-60)]">
                  $ 集群健康度 100% — 调度引擎运行中
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[var(--paper-40)]" style={{ fontFamily: "var(--font-mono)" }}>
              * 价格为示例目录价，实际以商务合同为准。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
