'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 border-b border-plum/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="size-10 md:size-12" />
          <span className="flex flex-col leading-none">
            <span className="font-script text-2xl text-plum md:text-[1.7rem]">Mama Thess</span>
            <span className="label-caps text-[0.6rem] text-plum-deep/70">Cakes &amp; Pastries</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'label-caps rounded-full px-4 py-2 text-sm text-plum-deep/80 transition-colors hover:text-plum',
                isActive(link.href) && 'bg-lilac-soft text-plum',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="label-caps ml-2 rounded-full bg-plum px-5 py-2.5 text-sm text-primary-foreground shadow-[0_3px_0_var(--plum-deep)] transition-transform hover:-translate-y-0.5"
          >
            Book a cake
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-plum hover:bg-lilac-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-plum/10 bg-background px-4 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'label-caps block border-b border-dashed border-plum/15 py-3.5 text-plum-deep/80',
                    isActive(link.href) && 'text-plum',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="label-caps mt-4 block rounded-full bg-plum py-3 text-center text-sm text-primary-foreground"
          >
            Book a cake
          </Link>
        </nav>
      )}
    </header>
  )
}
