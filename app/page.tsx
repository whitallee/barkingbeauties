import AboutUs from "@/components/AboutUs";
import Boutique from "@/components/Boutique";
import EventsCalendar from "@/components/EventsCalendar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Welcome from "@/components/Welcome";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Welcome/>
      <Services/>
      <Testimonials/>
      <Boutique/>
      <EventsCalendar/>
      <AboutUs/>
    </div>
  );
}
