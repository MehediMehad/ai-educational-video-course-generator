import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Educational Video Course Generator",
  description:
    "An AI-powered platform that generates structured educational video courses, lesson outlines, and learning content automatically, helping educators and learners create high-quality courses faster and more efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
