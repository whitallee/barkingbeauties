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

export default function GalleryItem({src, altTxt}: {src: string, altTxt: string}) {
    return (
        <motion.div className="shadow rounded-lg overflow-hidden w-fit sm:max-w-[640px]" whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">
          <Image className="" loading="lazy" src={src} alt={altTxt} width={2048} height={1536}/>
        </motion.div>
    )
}