import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, HeaderNavigation, NavbarTop } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PHONE.MA",
  description: "Generated by IKI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
