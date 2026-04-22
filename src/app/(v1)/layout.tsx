import { ReactNode } from "react";
import Script from "next/script";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

export default function V1Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{
      backgroundColor: '#e5e5e5',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'var(--font-main)'
    }}>
      <div id="root" style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        overflowX: 'hidden',
        position: 'relative'
      }}>
        <ParticlesBackground variant="gold" />
        <Script id="yandex-metrika-v1" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=108169318", "ym");

            ym(108169318, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });
          `
        }} />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108169318" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {children}
      </div>
    </div>
  );
}
