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
      <body className={ubuntu.className + " overflow-x-hidden flex flex-col items-center bg-[var(--light-blue)]"}>
        <div className="bg-[length:800px_800px] bg-white bg-repeat flex flex-col items-center" style={{backgroundImage: 'url("vine_background_transparent.svg")'}}>
          <div className="flex flex-col items-center bg-white bg-opacity-0">
            {/* <div className="flex flex-col items-center bg-gradient-to-r from-transparent via-white to-transparent"> */}
            <div className="flex flex-col items-center" style={{background:"linear-gradient(to right, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.95) 80%, transparent 100%)"}}>
              <Navbar></Navbar>
              <main className="w-svw px-4 sm:px-16 flex flex-col items-center overflow-hidden max-w-[1024px]">
                {children}
              </main>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
