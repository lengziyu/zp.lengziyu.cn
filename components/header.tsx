import { Download } from "lucide-react";

const mobileNav = [
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "经历", href: "#timeline" },
  { label: "技能", href: "#stack" },
  { label: "联系", href: "#contact" },
];

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-line bg-white/95 px-4 backdrop-blur md:px-7">
        <a href="#about" className="min-w-0 truncate font-mono text-[13px] font-semibold tracking-tight text-ink sm:text-[15px] md:text-base">
          <span className="mr-1.5 text-slate-500 sm:mr-2">&gt;&gt;</span>zp.lengziyu.cn
        </a>
        <div className="flex shrink-0 items-center gap-3 md:gap-7">
          <span className="hidden items-center gap-2 text-xs text-slate-700 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_#dcfce7]" />
            在职 · 可快速到岗
          </span>
          <a href="#" className="flex items-center gap-1.5 rounded-lg bg-ink px-3 py-2 text-[11px] font-medium text-white transition hover:bg-slate-800 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs">
            下载简历 <Download size={14} />
          </a>
        </div>
      </header>
      <nav className="fixed inset-x-0 top-16 z-30 flex h-11 items-center gap-5 overflow-x-auto border-b border-line bg-white px-4 text-xs lg:hidden">
        {mobileNav.map((item) => (
          <a key={item.href} href={item.href} className="whitespace-nowrap text-slate-600 hover:text-accent">{item.label}</a>
        ))}
      </nav>
    </>
  );
}
