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
  title: "Gabriela Birger - Psicanálise e com.verso",
  description: "Psicanalista e idealizadora do projeto com.verso. Espaço de reflexão, escuta e transformação.",
  keywords: ["psicanálise", "com.verso", "Gabriela Birger", "psicanalista", "podcast"],
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