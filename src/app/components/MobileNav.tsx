"use client"

import { useState } from "react"
import CloseMenuButton from "./CloseMenuButton"
import OpenMenuButton from "./OpenMenuButton"
import { menu } from "../data/utils"
import Image from "next/image"
import Link from "next/link"

export default function MobileNav(){
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<null | number>(null)

    const handleOpenSubmenu = (menuId: number) => {
        if(openSubmenu === menuId){
            setOpenSubmenu(null)
        } else {
            setOpenSubmenu(menuId)
        }
    }

    return(
        <>
            <button
                onClick={() => setOpenMenu(!openMenu)}
            >
                {openMenu ? <CloseMenuButton /> : <OpenMenuButton />}
            </button>
            <div className={`
                absolute w-96 top-20 left-1/2 transform -translate-x-1/2
                max-w-[90%] transition-all duration-300 ease-in-out
                ${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                {openMenu && (
                    <nav 
                        className={`
                            w-full transform transition-all duration-300 ease-in-out
                            ${openMenu ? 'translate-y-0' : '-translate-y-8'}
                        `}
                    >
                        <div className="w-full flex flex-col gap-4 p-4 bg-white justify-center items-center rounded-md shadow-2xl">
                            {menu.map((item) => (
                                <div key={item.id} className="w-full flex flex-col justify-center items-center">
                                    <button 
                                        className={`flex items-center gap-2 cursor-pointer p-1
                                        ${openSubmenu === item.id ? "text-dark-blue-950" : "text-dark-grayish-blue"} font-medium`}
                                        onClick={() => handleOpenSubmenu(item.id)}
                                    >
                                        {item.link}
                                        <Image 
                                            src="/icon-arrow-dark.svg"
                                            alt="icon arrow"
                                            width={10}
                                            height={10}
                                            className={`${openSubmenu === item.id ? "rotate-180" : "rotate-0"} 
                                            transform transition-all`}
                                        />
                                    </button>
                                    <div 
                                        className={`
                                        w-full overflow-hidden transition-all duration-300 ease-in-out
                                        ${openSubmenu === item.id ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
                                    `}>
                                        <ul className="bg-grayish-blue p-4 rounded-md w-full text-center flex flex-col 
                                            gap-2 text-dark-grayish-blue"
                                        >
                                            {item.content.map((menu) => (
                                                <Link 
                                                    key={menu}
                                                    href="#"
                                                    className="hover:text-dark-blue-950"
                                                >
                                                    {menu}
                                                </Link>
                                            ))} 
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full h-[1px] bg-grayish-blue"></div>
                            <div className="flex flex-col gap-4 font-bold">
                                <button 
                                    className="cursor-pointer text-dark-grayish-blue px-6 py-2"
                                >
                                    Login
                                </button>
                                <button 
                                    className="bg-linear-to-r from-light-red-300 to-light-red-400 px-8 py-2
                                    text-white rounded-4xl"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </>
    )
}