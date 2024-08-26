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

export default function BookNow() {
    return (
        <motion.section custom={0} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex justify-center items-center pt-3 pb-8">
            <Link className="text-4xl bg-white p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Now</Link>
        </motion.section>
    )
}