"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Toaster() {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);

  useEffect(() => {
    const onToast = (e: Event) => {
      const ev = e as CustomEvent<{ message: string }>;
      setToast({ id: Date.now(), message: ev.detail.message });
    };
    window.addEventListener("app:toast", onToast as EventListener);
    return () => window.removeEventListener("app:toast", onToast as EventListener);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-[300] w-[calc(100%-2rem)] max-w-sm">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ y: -60, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-zinc-950/95 backdrop-blur-lg text-white px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-emerald-500/30"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-sm font-bold leading-tight">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function showToast(message: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("app:toast", { detail: { message } }));
}
