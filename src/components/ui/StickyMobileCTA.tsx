"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";
import { useIntensiveOpen } from "@/hooks/useIntensiveOpen";

const WA_URL =
  "https://wa.me/77064089933?text=Здравствуйте,%20хочу%20пройти%20интенсив";

export function StickyMobileCTA() {
  const { handleWhatsAppClick } = useWhatsAppClick();
  const [scrolled, setScrolled] = useState(false);
  const intensiveOpen = useIntensiveOpen();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = intensiveOpen && scrolled;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="sm:hidden fixed bottom-3 left-3 right-3 z-[90] pointer-events-none"
        >
          <a
            href={WA_URL}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto block w-full rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-base py-4 px-5 shadow-[0_10px_30px_rgba(16,185,129,0.5)] text-center transition-colors"
            aria-label="Записаться на интенсив за 1 990 тенге через WhatsApp"
          >
            <span className="flex items-center justify-center gap-2">
              👉 ЗАПИСАТЬСЯ ЗА 1 990₸
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
