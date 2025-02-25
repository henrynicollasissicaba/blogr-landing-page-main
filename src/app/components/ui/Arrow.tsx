import Image from "next/image";

interface ArrowIconProps {
    className: string
    type: string
}

export default function Arrow({ className, type }: ArrowIconProps){
    const getIconTypePath = () => {
        return `/icon-arrow-${type}.svg`
    }

    return(
        <Image 
            src={getIconTypePath()}
            alt="icon arrow"
            width={10}
            height={10}
            className={`${className}`}
        />
    )
}