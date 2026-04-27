import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { PageShell } from "@/components/layout/page-shell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://requirements-navigator.example.com"),
  title: {
    default: "Requirements Navigator",
    template: "%s | Requirements Navigator",
  },
  description:
    "Practical checklists for documents, steps, fees, mistakes, tips, and trusted sources for real-life processes.",
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
      <body className="flex min-h-full flex-col">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
