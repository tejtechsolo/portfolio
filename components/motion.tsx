'use client';

import { motion } from 'framer-motion';

export const Fade = ({ children, className='', delay=0 }: { children: React.ReactNode; className?: string; delay?: number }) =>
  <motion.div className={className} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.55,delay,ease:'easeOut'}}>{children}</motion.div>;

export const ScaleIn = ({ children, className='', delay=0 }: { children: React.ReactNode; className?: string; delay?: number }) =>
  <motion.div className={className} initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.12}} transition={{duration:.5,delay,ease:'easeOut'}}>{children}</motion.div>;
