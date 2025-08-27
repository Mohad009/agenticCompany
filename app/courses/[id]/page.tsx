import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourse, courses } from '../../../lib/courses';

export function generateStaticParams() {
  return courses.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const c = getCourse(params.id);
  if (!c) return { title: 'الدورة غير موجودة' };
  return {
    title: `دورة ${c.title} | التفاصيل`,
    description: c.shortDesc
  };
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id);
  if (!course) return notFound();

  return (
    <main className="relative py-24">
      <div className="container-fixed">
        <div className="mb-10 flex items-start justify-between gap-6 flex-wrap-reverse">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{course.title}</h1>
            <p className="text-slate-300 max-w-2xl leading-relaxed">{course.overview}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-brand-600/20 text-brand-200">المدة: {course.duration}</span>
              <span className="px-3 py-1 rounded-full bg-slate-600/30">المستوى: {course.level}</span>
              <span className="px-3 py-1 rounded-full bg-slate-600/30">النمط: {course.format}</span>
            </div>
          </div>
          <Link href="#register" className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-md transition">
            اطلب التسجيل
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <section className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold mb-4 text-brand-300">الأهداف</h2>
              <ul className="list-disc pr-5 space-y-2 text-slate-200 marker:text-brand-400">
                {course.objectives.map(o => <li key={o}>{o}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-brand-300">الوحدات</h2>
              <div className="space-y-6">
                {course.modules.map(m => (
                  <div key={m.title} className="glass rounded-xl p-5">
                    <h3 className="font-semibold text-brand-200 mb-3">{m.title}</h3>
                    <ul className="list-disc pr-5 space-y-1 text-sm text-slate-300 marker:text-brand-400">
                      {m.points.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <aside className="space-y-8">
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4 text-brand-300">لمن هذه الدورة؟</h2>
              <ul className="space-y-2 text-sm text-slate-200">
                {course.audience.map(a => <li key={a} className="flex items-start gap-2"><span className="text-brand-400">•</span><span>{a}</span></li>)}
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4 text-brand-300">مميزات</h2>
              <ul className="space-y-2 text-sm text-slate-200">
                {course.highlights.map(h => <li key={h} className="flex items-start gap-2"><span className="text-brand-400">★</span><span>{h}</span></li>)}
              </ul>
            </div>
            <div id="register" className="glass rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4 text-brand-300">طلب تسجيل / عرض</h2>
              <p className="text-sm text-slate-300 mb-4">املأ النموذج في صفحة التواصل وسنعاودك بالتفاصيل والتسعير.</p>
              <Link href="/" className="inline-flex text-brand-300 hover:text-brand-200 font-semibold text-sm">↩ العودة للرئيسية</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
