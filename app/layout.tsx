import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LinkMenu from "@/components/LinkMenu";
// import localFont from 'next/font/local'
import Link from "next/link";
import Footer from "@/components/Footer";

const monsterrat = Montserrat({subsets:["latin"]})

// const elaineKinandhita = localFont({
//   src: './elainekinandhita.regular.ttf',
//   display: 'swap'
// })

export const metadata: Metadata = {
  title: "Barking Beauties",
  description: "Pet Salon, Spa, Grooming to treat your dog or cat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monsterrat.className + " bg-[#bcb8da]"}>
        <nav className="w-screen max-w-full flex justify-center sm:justify-end items-center sm:px-20 pt-8 pb-2">
          <LinkMenu/>
        </nav>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
