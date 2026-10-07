import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Heart, Home, Users } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'

export const metadata: Metadata = {
  title: 'About Mama Thess',
  description:
    'Get to know Mama Thess: custom cakes and cupcakes, TESDA certified baking, and available for hire for basic baking workshops and solo or group home kitchen mentoring.',
}

const storyPhotos = [
  {
    src: '/images/about/475792325_1327106465110160_7674935965207638179_n.webp',
    alt: 'Mama Thess in a professional kitchen with baked treats she prepared',
    caption: 'A love of baking, built one batch at a time.',
  },
  {
    src: '/images/about/tesda.webp',
    alt: 'Mama Thess with fellow students and cakes during her TESDA baking studies',
    caption: 'Learning and growing through baking studies.',
  },
  {
    src: '/images/about/teaching.webp',
    alt: 'Mama Thess sharing a cake and baked treats during a baking lesson',
    caption: 'Passing baking skills along to others.',
  },
  {
    src: '/images/about/471676543_1304574714030002_2943984012930345742_n.webp',
    alt: 'Mama Thess visiting a bakery fair and looking at decorated cakes',
    caption: 'Always finding inspiration in the world of baking.',
  },
]

const milestones = [
  {
    icon: Heart,
    title: 'A hobby from the heart',
    description:
      'Mama Thess first started learning to bake for herself. Making cakes was a personal hobby—a creative way to practice, experiment, and share something sweet.',
  },
  {
    icon: GraduationCap,
    title: 'Learning through TESDA',
    description:
      'As her interest in baking grew, she studied baking through TESDA and continued building her skills in the kitchen.',
  },
  {
    icon: BookOpen,
    title: 'Sharing what she learned',
    description:
      'Baking became more than a personal passion. Mama Thess began teaching baking lessons too, sharing her knowledge and encouraging others to learn.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro label="Our story" title="About Mama Thess">
        <p>
          What began as a personal hobby grew into a way to create, teach, and make celebrations sweeter for
          others.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_0.9fr] md:items-center md:py-16">
        <div>
          <p className="label-caps text-xs text-plum/70">A passion that grew</p>
          <h2 className="mt-3 font-script text-4xl text-plum md:text-5xl">
            From home-baking hobby to heartfelt service
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Mama Thess began learning to bake simply because she enjoyed it. She explored making cakes, breads,
              sweets, and snacks as a personal hobby—a chance to practice new skills and bring creative ideas to life.
            </p>
            <p>
              With time and dedication, that hobby grew into a business. Today, she creates customized cakes and
              cupcakes for people celebrating the moments that matter to them.
            </p>
            <p>
              She also studied baking through TESDA and has taught baking lessons, sharing the craft that first
              inspired her.
            </p>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-lilac" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-lilac-soft ring-4 ring-white shadow-xl">
            <Image
              src={storyPhotos[0].src}
              alt={storyPhotos[0].alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="relative mt-4 text-center text-sm text-muted-foreground">
            {storyPhotos[0].caption}
          </figcaption>
        </figure>
      </section>

      <section className="bg-lilac-soft py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-caps text-xs text-plum/70">The journey</p>
            <h2 className="mt-3 font-script text-4xl text-plum md:text-5xl">A little hobby, a lot of heart</h2>
          </div>
          <ol className="mt-9 grid gap-5 md:grid-cols-3">
            {milestones.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="rounded-3xl bg-background p-6 ring-1 ring-plum/10 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-plum text-primary-foreground">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span className="font-script text-4xl text-blush">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-plum">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-7 text-center">
          <p className="label-caps text-xs text-plum/70">Learning and sharing</p>
          <h2 className="mt-3 font-script text-4xl text-plum md:text-5xl">Baking is better when it brings us together</h2>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPhotos.slice(1).map((photo) => (
            <li key={photo.src}>
              <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-plum/10">
                <div className="relative aspect-[4/3] bg-lilac-soft">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, 90vw" className="object-cover" />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* Basic Baking Workshops & Mentoring Section */}
      <section className="bg-gradient-to-b from-white via-lilac-soft/40 to-white py-14 md:py-20 border-y border-plum/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="label-caps inline-block rounded-full bg-plum/10 px-4 py-1.5 text-xs text-plum font-bold">
              Available for Hire & Booking
            </span>
            <h2 className="mt-3 font-script text-4xl text-plum md:text-5xl">
              Learn Basic Baking with Mama Thess
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              Want to learn how to bake hands-on? Mama Thess is available to teach basic baking classes focused on a single selected product—whether you are organizing a community program or looking for solo or group home kitchen mentoring.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Format 1: Invited Workshop Instructor */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-plum/15 bg-white p-7 shadow-lg transition-transform hover:-translate-y-1 md:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-plum text-primary-foreground shadow-md">
                    <Users className="size-7" />
                  </span>
                  <span className="label-caps text-xs rounded-full bg-gold/15 px-3 py-1 font-extrabold text-gold">
                    Group & Organization
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-plum uppercase tracking-tight">
                  Invited Workshop Instructor
                </h3>
                <p className="mt-2 text-sm font-medium text-plum-deep/80">
                  For schools, barangays, youth groups, church communities, or corporate events
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Invite Mama Thess as your guest instructor for baking programs and workshops organized by your team or community.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-plum-deep">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Focused Product:</strong> Master one selected product from scratch (e.g. customized cupcakes, bento cakes, cookies, or sponge cakes).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Structured Hands-on Training:</strong> Step-by-step demonstration, mixing science, oven temperature handling, and decoration techniques.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Flexible Setup:</strong> Conducted at the venue provided by the organizer, tailored to your group size and schedule.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-plum/15">
                <Link
                  href="/contact"
                  className="label-caps flex items-center justify-center gap-2 rounded-full bg-plum py-3 text-center text-sm text-primary-foreground shadow-[0_4px_0_var(--plum-deep)] transition-all hover:bg-plum-deep"
                >
                  Invite Mama Thess to your event
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Format 2: Solo or Group Home Kitchen Mentoring */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-plum/15 bg-white p-7 shadow-lg transition-transform hover:-translate-y-1 md:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-blush text-plum shadow-md">
                    <Home className="size-7" />
                  </span>
                  <span className="label-caps text-xs rounded-full bg-plum/10 px-3 py-1 font-extrabold text-plum">
                    Solo or by Group
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-plum uppercase tracking-tight">
                  Home Kitchen Mentoring
                </h3>
                <p className="mt-2 text-sm font-medium text-plum-deep/80">
                  Solo or small group sessions held at Mama Thess&apos;s home kitchen in Poblacion, Pateros
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A personalized, hands-on mentoring workshop where you bake side-by-side with Mama Thess in her home kitchen. Learn solo for dedicated focus, or book together with friends or family!
                </p>

                <ul className="mt-6 space-y-3 text-sm text-plum-deep">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Choose Your Recipe:</strong> Select the exact cake or pastry product you want to learn and bake together from start to finish.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Solo or Group Guidance:</strong> Learn proper creaming, folding, piping techniques, and troubleshooting at your own comfortable pace.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-plum mt-0.5" />
                    <span><strong>Take Home Your Bakes:</strong> Bring home your finished fresh-baked creation plus personal recipe guidelines and tips.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-plum/15">
                <Link
                  href="/contact"
                  className="label-caps flex items-center justify-center gap-2 rounded-full border-2 border-plum bg-white py-3 text-center text-sm text-plum transition-all hover:bg-lilac-soft"
                >
                  Book solo or group mentoring
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 mb-12 rounded-[2rem] bg-plum px-6 py-10 text-center text-primary-foreground md:mx-auto md:mb-16 md:max-w-6xl md:px-12 md:py-12">
        <p className="font-script text-4xl md:text-5xl">Let&apos;s make something sweet</p>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-primary-foreground/80">
          Have a celebration or want to learn baking? Tell Mama Thess about your cake idea or workshop booking.
        </p>
        <Link
          href="/contact"
          className="label-caps mt-6 inline-flex rounded-full bg-background px-6 py-3 text-sm text-plum transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </Link>
      </section>
    </>
  )
}
