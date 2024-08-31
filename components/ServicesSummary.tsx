'use client'

import { motion } from "framer-motion"

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
        <section className="w-screen max-w-full bg-[hsl(246,61%,94%)] flex flex-col sm:flex-row gap-6 justify-center sm:justify-around items-center text-xl py-6 px-6 lg:px-20">
            <p className="text-center sm:max-w-xs">Our salon specializes in skin and coat health, doodles, and cats, but we can do so much more!</p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
                <motion.li whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">Full Service Bath and Nails</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={2} variants={fadeInAnimationVariants} initial="initial">Teeth Brushing</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={3} variants={fadeInAnimationVariants} initial="initial">Head to Toe Haircuts</motion.li>
                <motion.li whileInView="animate" viewport={{once:true,}} custom={4} variants={fadeInAnimationVariants} initial="initial">Walk-in Services available upon request</motion.li>
            </ul>
        </section>
    )
}