import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";
import Header from "@/componenets/Header";
import Footer from "@/componenets/Footer";


export const metadata: Metadata = {
  title: "EJ",
  description: "Docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${GeistSans.className}`}>
      
      <body
        className={`antialiased flex flex-col w-full max-w-screen-xl mx-auto font-medium`}
      >
        <Header />
        
        <main className="flex-auto grow bg-sky">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
