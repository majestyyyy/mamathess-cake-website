'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Mascot } from '@/components/Mascot'

type PageMessages = Record<string, string[]>

const PAGE_MESSAGES: PageMessages = {
  '/': [
    'Fresh bakes, sweet vibes! Boop my nose to start party mode 🐾',
    'Custom cakes made with love in Pateros. Give me a boop! 🍰',
    'Thinking about cake? Boop me to make your wish official ✨',
    'Buttercream makes everything better. Boop my nose for good vibes! 🐾',
  ],
  '/about': [
    'Meet Mama Thess! Boop me if you believe home-baked is best 💖',
    'From our Pateros kitchen to your table. Boop my nose to say hi! 🎂',
    'Behind every great cake is a secret pinch of love... and a boop! 🐾',
    'Years of passion, one sweet bite at a time. Give me a boop! ✨',
  ],
  '/gallery': [
    'So many pretty tiers! Boop me to pick your dream cake 🎨',
    'Drooling over the designs? Boop my nose to taste test! 🤤',
    'Butterfly wings or gold drips? Boop me to cast your vote! ✨',
    'Every cake is a showstopper. Give me a boop if you’re inspired! 🍰',
  ],
  '/cake-101': [
    'Cake class in session! Boop me if you did your reading 🎓',
    'Fondant vs boiled icing? Boop my nose for the inside scoop! 🧁',
    'How to cut a tall cake: carefully, then boop me for a slice! 🍰',
    'Tiered cake physics are real! Boop me for extra baking wisdom 🧠',
  ],
  '/contact': [
    'Ready to save your date? Boop me while you fill out the form! 💌',
    'Got a wild cake sketch? Boop my nose and send it over! 🎨',
    'Mama Thess is ready for your order. Give me a boop for fast replies! 🐾',
    'The sweetest celebrations start with a message. Boop me to lock it in! 🎂',
  ],
  '/cakes': [
    'So many flavors, so little time! Boop my nose to pick one 🍓',
    'Bento cake or grand tiered masterpiece? Boop me to choose! 🎂',
    'Every design can be customized. Boop me to create yours! ✨',
  ],
}

const DEFAULT_MESSAGES = [
  'Life is sweet, eat cake! Boop my nose for good vibes 🐾',
  'Mama Thess cakes are baked with love in Pateros. Boop me! 🍰',
  'Got cake on your mind? Boop my nose to celebrate ✨',
]

const BOOP_REACTIONS = [
  'Purr! You booped me! 100% sweetness unlocked! 💖',
  'Aww tickles! Extra sprinkles for you! ✨',
  'Boop accepted! Now go order that slice! 🍰',
  'Hehe! Too cute to resist, right? 🐾',
]

function getMessagesForPath(pathname: string): string[] {
  if (PAGE_MESSAGES[pathname]) {
    return PAGE_MESSAGES[pathname]
  }
  // Match prefix if dynamic route or query
  for (const key of Object.keys(PAGE_MESSAGES)) {
    if (key !== '/' && pathname.startsWith(key)) {
      return PAGE_MESSAGES[key]
    }
  }
  return DEFAULT_MESSAGES
}

export function CakeMascotCorner() {
  const pathname = usePathname()
  const messages = getMessagesForPath(pathname)

  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState(messages[0] ?? DEFAULT_MESSAGES[0])
  const [fade, setFade] = useState(true)
  const boopTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isBoopedRef = useRef(false)

  // Update messages when route changes
  useEffect(() => {
    isBoopedRef.current = false
    if (boopTimerRef.current) clearTimeout(boopTimerRef.current)
    const currentList = getMessagesForPath(pathname)
    setIndex(0)
    setFade(false)
    const timeout = setTimeout(() => {
      setDisplayText(currentList[0] ?? DEFAULT_MESSAGES[0])
      setFade(true)
    }, 150)
    return () => clearTimeout(timeout)
  }, [pathname])

  // Automatically cycle through page messages every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (isBoopedRef.current) return
      const currentList = getMessagesForPath(pathname)
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => {
          const next = (prev + 1) % currentList.length
          setDisplayText(currentList[next])
          return next
        })
        setFade(true)
      }, 200)
    }, 7000)

    return () => clearInterval(timer)
  }, [pathname])

  const handleBoop = () => {
    isBoopedRef.current = true
    if (boopTimerRef.current) clearTimeout(boopTimerRef.current)

    const randomReaction = BOOP_REACTIONS[Math.floor(Math.random() * BOOP_REACTIONS.length)]
    setFade(false)
    setTimeout(() => {
      setDisplayText(randomReaction)
      setFade(true)
    }, 120)

    // Resume normal page rotation after 3.5s
    boopTimerRef.current = setTimeout(() => {
      isBoopedRef.current = false
      const currentList = getMessagesForPath(pathname)
      setFade(false)
      setTimeout(() => {
        setDisplayText(currentList[index % currentList.length])
        setFade(true)
      }, 150)
    }, 3500)
  }

  return (
    <aside
      aria-label="Bakery cat mascot"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end pointer-events-none select-none"
    >
      {/* Clean Speech Bubble without titles or extra buttons */}
      <div className="pointer-events-auto relative mb-1.5 max-w-[220px] sm:max-w-[260px] rounded-2xl border border-plum/20 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-plum/10 backdrop-blur-md transition-all duration-300">
        <p
          className={`text-xs sm:text-[13px] font-medium leading-snug text-plum-deep transition-opacity duration-200 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {displayText}
        </p>

        {/* Speech Bubble Tail pointing down-right toward the mascot */}
        <div
          aria-hidden="true"
          className="absolute -bottom-2 right-8 size-0 border-x-6 border-x-transparent border-t-8 border-t-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]"
        />
      </div>

      {/* The Mascot */}
      <div className="pointer-events-auto relative -mr-1">
        <Mascot
          directions="/mascots/orange-cat-directions.webp"
          reactions="/mascots/orange-cat-reactions.webp"
          size={115}
          label="Mama Thess bakery cat mascot"
          onBoop={handleBoop}
          className="drop-shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        />
      </div>
    </aside>
  )
}
