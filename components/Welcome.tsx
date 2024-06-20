import { Button } from "./ui/button";
import Image from "next/image";

export default function Welcome(){
    return(
        <div className="grid grid-rows-1 grid-cols-1 justify-center rounded-xl overflow-hidden border-[5px] border-[var(--light-pink)] drop-shadow-2xl">
            <Image alt="Photo by Gustavo Fring: https://www.pexels.com/photo/a-woman-grooming-a-dog-6816866/" fetchPriority="high" src="/dog_groom_1.jpg" width={900} height={600} className="width-[100%] object-cover row-start-1 col-start-1"/>
            <div id="call-to-action-and-logo" className="row-start-1 col-start-1">
                <Image src="/BBPS_logo.PNG" alt="Dog getting groomed" fetchPriority="high" width={360} height={288} className="w-[40%] object-coverrounded-2xl" />
                <Button className="border-2 border-[var(--light-blue)] ml-[2%] drop-shadow-xl">Book Now</Button>
            </div>
        </div>
    )
}