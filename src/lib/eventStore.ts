/**
 * Server-side event recorder.
 *
 * Pluggable storage:
 *   1. console.log — always (Vercel logs, structured JSON)
 *   2. Telegram channel — for high-value events (Lead, Contact, Purchase…)
 *      Uses TG_BOT_TOKEN + TG_EVENTS_CHAT_ID (fallback to TG_CHAT_ID)
 *   3. Database — stub for now; when DATABASE_URL is set, swap implementation
 *
 * The point: data is captured durably even before pixels exist.
 * When new pixels are created, the same events keep flowing and
 * we can replay history via /api/replay (TODO once DB is wired).
 */

export type StoredEvent = {
  event_name: string;
  event_id: string;
  /** Unix timestamp in seconds */
  event_time: number;
  event_source_url?: string;
  page_path?: string;
  user_data: {
    fbp?: string;
    fbc?: string;
    fbclid?: string;
    client_ip_address?: string;
    client_user_agent?: string;
    external_id?: string;
    em?: string; // hashed email (sha256)
    ph?: string; // hashed phone
  };
  custom_data?: Record<string, unknown>;
  source?: string; // 'capi' | 'event' | 'lead'
};

const HIGH_VALUE_EVENTS = new Set([
  "Lead",
  "Contact",
  "Purchase",
  "InitiateCheckout",
  "Subscribe",
  "CompleteRegistration",
  "Schedule",
  "AddPaymentInfo",
  "AddToCart",
]);

async function sendToTelegram(event: StoredEvent) {
  const tgToken = process.env.TG_BOT_TOKEN;
  const tgChat = process.env.TG_EVENTS_CHAT_ID || process.env.TG_CHAT_ID;
  if (!tgToken || !tgChat) return;
  if (!HIGH_VALUE_EVENTS.has(event.event_name)) return;

  const lines: string[] = [
    `🎯 <b>${event.event_name}</b>`,
    `URL: ${event.event_source_url || "—"}`,
    `IP: <code>${event.user_data.client_ip_address || "—"}</code>`,
    `fbp: <code>${event.user_data.fbp || "—"}</code>`,
    `fbc: <code>${event.user_data.fbc || "—"}</code>`,
  ];
  if (event.user_data.external_id) {
    lines.push(`external_id: <code>${event.user_data.external_id}</code>`);
  }
  if (event.custom_data && Object.keys(event.custom_data).length > 0) {
    lines.push(`data: <code>${JSON.stringify(event.custom_data)}</code>`);
  }
  lines.push(
    `time: ${new Date(event.event_time * 1000).toISOString()}`,
    `source: ${event.source || "—"}`
  );

  try {
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: tgChat,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (err) {
    console.error("[eventStore] TG send failed", err);
  }
}

async function saveToDB(_event: StoredEvent) {
  // Stub. When DATABASE_URL is wired:
  //   const dbUrl = process.env.DATABASE_URL;
  //   if (!dbUrl) return;
  //   await db.events.insert(_event);
  // For now: structured console log already serves as audit trail.
  return;
}

export async function recordEvent(event: StoredEvent) {
  // 1. Structured console log — durable in Vercel logs
  console.log("[event]", JSON.stringify(event));

  // 2. Telegram mirror for high-value events (best-effort, non-blocking)
  // 3. DB write (stub)
  await Promise.allSettled([sendToTelegram(event), saveToDB(event)]);
}
