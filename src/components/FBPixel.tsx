"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { getPixelIds } from "@/lib/pixels";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function FBPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const pixelIds = getPixelIds();

  useEffect(() => {
    if (typeof window === "undefined" || !window.fbq || !isLoaded) return;
    // PageView for all pixels (fbq broadcasts to all initialized pixels)
    window.fbq("track", "PageView");
  }, [pathname, searchParams, isLoaded]);

  if (pixelIds.length === 0) return null;

  // Build init script that initializes ALL pixels and fires PageView for all
  const initScript = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    ${pixelIds.map((id) => `fbq('init', '${id}');`).join("\n")}
    fbq('track', 'PageView');
  `;

  return (
    <>
      <Script
        id="fb-pixel-multi"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
      <noscript>
        {pixelIds.map((id) => (
          <img
            key={id}
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
          />
        ))}
      </noscript>
    </>
  );
}
