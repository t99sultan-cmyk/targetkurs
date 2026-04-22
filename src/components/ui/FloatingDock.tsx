"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";

const WA_URL =
  "https://wa.me/77064089933?text=Здравствуйте,%20хочу%20пройти%20интенсив";
const TEL_URL = "tel:+77064089933";

export function FloatingDock() {
  const { handleWhatsAppClick } = useWhatsAppClick();

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("pricing");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none mt-12 mb-6">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-full pointer-events-auto"
      >
        <DockItem
          label="WhatsApp"
          color="text-green-600"
          bg="bg-green-500/10 hover:bg-green-500/20"
          as="a"
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-5 h-5" />
        </DockItem>
        <DockItem
          label="Позвонить"
          color="text-zinc-700"
          bg="bg-zinc-500/10 hover:bg-zinc-500/20"
          as="a"
          href={TEL_URL}
        >
          <Phone className="w-5 h-5" />
        </DockItem>
        <DockItem
          label="К ценам"
          color="text-white"
          bg="bg-zinc-950 hover:bg-zinc-800"
          as="button"
          onClick={scrollToPricing}
        >
          <ArrowUp className="w-5 h-5" />
        </DockItem>
      </motion.div>
    </div>
  );
}

type DockItemProps = {
  label: string;
  color: string;
  bg: string;
  children: React.ReactNode;
} & (
  | {
      as: "a";
      href: string;
      target?: string;
      rel?: string;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    }
  | {
      as: "button";
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }
);

function DockItem(props: DockItemProps) {
  const [hovered, setHovered] = useState(false);
  const commonClass = cn(
    "relative p-3.5 rounded-full flex items-center justify-center transition-colors duration-300",
    props.bg,
    props.color,
  );

  const tooltip = (
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-950 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
        >
          {props.label}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (props.as === "a") {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
        style={{ originY: 1 }}
        className={commonClass}
        aria-label={props.label}
      >
        {props.children}
        {tooltip}
      </motion.a>
    );
  }
  return (
    <motion.button
      type="button"
      onClick={props.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.15, y: -8 }}
      whileTap={{ scale: 0.95 }}
      style={{ originY: 1 }}
      className={commonClass}
      aria-label={props.label}
    >
      {props.children}
      {tooltip}
    </motion.button>
  );
}
