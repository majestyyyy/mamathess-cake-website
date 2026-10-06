import Link from 'next/link'
import { SectionLabel } from '@/components/decor'

const steps = [
  {
    title: 'Send us your idea',
    body: 'Message us on Facebook or text 0939 126 6821 with your theme, a reference photo, and the date.',
  },
  {
    title: 'Get your quote',
    body: 'We confirm size, flavor and design details, then send the price. A 50% downpayment locks your slot.',
  },
  {
    title: 'Deliver or Pick up in Pateros',
    body: 'Collect your cake at Poblacion, or ask us about delivery nearby. We box it safe for the ride.',
  },
]

export function HowToBook() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionLabel>How booking works</SectionLabel>
          <h2 className="mt-3 font-script text-5xl text-plum md:text-6xl">Three sweet steps</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            Most designs need 3 to 7 days. Weddings and sculpted cakes, give us two weeks. Peak months like
            December and May fill up fast.
          </p>
          <Link
            href="/contact"
            className="label-caps mt-6 inline-block rounded-full bg-plum px-6 py-3 text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)] transition-transform hover:-translate-y-0.5"
          >
            Start an inquiry
          </Link>
        </div>

        <ol className="grid gap-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-3xl border-2 border-dashed border-plum/20 bg-white p-5 md:p-6"
            >
              <span className="font-script text-6xl leading-none text-blush" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-extrabold uppercase text-plum">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
