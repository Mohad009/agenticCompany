"use client";
import { useState } from 'react';

interface FormState { name: string; email: string; message: string; status?: 'idle' | 'submitting' | 'sent'; }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', status: 'idle' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm(f => ({ ...f, status: 'submitting' }));
    setTimeout(() => setForm(f => ({ ...f, status: 'sent', name: '', email: '', message: '' })), 1200);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-fixed grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">تواصل معنا</h2>
          <p className="text-slate-300 leading-relaxed">شارِكنا احتياجك التقني لنساعدك في بناء الحل الأمثل.</p>
          <div className="glass p-6 rounded-xl space-y-4 text-slate-200 text-sm leading-relaxed">
            <p><span className="font-semibold text-brand-300">البريد:</span> contact@agentic-ai.example</p>
            <p><span className="font-semibold text-brand-300">الهاتف:</span> ‎+966-555-000000</p>
            <p><span className="font-semibold text-brand-300">العنوان:</span> الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="glass p-8 rounded-2xl space-y-6" aria-label="نموذج التواصل">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-semibold">الاسم</label>
            <input required id="name" name="name" value={form.name} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 focus:border-brand-500 focus:ring-brand-500" />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-semibold">البريد الإلكتروني</label>
            <input type="email" required id="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 focus:border-brand-500 focus:ring-brand-500" />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-semibold">رسالتك</label>
            <textarea required id="message" name="message" rows={5} value={form.message} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 focus:border-brand-500 focus:ring-brand-500 resize-none" />
          </div>
          <button disabled={form.status==='submitting'} className="w-full py-3 rounded-lg font-semibold bg-brand-600 hover:bg-brand-500 focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-60 disabled:cursor-not-allowed">
            {form.status === 'submitting' ? 'جارٍ الإرسال...' : form.status === 'sent' ? 'تم الإرسال ✔' : 'إرسال'}
          </button>
        </form>
      </div>
    </section>
  );
}
