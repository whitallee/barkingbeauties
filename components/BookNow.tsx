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
            {/* <Link className="text-4xl bg-white p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Now</Link> */}
            <div className="text-4xl bg-white p-4 rounded-lg button-glow hover:scale-105 flex flex-col items-center justify-center text-center overflow-hidden">
              <h3>Book Now</h3>
              <Link className="text-sm sm:text-2xl" href={"tel:7372395747"}>By Phone: 737-239-5747</Link>
              <Link className="text-sm sm:text-2xl" href={"mailto:barkingbeautiesps@gmail.com"}>By Email: barkingbeautiesps@gmail.com</Link>
            </div>
        </motion.section>
    )
}