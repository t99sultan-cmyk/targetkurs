import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена — 404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98122,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-widest mb-8">
          ⚠️ Ошибка 404
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Такой страницы нет
        </h2>
        <p className="text-lg text-zinc-400 font-medium mb-10">
          Возможно, ссылка устарела или страницу переместили. Но интенсив ждёт вас — жмите ниже.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/course"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-base transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            👉 На страницу курса
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-base transition-colors border border-zinc-800"
          >
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
