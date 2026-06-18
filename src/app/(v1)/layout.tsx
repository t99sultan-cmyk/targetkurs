import { ReactNode } from "react";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

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
        <ScrollProgress color="gold" />
        <ParticlesBackground variant="gold" />
        {children}
      </div>
    </div>
  );
}
