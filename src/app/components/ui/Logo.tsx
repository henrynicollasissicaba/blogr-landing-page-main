import Image from "next/image";

export default function Logo(){
    return(
        <Image 
            src="/logo.svg" 
            alt="Blogr" 
            width={75} 
            height={75} 
        />
    )
}