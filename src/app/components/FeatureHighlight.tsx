"use client"

import Title from "@/app/components/Title";
import { featureHighlightContent } from "@/app/data/utils";
import Description from "@/app/components/Description";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeatureHighlight() {
  const ACTUAL_IMAGE_PATH = "/illustration-editor-mobile.svg"

  const [srcImage, setSrcImage] = useState(ACTUAL_IMAGE_PATH)

  useEffect(() => {
    const updateImage = () => {
      if(window.innerWidth > 768){
        setSrcImage("/illustration-editor-desktop.svg")
      } else {
        setSrcImage(ACTUAL_IMAGE_PATH)
      }
    }

    updateImage()
    window.addEventListener("resize", updateImage)
    return () => window.removeEventListener("resize", updateImage)
  })

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-8">
      <Title>Designed for the future</Title>
      <div className="flex flex-col-reverse justify-center items-center grid-feature-highlight">
        <div className="flex flex-col gap-10 md:col-start-2 md:col-end-4">
          {featureHighlightContent.map((content) => (
            <div key={content.id} className="flex flex-col gap-4 mt-4 max-w-[30rem]">
              <Title className="md:text-left">{content.title}</Title>
              <Description className="md:text-left">{content.description}</Description>
            </div>
          ))}
        </div>
        <div className="md:col-start-4 md:-col-end-1 sm:w-[33rem] sm:-mr-[10rem] lg:w-[40rem] lg:-mr-[12rem]">
          <Image
            src={srcImage}
            alt="editor"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
