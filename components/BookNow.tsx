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
        <motion.section whileInView="animate" viewport={{once:true,}} custom={0} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex justify-center items-center py-8">
            <div className="text-4xl bg-white p-4 rounded-lg button-glow hover:scale-105 flex flex-col gap-2 items-center justify-center text-center overflow-hidden">
              <h3>Book Now</h3>
              <Link className="p-2 rounded-lg bg-[#351D48] text-white text-sm sm:text-2xl w-full text-nowrap" href={"https://booking.moego.pet/ol/BarkingBeautiesPetSalon/book?utm_medium=embed"} target="_blank">Online</Link>
              <Link className="p-2 rounded-lg bg-[#351D48] text-white text-sm sm:text-2xl w-full text-nowrap" href={"tel:7372395747"}>737-239-5747</Link>
              <Link className="p-2 rounded-lg bg-[#351D48] text-white text-sm sm:text-2xl w-full text-nowrap" href={"mailto:barkingbeautiesps@gmail.com"}>barkingbeautiesps@gmail.com</Link>
            </div>
        </motion.section>
    )
}