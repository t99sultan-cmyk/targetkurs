import { ReactNode } from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex sm:items-center justify-center overflow-hidden w-full bg-zinc-100">
      <div className="w-full sm:max-w-[430px] sm:h-[900px] bg-white relative sm:shadow-[0_0_50px_rgba(0,0,0,0.15)] sm:rounded-[3rem] overflow-y-auto overflow-x-hidden relative sm:border-[12px] border-zinc-950">
        <ScrollProgress color="emerald" />
        <MouseGlow />
        <ParticlesBackground variant="emerald" />
        {children}
        <FloatingDock />
      </div>
      <StickyMobileCTA />
    </div>
  );
}
