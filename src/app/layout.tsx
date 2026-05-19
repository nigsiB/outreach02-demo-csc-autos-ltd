import type { Metadata } from "next";
import Link from "next/link";
import { Oswald, Open_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const head = Oswald({ subsets: ["latin"], variable: "--font-head" });
const font = Open_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "CSC AUTOS LTD | Cranleigh", template: "%s" },
  description: "MOT & tyres demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${head.variable} ${font.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-black text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">CSC AUTOS</Link>
            <nav className="flex gap-5 text-sm"><a href="tel:01483200003" className="text-red-500 font-bold">Call</a><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
