'use client'

import { motion } from "framer-motion"
import Link from "next/link"

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

export default function ServicesSumary() {
    return (
        <section className="w-screen max-w-full bg-[hsl(246,61%,94%)] flex flex-col gap-6 justify-center items-center text-xl py-6 px-6 lg:px-20">
            <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-around items-center gap-6 max-w-[720px]">
              <p className="text-center sm:max-w-xs">Our salon specializes in skin and coat health, doodles, and cats, but we can do so much more!</p>
              <ul className="list-disc pl-6 flex flex-col gap-3">
                  <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Full Service Bath and Nails</motion.li>
                  <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Teeth Brushing</motion.li>
                  <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Head to Toe Haircuts</motion.li>
                  <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Walk-in Services available upon request</motion.li>
              </ul>
            </div>
            <Link href="/our-process" className="bg-[#351D48] text-white text-2xl p-2 rounded-lg shadow-md hover:scale-110 transition-all text-center">Learn About Our Process</Link>

            {/* CONTINUE HERE */}
        </section>
    )
}