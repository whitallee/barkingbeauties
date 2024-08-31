import PriceSheetBySize from "@/components/PriceSheetBySize"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X } from "lucide-react"


export default function Pricing () {
    return (
        <main className="min-h-screen w-screen max-w-full flex flex-col gap-4 justify-start items-center pt-4 sm:px-1 px-2">
            <h1 className="text-4xl text-center px-1">Our Services and Prices</h1>



            <div className="flex gap-8 w-full flex-col items-center max-w-[650.54px]">
                <div className="rounded-lg bg-[#e7e7f9] p-4 w-fit">
                    <h2 className="text-2xl pb-2 font-bold">Sizing Chart</h2>
                    <ul className="font-semibold">
                        <li>X-Small: <span className="font-normal">0-10 lbs</span></li>
                        <li>Small: <span className="font-normal">11-20 lbs</span></li>
                        <li>Medium: <span className="font-normal">21-50 lbs</span></li>
                        <li>Large: <span className="font-normal">51-75 lbs</span></li>
                        <li>X-Large: <span className="font-normal">76+ lbs</span></li>
                    </ul>
                </div>
                <Tabs defaultValue="account" className="bg-[#e7e7f9] px-1 pb-2 pt-4 sm:px-4 sm:pb-4 w-full max-w-[650.54px] rounded-lg flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center sm:pb-2">Select a Size</h2>
                    <h2 className="text-lg font-bold text-center pb-2 sm:hidden">Then Choose a Service</h2>
                    <TabsList className="bg-[#351D48] text-white">
                        <TabsTrigger className="text-xs sm:text-base px-[6px] sm:px-[12px]" value="xs">X-Small</TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-base px-[6px] sm:px-[12px]" value="sm">Small</TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-base px-[6px] sm:px-[12px]" value="md">Medium</TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-base px-[6px] sm:px-[12px]" value="lg">Large</TabsTrigger>
                        <TabsTrigger className="text-xs sm:text-base px-[6px] sm:px-[12px]" value="xl">X-Large</TabsTrigger>
                    </TabsList>
                    <TabsContent value="xs">
                        <PriceSheetBySize prices={["$65-70", "$50-55", "$35-40"]} largerDog={false}/>
                    </TabsContent>
                    <TabsContent value="sm">
                        <PriceSheetBySize prices={["$75-85", "$60-65", "$45-50"]} largerDog={false}/>
                    </TabsContent>
                    <TabsContent value="md">
                        <PriceSheetBySize prices={["$95-120", "$70-80", "$55"]} largerDog={true} />
                    </TabsContent>
                    <TabsContent value="lg">
                        <PriceSheetBySize prices={["$130-145", "$85-110", "$60-70"]} largerDog={true} />
                    </TabsContent>
                    <TabsContent value="xl">
                        <PriceSheetBySize prices={["$150-160", "$115-125", "$76+"]} largerDog={true} />
                    </TabsContent>
                </Tabs>
                <div className="rounded-lg bg-[#e7e7f9] px-1 pb-1 pt-4 sm:px-4 sm:pb-4 w-full max-w-[650.54px]">
                    <h2 className="text-2xl pb-2 font-bold text-center">Add-On Services</h2>
                    <ul className="border-2 border-[#351D48] rounded-lg overflow-hidden">
                        <li className="flex justify-between px-1 sm:px-2 py-2 bg-[#DAD6F6]">
                            <span className="font-semibold">Teeth Brushing<br/><span className="text-xs text-[#351D48]/50">Enzymatic toothpaste and breath spray</span></span>
                            <span>$5</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2">
                            <span className="font-semibold">Nose & Paw Balm</span>
                            <span>$5</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2 bg-[#DAD6F6]">
                            <span className="font-semibold">De-Shed Treatment<br/><span className="text-xs text-[#351D48]/50">Reduces shedding for up to 3 months</span></span>
                            <span>$20/hr</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2">
                            <span className="font-semibold">Dematting Fee</span>
                            <span>$10-40</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2 bg-[#DAD6F6]">
                            <span className="font-semibold">Medicated Shampoo: Xymox<br/><span className="text-xs text-[#351D48]/50">Anti-fungal and anti-bacterial<br/>Price varies depending on dog size</span></span>
                            <span>$5</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2">
                            <span className="font-semibold">Specialty Shampoo<br/><span className="text-xs text-[#351D48]/50">For dogs with dry or oily skin - We have a shmapoo for you!</span></span>
                            <span>$5</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2 bg-[#DAD6F6]">
                            <span className="font-semibold">Daycare<br/><span className="text-xs text-[#351D48]/50">Limited availability</span></span>
                            <span>$20</span>
                        </li>
                        <li className="flex justify-between px-1 sm:px-2 py-2">
                            <span className="font-semibold">Special Handling</span>
                            <span>$15</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="w-screen max-w-full footer-shadow py-1"></div>
        </main>
    )
}