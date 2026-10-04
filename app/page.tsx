import { Hero } from '@/components/home/hero'
import { WeAlsoAccept } from '@/components/home/we-also-accept'
import { ThemeShelf } from '@/components/home/theme-shelf'
import { HowToBook } from '@/components/home/how-to-book'
import { ContactStrip } from '@/components/home/contact-strip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WeAlsoAccept />
      <ThemeShelf />
      <HowToBook />
      <ContactStrip />
    </>
  )
}
