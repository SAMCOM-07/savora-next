import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "@/_designSystem/ds-6551b66a-cfd3-4df9-a9b1-9ead8d7fe7e9/index.css";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://savora-next.vercel.app'),
  title: {
    default: 'Savora | Fine Dining Restaurant',
    template: '%s | Savora',
  },
  description:
    'An elegant fine dining experience with seasonal menus, immersive ambiance, and exceptional hospitality.',
  keywords: ['restaurant', 'fine dining', 'savora', 'New York dining', 'chef tasting menu'],
  authors: [{ name: 'Savora' }],
  creator: 'Savora',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Savora | Fine Dining Restaurant',
    description: 'An elegant fine dining experience with seasonal menus, immersive ambiance, and exceptional hospitality.',
    type: 'website',
    locale: 'en_US',
    url: 'https://savora-next.vercel.app',
    siteName: 'Savora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savora | Fine Dining Restaurant',
    description: 'An elegant fine dining experience with seasonal menus, immersive ambiance, and exceptional hospitality.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-ink text-cream antialiased">
        <div className="min-h-screen w-full overflow-x-hidden bg-ink text-cream">
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
