import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { GalleryGrid } from '@/components/gallery/gallery-grid'

export const metadata: Metadata = {
  title: 'Cake Gallery',
  description: 'A look at debut, wedding, character, money-pull and baptismal cakes made by Mama Thess.',
}

export default function GalleryPage() {
  return (
    <>
      <PageIntro label="Gallery" title="Fresh from Mama's table">
        <p>Tap any cake to see it up close. Like one? Ask for it, or ask for it in your colors.</p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <GalleryGrid />
      </div>
    </>
  )
}
