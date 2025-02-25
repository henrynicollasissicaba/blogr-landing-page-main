import React from "react"

interface MainButtonProps {
    children: React.ReactNode
    withBorder?: boolean
    variant: keyof typeof variantButtonColor
}

const variantButtonColor = {
    filled: "bg-white text-light-red-400 hover:bg-white/30 hover:text-white",
    transparent: "bg-transparent text-white hover:bg-white hover:text-light-red-400",
    gradient: "bg-linear-to-r from-light-red-300 to-light-red-400 text-white",
    clear: "text-dark-grayish-blue bg-transparent"
}

export default function Button(params: MainButtonProps){
    const { children, withBorder, variant } = params

    return(
        <button 
            className={`px-8 py-2 rounded-4xl cursor-pointer transition-colors font-bold ${variantButtonColor[variant]}
                    ${withBorder ? "border-2 border-white" : "border-0"}`}
        >
            {children}
        </button>
    )
}