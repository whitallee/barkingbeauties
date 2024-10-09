import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
// import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const monsterrat = Montserrat({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Barking Beauties",
  description: "Pet Salon, Spa, Grooming to treat your dog or cat: North Austin, Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monsterrat.className + " bg-[#DAD6F6] text-[#351D48]"}>
        <GoogleAnalytics />
        <NavMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
