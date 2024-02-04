import type { Metadata } from "next";
import { Inter } from "next/font/google";

import HeaderNav from "@/app/_components/header-nav";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Across Protocol",
    default: "Across Protocol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
