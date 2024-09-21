'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinkMenu () {
    const currentPath = usePathname()
    return (
        <div className="flex justify-center gap-2 min-[350px]:gap-4 sm:gap-12 text-lg sm:text-xl text-nowrap tracking-tighter sm:tracking-normal">
          <Link className="" href="https://booking.moego.pet/ol/BarkingBeautiesPetSalon/book?utm_medium=embed" target="_blank">Book Now</Link>
          <Link className={currentPath === "/" ? "opacity-50 cursor-default" : ""} aria-disabled={currentPath ==="/"} href={"/"}>Home</Link>
          <Link className={currentPath === "/pricing" ? "opacity-50 cursor-default" : ""} aria-disabled={currentPath ==="/pricing"} href="/pricing">Pricing</Link>
          <Link className={currentPath === "/our-process" ? "opacity-50 cursor-default" : ""} aria-disabled={currentPath ==="/our-process"} href="/our-process">Our Process</Link>
        </div>
    )
}