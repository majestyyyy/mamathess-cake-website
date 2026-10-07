'use client'

import { useState } from 'react'
import { Check, Copy, Loader2, MessageSquare, Send, Sparkles } from 'lucide-react'
import { services, shop } from '@/lib/cakes'
import { sanitizeInput, sanitizePhone } from '@/lib/utils'

type Option = { id: string; name: string }

const fieldClass =
  'mt-1.5 w-full rounded-2xl border-2 border-plum/15 bg-white px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-plum'
const labelClass = 'label-caps text-xs text-plum-deep'

export function InquiryForm({ cakes, defaultCake }: { cakes: Option[]; defaultCake?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedReference, setSubmittedReference] = useState<string | null>(null)
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const honeypot = data.get('_hp_security_check')
    if (honeypot) {
      // Silently finish for bots
      setIsSubmitting(false)
      setSubmittedReference('MT-OK')
      return
    }

    const name = sanitizeInput(data.get('name'), 80)
    const phone = sanitizePhone(data.get('phone'))
    const occasion = sanitizeInput(data.get('occasion'), 50)
    const cakeId = sanitizeInput(data.get('cake'), 50)
    const cakeName = cakes.find((c) => c.id === cakeId)?.name
    const dateNeeded = sanitizeInput(data.get('date'), 30)
    const guests = sanitizeInput(data.get('guests'), 10)
    const notes = sanitizeInput(data.get('notes'), 800)

    const summaryMessage = [
      `Hi Mama Thess! I'd like to inquire about a cake.`,
      `Name: ${name}`,
      `Contact: ${phone}`,
      `Occasion: ${occasion}`,
      cakeName ? `Design: ${cakeName}` : null,
      `Date needed: ${dateNeeded}`,
      `Guests: ${guests}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          occasion,
          cake: cakeId,
          cakeName,
          date: dateNeeded,
          guests,
          notes,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry.')
      }

      setSubmittedReference(result.referenceId || `MT-${Date.now().toString(36).toUpperCase()}`)
      setSubmittedMessage(summaryMessage)
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to send inquiry.'
      setSubmitError(errorMsg)
      setSubmittedMessage(summaryMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function copyMessage() {
    if (!submittedMessage) return
    await navigator.clipboard.writeText(submittedMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Success Confirmation Screen
  if (submittedReference) {
    return (
      <div className="rounded-[2rem] bg-lilac-soft p-6 md:p-8" aria-live="polite">
        <div className="flex items-center gap-2 text-plum">
          <Sparkles className="size-6 text-gold" />
          <span className="label-caps text-xs text-gold">Inquiry Submitted</span>
        </div>
        <h2 className="mt-1 text-3xl font-extrabold uppercase text-plum">Thank You!</h2>
        <p className="mt-2 text-plum-deep leading-relaxed">
          We&apos;ve received your inquiry (Ref: <strong>{submittedReference}</strong>). Mama Thess will review your details and contact you via phone or SMS within 24 hours to confirm availability and quotation.
        </p>

        {submittedMessage && (
          <div className="mt-6 rounded-3xl border-2 border-plum bg-white p-5">
            <p className="label-caps text-xs text-plum-deep/70">Your inquiry details</p>
            <pre className="mt-3 whitespace-pre-wrap font-sans leading-relaxed text-plum-deep text-sm">
              {submittedMessage}
            </pre>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={`sms:${shop.phoneHref}?body=${encodeURIComponent(
                  `[Ref: ${submittedReference}]\n${submittedMessage}`
                )}`}
                className="label-caps flex items-center justify-center gap-2 rounded-full bg-plum py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="size-4" />
                Also send via SMS
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
                {copied ? 'Copied! Open Facebook' : 'Follow up on Facebook'}
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setSubmittedReference(null)
            setSubmittedMessage(null)
            setSubmitError(null)
          }}
          className="mt-6 text-sm font-semibold text-plum underline hover:text-plum-deep"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-[2rem] bg-lilac-soft p-6 md:p-8">
      <h2 className="text-3xl font-extrabold uppercase text-plum">Cake inquiry</h2>
      <p className="mt-1 text-muted-foreground">
        Fill this in and we&apos;ll get back to you with pricing and availability.
      </p>

      {submitError && (
        <div className="mt-4 rounded-2xl border-2 border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-bold">Notice</p>
          <p className="mt-0.5">{submitError}</p>
          {submittedMessage && (
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`sms:${shop.phoneHref}?body=${encodeURIComponent(submittedMessage)}`}
                className="label-caps inline-flex items-center gap-1.5 rounded-full bg-plum px-3 py-1.5 text-xs text-white"
              >
                <MessageSquare className="size-3.5" />
                Send via Text / SMS instead
              </a>
              <button
                type="button"
                onClick={async () => {
                  await copyMessage()
                  window.open(shop.facebookUrl, '_blank', 'noopener,noreferrer')
                }}
                className="label-caps inline-flex items-center gap-1.5 rounded-full border border-plum px-3 py-1.5 text-xs text-plum"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                Send on Facebook
              </button>
            </div>
          )}
        </div>
      )}

      <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Occasion</span>
          <select name="occasion" required defaultValue="" className={fieldClass} disabled={isSubmitting}>
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
          <select name="cake" defaultValue={defaultCake ?? ''} className={fieldClass} disabled={isSubmitting}>
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
          <input name="date" type="date" required min={today} className={fieldClass} disabled={isSubmitting} />
        </label>
        <label className="block">
          <span className={labelClass}>Number of guests</span>
          <input
            name="guests"
            type="number"
            min={1}
            max={500}
            required
            className={fieldClass}
            placeholder="30"
            disabled={isSubmitting}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Tell us about your dream cake</span>
          <textarea
            name="notes"
            rows={4}
            maxLength={800}
            className={fieldClass}
            placeholder="Colors, flavor, name to write, topper, any reference photo you'll send..."
            disabled={isSubmitting}
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="label-caps flex items-center justify-center gap-2 rounded-full bg-plum py-3.5 text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:col-span-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending inquiry...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit inquiry to Mama Thess
            </>
          )}
        </button>
      </form>
    </div>
  )
}

