import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Fade } from '@/components/motion';

export default function Projects(){return <div className="section-pad pt-32"><div className="container"><Fade><p className="text-xs uppercase tracking-[.25em] text-cyan-300">My work</p><h1 className="mt-3 text-5xl font-black tracking-[-.04em] md:text-6xl">Featured <span className="text-gradient">projects.</span></h1><p className="mt-5 max-w-2xl text-slate-400">A selection of products, platforms and automations built around real workflows and measurable outcomes.</p></Fade><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div></div>}
