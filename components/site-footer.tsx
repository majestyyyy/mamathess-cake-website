import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { Facebook } from '@/components/decor'
import { IcingEdge } from '@/components/decor'
import { shop, themes } from '@/lib/cakes'

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-plum-deep text-primary-foreground">
      <IcingEdge className="bg-background text-plum-deep" flip />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-script text-4xl text-blush">Mama Thess</p>
          <p className="label-caps mt-1 text-xs text-primary-foreground/70">Cakes and Pastries Shop</p>
          <p className="mt-5 max-w-sm leading-relaxed text-primary-foreground/80">
            Home-baked, hand-decorated cakes from our kitchen in Pateros. Every cake is made to order, so message
            us early and we&apos;ll save your date.
          </p>
        </div>

        <div>
          <h2 className="label-caps text-sm text-gold">Cake themes</h2>
          <ul className="mt-4 space-y-2">
            {themes.map((t) => (
              <li key={t.slug}>
                <Link href={`/cakes?theme=${t.slug}`} className="text-primary-foreground/80 hover:text-blush">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-caps text-sm text-gold">Contact us at</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`tel:${shop.phoneHref}`} className="flex items-center gap-3 hover:text-blush">
                <Phone className="size-4 text-blush" />
                {shop.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={shop.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-blush"
              >
                <Facebook className="mt-1 size-4 shrink-0 text-blush" />
                {shop.facebookName}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-blush" />
              {shop.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {shop.name}. Baked with love in Pateros, M.M.
        </p>
      </div>
    </footer>
  )
}
