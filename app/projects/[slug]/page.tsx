import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from '@/components/icons';
import { Fade } from '@/components/motion';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=projects.find(x=>x.slug===slug); if(!p) return notFound();
  return <div className="section-pad pt-32"><div className="container"><Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white"><ArrowLeft size={15}/> Back to projects</Link>
    <Fade><div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#071a2e] via-[#061224] to-[#100b25] p-7 md:p-12"><div className="max-w-3xl"><div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200">{p.type}</div><h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">{p.title}</h1><p className="mt-5 text-lg leading-8 text-slate-400">{p.desc}</p><div className="mt-7 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">{t}</span>)}</div></div></div></Fade>
    <div className="mt-8 grid gap-5 md:grid-cols-3"><Info title="Role" text="Product / Full Stack"/><Info title="Focus" text="UX, architecture & delivery"/><Info title="Outcome" text={p.metric}/></div>
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><Fade className="card rounded-3xl p-8"><h2 className="text-xl font-bold">What I focused on</h2><ul className="mt-6 space-y-4 text-sm text-slate-400">{['Clear user journeys and information hierarchy','Reusable components and maintainable architecture','Responsive behavior across desktop and mobile','Secure, production-minded integration patterns','Deployment and iteration workflow'].map(x=><li key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 text-cyan-300" size={17}/>{x}</li>)}</ul></Fade>
    <Fade delay={.08} className="card rounded-3xl p-8"><h2 className="text-xl font-bold">Technology</h2><div className="mt-6 space-y-3">{p.tech.map(t=><div key={t} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.02] px-4 py-3"><span className="text-sm">{t}</span><ArrowUpRight size={15} className="text-slate-600"/></div>)}</div></Fade></div>
  </div></div>;
}
function Info({title,text}:{title:string;text:string}){return <div className="card rounded-2xl p-5"><div className="text-xs uppercase tracking-wider text-slate-600">{title}</div><div className="mt-2 font-medium">{text}</div></div>}
