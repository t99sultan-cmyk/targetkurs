import { NextRequest, NextResponse } from "next/server";
import { recordEvent, type StoredEvent } from "@/lib/eventStore";

/**
 * Lightweight event ingestion endpoint.
 * Use for tracking events that don't need to hit Meta CAPI directly
 * (PageView, scroll milestones, button clicks, etc.) — they go straight
 * to the durable event store for later replay/audit.
 */
export async function POST(req: NextRequest) {
  let body: Partial<StoredEvent> & {
    fbp?: string;
    fbc?: string;
    fbclid?: string;
  } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  const fbpFromCookie = req.cookies.get("_fbp")?.value;
  const fbcFromCookie = req.cookies.get("_fbc")?.value;

  const event: StoredEvent = {
    event_name: String(body.event_name || "PageView"),
    event_id: String(body.event_id || crypto.randomUUID()),
    event_time:
      typeof body.event_time === "number"
        ? body.event_time
        : Math.floor(Date.now() / 1000),
    event_source_url: body.event_source_url,
    page_path: body.page_path,
    user_data: {
      ...(body.user_data || {}),
      fbp: body.fbp || body.user_data?.fbp || fbpFromCookie,
      fbc: body.fbc || body.user_data?.fbc || fbcFromCookie,
      fbclid: body.fbclid || body.user_data?.fbclid,
      client_ip_address: ip,
      client_user_agent: ua,
    },
    custom_data: body.custom_data,
    source: "event",
  };

  await recordEvent(event);

  return NextResponse.json({ ok: true });
}
