import type { Metadata } from 'next'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Facebook } from '@/components/decor'
import { PageIntro } from '@/components/page-intro'
import { InquiryForm } from '@/components/contact/inquiry-form'
import { cakes, shop } from '@/lib/cakes'

export const metadata: Metadata = {
  title: 'Contact & Book a Cake',
  description: 'Book a customized cake with Mama Thess. Call 0939 126 6821 or message us on Facebook. Poblacion, Pateros.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ cake?: string }>
}) {
  const { cake: cakeId } = await searchParams
  const selected = cakes.find((c) => c.id === cakeId)

  return (
    <>
      <PageIntro label="Contact us" title="Let's bake your cake">
        <p>
          Tell us the date, the theme and how many guests. We reply to every message, usually the same day.
        </p>
      </PageIntro>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[1.5fr_1fr] md:py-14">
        <InquiryForm cakes={cakes.map(({ id, name }) => ({ id, name }))} defaultCake={selected?.id} />

        <aside className="space-y-4">
          <div className="rounded-3xl bg-plum-deep p-6 text-primary-foreground">
            <h2 className="text-2xl font-extrabold uppercase">Contact us at</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`tel:${shop.phoneHref}`} className="flex items-center gap-3 hover:text-blush">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
                    <Phone className="size-4" />
                  </span>
                  <span className="text-lg font-bold">{shop.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={shop.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blush"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Facebook className="size-4" />
                  </span>
                  <span className="font-bold leading-snug">{shop.facebookName}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="size-4" />
                </span>
                <span className="font-bold">{shop.address}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-plum/20 bg-white p-6">
            <h2 className="flex items-center gap-2 font-extrabold uppercase text-plum">
              <Clock className="size-4" />
              Good to know
            </h2>
            <ul className="mt-3 space-y-2.5 leading-relaxed text-muted-foreground">
              <li>Book at least 3 days ahead, 2 weeks for weddings.</li>
              <li>50% downpayment via GCash or cash secures your date.</li>
              <li>Pick-up in Poblacion. Nearby delivery on request.</li>
              <li>Flavors: chocolate, ube, vanilla chiffon, red velvet, mocha.</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl ring-1 ring-plum/10">
            <iframe
              title="Map of Poblacion, Pateros"
              src="https://www.google.com/maps?q=Poblacion,+Pateros,+Metro+Manila&output=embed"
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </aside>
      </div>
    </>
  )
}
