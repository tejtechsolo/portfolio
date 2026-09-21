'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from './icons';

const links = [['Home','/'],['About','/about'],['Projects','/projects'],['Skills','/skills'],['Blog','/blog'],['Contact','/contact']];

export function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">&lt;/&gt;</span>
        <span>Tech<span className="text-cyan-300">Solo</span></span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">{links.map(([label,href])=><Link key={href} href={href} className="transition hover:text-white">{label}</Link>)}</nav>
      <Link href="/contact" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white btn-primary md:block">Hire Me</Link>
      <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden">{open?<X size={19}/>:<Menu size={19}/>}</button>
    </div>
    {open && <div className="border-t border-white/5 bg-slate-950 px-6 py-4 md:hidden">{links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5">{label}</Link>)}</div>}
  </header>;
}
