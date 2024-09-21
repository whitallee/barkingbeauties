import Link from "next/link";

export default function Footer(){
    return (
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 sm:px-20 py-4">
        <div>
          <h3>Address</h3>
          <div className="bg-purple-900 w-full h-[2px]"></div>
          <div className="flex flex-col text-lg">
            <span>9415 Burnet Road</span>
            <span>Suite 101</span>
            <span>Austin, TX 78758</span>
          </div>
        </div>
        <div>
          <h3>Hours</h3>
          <div className="bg-purple-900 w-full h-[2px]"></div>
          <div className="flex flex-col text-lg">
            <span>Sun | 8:30AM-3:00PM</span>
            <span>Mon | Closed</span>
            <span>Tue | 8:30AM-3:00PM</span>
            <span>Wed | Closed</span>
            <span>Thu | 8:30AM-3:00PM</span>
            <span>Fri | Closed</span>
            <span>Sat | 8:30AM-3:00PM</span>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="bg-purple-900 w-full h-[2px]"></div>
          <div className="flex flex-col text-lg">
            <span>737-239-5747</span>
            <span className="flex flex-row md:flex-col lg:flex-row">barkingbeautiesps@<span>gmail.com</span></span>
          </div>
        </div>
        <div>
          <h3>Common Links</h3>
          <div className="bg-purple-900 w-full h-[2px]"></div>
          <div className="flex flex-col text-lg">
            {/* <Link className="hover:scale-110 transition-all" href={"https://barkingbeautiesps.portal.gingrapp.com/#/public/login"}>Online Booking Portal</Link> */}
            <Link className="hover:scale-110 transition-all" href={"https://booking.moego.pet/ol/BarkingBeautiesPetSalon/book?utm_medium=embed"} target="_blank">Online Booking Portal</Link>
            <Link className="hover:scale-110 transition-all" href={"/"}>Home Webpage</Link>
            <Link className="hover:scale-110 transition-all" href={"/pricing"}>Pricing Webpage</Link>
            <Link className="hover:scale-110 transition-all" href={"/our-process"}>Our Process Webpage</Link>
            <Link className="hover:scale-110 transition-all" href={"/ask-a-groomer"}>Contact Our Groomer</Link>
            <Link className="hover:scale-110 transition-all" href={"https://www.google.com/maps/dir//30.3778115,-97.7248951/@30.3769258,-97.7294504,17.22z/data=!4m2!4m1!3e0?entry=ttu"}>Google Maps Directions</Link>
            <Link className="hover:scale-110 transition-all" href={"https://maps.apple.com/?address=9415%20Burnet%20Rd,%20Suite%20101,%20Austin,%20TX%20%2078758,%20United%20States&ll=30.377938,-97.724759&q=9415%20Burnet%20Rd,%20Ste%20100&t=m"}>Apple Maps Directions</Link>
          </div>
        </div>
        {/* <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
            &q=Space+Needle,Seattle+WA">
        </iframe> */}
      </footer>
    )
}