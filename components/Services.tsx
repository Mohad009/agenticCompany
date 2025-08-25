"use client";
import { motion } from 'framer-motion';

const services = [
  'تصميم وتطوير مواقع الويب وتطبيقات الجوال',
  'بناء حلول برمجية قابلة للتوسع',
  'اختبارات اختراق وفحوص أمان شاملة',
  'إنشاء وكلاء ذكاء اصطناعي مخصصة',
  'تكامل مع واجهات برمجة التطبيقات وخدمات السحابة',
  'استشارات وتدريب ودعم فني على مدار الساعة'
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-fixed">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">خدماتنا</h2>
          <p className="text-slate-300 leading-relaxed">حلول متكاملة بتحسين مستمر وأداء عالٍ وأمان راسخ.</p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 flex flex-col gap-4 hover:shadow-brand-600/20 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <p className="text-slate-200 font-medium leading-relaxed">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
