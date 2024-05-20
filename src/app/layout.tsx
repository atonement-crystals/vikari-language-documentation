import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import SideBar from "@/app/sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Vikari Language Documentation",
    default:"Language Feature"
  },
  description: "Learn the Vikari programming language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href='/' className='website-title-header'><h1>Vikari Language Documentation</h1></Link>
        <hr className='website-title-header'/>
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
