import { MapPin, Phone } from 'lucide-react'
import { Facebook } from '@/components/decor'
import { shop } from '@/lib/cakes'

export function ContactStrip() {
  const items = [
    { icon: Phone, label: 'Call or text', value: shop.phoneDisplay, href: `tel:${shop.phoneHref}` },
    { icon: Facebook, label: 'Message us', value: shop.facebookName, href: shop.facebookUrl },
    { icon: MapPin, label: 'Find us', value: shop.address },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="bokeh overflow-hidden rounded-[2rem] p-6 md:p-10">
        <h2 className="text-3xl font-extrabold uppercase text-plum md:text-4xl">Contact us at</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-plum text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="label-caps block text-xs text-plum-deep/70">{label}</span>
                  <span className="mt-0.5 block font-bold leading-snug text-plum-deep">{value}</span>
                </span>
              </>
            )
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-full items-center gap-4 rounded-2xl bg-white/80 p-4 transition-colors hover:bg-white"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full items-center gap-4 rounded-2xl bg-white/80 p-4">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
