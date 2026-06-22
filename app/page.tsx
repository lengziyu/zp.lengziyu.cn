import { ArrowRight, Bot, Github, MessageCircle, Send, Sparkles } from "lucide-react";
import { AboutCodeCard } from "@/components/code-card";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { Sidebar } from "@/components/sidebar";
import { StackCode } from "@/components/stack-code";
import { projects } from "@/data/projects";
import { timeline } from "@/data/timeline";

const stats = [
  { value: "10 年", label: "前端经验" },
  { value: "9", label: "个人作品" },
  { value: "全流程", label: "独立交付" },
  { value: "快速", label: "离职到岗" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />

      <main className="relative pt-[108px] lg:ml-44 lg:pt-16">
        <div aria-hidden className="page-grid pointer-events-none absolute inset-x-0 top-0 h-[680px]" />
        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <section id="about" className="grid scroll-mt-28 gap-10 border-b border-line py-12 md:py-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:gap-14">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-green">&gt;</span>
                <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">你好，我是陈广达 <span aria-hidden>👋</span></h1>
              </div>
              <p className="mb-5 text-xl font-semibold leading-8 tracking-tight text-ink sm:text-2xl">
                资深前端开发工程师<br />近期专注 AI 应用开发
              </p>
              <p className="max-w-lg text-sm leading-7 text-slate-600">
                10 年前端开发经验，熟悉 Vue 2/3、React Native 与 uni-app。<br className="hidden sm:block" />能够独立完成项目从需求、开发到部署上线的全流程交付，热爱学习与持续实践。
              </p>
              <p className="mt-3 font-mono text-[11px] text-slate-400">32 岁 · 男 · 大专 · 目前在职</p>

              <div className="my-7 grid max-w-md grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono text-lg font-semibold text-ink sm:text-xl">{stat.value}</div>
                    <div className="mt-1 text-[11px] text-slate-500 sm:text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800">
                  查看作品 <ArrowRight size={14} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-xs font-medium text-ink shadow-sm transition hover:bg-slate-50">
                  联系我 <MessageCircle size={14} className="text-accent" />
                </a>
              </div>
            </div>
            <AboutCodeCard />
          </section>

          <section id="projects" className="scroll-mt-28 border-b border-line py-8 md:py-10">
            <SectionTitle>个人作品</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
            <a href="https://github.com/lengziyu" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline">
              <ArrowRight size={14} /> 在 GitHub 查看更多项目 <Github size={15} className="ml-1 text-ink" />
            </a>
          </section>

          <div className="grid min-w-0 gap-9 border-b border-line py-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <section id="timeline" className="min-w-0 scroll-mt-28 lg:border-r lg:border-line lg:pr-9">
              <SectionTitle>职业经历</SectionTitle>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <div key={`${item.date}-${item.title}`} className="grid grid-cols-[64px_16px_1fr] gap-2 text-xs">
                    <time className="pt-0.5 font-mono text-[11px] text-green">{item.date}</time>
                    <div className="relative flex justify-center">
                      {index < timeline.length - 1 && <span className="absolute bottom-0 top-2 w-px bg-green/70" />}
                      <span className="relative mt-1 h-2 w-2 rounded-full bg-green" />
                    </div>
                    <div className="pb-5">
                      <h3 className="font-medium text-ink">{item.title}</h3>
                      <p className="mt-1 text-[11px] leading-4 text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#about" className="mt-2 inline-flex items-center gap-2 text-xs text-accent hover:underline"><Sparkles size={14} /> 了解更多个人经历</a>
            </section>

            <div className="min-w-0 space-y-4">
              <section id="stack" className="scroll-mt-28">
                <SectionTitle>技能栈</SectionTitle>
                <StackCode />
              </section>
              <section className="rounded-xl border border-line bg-white p-5 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold"><span className="text-green">&gt;</span> 我能做什么</h2>
                <div className="grid gap-4 text-xs sm:grid-cols-3">
                  <div><strong className="block text-ink">前端与跨端</strong><span className="mt-1 block leading-5 text-slate-500">Web、App、小程序多端产品开发</span></div>
                  <div><strong className="block text-ink">AI 产品落地</strong><span className="mt-1 block leading-5 text-slate-500">把模型能力转化为可用的产品体验</span></div>
                  <div><strong className="block text-ink">完整项目交付</strong><span className="mt-1 block leading-5 text-slate-500">技术选型、开发、部署及线上维护</span></div>
                </div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-xs text-accent"><ArrowRight size={14} /> 联系我聊聊项目</a>
              </section>
            </div>
          </div>

          <section id="contact" className="scroll-mt-28 py-8">
            <div className="rounded-xl border border-line bg-slate-50/40 p-5 shadow-card sm:p-6">
              <div className="grid items-end gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <h2 className="flex items-center gap-2 font-mono text-sm font-semibold">问问陈广达 AI <span className="rounded bg-violet-500 px-1.5 py-0.5 text-[9px] font-medium text-white">静态预览</span></h2>
                  <p className="mt-2 text-xs text-slate-600">想了解我的项目、技能或工作经验？可以从这里开始。</p>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="ask-ai" className="sr-only">问问陈广达 AI</label>
                  <div className="relative flex-1">
                    <Bot size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input id="ask-ai" readOnly placeholder="例如：你擅长哪些前端技术？" className="h-10 w-full rounded-lg border border-line bg-white pl-9 pr-3 text-xs outline-none placeholder:text-slate-400 focus:border-slate-400" />
                  </div>
                  <button type="button" className="inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-xs font-medium text-white hover:bg-slate-800">发送 <Send size={14} /></button>
                </div>
              </div>
              <p className="mt-5 text-[10px] text-slate-400">AI 回答基于我的项目和公开信息，可能含有不准确，仅供参考。</p>
            </div>
          </section>

          <footer className="flex flex-col gap-2 border-t border-line py-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 陈广达. 保留所有权利。</span>
            <span>使用 Next.js 与 TailwindCSS 构建</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
