'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinkMenu () {
    const currentPath = usePathname()
    return (
        <div className="flex justify-center gap-4 sm:gap-12 text-xl text-nowrap">
          <Link className={currentPath === "/" ? "opacity-50 cursor-default" : ""} aria-disabled={currentPath ==="/"} href={"/"}>Home</Link>
          <Link className="animate-bounce hover:animate-none transition-all" href={"https://barkingbeautiesps.portal.gingrapp.com/#/public/login"} target="_blank">Book Online</Link>
          {/* <Link href={"/"}>Our Method</Link> */}
          {/* <Link href={"/"} className="hidden sm:block">Contact</Link> */}
        </div>
    )
}