"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const items = [
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", color: "text-green-500", bg: "bg-green-500/10 hover:bg-green-500/20" },
    { icon: <Send className="w-5 h-5" />, label: "Telegram", color: "text-sky-500", bg: "bg-sky-500/10 hover:bg-sky-500/20" },
    { icon: <Phone className="w-5 h-5" />, label: "Звонок", color: "text-zinc-500", bg: "bg-zinc-500/10 hover:bg-zinc-500/20" },
    { icon: <ArrowUpRight className="w-5 h-5" />, label: "Оставить заявку", color: "text-white", bg: "bg-zinc-950 hover:bg-zinc-800" },
  ];

  return (
    <div className="sticky bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none mt-12 mb-6">
      <motion.div 
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-full pointer-events-auto"
      >
        {items.map((item, idx) => (
          <DockItem key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function DockItem({ item }: { item: any }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.15, y: -8 }}
      whileTap={{ scale: 0.95 }}
      style={{ originY: 1 }}
      className={cn("relative p-3.5 rounded-full flex items-center justify-center transition-colors duration-300", item.bg, item.color)}
    >
      {item.icon}
      <AnimatePresence>
        {hovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-12 px-3 py-1.5 bg-zinc-950 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap"
          >
            {item.label}
            {/* Little triangle pointer */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
