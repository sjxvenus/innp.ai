const WORDS = [
  "GPU 集群",
  "智算中心",
  "弹性算力云",
  "大模型训练",
  "推理加速",
  "液冷整机柜",
  "RDMA 组网",
  "私有化部署",
  "行业智能体",
  "绿色节能",
];

export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex items-center shrink-0">
      {WORDS.map((w) => (
        <span key={`${key}-${w}`} className="flex items-center shrink-0">
          <span className="px-6 md:px-10 text-lg md:text-2xl font-medium tracking-wide text-[var(--paper-60)]">
            {w}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--magma)" aria-hidden="true" className="shrink-0">
            <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee relative z-10 border-y border-[rgba(244,242,236,0.1)] py-5 md:py-7 bg-[var(--ink-2)]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
