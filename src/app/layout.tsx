import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Quizrooms",
  description: "The next level of quizzes. Hosted with Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <p>Menu</p>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/host">Host</Link></p>
        </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
