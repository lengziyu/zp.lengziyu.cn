import { ArrowRight, Github, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
  { value: "多款 APP", label: "主导上架" },
  { value: "全流程", label: "独立交付" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />

      <main className="relative pt-[108px] lg:ml-44 lg:pt-16">
        <div aria-hidden className="page-grid pointer-events-none absolute inset-x-0 top-0 h-[680px]" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-10 xl:px-12">
          <section id="about" className="grid scroll-mt-28 gap-8 border-b border-line py-8 sm:py-12 md:py-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:gap-14">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-green">&gt;</span>
                <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">你好，我是陈广达 <span aria-hidden>👋</span></h1>
              </div>
              <p className="mb-5 text-xl font-semibold leading-8 tracking-tight text-ink sm:text-2xl">
                前端开发工程师
              </p>
              <p className="max-w-lg text-sm leading-7 text-slate-600">
                10 年前端开发经验，熟悉 Vue 2/3、React Native 与 uni-app。<br className="hidden sm:block" />能够独立开发跨平台 APP，主导过多款 APP 上架，并完成项目从需求、开发到部署上线的全流程交付。
              </p>
              <p className="mt-3 font-mono text-[11px] text-slate-400">32 岁 · 男 · 大专 · 目前在职</p>

              <div className="my-7 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-4">
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

          <div className="grid min-w-0 gap-9 border-b border-line py-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-9">
            <section id="timeline" className="min-w-0 scroll-mt-28 lg:border-r lg:border-line lg:pr-8">
              <SectionTitle>职业经历</SectionTitle>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <div key={`${item.date}-${item.company}`} className="grid grid-cols-[16px_minmax(0,1fr)] gap-x-3 text-xs sm:grid-cols-[112px_16px_minmax(0,1fr)] sm:gap-x-2">
                    <time className="col-start-2 mb-1 font-mono text-[10px] leading-4 text-green sm:col-start-auto sm:mb-0 sm:pt-0.5 sm:text-[11px]">{item.date}</time>
                    <div className="relative flex justify-center">
                      {index < timeline.length - 1 && <span className="absolute bottom-0 top-2 w-px bg-green/70" />}
                      <span className="relative mt-1 h-2 w-2 rounded-full bg-green" />
                    </div>
                    <div className="pb-5 sm:col-start-auto">
                      <h3 className="break-words text-[13px] font-semibold leading-5 text-ink sm:text-sm">{item.company}</h3>
                      <p className="mt-0.5 text-[11px] font-medium leading-4 text-slate-500">{item.role}</p>
                      <p className="mt-2 text-[11px] leading-[1.55] text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="min-w-0 space-y-4">
              <section id="stack" className="scroll-mt-28">
                <SectionTitle>技能栈</SectionTitle>
                <StackCode />
              </section>
              <section className="rounded-xl border border-line bg-white p-5 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold"><span className="text-green">&gt;</span> 我能做什么</h2>
                <div className="grid gap-4 text-xs sm:grid-cols-3">
                  <div><strong className="block text-ink">前端与跨端</strong><span className="mt-1 block leading-5 text-slate-500">Web、跨平台 APP、小程序多端产品开发</span></div>
                  <div><strong className="block text-ink">AI 产品落地</strong><span className="mt-1 block leading-5 text-slate-500">把模型能力转化为可用的产品体验</span></div>
                  <div><strong className="block text-ink">完整项目交付</strong><span className="mt-1 block leading-5 text-slate-500">技术选型、开发、部署、上架及线上维护</span></div>
                </div>
              </section>
              <section className="rounded-xl border border-line bg-slate-50/40 p-5 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold"><span className="text-green">&gt;</span> 求职方向</h2>
                <div className="flex flex-wrap gap-2">
                  {["前端开发", "全栈开发", "AI 开发"].map((role) => (
                    <span key={role} className="rounded-full border border-green/25 bg-green/5 px-3 py-1.5 text-[11px] font-medium text-ink">
                      {role}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-5 text-slate-500">偏好能结合工程交付、产品体验与 AI 能力落地的岗位。</p>
              </section>
            </div>
          </div>

          <section id="contact" className="scroll-mt-28 py-8">
            <div className="rounded-xl border border-line bg-slate-50/40 p-5 shadow-card sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <h2 className="flex items-center gap-2 font-mono text-sm font-semibold"><span className="text-green">&gt;</span> 联系与合作</h2>
                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-600">
                    适合前端工程、跨端 App、小程序、后台系统与 AI 产品落地相关工作。可以直接通过电话或邮箱联系我。
                  </p>
                </div>
                <div className="grid min-w-0 gap-3 text-xs text-slate-600 sm:grid-cols-2">
                  <a href="tel:13621424189" className="inline-flex min-w-0 items-center gap-2 font-medium text-ink transition-colors hover:text-accent">
                    <Phone size={14} className="text-green" />
                    13621424189
                  </a>
                  <a href="mailto:1058566903@qq.com" className="inline-flex min-w-0 items-center gap-2 font-medium text-ink transition-colors hover:text-accent">
                    <Mail size={14} className="shrink-0 text-green" />
                    <span className="min-w-0 break-all">1058566903@qq.com</span>
                  </a>
                  <a href="https://github.com/lengziyu" target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-center gap-2 font-medium text-ink transition-colors hover:text-accent">
                    <Github size={14} className="shrink-0 text-green" />
                    <span className="min-w-0 break-all">github.com/lengziyu</span>
                  </a>
                  <span className="inline-flex min-w-0 items-center gap-2 font-medium text-ink">
                    <MapPin size={14} className="shrink-0 text-green" />
                    广州 · 目前在职
                  </span>
                </div>
              </div>
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
