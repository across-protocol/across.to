import { twMerge } from "@/app/_lib/tw-merge";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import { Footer } from "@/app/_components/footer";
import { HeaderNav } from "@/app/_components/header-nav";
import { Amplitude } from "@/app/_components/amplitude";

import "./globals.css";

const inter = Barlow({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

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
        <div>
          <HeaderNav />
          {children}
          <Footer />
        </div>
        <Amplitude />
      </body>
    </html>
  );
}
