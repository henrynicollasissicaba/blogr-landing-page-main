"use client"

import { useState } from "react";
import { menu } from "@/app/data/utils";
import Link from "next/link";
import Arrow from "../ui/Arrow";

export default function DesktopNav(){
    const [openSubmenu, setOpenSubmenu] = useState<null | number>(null)
    
    const handleOpenSubmenu = (menuId: number) => {
        if(openSubmenu === menuId){
            setOpenSubmenu(null)
        } else {
            setOpenSubmenu(menuId)
        }
    }

    return(
        <nav>
            <div className="flex gap-6 px-8">
                {menu.map((item) => (
                    <div key={item.id} className="w-full flex flex-col justify-center items-center relative">
                        <div>
                            <button 
                                className={`flex items-center gap-1 cursor-pointer p-1 hover:text-white transition-colors
                                ${openSubmenu === item.id ? "text-white" : "text-zinc-200"} font-medium`}
                                onClick={() => handleOpenSubmenu(item.id)}
                            >
                                {item.link}
                                <Arrow 
                                    type="light" 
                                    className={`${openSubmenu === item.id ? "rotate-180" : "rotate-0"} 
                                    transform transition-all`}
                                />
                            </button>
                        </div>
                        <div 
                            className={`
                            w-[9rem] overflow-hidden transition-all duration-300 ease-in-out absolute top-full left-0
                            ${openSubmenu === item.id ? 'max-h-72 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
                        `}>
                            <ul className="bg-white p-4 rounded-md w-full flex flex-col
                                gap-2 text-dark-blue-950"
                            >
                                {item.content.map((menu) => (
                                    <Link 
                                        key={menu}
                                        href="#"
                                        className="hover:text-dark-grayish-blue cursor-pointer transition-colors"
                                    >
                                        {menu}
                                    </Link>
                                ))} 
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    )
}