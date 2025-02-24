import Image from "next/image";

export default function CloseMenuButton(){
    return(
        <Image 
            src="/icon-close.svg"
            alt="menu icon"
            width={21}
            height={0}
        />
    )
}