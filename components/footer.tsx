import Link from 'next/link';
import { Github, Linkedin, ArrowUpRight } from './icons';

export function Footer() {
  return <footer className="border-t border-white/10 bg-black/20"><div className="container flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
    <div><div className="font-semibold">Tech<span className="text-cyan-300">Solo</span></div><p className="mt-1 text-sm text-slate-500">Build. Solve. Make an impact.</p></div>
    <div className="flex items-center gap-5 text-sm text-slate-500"><a href="https://github.com/tejtechsolo" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={17}/></a><a href="#" className="hover:text-white"><Linkedin size={17}/></a><Link href="/contact" className="flex items-center gap-1 hover:text-white">Start a project <ArrowUpRight size={15}/></Link></div>
    <div className="text-xs text-slate-600">© 2026 TechSolo. All rights reserved.</div>
  </div></footer>;
}
