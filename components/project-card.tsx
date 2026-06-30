import {
  BadgeDollarSign,
  Compass,
  ExternalLink,
  FileUser,
  GalleryThumbnails,
  GitFork,
  Mic2,
  MonitorCog,
  PanelsTopLeft,
  RadioTower,
  Tag,
  Wrench,
} from "lucide-react";
import type { Project } from "@/data/projects";

const iconMap = {
  price: BadgeDollarSign,
  toolbox: Wrench,
  resume: FileUser,
  card: GalleryThumbnails,
  navigation: Compass,
  environment: MonitorCog,
  trending: RadioTower,
  voice: Mic2,
  pageforge: PanelsTopLeft,
  kintrace: GitFork,
};

const iconStyles = {
  price: "border-violet-400/25 text-violet-300",
  toolbox: "border-amber-400/25 text-amber-300",
  resume: "border-emerald-400/25 text-emerald-300",
  card: "border-fuchsia-400/25 text-fuchsia-300",
  navigation: "border-cyan-400/25 text-cyan-300",
  environment: "border-slate-400/25 text-slate-200",
  trending: "border-blue-400/25 text-blue-300",
  voice: "border-pink-400/25 text-pink-300",
  pageforge: "border-orange-400/25 text-orange-300",
  kintrace: "border-lime-400/25 text-lime-300",
};

export function ProjectCard({ project }: { project: Project; index: number }) {
  const Icon = iconMap[project.icon];

  return (
    <article className="group flex min-h-48 flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex-1 p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border bg-[#10141b] ${iconStyles[project.icon]}`}>
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <h3 className="text-sm font-semibold text-ink">{project.name}</h3>
        </div>
        <p className="mb-3 min-h-10 text-[12px] leading-5 text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50/60 px-2 py-1 text-[10px] font-medium leading-none text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors group-hover:border-blue-200 group-hover:bg-blue-50">
              <Tag size={9} strokeWidth={2} className="text-blue-500/75" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line px-4 py-3 text-[11px] text-slate-600">
        <span>{project.role}</span>
        <span className="sm:ml-auto sm:mr-6">{project.status}</span>
        <a href={project.href} target="_blank" rel="noreferrer" aria-label={`打开 ${project.name}`} className="text-slate-500 transition hover:text-accent"><ExternalLink size={14} /></a>
      </div>
    </article>
  );
}
