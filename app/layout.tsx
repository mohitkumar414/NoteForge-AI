import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"; // 1. Import this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteForge AI",
  description: "AI-powered study companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. Wrap children in SessionProvider */}
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}