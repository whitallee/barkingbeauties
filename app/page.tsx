import AboutUs from "@/components/AboutUs";
import Boutique from "@/components/Boutique";
import EventsCalendar from "@/components/EventsCalendar";
import OperatingHours from "@/components/OperatingHours";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Welcome from "@/components/Welcome";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-full">
      <Welcome/>
      <Services/>
      <AboutUs/>
      <Testimonials/>
      <Boutique/>
      <EventsCalendar/>
      <OperatingHours/>
    </div>
  );
}
