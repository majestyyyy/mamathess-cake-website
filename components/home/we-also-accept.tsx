import { Logo } from '@/components/logo'
import { Sparkle, StarBullet } from '@/components/decor'
import { services } from '@/lib/cakes'

export function WeAlsoAccept() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="relative mx-auto w-fit">
          <div className="rounded-full bg-gradient-to-b from-gold to-[oklch(0.62_0.11_70)] p-1.5 shadow-xl">
            <Logo className="size-52 border-4 border-white md:size-64" />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-md bg-white px-4 py-1.5 shadow-md ring-2 ring-gold">
            <p className="font-script text-2xl leading-none text-plum">Mama Thess</p>
          </div>
          <Sparkle className="absolute -right-3 top-4 size-6 text-gold" />
          <Sparkle className="absolute -left-2 bottom-12 size-4 text-blush" />
        </div>

        <div>
          <h2 className="flex items-center gap-3 text-4xl font-extrabold uppercase tracking-tight text-plum md:text-5xl">
            We also accept
            <Sparkle className="size-5 text-lilac" />
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            {"Don't see your idea on the menu? Mama Thess has done it before, or she'll figure it out. Send a photo, a sketch, or even just a feeling."}
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 text-lg font-bold uppercase tracking-wide text-plum-deep">
                <StarBullet className="text-plum" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
