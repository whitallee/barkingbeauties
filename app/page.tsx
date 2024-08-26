"use client"

import { motion } from "framer-motion"
import Image from "next/image";
// import { Inter } from "next/font/google";
// import localFont from 'next/font/local'
import Link from "next/link";
import TitleSection from "@/components/TitleSection";
import BookNow from "@/components/BookNow";
import ServicesSumary from "@/components/ServicesSummary";

// const inter = Inter({ subsets: ["latin"] });

// const greatVibes = localFont({
//   src: './GreatVibes-Regular.ttf',
//   display: 'swap'
// })

export const fadeInAnimationVariants = {
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
    <main className="min-h-screen text-[#351D48] overflow-hidden">
      <TitleSection/>

      <BookNow/>

      <ServicesSumary/>

      <section className="w-screen max-w-full bg-[url('/BBPS_Interior_GroomRoom.jpeg')] bg-cover bg-center p-4 sm:p-16 flex items-center justify-center min-h-[525px]">
          <motion.div custom={4} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex flex-col-reverse sm:flex-row items-center justify-center max-[950px]:gap-2">
            <Image loading="eager" src={"/LisaAndPoodle.jpeg"} height={772} width={579} alt="Lisa with a Poodle" className="w-64 rounded-lg"/>
            <p className="bg-[rgba(243,232,255,0.85)] text-xl xl:text-2xl p-4 max-w-[64ch] rounded-r-lg max-[950px]:rounded-l-lg">Barking Beauties is owned and operated by experienced professional groomers. We pride ourselves on delivering top-tier grooming services for both cats and dogs. Our team ensures that each pet receives a personalized grooming experience tailored to their unique needs and temperament. We maintain a standard of high-quality and compassionate services for our clients.  Our salon is designed to be a stress-free and enjoyable environment for pets and staff, fostering a sense of well-being and mutual trust. We value our clients and believe in fair pricing and transparency about our grooming process.</p>
          </motion.div>
      </section>

      <section className="flex justify-center items-center py-16">
        <Link className="text-4xl text-black bg-white p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Now</Link>
      </section>

      <section className="w-screen max-w-full flex flex-col items-center justify-center">
        <motion.div whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial"><Image className="w-64 sm:w-96 rounded-lg scale-110 translate-x-2 sm:translate-x-24" loading="lazy" src={"/FrontDesk.JPEG"} alt="Front Desk of Barking Beauties Pet Salon, Spa, Grooming" width={2048} height={1536}/></motion.div>
        <motion.div whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial"><Image className="w-64 sm:w-96 rounded-lg scale-110 -translate-x-2 sm:-translate-x-24" loading="lazy" src={"/PinkDog.jpg"} alt="Poodle dog after a proffessional groom" width={981} height={1304}/></motion.div>
        <motion.div whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial"><Image className="w-64 sm:w-96 rounded-lg scale-110 translate-x-2 sm:translate-x-24" loading="lazy" src={"/GroomRoom.JPEG"} alt="Grooming Room for professional dog and cat grooming, haircuts" width={2048} height={1536}/></motion.div>
        <motion.div whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial"><Image className="w-64 sm:w-96 rounded-lg scale-110 -translate-x-2 sm:-translate-x-24" loading="lazy" src={"/BlueDog.jpg"} alt="Pomeranian dog after a proffessional groom" width={926} height={1234}/></motion.div>
        <motion.div whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial"><Image className="w-64 sm:w-96 rounded-lg scale-110 translate-x-2 sm:translate-x-24" loading="lazy" src={"/BathTubs.JPEG"} alt="Bathing tubs for our proffessional dog and cat bathers and groomers" width={2048} height={1536}/></motion.div>
      </section>

      <section className="pt-16">
        <div className="overflow-hidden flex justify-center text-nowrap bg-yellow-600 rotate-6 lg:rotate-3 scale-[120%]">
          CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION /// CAUTION
        </div>
        <div className="bg-yellow-500 text-nowrap overflow-hidden w-screen flex justify-center -rotate-6 lg:-rotate-3 -translate-y-6 lg:-translate-y-6 scale-[120%]">
          WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION /// WEBSITE STILL UNDER CONSTRUCTION
        </div>
      </section>

      <div className="w-screen max-w-full footer-shadow"></div>
    </main>
  );
}
