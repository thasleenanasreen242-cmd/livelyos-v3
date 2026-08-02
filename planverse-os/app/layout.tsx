import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://planverseos.com"),
  title: {
    default: "PlanVerse OS | Premium Planner & Productivity Platform",
    template: "%s | PlanVerse OS",
  },
  description:
    "PlanVerse OS is an all-in-one productivity platform to manage tasks, finances, calendars, notes, goals, habits and daily planning.",
manifest: "/manifest.json",
  keywords: [
    "planner",
    "productivity",
    "task manager",
    "calendar",
    "finance tracker",
    "habit tracker",
    "goal planner",
    "daily planner",
    "expense tracker",
    "notes app",
  ],

  authors: [{ name: "PlanVerse OS" }],
  creator: "PlanVerse OS",
  publisher: "PlanVerse OS",

  openGraph: {
    title: "PlanVerse OS",
    description:
      "Premium productivity platform for planning every aspect of life.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PlanVerse OS",
    description:
      "Premium productivity platform for planning every aspect of life.",
      
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0D0D0D] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}