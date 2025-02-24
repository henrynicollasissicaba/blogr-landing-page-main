"use client"

import Image from "next/image";
import { productShowcaseContent } from "../data/utils";
import Title from "./Title";
import Description from "./Description";
import { useEffect, useState } from "react";

export default function ProductShowcase(){
    const ACTUAL_IMAGE_PATH = "/illustration-laptop-mobile.svg"

    const [srcImage, setSrcImage] = useState(ACTUAL_IMAGE_PATH)

    useEffect(() => {
        const updateImage = () => {
          if(window.innerWidth > 768){
            setSrcImage("/illustration-laptop-desktop.svg")
          } else {
            setSrcImage(ACTUAL_IMAGE_PATH)
          }
        }
    
        updateImage()
        window.addEventListener("resize", updateImage)
        return () => window.removeEventListener("resize", updateImage)
    })

    return(
        <section className="flex flex-col justify-center items-center -mt-10 md:mt-16 grid-product-showcase">
            <div className="w-[28rem] md:col-start-1 md:-col-end-3 sm:w-[33rem] sm:-ml-[9.5rem] lg:w-[40rem] lg:-ml-[11.75rem] md:row-start-1">
                <Image 
                    src={srcImage}
                    alt="laptop illustration"
                    width={500}
                    height={500}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-10 md:col-start-4 md:col-end-6 md:row-start-1">
                {productShowcaseContent.map((content) => (
                    <div key={content.id} className="flex flex-col gap-4 mt-4 max-w-[30rem]">
                        <Title className="md:text-left">{content.title}</Title>
                        <Description className="md:text-left">{content.description}</Description>
                    </div>
                ))}
            </div>
        </section>
    )
}