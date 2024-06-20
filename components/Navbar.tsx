import Image from "next/image";
import { Menu, PawPrint, ShoppingBasket, User, X } from "lucide-react";
import { Button } from "./ui/button";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  

export default function Navbar() {
    return(
        <div id="navbar" className="flex justify-between sticky top-0 w-svw px-6 sm:px-16 bg-gradient-to-b from-[var(--light-blue)] from-10% via-[var(--light-blue)] via-10% to-transparent backdrop-blur-[2px] z-[10000]">
            <a href="/"><Image alt="Barking Beauties logo" src="/BBPS_logo.PNG" fetchPriority="high" width={160} height={128} className="min-w-24 max-w-40 w-24 sm:w-40" /></a>
            <div className="flex gap-4 items-center pt-4">
                <div className="gap-4 hidden min-[900px]:flex">
                    <a href="/#about-us"><Button variant={"secondary"}>About Us</Button></a>
                    <a href="/staff"><Button variant={"secondary"}>Meet the Staff</Button></a>
                    <a href="/faq"><Button variant={"secondary"}>FAQ</Button></a>
                    <a href="/#services"><Button variant={"secondary"}>Services</Button></a>
                </div>
                <Button className="border-2 border-[var(--light-pink)] drop-shadow">Book Now</Button>
                <ShoppingBasket className="h-8 w-8 hidden min-[900px]:block cursor-not-allowed"></ShoppingBasket>
                <User className="h-8 w-8 hidden min-[900px]:block cursor-not-allowed"></User>
                <Menubar className="min-[900px]:hidden flex items-center">
                    <MenubarMenu>
                        <MenubarTrigger className="origin-top data-[state=open]:ani data-[state=closed]:ani">
                            <Menu className="h-8 w-8"></Menu>
                            <X className="h-8 w-8 hidden"></X>
                        </MenubarTrigger>
                        <MenubarContent className="mt-4 border-[3px] border-[var(--light-pink)]">
                            <MenubarItem>
                                <div className="gap-4 flex flex-col">
                                    <a href="/#about-us"><Button variant={"secondary"}>About Us</Button></a>
                                    <a href="/staff"><Button variant={"secondary"}>Meet the Staff</Button></a>
                                    <a href="/faq"><Button variant={"secondary"}>FAQ</Button></a>
                                    <a href="/#services"><Button variant={"secondary"}>Services</Button></a>
                                </div>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
};