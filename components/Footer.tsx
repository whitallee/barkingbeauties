import Link from "next/link";

export default function Footer(){
    return (
        <div>
            <footer className="grid grid-cols-1 md:grid-cols-3 gap-16 px-8 sm:px-20 py-4">
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
                  <Link className="hover:scale-110 transition-all" href={"/"}>Home Page</Link>
                  <Link className="hover:scale-110 transition-all" href={"/pricing"}>Pricing Page</Link>
                  <Link className="hover:scale-110 transition-all" href={"https://www.google.com/maps/dir//30.3778115,-97.7248951/@30.3769258,-97.7294504,17.22z/data=!4m2!4m1!3e0?entry=ttu"}>Google Maps Directions</Link>
                  <Link className="hover:scale-110 transition-all" href={"https://maps.apple.com/?address=9415%20Burnet%20Rd,%20Ste%20101,%20Austin,%20TX%20%2078758,%20United%20States&ll=30.377938,-97.724759&q=9415%20Burnet%20Rd,%20Ste%20100&t=m"}>Apple Maps Directions</Link>
                </div>
              </div>
            </footer>
        </div>
    )
}