import {notFound} from 'next/navigation';
import Link from 'next/link';
import {posts} from '@/lib/data';
import {ArrowLeft} from '@/components/icons';

export function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=posts.find(x=>x.slug===slug);
  if(!p)return notFound();
  return <article className="section-pad pt-32"><div className="container max-w-4xl">
    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white"><ArrowLeft size={15}/> Back to blog</Link>
    <div className="mt-10"><div className="text-xs uppercase tracking-[.2em] text-cyan-300">{p.category} · {p.date}</div><h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{p.title}</h1><p className="mt-5 text-lg leading-8 text-slate-400">A sample article page designed for long-form technical writing, tutorials, project notes and engineering lessons.</p></div>
    <div className="mt-12 space-y-8 text-base leading-8 text-slate-300"><p>Good developer content starts with a real problem. Instead of presenting a collection of APIs or buzzwords, the goal is to explain the decisions that make a system easier to build, operate and improve.</p><h2 className="text-2xl font-bold text-white">Start with the user journey</h2><p>Map the important actions first, then design components and data structures around those actions. This keeps the implementation grounded in outcomes rather than framework features.</p><h2 className="text-2xl font-bold text-white">Keep the architecture boring</h2><p>Use clear boundaries, reusable primitives and sensible defaults. Complexity should be earned by the product, not introduced by the developer.</p><h2 className="text-2xl font-bold text-white">Ship, observe, iterate</h2><p>Production feedback is part of the design process. Build a small version, measure what matters and improve the highest-value friction points.</p></div>
  </div></article>;
}
