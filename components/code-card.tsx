export function AboutCodeCard() {
  const lines = [
    <span key="1">{"{"}</span>,
    <span key="2"><span className="syn-key">&quot;当前方向&quot;</span>: <span className="syn-string">&quot;前端 + AI 开发&quot;</span>,</span>,
    <span key="3"><span className="syn-key">&quot;正在构建&quot;</span>: [</span>,
    <span key="4">&nbsp;&nbsp;<span className="syn-string">&quot;AI 工具&quot;</span>, <span className="syn-string">&quot;Agent 交互&quot;</span>,</span>,
    <span key="5">&nbsp;&nbsp;<span className="syn-string">&quot;跨平台 APP&quot;</span>, <span className="syn-string">&quot;开发者工具&quot;</span></span>,
    <span key="6">],</span>,
    <span key="7"><span className="syn-key">&quot;APP 经验&quot;</span>: <span className="syn-string">&quot;独立开发 / 主导上架&quot;</span>,</span>,
    <span key="8"><span className="syn-key">&quot;交付方式&quot;</span>: <span className="syn-string">&quot;从需求到部署上线&quot;</span>,</span>,
    <span key="9"><span className="syn-key">&quot;关注重点&quot;</span>: [</span>,
    <span key="10">&nbsp;&nbsp;<span className="syn-string">&quot;用户体验&quot;</span>, <span className="syn-string">&quot;工程质量&quot;</span>,</span>,
    <span key="11">&nbsp;&nbsp;<span className="syn-string">&quot;产品价值&quot;</span></span>,
    <span key="12">]</span>,
    <span key="13">{"}"}</span>,
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
      <div className="relative flex h-10 items-center border-b border-line bg-slate-50/70 px-4">
        <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-amber-400" /><i className="h-2.5 w-2.5 rounded-full bg-green" /></div>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[11px] text-slate-400">now.json</span>
      </div>
      <div className="overflow-x-auto px-4 py-5 font-mono text-[10px] leading-6 sm:px-6 sm:text-xs">
        {lines.map((line, index) => (
          <div key={index} className="flex min-w-[310px] sm:min-w-[370px]">
            <span className="mr-3 w-4 select-none text-right text-slate-400 sm:mr-5">{index + 1}</span>
            <span className="text-slate-700">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
