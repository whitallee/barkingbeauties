'use client'

import { motion } from "framer-motion"
import Image from "next/image"

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
            <p className="text-center max-w-xl">Our salon specializes in skin and coat health, doodles, and cats, but we can do so much more!</p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
                <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Full Service Bath and Nails</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Teeth Brushing</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Head to Toe Haircuts</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Walk-in Services available upon request</motion.li>
            </ul>
            {/* <motion.div custom={1} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-ear-cleaning-64.png" alt="Dog Cat Ear Cleaning Icon" width={64} height={64} /><span>Anti-Fungal<br/>Ear Cleaning</span></motion.div>
            <motion.div custom={2} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-nail-file-64.png" alt="Dog Cat Nail Trim File Icon" width={64} height={64} /><span>Nail Trimming<br/>and Filing</span></motion.div>
            <motion.div custom={3} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex gap-3 items-center"><Image className="w-12 h-12" src="/icons8-dispenser-64.png" alt="Dog Cat Shampoo Icon" width={64} height={64} /><span>Clarifying Shampoo<br/>and Conditioner</span></motion.div> */}
        </section>
    )
}