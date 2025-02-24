import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header(){
    return(
        <header className="flex justify-between items-center px-4 md:px-12 py-8">
            <div className="flex gap-6 items-center">
                <Image 
                    src="/logo.svg" 
                    alt="Blogr" 
                    width={75} 
                    height={75} 
                />
                <div className="md:block hidden">
                    <DesktopNav />
                </div>
            </div>
            <div className="md:flex md:gap-2 hidden">
                <button 
                    className="px-8 py-2 bg-transparent text-white rounded-4xl
                    hover:bg-white hover:text-light-red-400 cursor-pointer transition-colors"
                >
                    Login
                </button>
                <button
                    className="px-8 py-2 bg-white text-light-red-400 rounded-4xl
                    hover:bg-white/30 hover:text-white cursor-pointer transition-colors"
                >
                    Sign Up
                </button>
            </div>
            <div className="md:hidden">
                <MobileNav />
            </div>
        </header>
    )
}