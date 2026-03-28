"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    ym?: (id: number, methodName: string, ...args: any[]) => void;
  }
}

export function Metrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.ym) {
      window.ym(108283829, "hit", window.location.href);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108283829', 'ym');

            ym(108283829, 'init', {
              ssr:true, 
              webvisor:true, 
              clickmap:true, 
              ecommerce:"dataLayer", 
              referrer: document.referrer, 
              url: location.href, 
              accurateTrackBounce:true, 
              trackLinks:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/108283829"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
