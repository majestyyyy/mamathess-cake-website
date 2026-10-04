import Image from 'next/image'
import Link from 'next/link'
import { IcingEdge, Sparkle } from '@/components/decor'
import { cn } from '@/lib/utils'

const parade = [
  { src: '/images/cakes/2.svg', alt: 'Blue tiered birthday cake decorated with butterflies', h: 'h-44 md:h-60', hide: false },
  { src: '/images/cakes/10.svg', alt: 'White tiered wedding cake with roses and gold accents', h: 'h-56 md:h-80', hide: false },
  { src: '/images/cakes/3.svg', alt: 'Purple character-themed celebration cake', h: 'h-48 md:h-64', hide: true },
  { src: '/images/cakes/7.svg', alt: 'Pastel first-birthday cake with rainbow details', h: 'h-52 md:h-72', hide: false },
  { src: '/images/cakes/9.svg', alt: 'Gold 60th birthday drip cake', h: 'h-44 md:h-[22rem]', hide: true },
  { src: '/images/cakes/11.svg', alt: 'Pink birthday cake with a piped arch', h: 'h-48 md:h-64', hide: true },
]

export function Hero() {
  return (
    <section className="bokeh relative overflow-hidden">
      <Sparkle className="absolute left-[8%] top-10 size-6 text-white/90" />
      <Sparkle className="absolute right-[12%] top-16 size-4 text-gold" />
      <Sparkle className="absolute left-[22%] top-40 hidden size-3 text-white md:block" />
      <Sparkle className="absolute right-[24%] top-44 hidden size-5 text-white/80 md:block" />

      <div className="relative mx-auto max-w-6xl px-4 pt-12 text-center md:pt-16">
        <h1 className="text-balance">
          <span className="block font-script text-6xl leading-[0.95] text-plum drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] md:text-8xl">
            Mama Thess
          </span>
          <span className="mt-2 block font-script text-3xl text-plum/90 drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] md:text-5xl">
            Cakes and Pastries Shop
          </span>
        </h1>
        <p className="label-caps mt-5 flex items-center justify-center gap-3 text-sm text-plum-deep md:text-lg">
          <Sparkle className="size-3.5 text-plum-deep" />
          Need customized cakes? Book us now!
          <Sparkle className="size-3.5 text-plum-deep" />
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="label-caps rounded-full bg-plum px-7 py-3.5 text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)] transition-transform hover:-translate-y-0.5"
          >
            Book your cake
          </Link>
          <Link
            href="/cakes"
            className="label-caps rounded-full border-2 border-plum bg-white/70 px-7 py-3 text-sm text-plum transition-colors hover:bg-white"
          >
            Browse by theme
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-6xl items-end justify-center gap-3 px-4 md:gap-5">
        {parade.map((cake, i) => (
          <div
            key={cake.src}
            className={cn(
              'relative w-28 overflow-hidden rounded-t-full border-4 border-b-0 border-white/90 bg-lilac-soft shadow-lg sm:w-36 md:w-40',
              cake.h,
              cake.hide && 'hidden sm:block',
            )}
          >
            <Image
              src={cake.src}
              alt={cake.alt}
              fill
              priority={i < 3}
              sizes="(min-width: 768px) 160px, 144px"
              className="object-cover object-bottom"
            />
          </div>
        ))}
      </div>
      <div className="h-3 bg-plum" />
      <IcingEdge className="bg-background text-plum" />
    </section>
  )
}
