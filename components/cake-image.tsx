'use client'

import Image from 'next/image'
import { Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type CakeImageProps = {
  src: string
  alt: string
  sizes: string
  className?: string
  fill?: boolean
  priority?: boolean
}

export function CakeImage({ src, alt, sizes, className, fill = true, priority }: CakeImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  if (failedSrc === src) {
    return (
      <div
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={!alt}
        className={cn(fill && 'absolute inset-0', 'grid place-items-center bg-lilac-soft')}
      >
        <ImageIcon aria-hidden="true" className="size-8 text-plum/35" strokeWidth={1.25} />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  )
}