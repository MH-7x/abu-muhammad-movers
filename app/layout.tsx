import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

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
  openGraph: {
    siteName: "Abu Muhammad Movers",
    phoneNumbers: ["+971 55 6461731", "+971 56 7878464"],
    emails: "abumuhammad.movers@gmail.com",
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
    </html>
  );
}
