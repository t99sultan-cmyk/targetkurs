"use client";

/**
 * Unified client-side tracking.
 *
 *   track("Lead", { value: 1990, currency: "KZT" });
 *
 * Fires:
 *  1. fbq('track', name, customData, { eventID }) — broadcasts to all
 *     pixels initialized by FBPixel component
 *  2. POST /api/capi  → server forwards to all configured pixel IDs in
 *     parallel + writes to event store (for later replay/audit)
 *
 * The same event_id is used on both sides for proper deduplication
 * (Meta merges browser+server events with matching event_id).
 *
 * Returns the generated event_id so callers can correlate.
 */

type TrackOptions = {
  /** External user identifier (will be hashed by Meta) */
  externalId?: string;
  /** Override event_id (default: random UUID) */
  eventId?: string;
  /** Skip server-side CAPI (for noisy events like scroll milestones — use logEvent instead) */
  clientOnly?: boolean;
};

export function track(
  eventName: string,
  customData?: Record<string, unknown>,
  options: TrackOptions = {}
): string {
  const eventId = options.eventId ?? crypto.randomUUID();

  // 1. Client-side via fbq (broadcasts to all initialized pixels)
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof window !== "undefined" && w.fbq) {
      w.fbq("track", eventName, customData ?? {}, { eventID: eventId });
    }
  } catch (err) {
    console.error("[track] fbq error", err);
  }

  // 2. Server-side via CAPI (multi-pixel + event store)
  if (!options.clientOnly) {
    fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl:
          typeof window !== "undefined" ? window.location.href : undefined,
        customData,
        externalId: options.externalId,
      }),
      keepalive: true,
    }).catch((err) => console.error("[track] CAPI error", err));
  }

  return eventId;
}

/**
 * Lightweight event log (no CAPI, just durable server-side log).
 * Use for noisy events: scroll milestones, button hovers, time-on-page,
 * quiz step completion, etc. — things you might want to replay later
 * but don't need Meta to know about right now.
 */
export function logEvent(
  eventName: string,
  customData?: Record<string, unknown>
): string {
  const eventId = crypto.randomUUID();
  fetch("/api/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url:
        typeof window !== "undefined" ? window.location.href : undefined,
      page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
      custom_data: customData,
    }),
    keepalive: true,
  }).catch((err) => console.error("[logEvent] error", err));
  return eventId;
}
