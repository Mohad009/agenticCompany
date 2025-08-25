# موقع شركة Agentic Ai

موقع احترافي حديث مبني بإطار Next.js و Tailwind CSS مع دعم كامل للغة العربية (اتجاه RTL) وعناصر حركة خفيفة باستخدام Framer Motion.

## المتطلبات
- Node.js 18+

## التثبيت والتشغيل
```bash
npm install
npm run dev
```
ثم افتح المتصفح على: http://localhost:3000

## التقنيات المستخدمة
- Next.js (App Router)
- React (مكوّنات وظيفية و Hooks)
- Tailwind CSS (تصميم سريع الاستجابة + تخصيص ألوان وهوية بصرية)
- Framer Motion (حركات انتقالية سلسة)
- خطوط Google (Cairo)

## البنية
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  NavBar.tsx
  Hero.tsx
  Services.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
```

## إمكانية الوصول
- تباين ألوان جيد
- استخدام عناوين معنونة
- أزرار وروابط بعناصر تركيز Focus واضحة
- نماذج مزودة بتسميات Labels

## تخصيص الألوان والخط
يمكن تعديل لوحة الألوان في `tailwind.config.js` والخط في `layout.tsx`.

## البناء للإنتاج
```bash
npm run build
npm start
```

## الترخيص
حقوق ملكية خاصة بشركة Agentic Ai.
