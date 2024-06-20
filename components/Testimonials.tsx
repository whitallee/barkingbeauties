import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { QuoteIcon } from "lucide-react";

function TestimonialItem({speakerName, quote}: {speakerName: string, quote: string}){
    return(
        <CarouselItem className="basis-[80%] sm:basis-[50%] md:basis-[40%] xl:basis-[25%] ml-4 flex flex-col justify-between shadow-lg p-4 sm:p-8 gap-1 sm:gap-4 border-[5px] rounded-xl border-[var(--neutral-green)] bg-white">
            <QuoteIcon className="text-[var(--light-blue)] fill-[var(--light-blue)] scale-150"/>
            <span className="indent-8 italic">{quote}</span>
            <div className="flex justify-between"><span className="tracking-tighter text-sm sm:text-md">⭐⭐⭐⭐⭐</span><span className="font-bold text-right text-sm sm:text-md">{speakerName.toUpperCase()}</span></div>
        </CarouselItem>
    )
}

export default function Testimonials(){
    return(
        <>
            <div id="testimonials" className="w-full flex flex-col items-center">
                <h2 className="text-4xl pb-8 text-center">What others think...</h2>
                {/* className="shadow-[0_0_5px_10px_rgba(0,0,0,0.5)]" this is for trying to fade the carousel edges */}
                <Carousel className="bg-[var(--light-pink)] rounded-xl drop-shadow-xl max-w-full shadow-inner" opts={{loop: true}}>
                    <CarouselContent className="my-8 -ml-px">
                        <TestimonialItem speakerName="Amanda T." quote="I can't say enough good things about Lisa and Haley! Lisa is an incredible groomer who always knows exactly how to make my Shih Tzu, Bella, look her best. Haley, the bather, is so gentle and kind. Bella usually hates bath time, but with Haley, she actually enjoys it. They both make every visit a pleasure" />
                        <TestimonialItem speakerName="Susan L." quote="Haley is wonderful with my Beagle, Daisy. Bath time used to be a nightmare, but Haley makes it a breeze. Daisy always comes out clean, happy, and smelling fantastic. Haley's gentle and caring approach has made all the difference." />
                        <TestimonialItem speakerName="Rachel M." quote="Lisa is simply amazing! She has been grooming my Pomeranian, Lulu, for over a year now, and every time, she looks absolutely perfect. Lisa's attention to detail and skill are unmatched. I wouldn't trust anyone else with Lulu's grooming needs." />
                        <TestimonialItem speakerName="Sarah P." quote="My Bulldog, Rocky, can be a handful, but Lisa and Haley handle him with ease and professionalism. Lisa's grooming is always impeccable, and Haley's baths leave Rocky feeling fresh and clean. Their friendly and caring approach makes all the difference. We love them!" />
                        <TestimonialItem speakerName="Tom H." quote="I am so grateful for Haley's exceptional bathing skills. My German Shepherd, Rex, has sensitive skin, and Haley knows exactly how to handle it. Rex loves her, and I love how fresh and clean he smells after every bath. Haley is the best!" />
                        <TestimonialItem speakerName="Maria S." quote="From the moment I met Lisa, I knew my dog was in good hands. She has a gentle touch and a keen eye for detail. My Sheltie, Bella, always looks stunning after a session with Lisa. I can't recommend her enough!" />
                        {/* Brock's and Dafina's are real */}
                        {/* <TestimonialItem speakerName="Brock A." quote="I have a 80 pound pitbull and they cut his nails perfectly.  Most places I take him to will do a lackluster job cutting his nails and will do the bare minimum so that they can hurry and get him out of the door. He is stubborn and moves a lot. They were patient with him and got the job done in 10min. Thank you" /> */}
                        {/* <TestimonialItem speakerName="Dafina N." quote="Where do I begin! The staff was so friendly,  knowledgeable and helpful with all my dogs needs. They even helped me clean my Sadie&apos;s ears since I never did it before. They were so good with my dog and my dog was very relaxed that she was even falling asleep during the process!" /> */}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
};