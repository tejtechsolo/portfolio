import Link from 'next/link';
import { ArrowUpRight } from './icons';
import { Fade } from './motion';

export function ProjectCard({project,index=0}:{project:any;index?:number}) {
  return <Fade delay={index*.05}><Link href={`/projects/${project.slug}`} className="card card-hover group block overflow-hidden rounded-2xl">
    <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[#061224]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,.2),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(139,92,246,.18),transparent_35%)]"/>
      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] text-cyan-200">{project.type}</div>
      <div className="absolute bottom-5 left-5 right-5"><div className="flex items-end justify-between"><div><div className="mb-2 text-2xl font-black tracking-tight text-white/90">{project.title.split(' ')[0]}</div><div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"/></div><div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition group-hover:rotate-6"><ArrowUpRight size={17}/></div></div></div>
    </div>
    <div className="p-5"><div className="mb-2 flex items-center justify-between gap-3"><h3 className="font-semibold">{project.title}</h3><span className="text-xs text-cyan-300">{project.metric}</span></div><p className="min-h-12 text-sm leading-6 text-slate-400">{project.desc}</p><div className="mt-4 flex flex-wrap gap-2">{project.tech.map((t:string)=><span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">{t}</span>)}</div></div>
  </Link></Fade>;
}
