import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function faqContent(faqContentArray: {question: string, answer: string, itemNum: number}[]){
        let faqArray = faqContentArray.map(faqItemObj => 
            <AccordionItem value={"item-" + faqItemObj.itemNum} key={"item-" + faqItemObj.itemNum}>
                <AccordionTrigger><strong className="text-left text-xl tracking-wide">{faqItemObj.question}</strong></AccordionTrigger>
                <AccordionContent className="text-lg">{faqItemObj.answer}</AccordionContent>
            </AccordionItem>
        )
    return(faqArray);
}  

export default function Faq(){
    return(
        <div className="flex flex-col gap-8 items-center w-full">
            <h1 className="text-4xl w-full text-center">Frequently Asked Questions</h1>
            <div className="border-[5px] border-[var(--light-pink)] rounded-2xl w-full drop-shadow-xl">
            <Accordion type="single" collapsible className="border-[5px] border-[var(--neutral-green)] rounded-xl p-4">
                {faqContent([
                        {
                            itemNum: 1,
                            question: "What services do you offer?",
                            answer: "We offer a wide range of grooming services including bathing, haircuts, nail trimming, ear cleaning, teeth brushing, and flea/tick treatments."
                        },
                        {
                            itemNum: 2,
                            question: "How often should I groom my dog?",
                            answer: "The frequency of grooming depends on your dog's breed, coat type, and lifestyle. Generally, dogs with longer hair should be groomed every 4-6 weeks, while short-haired breeds may need grooming as infrequently as every 8-12 weeks."
                        },
                        {
                            itemNum: 3,
                            question: "What products do you use?",
                            answer: "We use high-quality, pet-safe grooming products that are designed to be gentle on your dog's skin and coat. We also offer hypoallergenic options for dogs with sensitive skin."
                        },
                        {
                            itemNum: 4,
                            question: "Do you groom all breeds and sizes of dogs?",
                            answer: "Yes, we groom dogs of all breeds and sizes. Our team is experienced in handling everything from small toy breeds to large breeds."
                        },
                        {
                            itemNum: 5,
                            question: "How long does a grooming session take?",
                            answer: "The length of a grooming session can vary depending on the size and condition of your dog, as well as the specific services requested. Typically, grooming can take anywhere from 1 to 3 hours."
                        },
                        {
                            itemNum: 6,
                            question: "Can I stay with my dog during the grooming session?",
                            answer: "For the safety and comfort of both your pet and our groomers, we recommend that owners do not stay with their dogs during the grooming process. This helps reduce distractions and anxiety."
                        },
                        {
                            itemNum: 7,
                            question: "Do you offer any special packages or discounts?",
                            answer: "Yes, we offer various grooming packages and seasonal discounts. Please check our website or contact us for the latest offers."
                        },
                        {
                            itemNum: 8,
                            question: "What should I do to prepare my dog for grooming?",
                            answer: "Ensure your dog is well-exercised and has had a chance to relieve themselves before their appointment. If your dog has any special needs or medical conditions, please inform us in advance."
                        },
                        {
                            itemNum: 9,
                            question: "What if my dog has health issues or special needs?",
                            answer: "Please let us know about any health issues or special needs your dog may have so we can provide the best possible care. Our team is trained to handle dogs with various conditions, but it\'s important to inform us ahead of time."
                        },
                        {
                            itemNum: 10,
                            question: "What if my dog gets anxious or aggressive during grooming?",
                            answer: "Our groomers are trained to handle anxious or aggressive dogs with care and patience. If your dog has a history of aggressive behavior, please let us know in advance so we can take necessary precautions."
                        },
                        {
                            itemNum: 11,
                            question: "Do you require proof of vaccinations?",
                            answer: "Yes, for the safety of all pets and staff, we require proof of up-to-date vaccinations before grooming services can be provided."
                        },
                        {
                            itemNum: 12,
                            question: "Can I book a grooming appointment online?",
                            answer: "Yes, you can conveniently book your grooming appointment through our website. You can also call us directly to schedule an appointment."
                        },
                        {
                            itemNum: 13,
                            question: "What payment methods do you accept?",
                            answer: "We accept various payment methods including cash, credit/debit cards, and mobile payment options. Please check with us for specific details."
                        },
                        {
                            itemNum: 14,
                            question: "Do you offer mobile grooming services?",
                            answer: "No, but we are more than happy to find a time that works best for you to groom your dog. Please call us if you have any questions about scheduling."
                        },
                        {
                            itemNum: 15,
                            question: "What if I need to cancel or reschedule my appointment?",
                            answer: "We understand that plans can change. Please contact us at least 24 hours in advance if you need to cancel or reschedule your appointment to avoid any cancellation fees."
                        }
                    ])}
            </Accordion>
            </div>
        </div>
    )
}