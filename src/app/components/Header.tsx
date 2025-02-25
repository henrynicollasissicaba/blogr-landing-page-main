import MobileNav from "@/app/components/Nav/MobileNav";
import DesktopNav from "@/app/components/Nav/DesktopNav";
import Logo from "./ui/Logo";
import Button from "./Button/Button";

export default function Header(){
    return(
        <header className="flex justify-between items-center px-4 md:px-12 py-8">
            <div className="flex gap-6 items-center">
                <Logo />
                <div className="md:block hidden">
                    <DesktopNav />
                </div>
            </div>
            <div className="md:flex md:gap-2 hidden">
                <Button variant="transparent">Login</Button>
                <Button variant="filled">Sign Up</Button>
            </div>
            <div className="md:hidden">
                <MobileNav />
            </div>
        </header>
    )
}