import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clawd | Developer Portfolio",
  description: "A visually stunning, interactive portfolio built with Next.js & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white min-h-screen flex flex-col relative`}
      >
        <div className="fixed inset-0 z-[-1] bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none">
           <div className="w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 absolute top-[-100px] left-[-200px]"></div>
           <div className="w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 absolute bottom-[-100px] right-[-100px]"></div>
        </div>
        <Navbar />
        <main className="flex-grow z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
