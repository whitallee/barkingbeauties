"use client"

import { motion } from "framer-motion"
import Image from "next/image";
// import { Inter } from "next/font/google";
// import localFont from 'next/font/local'
import Link from "next/link";
import TitleSection from "@/components/TitleSection";
import BookNow from "@/components/BookNow";
import ServicesSumary from "@/components/ServicesSummary";
import AboutBBPS from "@/components/AboutBBPS";
import GalleryItem from "@/components/GalleryItem";
import Hours from "@/components/Hours";

// const inter = Inter({ subsets: ["latin"] });

// const greatVibes = localFont({
//   src: './GreatVibes-Regular.ttf',
//   display: 'swap'
// })

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3 * index
    }
  })
}

// add these attributes to anything below the fold
// whileInView="animate" viewport={{once:true,}}

export default function Home() {

  return (
    <main className="min-h-screen overflow-hidden">
      {/* <Image className="absolute top-0 left-0 scale-[0.4] origin-top-left" src={"/VineCorner.png"} width={500} height={500} alt="Decorative Vine for Barking Beauties Pet Salon Aesthetic"/> */}

      <TitleSection/>

      <BookNow/>

      <Hours/>

      <ServicesSumary/>

      <div className="flex flex-col justify-center items-center p-6 text-2xl bg-[#351D48]/ gap-4">
        <span className="font-semibold">Questions?</span>
        <Link className="bg-white p-2 rounded-lg hover:scale-110 transition-all font-semibold button-glow" href="/ask-a-groomer">Ask a groomer!</Link>
      </div>

      <AboutBBPS/>

      <section className="h-[700px] p-4 flex justify-center items-center">
        <iframe className="max-w-[640px] rounded-xl" src="https://booking.moego.pet/ol/BarkingBeautiesPetSalon/book?utm_medium=embed" width="100%" height="100%" frameBorder="0" title="Online booking" scrolling="no" ></iframe>
      </section>

      <section className="w-screen max-w-full grid grid-cols-1 gap-3 place-items-center px-4">
        <GalleryItem src="/FrontDesk.JPEG" altTxt="Front Desk of Barking Beauties Pet Salon, Spa, Grooming"/>
        <GalleryItem src="/PoodleCutoutLightPurple.png" altTxt="Poodle dog after a proffessional groom"/>
        <GalleryItem src="/GroomRoom.JPEG" altTxt="Grooming Room for professional dog and cat grooming, haircuts"/>
        <GalleryItem src="/LittleDogCutoutLightPurple.png" altTxt="Pomeranian dog after a proffessional groom"/>
        <GalleryItem src="/BathTubs.JPEG" altTxt="Bathing tubs for our proffessional dog and cat bathers and groomers"/>
      </section>

      <BookNow/>

      {/* <section className="pt-16">
        <div className="overflow-hidden flex justify-center text-nowrap bg-[#e5d896] rotate-6 lg:rotate-3 scale-[120%]">
          CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION
        </div>
        <div className="bg-[#ece6b6] text-nowrap overflow-hidden w-screen flex justify-center -rotate-6 lg:-rotate-3 -translate-y-6 lg:-translate-y-6 scale-[120%]">
          WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION
        </div>
      </section> */}

      <div className="w-screen max-w-full footer-shadow"></div>
    </main>
  );
}
