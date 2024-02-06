import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Barlow } from "next/font/google";

import HeaderNav from "@/app/_components/header-nav";

import "./globals.css";

const inter = Barlow({ subsets: ["latin"], weight: ["200", "300", "400", "500"] });

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
      <body className={twMerge(inter.className, "bg-grey-dark text-light-300")}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
