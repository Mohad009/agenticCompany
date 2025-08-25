"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-fixed grid gap-12 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">من نحن</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            تُعدّ شركة Agentic Ai شريكك التقني المتكامل؛ إذ نُصمّم ونطوّر مواقع الويب وتطبيقات الجوال وفق أحدث معايير تجربة المستخدم، ونبني حلولًا برمجية قابلة للتوسع، مع إجراء اختبارات اختراق وفحوص أمان شاملة لحماية بياناتك، كما نُنشئ وكلاء ذكاء اصطناعي مخصّصة لأتمتة خدمة العملاء وتحليل البيانات، ونتكامل مع واجهات برمجة التطبيقات وخدمات السحابة لضمان انسيابية العمليات، ونقدّم استشارات وتدريبًا مستمرَّين لضمان استدامة الحلول ودعمًا فنيًّا على مدار الساعة.
          </p>
          <div className="grid gap-4">
            <div className="glass p-5 rounded-lg leading-relaxed text-slate-200">
              <h3 className="font-semibold mb-2 text-brand-300">رؤيتنا</h3>
              <p>تمكين الشركات من تسريع الابتكار عبر حلول رقمية آمنة وذكية وعالية الاعتمادية.</p>
            </div>
            <div className="glass p-5 rounded-lg leading-relaxed text-slate-200">
              <h3 className="font-semibold mb-2 text-brand-300">مهمتنا</h3>
              <p>تصميم وبناء منظومة تقنية متكاملة تُحوّل العمليات إلى تجربة رقمية سلسة مدعومة بالذكاء الاصطناعي.</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto md:mx-0"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/40 to-indigo-600/40 blur-2xl" />
          <div className="relative h-full w-full glass rounded-3xl flex items-center justify-center p-10 text-center text-xl font-semibold">
            حلول تقنية عميقة التركيز على الأداء والأمان.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
