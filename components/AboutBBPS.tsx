import { motion } from "framer-motion";
import Image from "next/image";

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

export default function AboutBBPS() {
    return (
        // <section className="w-screen max-w-full bg-[url('/BBPS_Interior_GroomRoom.jpeg')] bg-cover bg-center p-4 sm:p-16 flex items-center justify-center min-h-[525px]">
        <section className="w-screen max-w-full flex flex-col items-center justify-center">
            <div className="overflow-hidden sm:my-8 sm:rounded-lg">
                <Image className="w-xl h-auto" loading="lazy" src={"/LisaBBMural.png"} height={340} width={579} alt="Lisa with a Poodle"/>
            </div>
            <div className="w-full px-4 py-8 bg-[url('/BBPS_Interior_GroomRoom.jpeg')] bg-cover bg-center">
                <motion.div className="flex items-center justify-center" whileInView="animate" viewport={{once:true,}} custom={1} variants={fadeInAnimationVariants} initial="initial">
                    <p className="bg-[rgba(218,214,246,0.85)] text-xl p-4 max-w-[50ch] rounded-lg">Barking Beauties is owned and operated by experienced professional groomers. We pride ourselves on delivering top-tier grooming services for both cats and dogs. Our team ensures that each pet receives a personalized grooming experience tailored to their unique needs and temperament. We maintain a standard of high-quality and compassionate services for our clients.  Our salon is designed to be a stress-free and enjoyable environment for pets and staff, fostering a sense of well-being and mutual trust. We value our clients and believe in fair pricing and transparency about our grooming process.</p>
                </motion.div>
            </div>
        </section>
    )
}