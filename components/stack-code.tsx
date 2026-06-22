export function StackCode() {
  const rows = [
    ["前端", '["Vue 2", "Vue 3", "JavaScript", "TypeScript"]'],
    ["跨端", '["React Native", "uni-app", "H5", "小程序"]'],
    ["AI 开发", '["OpenAI API", "Prompt Engineering", "AI Coding"]'],
    ["工程能力", '["项目架构", "性能优化", "部署上线", "运维"]'],
    ["工作方式", '["独立交付", "持续学习", "产品思维"]'],
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-slate-50/50 p-5 font-mono text-[11px] leading-6 shadow-card">
      <div className="min-w-[440px] text-slate-700">{"{"}</div>
      {rows.map(([key, value], index) => (
        <div key={key} className="min-w-[440px] pl-5"><span className="syn-key">&quot;{key}&quot;</span>: <span className="text-blue-700">{value}</span>{index < rows.length - 1 ? "," : ""}</div>
      ))}
      <div className="min-w-[440px] text-slate-700">{"}"}</div>
    </div>
  );
}
