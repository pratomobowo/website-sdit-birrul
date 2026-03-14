import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SDIT Birrul Walidayn - Membentuk Generasi Qurani Berakhlak Mulia",
  description: "Sekolah Dasar Islam Terpadu Birrul Walidayn. Mendidik generasi qurani dengan kurikulum nasional dan keagamaan yang terintegrasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {/* Spacer to push content below fixed header */}
        <div className="h-[60px] lg:h-[113px]" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
