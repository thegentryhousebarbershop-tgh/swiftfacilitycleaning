import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

const openSans = Open_Sans({
  variable: "--font-open-sans-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Swift Facility Cleaning | Commercial Cleaning Services in Missouri",
    template: "%s | Swift Facility Cleaning",
  },
  description:
    "Reliable commercial cleaning, janitorial, office, medical, and floor care services for Missouri businesses. Request a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
