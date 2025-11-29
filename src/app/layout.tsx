import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Gabriela Birger | Psicanalista',
    template: '%s | Gabriela Birger'
  },
  description: 'Psicanalista, filósofa e idealizadora do com.verso. Atendimento clínico em São Paulo e online. Reflexões sobre psicanálise, filosofia e cultura contemporânea.',
  keywords: ['psicanálise', 'com.verso', 'Gabriela Birger', 'psicanalista São Paulo', 'filosofia', 'podcast psicanálise'],
  authors: [{ name: 'Gabriela Birger' }],
  creator: 'Gabriela Birger',
  metadataBase: new URL('https://gabrielabirger.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gabrielabirger.com.br',
    siteName: 'Gabriela Birger',
    title: 'Gabriela Birger | Psicanalista',
    description: 'Psicanalista, filósofa e idealizadora do com.verso. Psicanálise, filosofia e cultura contemporânea.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriela Birger - Psicanalista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriela Birger | Psicanalista',
    description: 'Psicanalista, filósofa e idealizadora do com.verso.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning={true} className="bg-creme text-preto antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}