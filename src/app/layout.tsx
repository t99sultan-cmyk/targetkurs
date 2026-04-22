import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import { Metrika } from "@/components/Metrika";
import { FBPixel } from "@/components/FBPixel";
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
    <html lang="ru" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className={`${inter.className}`}>
        <Suspense fallback={null}>
          <Metrika />
          <FBPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
