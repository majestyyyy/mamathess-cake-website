'use client'

import { useState } from 'react'
import { Check, Copy, MessageSquare } from 'lucide-react'
import { services, shop } from '@/lib/cakes'

type Option = { id: string; name: string }

const fieldClass =
  'mt-1.5 w-full rounded-2xl border-2 border-plum/15 bg-white px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-plum'
const labelClass = 'label-caps text-xs text-plum-deep'

export function InquiryForm({ cakes, defaultCake }: { cakes: Option[]; defaultCake?: string }) {
  const [message, setMessage] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form)
    const cakeId = String(data.get('cake') ?? '')
    const cakeName = cakes.find((c) => c.id === cakeId)?.name
    const lines = [
      `Hi Mama Thess! I'd like to inquire about a cake.`,
      `Name: ${data.get('name')}`,
      `Contact: ${data.get('phone')}`,
      `Occasion: ${data.get('occasion')}`,
      cakeName ? `Design: ${cakeName}` : null,
      `Date needed: ${data.get('date')}`,
      `Guests: ${data.get('guests')}`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : null,
    ]
    return lines.filter(Boolean).join('\n')
  }

  async function copyMessage() {
    if (!message) return
    await navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-[2rem] bg-lilac-soft p-6 md:p-8">
      <h2 className="text-3xl font-extrabold uppercase text-plum">Cake inquiry</h2>
      <p className="mt-1 text-muted-foreground">
        Fill this in and we&apos;ll turn it into a message you can send us by text or Facebook.
      </p>

      <form
        className="mt-6 grid gap-5 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault()
          setMessage(buildMessage(e.currentTarget))
          setCopied(false)
        }}
      >
        <label className="block">
          <span className={labelClass}>Your name</span>
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Juana Dela Cruz" />
        </label>
        <label className="block">
          <span className={labelClass}>Mobile number</span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{7,16}"
            className={fieldClass}
            placeholder="09XX XXX XXXX"
          />
        </label>
        <label className="block">
          <span className={labelClass}>Occasion</span>
          <select name="occasion" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose one
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Design you liked (optional)</span>
          <select name="cake" defaultValue={defaultCake ?? ''} className={fieldClass}>
            <option value="">None yet / my own idea</option>
            {cakes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Date needed</span>
          <input name="date" type="date" required min={today} className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Number of guests</span>
          <input name="guests" type="number" min={1} max={500} required className={fieldClass} placeholder="30" />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Tell us about your dream cake</span>
          <textarea
            name="notes"
            rows={4}
            maxLength={800}
            className={fieldClass}
            placeholder="Colors, flavor, name to write, topper, any reference photo you'll send..."
          />
        </label>
        <button
          type="submit"
          className="label-caps rounded-full bg-plum py-3.5 text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)] transition-transform hover:-translate-y-0.5 sm:col-span-2"
        >
          Prepare my message
        </button>
      </form>

      {message && (
        <div className="mt-6 rounded-3xl border-2 border-plum bg-white p-5" aria-live="polite">
          <p className="label-caps text-xs text-gold">Your message is ready</p>
          <pre className="mt-3 whitespace-pre-wrap font-sans leading-relaxed text-plum-deep">{message}</pre>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={`sms:${shop.phoneHref}?body=${encodeURIComponent(message)}`}
              className="label-caps flex items-center justify-center gap-2 rounded-full bg-plum py-3 text-sm text-primary-foreground"
            >
              <MessageSquare className="size-4" />
              Send by text
            </a>
            <button
              type="button"
              onClick={async () => {
                await copyMessage()
                window.open(shop.facebookUrl, '_blank', 'noopener,noreferrer')
              }}
              className="label-caps flex items-center justify-center gap-2 rounded-full border-2 border-plum py-2.5 text-sm text-plum hover:bg-lilac-soft"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied! Paste on Facebook' : 'Copy & open Facebook'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
