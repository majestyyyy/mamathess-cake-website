'use client'

import { useState } from 'react'
import { Check, Copy, MessageSquare } from 'lucide-react'
import { services, shop } from '@/lib/cakes'
import { sanitizeInput, sanitizePhone } from '@/lib/utils'

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

    // Honeypot spam check: if the hidden field is filled, silently discard spam payload
    const honeypot = data.get('_hp_security_check')
    if (honeypot) {
      return null
    }

    const name = sanitizeInput(data.get('name'), 80)
    const phone = sanitizePhone(data.get('phone'))
    const occasion = sanitizeInput(data.get('occasion'), 50)
    const cakeId = sanitizeInput(data.get('cake'), 50)
    const cakeName = cakes.find((c) => c.id === cakeId)?.name
    const dateNeeded = sanitizeInput(data.get('date'), 20)
    const guests = sanitizeInput(data.get('guests'), 10)
    const notes = sanitizeInput(data.get('notes'), 800)

    if (!name || !phone) return null

    const lines = [
      `Hi Mama Thess! I'd like to inquire about a cake.`,
      `Name: ${name}`,
      `Contact: ${phone}`,
      `Occasion: ${occasion}`,
      cakeName ? `Design: ${cakeName}` : null,
      `Date needed: ${dateNeeded}`,
      `Guests: ${guests}`,
      notes ? `Notes: ${notes}` : null,
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
          const prepared = buildMessage(e.currentTarget)
          if (prepared) {
            setMessage(prepared)
            setCopied(false)
          }
        }}
      >
        {/* Anti-bot / Honeypot security field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_hp_security_check">Leave this field empty</label>
          <input
            id="_hp_security_check"
            name="_hp_security_check"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <label className="block">
          <span className={labelClass}>Your name</span>
          <input
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className={fieldClass}
            placeholder="Juana Dela Cruz"
          />
        </label>
        <label className="block">
          <span className={labelClass}>Mobile number</span>
          <input
            name="phone"
            required
            type="tel"
            maxLength={20}
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-()]{7,20}"
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
