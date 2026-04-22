import { ReactNode } from "react";
import Script from "next/script";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex sm:items-center justify-center overflow-hidden w-full bg-zinc-100">
      <div className="w-full sm:max-w-[430px] sm:h-[900px] bg-white relative sm:shadow-[0_0_50px_rgba(0,0,0,0.15)] sm:rounded-[3rem] overflow-y-auto overflow-x-hidden relative sm:border-[12px] border-zinc-950">
        <ScrollProgress color="emerald" />
        <MouseGlow />
        <ParticlesBackground variant="emerald" />
        <Script id="yandex-metrika-main" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=108169406", "ym");

            ym(108169406, "init", {
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
            <img src="https://mc.yandex.ru/watch/108169406" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {children}
        <FloatingDock />
      </div>
    </div>
  );
}
