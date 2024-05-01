import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  /** Put your mantine theme override here */
});

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
        <MantineProvider>
        {children}
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
