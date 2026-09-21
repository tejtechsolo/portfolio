import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'TechSolo — Full Stack Developer',
  description: 'Premium portfolio of TechSolo — full-stack development, AI, automation and product engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>;
}
