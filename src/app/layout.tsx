import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT KITA MUDA INOVATIF - Industri Barang Terpercaya di Indonesia",
  description: "Perusahaan terkemuka di bidang industri barang yang berkomitmen untuk memberikan produk berkualitas tinggi dan solusi inovatif untuk kebutuhan industri modern di Indonesia.",
  keywords: ["PT KITA MUDA INOVATIF", "industri barang", "manufaktur", "Depok", "Jawa Barat", "produksi", "inovasi", "kualitas"],
  authors: [{ name: "PT KITA MUDA INOVATIF" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT KITA MUDA INOVATIF - Industri Barang Terpercaya",
    description: "Inovasi untuk Masa Depan - Solusi industri barang berkualitas tinggi",
    url: "https://kitamudainovatif.com",
    siteName: "PT KITA MUDA INOVATIF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KITA MUDA INOVATIF",
    description: "Inovasi untuk Masa Depan - Solusi industri barang berkualitas tinggi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="ng9lrk76jiopa2u20c73vziswk9b1o" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
