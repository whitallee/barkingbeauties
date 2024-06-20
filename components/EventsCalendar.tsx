//import { Calendar } from "@/components/ui/calendar"
//import { useState } from "react";
import Image from "next/image";

export default function EventsCalendar(){
    // const [date, setDate] = useState<Date | undefined>(new Date())

    // return(
    //     <>
    //         <div id="events-calendar" className="w-full flex flex-col items-center">
    //             <h2 className="text-4xl pb-8 text-center">Events</h2>
    //             <Calendar
    //                 mode="single"
    //                 selected={date}
    //                 onSelect={setDate}
    //                 className="rounded-md border"
    //             />
    //         </div>
    //     </>
    // );
    return(
        <>
            <div id="events-calendar" className="w-full flex flex-col items-center">
                <h2 className="text-4xl text-center">Upcoming Events</h2>
                <Image src="/june_calendar.png" alt="event calendar" width={600} height={450} className="w-full md:w-2/3" />
            </div>
        </>
    );
};