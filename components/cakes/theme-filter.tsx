import Link from 'next/link'
import { themes } from '@/lib/cakes'
import { cn } from '@/lib/utils'

export function ThemeFilter({ active }: { active?: string }) {
  const options = [{ slug: undefined, name: 'All themes' }, ...themes]

  return (
    <nav aria-label="Filter by theme" className="-mx-4 overflow-x-auto px-4">
      <ul className="flex w-max gap-2">
        {options.map((opt) => {
          const isActive = opt.slug === active
          return (
            <li key={opt.name}>
              <Link
                href={opt.slug ? `/cakes?theme=${opt.slug}` : '/cakes'}
                scroll={false}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'label-caps block rounded-full border-2 px-4 py-2 text-xs transition-colors',
                  isActive
                    ? 'border-plum bg-plum text-primary-foreground'
                    : 'border-plum/20 bg-white text-plum-deep hover:border-plum',
                )}
              >
                {opt.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
