"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#courses', label: 'الدورات', hasMenu: true },
  { href: '#services', label: 'الخدمات' },
  { href: '#about', label: 'من نحن' },
  { href: '#contact', label: 'تواصل معنا' }
];

const courseItems = [
  { id: 'course-cyber', label: 'الأمن السيبراني', desc: 'مفاهيم الحماية، اختبار الاختراق، وإدارة المخاطر.' },
  { id: 'course-ai', label: 'الذكاء الاصطناعي', desc: 'تعلم الآلة، الشبكات العصبية، والوكلاء الذكيون.' },
  { id: 'course-design', label: 'التصميم', desc: 'تصميم واجهات وتجربة مستخدم حديثة ومتمحورة حول الإنسان.' }
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile (مستقبلي)
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesBtnRef = useRef<HTMLButtonElement | null>(null);
  const coursesMenuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCoursesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!coursesMenuRef.current || !coursesBtnRef.current) return;
      if (coursesMenuRef.current.contains(e.target as Node)) return;
      if (coursesBtnRef.current.contains(e.target as Node)) return;
      setCoursesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
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
          {links.map(l => {
            if (l.hasMenu) {
              return (
                <li key={l.href} className="relative">
                  <button
                    ref={coursesBtnRef}
                    onClick={() => setCoursesOpen(o => !o)}
                    onMouseEnter={() => setCoursesOpen(true)}
                    aria-haspopup="true"
                    aria-expanded={coursesOpen}
                    className="hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded px-1 py-0.5 transition inline-flex items-center gap-1"
                  >
                    {l.label}
                    <span className={`transition-transform text-xs ${coursesOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {coursesOpen && (
                    <motion.div
                      ref={coursesMenuRef}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      onMouseLeave={() => setCoursesOpen(false)}
                      className="absolute top-full mt-3 w-80 glass rounded-xl p-4 backdrop-blur-xl border border-white/10 shadow-2xl"
                      role="menu"
                      aria-label="قائمة الدورات"
                    >
                      <div className="flex flex-col gap-3">
                        {courseItems.map(ci => (
                          <a
                            key={ci.id}
                            href={`#${ci.id}`}
                            className="group block rounded-lg px-3 py-2 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-500 outline-none transition"
                            role="menuitem"
                            onClick={() => setCoursesOpen(false)}
                          >
                            <div className="font-semibold text-slate-100 group-hover:text-brand-300 mb-0.5 text-sm">{ci.label}</div>
                            <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">{ci.desc}</p>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </li>
              );
            }
            return (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded px-1 py-0.5 transition">
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 border border-white/10 bg-white/5" aria-label="القائمة">
          <span className="text-sm">≡</span>
        </button>
      </div>
    </motion.nav>
  );
}
