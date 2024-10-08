'use client'

import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function PriceSheetBySize({ prices, largerDog }: { prices: string[], largerDog: boolean }) {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
      
      function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
    }

    const [service, setService] = useState("")
    const { width, height } = useWindowDimensions()
    // const [selected, setSelected] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row w-full gap-1 sm:gap-2">
                <div className="border-2 border-[#351D48] rounded-lg">
                    <h3 className="p-1 sm:p-2 text-normal font-semibold h-16 flex items-center text-center">ITEMS OFFERED:</h3>
                    <ul className="text-xs flex-grow sm:w-[26ch] flex flex-col font-semibold leading-none sm:leading-snug">
                        <li className="p-1 sm:p-2 h-12 flex items-center bg-[#DAD6F6]">HEAD TO TAIL HAIRCUT</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center">FEET, FACE, UNDERBELLY, TAIL, AND SANITARY TRIM</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center bg-[#DAD6F6]">CLARIFYING AND HYPOALLERGENIC SHAMPOO</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center">REMOISTURIZING CONDITIONER</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center bg-[#DAD6F6]">BLOW DRY AND FLUFF OUT</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center">15-MINUTE BRUSH THROUGH</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center bg-[#DAD6F6]">NAIL TRIM AND FILING</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center">EAR CLEANING (PLUCKING IF NEEDED)</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center bg-[#DAD6F6]">HYPOALLERGENIC FRAGRANCE SPRAY</li>
                        <li className="p-1 sm:p-2 h-12 flex items-center">CUTE ACCESSORY</li>
                    </ul>
                    <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">PRICE:</h3>
                </div>
                {/* SECTION ONLY VISIBLE ON SMALL DEVICES */}
                <div className="sm:hidden">
                    <div className="w-32 border-2 border-[#351D48] rounded-lg flex flex-col items-center">
                        {/* <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">THE WORKS HAIRCUT</h3> */}
                        <Select onValueChange={(val) => {
                            setService(val)
                            // setSelected(true)
                        }}>
                            <SelectTrigger className="h-16">
                                <SelectValue placeholder="SERVICE" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">THE WORKS HAIRCUT</SelectItem>
                                <SelectItem value="1">TIDY UP</SelectItem>
                                <SelectItem value="2">SQUEAKY CLEAN</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className={service==="0" ? "block w-full" : "hidden"}>
                            <ul className="text-xs flex flex-col w-full">
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            </ul>
                            <h3 className="p-2 text-normal font-semibold h-16 flex items-center justify-center text-center">{prices[0]}</h3>
                        </div>
                        <div className={service==="1" ? "block w-full" : "hidden"}>
                            <ul className="text-xs flex flex-col w-full">
                                <li className="p-2 w-full text-[#351D48]/[0.4] bg-[#DAD6F6] h-12 flex items-center justify-center"><X/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            </ul>
                            <h3 className="p-2 text-normal font-semibold h-16 flex items-center justify-center text-center">{prices[1]}</h3>
                        </div>
                        <div className={service==="2" ? "block w-full" : "hidden"}>
                            <ul className="text-xs flex flex-col w-full">
                                <li className="p-2 w-full text-[#351D48]/[0.4] bg-[#DAD6F6] h-12 flex items-center justify-center"><X/></li>
                                <li className="p-2 w-full text-[#351D48]/[0.4] h-12 flex items-center justify-center"><X/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                                <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            </ul>
                            <h3 className="p-2 text-normal font-semibold h-16 flex items-center justify-center text-center">{prices[2]}</h3>
                        </div>
                    </div>
                </div>
                {/* SECTION ONLY VISIBLE ON LARGER DEVICES */}
                <div className="hidden sm:flex sm:gap-2">
                    <div className="w-32 border-2 border-[#351D48] rounded-lg flex flex-col items-center">
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">THE WORKS HAIRCUT</h3>
                        <ul className="text-xs flex flex-col w-full">
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                        </ul>
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">{prices[0]}</h3>
                    </div>
                    <div className="w-32 border-2 border-[#351D48] rounded-lg flex flex-col items-center">
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">TIDY UP</h3>
                        <ul className="text-xs flex flex-col w-full">
                            <li className="p-2 w-full bg-[#DAD6F6] text-[#351D48]/[0.4] h-12 flex items-center justify-center"><X/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                        </ul>
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">{prices[1]}</h3>
                    </div>
                    <div className="w-32 border-2 border-[#351D48] rounded-lg flex flex-col items-center">
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">SQUEAKY CLEAN</h3>
                        <ul className="text-xs flex flex-col w-full">
                            <li className="p-2 w-full bg-[#DAD6F6] text-[#351D48]/[0.4] h-12 flex items-center justify-center"><X/></li>
                            <li className="p-2 w-full text-[#351D48]/[0.4] h-12 flex items-center justify-center"><X/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full bg-[#DAD6F6] h-12 flex items-center justify-center"><Check/></li>
                            <li className="p-2 w-full h-12 flex items-center justify-center"><Check/></li>
                        </ul>
                        <h3 className="p-2 text-normal font-semibold h-16 flex items-center text-center">{prices[2]}</h3>
                    </div>
                </div>
            </div>
            { (largerDog && (service==="0" || service==="1")) || (largerDog && width>640) ?
            <span className="pt-2 text-center">
                *For Doodles that are medium or larger:<br className="hidden sm:block"/> + $15-25  depending on style of cut and condition of coat*
            </span>
            :
            <></>
            }
        </div>
    )
}