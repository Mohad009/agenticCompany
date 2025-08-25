export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-10 text-sm text-slate-400">
      <div className="container-fixed flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لشركة Agentic Ai</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-300 focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1">LinkedIn</a>
          <a href="#" className="hover:text-brand-300 focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1">Twitter</a>
          <a href="#" className="hover:text-brand-300 focus-visible:ring-2 focus-visible:ring-brand-400 rounded px-1">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
