import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/lib/Providers";
import Navber from "@/component/Ui/navber";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MHB Garden",
  description:
    " At MHB Garden, our mission is to empower gardening enthusiasts and professionals alike with expert gardening tips, seasonal advice, and plant care techniques. We aim to build a vibrant community where everyone can share their gardening knowledge and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#18191a]  text-white`}
      >
        <Providers>
          <Navber />

          {children}
        </Providers>
      </body>
    </html>
  );
}
