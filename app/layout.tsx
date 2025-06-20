import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  applicationName: "Abu Muhammad Movers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      follow: true,
      index: true,
    },
    index: true,
  },

  twitter: {
    card: "summary_large_image",
    creator: "Abu Muhammad Movers",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Toaster position="bottom-center" /> <Footer />
      </body>
      <GoogleAnalytics />
    </html>
  );
}
