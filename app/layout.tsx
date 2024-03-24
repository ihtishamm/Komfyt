import type { Metadata } from "next";
import "./globals.css";
import Header from "./_Sections/Navbar";

import { Footer } from "./_Sections/Footer.tsx";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Komfyt",
  description: "Komfyt is Ecommerce Shoe store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
