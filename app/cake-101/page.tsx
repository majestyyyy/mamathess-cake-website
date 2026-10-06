import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import { CakeSlice, Clock3, Egg, Layers3, Paintbrush, Printer, Scale, Snowflake, Sparkles, Thermometer } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'

export const metadata: Metadata = {
  title: 'Cake 101',
  description: 'A sweet little guide to cake, baking science, icing, and edible decorations.',
}

type Trivia = {
  icon: LucideIcon
  title: string
  description: string
  fact: string
}

const bakingTrivia: Trivia[] = [
  {
    icon: Scale,
    title: 'Baking loves a good measure',
    description:
      'Baking is a little like delicious chemistry. Measuring ingredients carefully helps keep the balance between structure, moisture, and lift.',
    fact: 'A kitchen scale measures ingredients by weight, which is often more consistent than using cups.',
  },
  {
    icon: Thermometer,
    title: 'Preheating is part of the recipe',
    description:
      'A cake needs the oven to be at the right temperature when it goes in. An oven that is still warming up can change how quickly the batter sets and rises.',
    fact: 'The temperature dial and the actual oven temperature can differ, so an oven thermometer can be handy.',
  },
  {
    icon: Egg,
    title: 'Room-temperature ingredients mix more smoothly',
    description:
      'Eggs and dairy that are not very cold tend to blend into cake batter more evenly. That helps the ingredients come together into a smooth mixture.',
    fact: '“Room temperature” means cool to the touch—not warm or left out for hours.',
  },
  {
    icon: Sparkles,
    title: 'Baking soda and baking powder have different jobs',
    description:
      'Both help baked goods rise by creating gas bubbles in the batter. Baking soda needs an acidic ingredient to react, while baking powder includes an acid in its mix.',
    fact: 'They are not always interchangeable; each recipe is balanced for the one it uses.',
  },
  {
    icon: Clock3,
    title: 'A cake needs time to cool',
    description:
      'Freshly baked cake is delicate. Letting it cool before decorating helps it firm up, so icing is less likely to melt or slide around.',
    fact: 'Patience is a real baking tool—especially before frosting.',
  },
]

const cakeTrivia: Trivia[] = [
  {
    icon: CakeSlice,
    title: 'There is more than one kind of cake',
    description:
      'Sponge cakes get much of their airy texture from whipped eggs. Butter cakes are tender and rich, while chiffon cakes combine oil with whipped egg whites for a light crumb.',
    fact: 'The recipe and mixing method both help decide a cake’s texture.',
  },
  {
    icon: Layers3,
    title: 'Layers make room for filling',
    description:
      'A layered cake stacks two or more cakes with filling—such as buttercream, ganache, or jam—between them. Each slice gets a lovely mix of cake and filling.',
    fact: 'The filling also helps hold the layers together.',
  },
  {
    icon: Paintbrush,
    title: 'Fondant and buttercream feel different',
    description:
      'Buttercream is soft and spreadable, and it can be piped into borders and flowers. Fondant is pliable, so it can be rolled smooth over a cake or shaped into decorations.',
    fact: 'One is fluffy and creamy; the other is smooth and moldable.',
  },
  {
    icon: Printer,
    title: 'Edible prints use food-safe materials',
    description:
      'An edible image is printed with food-safe colors onto an edible sheet, often made from icing or wafer paper, then placed on a cake as decoration.',
    fact: 'It is not ordinary paper printed with regular ink.',
  },
  {
    icon: Snowflake,
    title: 'A crumb coat keeps things tidy',
    description:
      'A crumb coat is a thin first layer of icing that catches loose crumbs. After it chills and firms up, a final coat can go on more smoothly.',
    fact: 'It is like a neat little base layer for the finished frosting.',
  },
]

function TriviaSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  tinted = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro: string
  items: Trivia[]
  tinted?: boolean
}) {
  return (
    <section id={id} className={tinted ? 'scroll-mt-8 bg-lilac-soft py-14 md:py-20' : 'scroll-mt-8 py-14 md:py-20'}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-caps text-xs text-plum/70">{eyebrow}</p>
            <h2 className="mt-2 font-script text-4xl text-plum md:text-5xl">{title}</h2>
          </div>
          <p className="max-w-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title: itemTitle, description, fact }, index) => (
            <li
              key={itemTitle}
              className={`relative overflow-hidden rounded-3xl border border-plum/10 p-6 ${
                index === 0 ? 'bg-plum text-primary-foreground' : 'bg-background'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-11 items-center justify-center rounded-2xl ${
                    index === 0 ? 'bg-white/15 text-blush' : 'bg-blush/30 text-plum'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className={`font-script text-4xl ${index === 0 ? 'text-white/30' : 'text-plum/20'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className={`mt-5 text-xl font-extrabold ${index === 0 ? 'text-white' : 'text-plum'}`}>
                {itemTitle}
              </h3>
              <p className={`mt-2 leading-relaxed ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
                {description}
              </p>
              <p
                className={`mt-5 border-t pt-4 text-sm leading-relaxed ${
                  index === 0 ? 'border-white/20 text-white/90' : 'border-plum/10 text-plum-deep'
                }`}
              >
                <span className="font-bold">Little fact: </span>
                {fact}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function Cake101Page() {
  return (
    <>
      <PageIntro label="Just for fun" title="Cake 101">
        <p>
          Step into the sweet side of baking. Explore the tiny bits of science and decorating know-how behind a
          slice of cake.
        </p>
      </PageIntro>

      <nav aria-label="Cake 101 topics" className="border-b border-plum/10 bg-background">
        <ul className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 py-4">
          <li>
            <a
              href="#baking"
              className="label-caps block whitespace-nowrap rounded-full bg-lilac-soft px-4 py-2 text-xs text-plum transition-colors hover:bg-lilac"
            >
              Baking basics
            </a>
          </li>
          <li>
            <a
              href="#cake-facts"
              className="label-caps block whitespace-nowrap rounded-full bg-blush/25 px-4 py-2 text-xs text-plum transition-colors hover:bg-blush/40"
            >
              Cake &amp; decorating
            </a>
          </li>
        </ul>
      </nav>

      <TriviaSection
        id="baking"
        eyebrow="From the mixing bowl"
        title="Baking has its own little science"
        intro="A few behind-the-scenes details that help turn simple ingredients into a soft, lovely bake."
        items={bakingTrivia}
      />
      <TriviaSection
        id="cake-facts"
        eyebrow="The fun finishing touches"
        title="Layers, icing &amp; cake art"
        intro="Get to know some of the textures, techniques, and decorations that make every cake feel special."
        items={cakeTrivia}
        tinted
      />
      <p className="mx-auto max-w-6xl px-4 pb-12 text-center text-sm text-muted-foreground md:pb-16">
        Just for fun and learning—Cake 101 is not a menu or a list of shop offerings.
      </p>
    </>
  )
}
