import { Download } from "lucide-react";

const mobileNav = [
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "经历", href: "#timeline" },
  { label: "技能", href: "#stack" },
];

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-white/95 px-5 backdrop-blur md:px-7">
        <a href="#about" className="font-mono text-[15px] font-semibold tracking-tight text-ink md:text-base">
          <span className="mr-2 text-slate-500">&gt;&gt;</span>zp.lengziyu.cn
        </a>
        <div className="flex items-center gap-4 md:gap-7">
          <span className="hidden items-center gap-2 text-xs text-slate-700 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_#dcfce7]" />
            在职 · 可快速到岗
          </span>
          <a href="#" className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-xs font-medium text-white transition hover:bg-slate-800">
            下载简历 <Download size={14} />
          </a>
        </div>
      </header>
      <nav className="fixed inset-x-0 top-16 z-30 flex h-11 items-center gap-5 overflow-x-auto border-b border-line bg-white px-5 text-xs lg:hidden">
        {mobileNav.map((item) => (
          <a key={item.href} href={item.href} className="whitespace-nowrap text-slate-600 hover:text-accent">{item.label}</a>
        ))}
      </nav>
    </>
  );
}
