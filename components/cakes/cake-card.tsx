import Image from 'next/image'
import Link from 'next/link'
import { type Cake, formatPeso } from '@/lib/cakes'

export function CakeCard({ cake }: { cake: Cake }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-plum/10 transition-shadow hover:shadow-[0_12px_40px_-12px_var(--plum)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-lilac-soft">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-plum shadow-sm">
          from {formatPeso(cake.priceFrom)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-extrabold uppercase leading-tight text-plum">{cake.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{cake.description}</p>
        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-lilac-soft p-3 text-center">
          <div>
            <dt className="label-caps text-[0.6rem] text-muted-foreground">Size</dt>
            <dd className="mt-0.5 text-sm font-bold leading-tight text-plum-deep">{cake.sizes}</dd>
          </div>
          <div>
            <dt className="label-caps text-[0.6rem] text-muted-foreground">Serves</dt>
            <dd className="mt-0.5 text-sm font-bold text-plum-deep">{cake.serves}</dd>
          </div>
          <div>
            <dt className="label-caps text-[0.6rem] text-muted-foreground">Order</dt>
            <dd className="mt-0.5 text-sm font-bold text-plum-deep">{cake.leadTime} ahead</dd>
          </div>
        </dl>
        <Link
          href={`/contact?cake=${cake.id}`}
          className="label-caps mt-4 rounded-full border-2 border-plum py-2.5 text-center text-sm text-plum transition-colors hover:bg-plum hover:text-primary-foreground"
        >
          Inquire about this cake
        </Link>
      </div>
    </article>
  )
}
