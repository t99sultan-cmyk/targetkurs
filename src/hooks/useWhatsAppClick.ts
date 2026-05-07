"use client";

import React from "react";
import { showToast } from "@/components/ui/Toaster";
import { track } from "@/lib/track";

export function useWhatsAppClick() {
  const handleWhatsAppClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetUrl = e.currentTarget.href;

    const leadSent = sessionStorage.getItem("wa_lead_sent");

    if (leadSent === "true") {
      showToast("Открываем WhatsApp...");
      window.open(targetUrl, "_blank");
      return;
    }

    // Fires Lead to all pixels (fbq) + CAPI (server-side multi-pixel)
    // + event store (durable record for replay)
    track("Lead");

    sessionStorage.setItem("wa_lead_sent", "true");
    showToast("Отлично! Открываем WhatsApp — напишите нам там 👉");
    window.open(targetUrl, "_blank");
  };

  return { handleWhatsAppClick };
}
