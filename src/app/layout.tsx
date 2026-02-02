import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BauDein - Baue Apps mit KI",
  description: "Programmierst du noch oder baust du schon? Lerne, wie du mit KI-Tools wie Cursor und Claude echte Software erschaffst. Keine jahrelange Erfahrung nötig.",
  keywords: ["AI Coding", "Vibe Coding", "Cursor", "Claude", "App entwickeln", "Programmieren lernen", "KI Tools"],
  authors: [{ name: "BauDein" }],
  openGraph: {
    title: "BauDein - Baue Apps mit KI",
    description: "Baue deine eigene App. In einem Wochenende. Mit KI-Tools wie Cursor und Claude.",
    url: "https://baudein.de",
    siteName: "BauDein",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BauDein - Baue Apps mit KI",
    description: "Baue deine eigene App. In einem Wochenende.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased text-slate-100 bg-brand-void`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
