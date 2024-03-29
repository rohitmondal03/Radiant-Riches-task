import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import "./globals.css";


// Font for website
const inter = Inter({ subsets: ["latin"] });


// Metadata for website
export const metadata: Metadata = {
  title: "Radiant Riches",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
