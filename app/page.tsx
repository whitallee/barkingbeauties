"use client"

import { animate, motion } from "framer-motion"
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const greatVibes = localFont({
  src: './GreatVibes-Regular.ttf',
  display: 'swap'
})

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
    <main className="bg-purple-100 min-h-screen text-gray-700 overflow-hidden">
      <section className="w-screen max-w-full flex justify-center min-[500px]:justify-between items-center px-6 min-[900px]:px-20">
        <div className="flex flex-col items-center min-[500px]:items-start justify-center gap-4 pt-4">
          <h1  className={greatVibes.className + " text-5xl min-[1025px]:text-7xl min-[1165px]:text-8xl glow text-nowrap"}>Barking Beauties</h1>
          <h1 className={greatVibes.className + " text-5xl min-[1025px]:text-7xl min-[1165px]:text-8xl glow min-[500px]:indent-16"}>Pet Salon</h1>
          <Image loading="eager" src={"/BBPS_Logo_NoBorder.png"} alt="Barking Beauties Pet Salon Logo" width={150} height={150} className=" scale-115 min-[1025px]:scale-150 min-[500px]:hidden" />
          <h2 className="text-xl min-[1025px]:text-2xl min-[1165px]:text-3xl pb-4 text-nowrap min-[730px]:indent-4 min-[1025px]:indent-8 text-center min-[330px]:text-left">Elevate your pet<span className={inter.className}>&apos;</span>s<br className="min-[330px]:hidden"/> grooming experience</h2>
        </div>
        <Image loading="eager" src={"/BBPS_Logo_NoBorder.png"} alt="Barking Beauties Pet Salon Logo" width={150} height={150} className=" scale-115 min-[1025px]:scale-150 hidden min-[500px]:block" />
        <div className="hidden min-[700px]:flex flex-col items-end justify-center text-2xl min-[775px]:text-3xl text-nowrap">
          <span>9415 Burnet Road</span>
          <span>Suite 100</span>
          <span>Austin, TX 78758</span>
        </div>
      </section>
      <motion.section custom={0} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex justify-center items-center py-8">
        <Link className="text-4xl text-white bg-black p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Online Now</Link>
      </motion.section>
      <section className="w-screen max-w-full bg-[#a1bf6b] flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-20 py-4 md:py-8 text-xl md:text-2xl">
        <motion.div custom={1} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-ear-cleaning-64.png" alt="Dog Ear Cleaning Icon" width={64} height={64} /><span>Anti-Fungal<br/>Ear Cleaning</span></motion.div>
        <motion.div custom={2} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-nail-file-64.png" alt="Dog Ear Cleaning Icon" width={64} height={64} /><span>Nail Trimming<br/>and Filing</span></motion.div>
        <motion.div custom={3} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-dispenser-64.png" alt="Dog Ear Cleaning Icon" width={64} height={64} /><span>Clarifying Shampoo<br/>and Conditioner</span></motion.div>
      </section>
      <section className="w-screen max-w-full bg-[url('/BBPS_Interior_GroomRoom.jpeg')] bg-cover bg-center p-4 sm:p-16 flex items-center justify-center min-h-[525px]">
          <motion.div custom={4} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex flex-col-reverse sm:flex-row items-center justify-center max-[950px]:gap-2">
            <Image loading="eager" src={"/LisaAndPoodle.jpeg"} height={772} width={579} alt="Lisa with a Poodle" className="w-64 rounded-lg"/>
            <p className="bg-[rgba(243,232,255,0.85)] text-xl xl:text-2xl p-4 max-w-[64ch] rounded-r-lg max-[950px]:rounded-l-lg">Barking Beauties is owned and operated by experienced professional groomers. We pride ourselves on delivering top-tier grooming services for both cats and dogs. Our team ensures that each pet receives a personalized grooming experience tailored to their unique needs and temperament. We maintain a standard of high-quality and compassionate services for our clients.  Our salon is designed to be a stress-free and enjoyable environment for pets and staff, fostering a sense of well-being and mutual trust. We value our clients and believe in fair pricing and transparency about our grooming process.</p>
          </motion.div>
      </section>
      <section className="flex justify-center items-center py-16">
        <Link className="text-4xl text-white bg-black p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Online Now</Link>
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
