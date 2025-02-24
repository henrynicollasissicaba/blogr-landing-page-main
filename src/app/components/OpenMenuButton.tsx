import Image from "next/image";

export default function OpenMenuButton(){
    return(
        <Image 
            src="/icon-hamburger.svg"
            alt="menu icon"
            width={30}
            height={0}
        />
    )
}