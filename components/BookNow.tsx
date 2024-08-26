'use client'

import { fadeInAnimationVariants } from "@/app/page"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BookNow() {
    return (
        <motion.section custom={0} variants={fadeInAnimationVariants} initial="initial" animate="animate" className="flex justify-center items-center pt-3 pb-8">
            <Link className="text-4xl bg-white p-4 rounded-lg button-glow hover:scale-125" href="https://barkingbeautiesps.portal.gingrapp.com/#/public/login" target="_blank">Book Now</Link>
        </motion.section>
    )
}