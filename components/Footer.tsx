import { Instagram } from "lucide-react";

export default function Footer(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 bg-black text-white px-4 sm:px-16 py-8 mt-8 w-svw">
            <div className="flex flex-col gap-3">
                <h3>Book an Appointment</h3>
                <div className="w-full h-1 rounded-full bg-[var(--neutral-green)]"></div>
                <span>Call us at <a href="tel:+17372917418" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">+1 (737) 291-7418</a></span>
                <span>Or book online through <br className="min-[370px]:hidden"/>our <a href="" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">Booking Portal</a></span>
            </div>
            <div className="flex flex-col gap-3">
                <h3>Check us out on Social Media</h3>
                <div className="w-full h-1 rounded-full bg-[var(--neutral-green)]"></div>
                <a href="https://www.instagram.com/groomsbylisa_atx/" className="text-[var(--light-pink)] underline flex gap-2 justify-start text-left hover:text-[var(--light-blue)] hover:scale-105 transition-all"><Instagram className="w-6 h-6 min-w-6"/>@groomsbylisa_atx</a>
                <a href="https://www.instagram.com/_haleyalexis/" className="text-[var(--light-pink)] underline flex gap-2 justify-start text-left hover:text-[var(--light-blue)] hover:scale-105 transition-all"><Instagram className="w-6 h-6 min-w-6"/>@_haleyalexis</a>
            </div>
            <div className="flex flex-col gap-3">
                <h3>Common Links</h3>
                <div className="w-full h-1 rounded-full bg-[var(--neutral-green)]"></div>
                <a href="/" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">Welcome Page</a>
                <a href="" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">Booking Portal</a>
                <a href="/staff" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">Meet the Staff</a>
                <a href="/faq" className="text-[var(--light-pink)] underline hover:text-[var(--light-blue)] hover:scale-105 transition-all">FAQ</a>
            </div>
        </div>
    )
}