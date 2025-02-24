import React from "react";

interface DescriptionProps {
    children: React.ReactNode
    className?: string
}

export default function Description({ children, className }: DescriptionProps){
    return(
        <p className={`text-gray-400 text-center px-2 ${className}`}>{children}</p>
    )
}