"use client";
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { courses } from '../lib/courses';

export default function Courses() {
  const router = useRouter();
  return (
    <section id="courses" className="section-padding">
      <div className="container-fixed">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">الدورات</h2>
          <p className="text-slate-300 leading-relaxed">مسارات تعليمية عملية ترفع جاهزية فريقك التقنية.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative glass p-6 rounded-2xl overflow-hidden min-h-[260px] flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-brand-500 outline-none"
              role="button"
              tabIndex={0}
              aria-label={`فتح تفاصيل دورة ${c.title}`}
              onClick={() => router.push(`/courses/${c.id}`)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); router.push(`/courses/${c.id}`); } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 via-brand-600/0 to-brand-600/0 group-hover:via-brand-600/10 group-hover:to-brand-600/20 transition" />
              <h3 className="font-semibold text-xl mb-3 text-brand-300">{c.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">{c.shortDesc}</p>
              <div className="mt-6">
                <div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); router.push(`/courses/${c.id}`); }}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-md bg-brand-600/20 text-brand-200 hover:bg-brand-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition"
                  >
                    تفاصيل الدورة
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
