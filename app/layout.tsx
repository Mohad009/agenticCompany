import './globals.css';
import { ReactNode } from 'react';
import { Cairo } from 'next/font/google';
import NavBar from '../components/NavBar';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400','600','700'] });

export const metadata = {
  title: 'Agentic Ai - شريكك التقني المتكامل',
  description: 'حلول برمجية متقدمة، اختبارات أمان، ووكلاء ذكاء اصطناعي مخصصة.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
