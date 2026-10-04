import { IcingEdge, SectionLabel, Sparkle } from '@/components/decor'

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="bokeh relative overflow-hidden">
      <Sparkle className="absolute right-[10%] top-8 size-5 text-white" />
      <Sparkle className="absolute left-[6%] bottom-10 size-3 text-gold" />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 md:pb-16 md:pt-16">
        <SectionLabel className="text-plum-deep">{label}</SectionLabel>
        <h1 className="mt-3 font-script text-5xl text-plum drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] md:text-7xl">
          {title}
        </h1>
        {children && <div className="mt-4 max-w-2xl text-lg leading-relaxed text-plum-deep/80">{children}</div>}
      </div>
      <div className="h-2 bg-plum" />
      <IcingEdge className="bg-background text-plum" />
    </section>
  )
}
