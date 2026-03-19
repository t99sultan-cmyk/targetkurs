import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-outfit',
});

export const metadata = {
  title: "Target Mentorship",
  description: "От специалиста в найме до востребованного таргетолога",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
