import { NextResponse } from 'next/server'
import { sanitizeInput, sanitizePhone } from '@/lib/utils'

export const runtime = 'edge'

interface InquiryPayload {
  name: string
  phone: string
  occasion: string
  cake?: string
  cakeName?: string
  date: string
  guests: string
  notes?: string
  _hp_security_check?: string
}

export async function POST(request: Request) {
  try {
    const body: InquiryPayload = await request.json()

    // 1. Honeypot check: silently drop bots
    if (body._hp_security_check) {
      return NextResponse.json({ success: true, message: 'Inquiry received' })
    }

    // 2. Defensive Input Sanitization & Validation
    const name = sanitizeInput(body.name, 80)
    const phone = sanitizePhone(body.phone)
    const occasion = sanitizeInput(body.occasion, 50)
    const cakeName = sanitizeInput(body.cakeName || body.cake, 80)
    const dateNeeded = sanitizeInput(body.date, 30)
    const guests = sanitizeInput(body.guests, 10)
    const notes = sanitizeInput(body.notes, 1000)

    if (!name || !phone || !occasion || !dateNeeded || !guests) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Phone, Occasion, Date, Guests).' },
        { status: 400 }
      )
    }

    const referenceId = `MT-${Date.now().toString(36).toUpperCase()}`
    const submittedAt = new Date().toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'mamathessorders@gmail.com'

    // 3. Mock mode fallback if API key is not yet set in environment
    if (!apiKey) {
      console.log('--- [MOCK EMAIL DISPATCH - RESEND_API_KEY not set] ---')
      console.log(`To: ${recipientEmail}`)
      console.log(`Reference: ${referenceId}`)
      console.log(`Customer: ${name} (${phone})`)
      console.log(`Occasion: ${occasion} | Date: ${dateNeeded} | Guests: ${guests}`)
      if (cakeName) console.log(`Cake Design: ${cakeName}`)
      if (notes) console.log(`Notes: ${notes}`)
      console.log('------------------------------------------------------')

      return NextResponse.json({
        success: true,
        referenceId,
        mock: true,
        message: 'Inquiry received (Development mock mode).',
      })
    }

    // 4. Dispatch Email via Resend API
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e0eb; border-radius: 12px; background-color: #fdfafc;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #572044;">
          <h1 style="color: #572044; margin: 0; font-size: 24px;">🎂 New Cake Inquiry</h1>
          <p style="color: #8c7891; margin: 5px 0 0 0; font-size: 14px;">Reference ID: <strong>${referenceId}</strong></p>
        </div>

        <div style="padding: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold; width: 35%;">Customer Name:</td>
              <td style="padding: 10px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold;">Mobile / Contact:</td>
              <td style="padding: 10px 0; color: #222;"><a href="tel:${phone}" style="color: #572044; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold;">Occasion:</td>
              <td style="padding: 10px 0; color: #222;">${occasion}</td>
            </tr>
            ${
              cakeName
                ? `<tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold;">Selected Design:</td>
              <td style="padding: 10px 0; color: #222;">${cakeName}</td>
            </tr>`
                : ''
            }
            <tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold;">Date Needed:</td>
              <td style="padding: 10px 0; color: #222; font-weight: bold; color: #b45309;">${dateNeeded}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold;">Number of Guests:</td>
              <td style="padding: 10px 0; color: #222;">${guests}</td>
            </tr>
            ${
              notes
                ? `<tr>
              <td style="padding: 10px 0; color: #572044; font-weight: bold; vertical-align: top;">Dream Cake Notes:</td>
              <td style="padding: 10px 0; color: #333; background: #fff; padding: 12px; border-radius: 8px; border: 1px solid #e5e0eb;">${notes.replace(/\n/g, '<br/>')}</td>
            </tr>`
                : ''
            }
          </table>
        </div>

        <div style="border-top: 1px solid #e5e0eb; padding-top: 15px; font-size: 12px; color: #8c7891; text-align: center;">
          <p style="margin: 0;">Received on ${submittedAt} via Mama Thess Cakes Website</p>
        </div>
      </div>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mama Thess Website <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: undefined,
        subject: `🎂 New Cake Inquiry: ${name} (${occasion}) - ${dateNeeded}`,
        html: emailHtml,
        text: `New Cake Inquiry\n\nReference: ${referenceId}\nName: ${name}\nPhone: ${phone}\nOccasion: ${occasion}\nDesign: ${cakeName || 'Custom'}\nDate Needed: ${dateNeeded}\nGuests: ${guests}\nNotes: ${notes || 'None'}`,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API Error:', errorText)
      return NextResponse.json(
        { error: 'Failed to deliver notification email. Please reach out to us directly by phone or Facebook.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Inquiry received successfully!',
    })
  } catch (error) {
    console.error('Inquiry submission error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry.' },
      { status: 500 }
    )
  }
}
