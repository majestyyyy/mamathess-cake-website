'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { CakeImage } from '@/components/cake-image'
import { formatPeso, galleryPhotos, getTheme, themes, type ThemeSlug } from '@/lib/cakes'
import { cn } from '@/lib/utils'

const aspects = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/6]', 'aspect-square', 'aspect-[4/5]']

export function GalleryGrid() {
  const [filter, setFilter] = useState<ThemeSlug | 'all'>('all')
  const [index, setIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visible = filter === 'all' ? galleryPhotos : galleryPhotos.filter((photo) => photo.theme === filter)
  const current = visible[index]

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const step = (delta: number) => setIndex((i) => (i + delta + visible.length) % visible.length)

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="-mx-4 overflow-x-auto px-4">
        <div className="flex w-max gap-2">
          {[{ slug: 'all' as const, name: 'Everything' }, ...themes].map((opt) => (
            <button
              key={opt.slug}
              type="button"
              aria-pressed={filter === opt.slug}
              onClick={() => setFilter(opt.slug)}
              className={cn(
                'label-caps rounded-full border-2 px-4 py-2 text-xs transition-colors',
                filter === opt.slug
                  ? 'border-plum bg-plum text-primary-foreground'
                  : 'border-plum/20 bg-white text-plum-deep hover:border-plum',
              )}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-8 columns-2 gap-4 md:columns-3 md:gap-5">
        {visible.map((cake, i) => (
          <li key={cake.id} className="mb-4 break-inside-avoid md:mb-5">
            <button
              type="button"
              onClick={() => open(i)}
              className={cn(
                'group relative block w-full overflow-hidden rounded-3xl bg-lilac-soft ring-1 ring-plum/10',
                aspects[i % aspects.length],
              )}
            >
              <CakeImage
                src={cake.image}
                alt={cake.name}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-2 bottom-2 translate-y-2 rounded-2xl bg-white/95 px-3 py-2 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="block font-extrabold uppercase leading-tight text-plum">{cake.name}</span>
                <span className="label-caps block text-[0.6rem] text-muted-foreground">
                  {getTheme(cake.theme)?.name}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current ? current.name : 'Cake preview'}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        className="m-auto w-[min(92vw,56rem)] overflow-hidden rounded-3xl bg-white p-0 shadow-2xl backdrop:bg-plum-deep/70 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="grid md:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-square bg-lilac-soft">
              <CakeImage src={current.image} alt={current.name} fill sizes="(min-width: 768px) 55vw, 92vw" className="object-cover" />
            </div>
            <div className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="label-caps text-xs text-gold">{getTheme(current.theme)?.name}</p>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  className="-m-2 rounded-full p-2 text-plum hover:bg-lilac-soft"
                >
                  <X className="size-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <h2 className="mt-2 text-3xl font-extrabold uppercase leading-tight text-plum">{current.name}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {current.cake?.description ?? 'A custom cake design made by Mama Thess. Contact us to create one for your celebration.'}
              </p>
              {current.cake && (
                <dl className="mt-5 flex-1 space-y-2 text-sm">
                  {[
                    ['Starts at', formatPeso(current.cake.priceFrom)],
                    ['Size', current.cake.sizes],
                    ['Serves', current.cake.serves],
                    ['Order', `${current.cake.leadTime} ahead`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-dashed border-plum/15 pb-2">
                      <dt className="label-caps text-xs text-muted-foreground">{k}</dt>
                      <dd className="font-bold text-plum-deep">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <Link
                href={current.cake ? `/contact?cake=${current.cake.id}` : '/contact'}
                className="label-caps mt-6 rounded-full bg-plum py-3 text-center text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)]"
              >
                {current.cake ? 'I want this cake' : 'Ask about a similar cake'}
              </Link>
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-plum/20 text-plum hover:border-plum"
                >
                  <ChevronLeft className="size-5" />
                  <span className="sr-only">Previous cake</span>
                </button>
                <span className="text-sm font-semibold text-muted-foreground">
                  {index + 1} / {visible.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-plum/20 text-plum hover:border-plum"
                >
                  <ChevronRight className="size-5" />
                  <span className="sr-only">Next cake</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
