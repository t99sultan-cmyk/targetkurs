import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventName, eventId, eventSourceUrl } = body;

    const cookieStore = await cookies();
    const fbp = cookieStore.get('_fbp')?.value || '';
    const fbc = cookieStore.get('_fbc')?.value || '';

    const headersList = await headers();
    const clientIpAddress = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '';
    const clientUserAgent = headersList.get('user-agent') || '';

    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const accessToken = process.env.FB_CAPI_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json({ error: 'Missing pixel ID or access token' }, { status: 500 });
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const eventData = {
      event_name: eventName,
      event_time: currentTimestamp,
      event_id: eventId,
      action_source: 'website',
      event_source_url: eventSourceUrl,
      user_data: {
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbp,
        fbc,
      },
    };

    const payload = {
      data: [eventData],
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
        console.error("Meta CAPI Error:", result);
        return NextResponse.json({ error: 'Meta CAPI failed', details: result }, { status: 400 });
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("CAPI route error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
