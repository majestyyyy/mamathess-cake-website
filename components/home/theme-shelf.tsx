import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CakeImage } from '@/components/cake-image'
import { SectionLabel } from '@/components/decor'
import { cakes, themes, type ThemeSlug } from '@/lib/cakes'

const coverImages: Record<ThemeSlug, string> = {
  debut: '/images/cakes/11.svg',
  wedding: '/images/cakes/10.svg',
  'kids-character': '/images/cakes/3.svg',
  milestone: '/images/cakes/9.svg',
  'baby-christening': '/images/cakes/2.svg',
  'custom-designer': '/images/cakes/7.svg',
  'bento-cupcakes': '/images/cakes/11.svg',
}

export function ThemeShelf() {
  const items = themes.map((theme) => {
    const count = cakes.filter((c) => c.theme === theme.slug).length
    return { theme, count, coverImage: coverImages[theme.slug] }
  })

  return (
    <section className="bg-lilac-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Shop by theme</SectionLabel>
            <h2 className="mt-3 font-script text-5xl text-plum md:text-6xl">What are we celebrating?</h2>
          </div>
          <Link href="/cakes" className="label-caps text-sm text-plum underline decoration-gold decoration-2 underline-offset-8">
            See all cakes
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {items.map(({ theme, coverImage, count }, i) => (
            <li key={theme.slug} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <Link
                href={`/cakes?theme=${theme.slug}`}
                className="group relative flex h-full min-h-48 flex-col justify-end overflow-hidden rounded-3xl bg-lilac ring-1 ring-plum/10"
              >
                <CakeImage
                  src={coverImage}
                  alt=""
                  fill
                  sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative m-2.5 rounded-2xl bg-white/90 p-3 backdrop-blur-sm md:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={i === 0 ? 'text-2xl font-extrabold uppercase text-plum' : 'font-extrabold uppercase leading-tight text-plum'}>
                      {theme.name}
                    </h3>
                    <ArrowUpRight className="size-4 shrink-0 text-plum transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  {i === 0 ? (
                    <p className="mt-1 text-muted-foreground">{theme.blurb}</p>
                  ) : (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {count} {count === 1 ? 'design' : 'designs'}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
          <li className="col-span-2">
            <Link
              href="/contact"
              className="flex h-full min-h-48 flex-col justify-between rounded-3xl bg-plum p-6 text-primary-foreground transition-colors hover:bg-plum-deep"
            >
              <span className="label-caps text-xs text-gold">Not on the list?</span>
              <span>
                <span className="block font-script text-4xl leading-tight">Dream it up with us</span>
                <span className="mt-1 block text-primary-foreground/80">
                  Send a photo or a sketch. We&apos;ll quote you within the day.
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
