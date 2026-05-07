import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { getPixelIds } from "@/lib/pixels";
import { recordEvent, type StoredEvent } from "@/lib/eventStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      eventName,
      eventId,
      eventSourceUrl,
      customData,
      externalId,
    }: {
      eventName: string;
      eventId: string;
      eventSourceUrl?: string;
      customData?: Record<string, unknown>;
      externalId?: string;
    } = body;

    const cookieStore = await cookies();
    const fbp = cookieStore.get("_fbp")?.value || "";
    const fbc = cookieStore.get("_fbc")?.value || "";

    const headersList = await headers();
    const clientIpAddress =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "";
    const clientUserAgent = headersList.get("user-agent") || "";

    const pixelIds = getPixelIds();
    const accessToken = process.env.FB_CAPI_ACCESS_TOKEN;
    const eventTime = Math.floor(Date.now() / 1000);

    const userData = {
      client_ip_address: clientIpAddress,
      client_user_agent: clientUserAgent,
      fbp,
      fbc,
      ...(externalId ? { external_id: externalId } : {}),
    };

    const eventData = {
      event_name: eventName,
      event_time: eventTime,
      event_id: eventId,
      action_source: "website",
      ...(eventSourceUrl ? { event_source_url: eventSourceUrl } : {}),
      user_data: userData,
      ...(customData ? { custom_data: customData } : {}),
    };

    // Always store the event — even if Meta CAPI fails or no pixels configured
    const stored: StoredEvent = {
      event_name: eventName,
      event_id: eventId,
      event_time: eventTime,
      event_source_url: eventSourceUrl,
      user_data: userData,
      custom_data: customData,
      source: "capi",
    };
    await recordEvent(stored);

    if (!accessToken || pixelIds.length === 0) {
      return NextResponse.json({
        ok: true,
        stored: true,
        sent: 0,
        warning:
          "No pixel IDs or access token — event stored but not sent to Meta",
      });
    }

    // Send to all configured pixels in parallel
    const results = await Promise.allSettled(
      pixelIds.map(async (pid) => {
        const res = await fetch(
          `https://graph.facebook.com/v19.0/${pid}/events?access_token=${accessToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: [eventData] }),
          }
        );
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error(`[capi] pixel ${pid} failed`, json);
          return { pid, ok: false, error: json };
        }
        return { pid, ok: true, result: json };
      })
    );

    const summary = results.map((r, i) =>
      r.status === "fulfilled"
        ? r.value
        : { pid: pixelIds[i], ok: false, error: String(r.reason) }
    );
    const okCount = summary.filter((s) => s.ok).length;

    return NextResponse.json({
      ok: okCount > 0,
      stored: true,
      sent: okCount,
      total: pixelIds.length,
      results: summary,
    });
  } catch (error) {
    console.error("[capi] route error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
