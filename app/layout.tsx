import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({weight: "500", style: "normal", subsets: ['latin']});

export const metadata: Metadata = {
  title: "Barking Beauties",
  description: "Dog Grooming and Boutique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className + " overflow-x-hidden"}>
        <Navbar></Navbar>
        <main className="w-svw px-4 sm:px-16 flex flex-col items-center overflow-hidden">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
