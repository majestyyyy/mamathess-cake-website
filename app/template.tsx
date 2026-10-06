import { Logo } from '@/components/logo'

export default function PageTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="page-transition-cover" aria-hidden="true">
        <div className="page-transition-brand">
          <Logo className="size-24 shadow-xl ring-4 ring-white md:size-28" priority />
          <span className="font-script text-4xl text-plum md:text-5xl">Mama Thess</span>
          <span className="label-caps text-xs text-plum-deep/70">Cakes &amp; Pastries</span>
        </div>
      </div>
      {children}
    </>
  )
}
