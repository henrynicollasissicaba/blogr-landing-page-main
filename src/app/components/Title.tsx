import React from "react"

interface TitleProps {
    children: React.ReactNode
    className?: string
}

export default function Title({ children, className }: TitleProps){
    return(
        <h2 className={`text-center text-3xl text-dark-grayish-blue font-bold px-2 ${className}`}>{children}</h2>
    )
}