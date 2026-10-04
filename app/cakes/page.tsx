import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { ThemeFilter } from '@/components/cakes/theme-filter'
import { CakeCard } from '@/components/cakes/cake-card'
import { cakes, getTheme, themes } from '@/lib/cakes'

export const metadata: Metadata = {
  title: 'Cakes by Theme',
  description: 'Debut, wedding, character, money-pulling, baptismal, bento and custom cakes from Mama Thess in Pateros.',
}

export default async function CakesPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>
}) {
  const { theme: themeParam } = await searchParams
  const active = themeParam ? getTheme(themeParam) : undefined
  const groups = active ? [active] : themes

  return (
    <>
      <PageIntro label="Our cakes" title="Cakes by theme">
        <p>
          Every price is a starting point for the design shown. Change the colors, the name, the topper, the
          flavor. That&apos;s what custom is for.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <ThemeFilter active={active?.slug} />

        <div className="mt-10 space-y-16">
          {groups.map((theme) => {
            const list = cakes.filter((c) => c.theme === theme.slug)
            return (
              <section key={theme.slug} aria-labelledby={`theme-${theme.slug}`}>
                <div className="flex flex-col gap-1 border-b-2 border-dashed border-plum/15 pb-4 md:flex-row md:items-baseline md:justify-between">
                  <h2 id={`theme-${theme.slug}`} className="text-3xl font-extrabold uppercase text-plum">
                    {theme.name}
                  </h2>
                  <p className="text-muted-foreground">{theme.blurb}</p>
                </div>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((cake) => (
                    <li key={cake.id}>
                      <CakeCard cake={cake} />
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
