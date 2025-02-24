import Image from "next/image";
import { menu } from "../data/utils";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="border-tr-[100px] bg-footer-bg px-6 pt-8 pb-2 rounded-tr-[100px]">
            <div className="flex flex-col sm:flex-row gap-10 justify-center sm:justify-evenly sm:w-full items-center sm:items-start text-center">
                <Image 
                    src="/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                />
                {menu.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <h2 className="text-white text-xl font-bold">{item.link}</h2>
                        <div className="flex flex-col gap-1">
                            {item.content.map((content) => (
                                <Link 
                                    href="#" 
                                    key={content}
                                    className="text-zinc-400 hover:text-white cursor-pointer transition-colors"
                                >
                                    {content}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    )
}