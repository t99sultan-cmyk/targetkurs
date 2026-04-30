"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";
import { useIntensiveOpen } from "@/hooks/useIntensiveOpen";

const WA_URL =
  "https://wa.me/77064089933?text=Здравствуйте,%20хочу%20пройти%20интенсив";

export function FloatingDock() {
  const [hovered, setHovered] = useState(false);
  const { handleWhatsAppClick } = useWhatsAppClick();
  const intensiveOpen = useIntensiveOpen();

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-[95] pointer-events-none">
      <AnimatePresence>
        {intensiveOpen && (
          <motion.a
            key="wa-fab"
            href={WA_URL}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться на интенсив через WhatsApp"
            initial={{ y: 24, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-[0_18px_44px_rgba(16,185,129,0.45)] transition-colors"
          >
            <span
              className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping pointer-events-none"
              style={{ animationDuration: "2.4s" }}
              aria-hidden
            />
            <MessageCircle className="relative w-6 h-6" />
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-full mr-3 px-3 py-1.5 bg-zinc-950 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
                >
                  Записаться на интенсив
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
