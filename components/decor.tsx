import { cn } from '@/lib/utils'

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('fill-current', className)}>
      <path d="M12 0c.9 7.4 3.6 10.6 12 12-8.4 1.4-11.1 4.6-12 12-.9-7.4-3.6-10.6-12-12C8.4 10.6 11.1 7.4 12 0Z" />
    </svg>
  )
}

export function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('fill-current', className)}>
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
    </svg>
  )
}

export function StarBullet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('size-3.5 shrink-0 fill-current', className)}>
      <path d="m12 1.5 3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9L12 1.5Z" />
    </svg>
  )
}

const SCALLOP_PATH = (() => {
  let d = 'M0 0H1200V6'
  for (let x = 1200; x > 0; x -= 40) d += `Q${x - 20} 30 ${x - 40} 6`
  return `${d}V0Z`
})()

/** Scalloped icing edge, like the purple trim on the shop banner. */
export function IcingEdge({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <div aria-hidden="true" className={cn('relative h-6 w-full overflow-hidden', flip && 'rotate-180', className)}>
      <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <path d={SCALLOP_PATH} className="fill-current" />
      </svg>
    </div>
  )
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('label-caps flex items-center gap-2 text-sm text-plum', className)}>
      <Sparkle className="size-3 text-gold" />
      {children}
      <Sparkle className="size-3 text-gold" />
    </p>
  )
}
