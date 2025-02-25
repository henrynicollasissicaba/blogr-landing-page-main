import Image from "next/image";

export function OpenMenuButton(){
    return(
        <Image 
            src="/icon-hamburger.svg"
            alt="menu icon"
            width={30}
            height={0}
        />
    )
}

export function CloseMenuButton(){
    return(
        <Image 
            src="/icon-close.svg"
            alt="menu icon"
            width={21}
            height={0}
        />
    )
}