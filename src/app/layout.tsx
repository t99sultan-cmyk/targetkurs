import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import { Metrika } from "@/components/Metrika";
import { FBPixel } from "@/components/FBPixel";
import { StructuredData } from "@/components/StructuredData";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";
import { Onest, Unbounded } from "next/font/google";

// Body — чистый, читаемый, с кириллицей.
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

// Заголовки — характерный display с полной кириллицей (у Outfit её не было,
// поэтому русские заголовки падали на дефолтный sans).
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://targetkurs.vercel.app"),
  title: {
    default: "Обучение таргету от 500 000₸ в месяц — Target Mentorship",
    template: "%s | Target Mentorship",
  },
  description:
    "Интенсив по таргетированной рекламе в Казахстане. Выйди на доход 500 000–1 000 000₸ за 60 дней. Готовая система, AI-инструменты, личное наставничество. Набор 2026 открыт.",
  keywords: [
    "таргет Казахстан",
    "обучение таргетологу",
    "таргетированная реклама",
    "Facebook Ads курс",
    "интенсив таргет",
    "наставничество таргет",
    "как стать таргетологом",
  ],
  authors: [{ name: "Тимур Султанов" }],
  creator: "Тимур Султанов",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://targetkurs.vercel.app",
    title: "Обучение таргету от 500 000₸ в месяц — Target Mentorship",
    description:
      "Выйди на доход 500 000–1 000 000₸ за 60 дней. Готовая система + AI-инструменты + личное наставничество от Тимура Султанова.",
    siteName: "Target Mentorship",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Target Mentorship — обучение таргету",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Обучение таргету от 500 000₸ в месяц",
    description:
      "Интенсив по таргетированной рекламе в Казахстане. Набор 2026 открыт.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${unbounded.variable} scroll-smooth`}>
      <body className={`${onest.className}`}>
        <Suspense fallback={null}>
          <Metrika />
          <FBPixel />
        </Suspense>
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
