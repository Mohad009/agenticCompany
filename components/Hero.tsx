"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="section-padding relative overflow-hidden">
      <div className="container-fixed relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15]">
            <span className="gradient-text">Agentic Ai</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            تُعدّ شركة Agentic Ai شريكك التقني المتكامل؛ إذ نُصمّم ونطوّر مواقع الويب وتطبيقات الجوال وفق أحدث معايير تجربة المستخدم، ونبني حلولًا برمجية قابلة للتوسع، مع إجراء اختبارات اختراق وفحوص أمان شاملة لحماية بياناتك، كما نُنشئ وكلاء ذكاء اصطناعي مخصّصة لأتمتة خدمة العملاء وتحليل البيانات، ونتكامل مع واجهات برمجة التطبيقات وخدمات السحابة لضمان انسيابية العمليات، ونقدّم استشارات وتدريبًا مستمرَّين لضمان استدامة الحلول ودعمًا فنيًّا على مدار الساعة.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 focus-visible:ring-2 focus-visible:ring-brand-400 text-white font-semibold shadow-lg shadow-brand-600/30 transition">
              تواصل معنا
            </a>
            <a href="#services" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-brand-400 text-white font-semibold">
              خدماتنا
            </a>
          </div>
        </div>
      </div>
      {/* Background decorative elements */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-brand-600/30 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="absolute top-40 -right-40 w-[500px] h-[500px] bg-indigo-700/30 rounded-full blur-3xl"
      />
    </section>
  );
}
