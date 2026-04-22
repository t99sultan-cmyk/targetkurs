"use client";

import React from "react";
import { showToast } from "@/components/ui/Toaster";

export function useWhatsAppClick() {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetUrl = e.currentTarget.href;

    const leadSent = sessionStorage.getItem('wa_lead_sent');

    if (leadSent === 'true') {
      showToast("Открываем WhatsApp...");
      window.open(targetUrl, '_blank');
      return;
    }

    const eventId = crypto.randomUUID();

    // Client-side execution
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead', {}, { eventID: eventId });
    }

    // Server-side execution
    fetch('/api/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'Lead',
        eventId: eventId,
        eventSourceUrl: window.location.href,
      }),
    }).catch(err => console.error("Error sending CAPI logic:", err));

    sessionStorage.setItem('wa_lead_sent', 'true');
    showToast("Отлично! Открываем WhatsApp — напишите нам там 👉");
    window.open(targetUrl, '_blank');
  };

  return { handleWhatsAppClick };
}
