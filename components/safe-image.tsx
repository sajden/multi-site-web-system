"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string
  fallbackSrc?: string
}

/**
 * Safe image component with automatic fallback on CDN errors.
 * Prevents broken images from ruining the UI.
 */
export function SafeImage({
  src,
  fallbackSrc = "/images/hero-background.jpg",
  alt,
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={currentSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
    />
  )
}
