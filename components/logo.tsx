import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn('relative block shrink-0 overflow-hidden rounded-full', className)}>
      <Image
        src="/images/mama-thess.png"
        alt="Mama Thess"
        fill
        priority={priority}
        sizes="200px"
        className="scale-[1.12] object-cover"
      />
    </span>
  )
}
