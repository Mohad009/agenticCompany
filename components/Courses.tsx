"use client";
import { motion } from 'framer-motion';

const courses = [
  {
    id: 'course-cyber',
    title: 'الأمن السيبراني',
    desc: 'أساسيات التهديدات، إدارة الثغرات، اختبار الاختراق، بناء سياسات الأمان.'
  },
  {
    id: 'course-ai',
    title: 'الذكاء الاصطناعي',
    desc: 'خوارزميات تعلم الآلة، الشبكات العصبية، بناء وكلاء ذكيين وتحليل البيانات.'
  },
  {
    id: 'course-design',
    title: 'التصميم',
    desc: 'مبادئ تصميم الواجهات UX/UI، النماذج الأولية، وتحسين تجربة المستخدم.'
  }
];

export default function Courses() {
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
              className="group relative glass p-6 rounded-2xl overflow-hidden min-h-[240px] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 via-brand-600/0 to-brand-600/0 group-hover:via-brand-600/10 group-hover:to-brand-600/20 transition" />
              <h3 className="font-semibold text-xl mb-3 text-brand-300">{c.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-300 hover:text-brand-200 focus-visible:ring-2 focus-visible:ring-brand-500 rounded">
                  اطلب تفاصيل
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
