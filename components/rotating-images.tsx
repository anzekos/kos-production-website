"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600&text=Studio+1",
    alt: "Kos Production Studio 1",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Studio+2",
    alt: "Kos Production Studio 2",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Studio+3",
    alt: "Kos Production Studio 3",
  },
]

export default function RotatingImages() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-2xl">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={600}
          height={400}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}
