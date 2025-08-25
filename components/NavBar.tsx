"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'الخدمات' },
  { href: '#about', label: 'من نحن' },
  { href: '#contact', label: 'تواصل معنا' }
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur border-b border-white/10' : 'bg-transparent'} `}
      aria-label="التنقل الرئيسي"
    >
      <div className="container-fixed flex items-center justify-between h-16">
  <div className="font-bold text-lg tracking-wide gradient-text">Agentic Ai</div>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded px-1 py-0.5 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 border border-white/10 bg-white/5" aria-label="القائمة">
          <span className="text-sm">≡</span>
        </button>
      </div>
    </motion.nav>
  );
}
