export type ThemeSlug =
  | 'debut'
  | 'wedding'
  | 'kids-character'
  | 'milestone'
  | 'baby-christening'
  | 'custom-designer'
  | 'bento-cupcakes'

export type Theme = {
  slug: ThemeSlug
  name: string
  blurb: string
}

export const themes: Theme[] = [
  { slug: 'debut', name: 'Debut', blurb: 'Tiaras, butterflies and the big 18.' },
  { slug: 'wedding', name: 'Wedding', blurb: 'Tiered, pearled and topped with the two of you.' },
  { slug: 'kids-character', name: 'Kids & Character', blurb: 'Ponies, unicorns, favorite heroes.' },
  { slug: 'milestone', name: 'Milestone & Money Pull', blurb: 'For 40th, 60th, and every surprise in between.' },
  { slug: 'baby-christening', name: 'Baby & Baptismal', blurb: 'Gender reveals and first blessings.' },
  { slug: 'custom-designer', name: 'Custom & Designer', blurb: 'Handbags, portraits, anything you can show us.' },
  { slug: 'bento-cupcakes', name: 'Bento & Cupcakes', blurb: 'Small, sweet, and same-week friendly.' },
]

export type Cake = {
  id: string
  name: string
  theme: ThemeSlug
  image: string
  priceFrom: number
  sizes: string
  serves: string
  leadTime: string
  description: string
}

export const cakes: Cake[] = [
  {
    id: 'princess-tiara-debut',
    name: 'Princess Tiara Debut',
    theme: 'debut',
    image: '/images/cakes/debut-crown.png',
    priceFrom: 4500,
    sizes: '2 tiers · 6" + 9"',
    serves: '35–45',
    leadTime: '7 days',
    description: 'Quilted powder-blue top tier, silver swirl piping and a jeweled tiara for the debutante.',
  },
  {
    id: 'butterfly-blush-18',
    name: 'Butterfly Blush 18',
    theme: 'debut',
    image: '/images/cakes/butterfly-pink.png',
    priceFrom: 2800,
    sizes: 'Tall single · 8"',
    serves: '20–25',
    leadTime: '4 days',
    description: 'Ridged pink buttercream with gold-flecked butterflies and a rose gold number topper.',
  },
  {
    id: 'petal-ruffle-kawaii',
    name: 'Petal Ruffle Kawaii',
    theme: 'debut',
    image: '/images/cakes/kawaii-floral.png',
    priceFrom: 3600,
    sizes: '2 tiers · 6" + 8"',
    serves: '30–35',
    leadTime: '5 days',
    description: 'Peach ruffle petals, blushing little faces and a crown of fresh-looking sugar roses.',
  },
  {
    id: 'forever-and-always',
    name: 'Forever & Always',
    theme: 'wedding',
    image: '/images/cakes/wedding-couple.png',
    priceFrom: 7500,
    sizes: '3 tiers · 6" + 8" + 10"',
    serves: '70–90',
    leadTime: '14 days',
    description: 'Periwinkle tiers, pearl borders, royal lace and a custom chibi couple topper.',
  },
  {
    id: 'pony-rainbow-drip',
    name: 'Pony Rainbow Drip',
    theme: 'kids-character',
    image: '/images/cakes/pony-drip.png',
    priceFrom: 2600,
    sizes: 'Tall single · 7"',
    serves: '18–22',
    leadTime: '5 days',
    description: 'Purple drip, candy twists and hand-sculpted pony figures your little one can keep.',
  },
  {
    id: 'golden-sixty-pull',
    name: 'Golden Sixty Money Pull',
    theme: 'milestone',
    image: '/images/cakes/money-pull.png',
    priceFrom: 3200,
    sizes: 'Single · 8"',
    serves: '20–25',
    leadTime: '4 days',
    description: 'White and gold with chrysanthemums and a hidden money-pull pocket. Bring your bills, we roll them.',
  },
  {
    id: 'number-twenty-one',
    name: 'Number & Letter Cake',
    theme: 'milestone',
    image: '/images/cakes/letter.png',
    priceFrom: 2400,
    sizes: '2 numerals · 10" each',
    serves: '25–30',
    leadTime: '3 days',
    description: 'Any number or initials, layered with cream kisses, macarons, meringues and berries.',
  },
  {
    id: 'little-surprise-reveal',
    name: 'Little Surprise Reveal',
    theme: 'baby-christening',
    image: '/images/cakes/gender-reveal.png',
    priceFrom: 2200,
    sizes: 'Single · 7"',
    serves: '15–20',
    leadTime: '3 days',
    description: 'Half pink, half blue outside. The inside color stays sealed until you cut it.',
  },
  {
    id: 'little-angel-baptismal',
    name: 'Little Angel Baptismal',
    theme: 'baby-christening',
    image: '/images/cakes/baptismal.png',
    priceFrom: 3800,
    sizes: '2 tiers · 6" + 8"',
    serves: '30–35',
    leadTime: '6 days',
    description: 'Pale blue and white with sugar roses, a gold cross and a sleeping angel figure.',
  },
  {
    id: 'luxe-handbag',
    name: 'Luxe Handbag Sculpt',
    theme: 'custom-designer',
    image: '/images/cakes/handbag.png',
    priceFrom: 5500,
    sizes: 'Sculpted + 8" base',
    serves: '35–40',
    leadTime: '10 days',
    description: 'A carved handbag, sugar heel and pearl strand. Tell us her favorite bag and we will match it.',
  },
  {
    id: 'portrait-minimalist',
    name: 'Portrait Minimalist',
    theme: 'custom-designer',
    image: '/images/cakes/portrait-minimal.png',
    priceFrom: 1900,
    sizes: 'Single · 6"',
    serves: '10–12',
    leadTime: '3 days',
    description: 'Clean cream frosting with a hand-piped line portrait from any photo you send.',
  },
  {
    id: 'bento-and-cupcake-set',
    name: 'Bento + Cupcake Set',
    theme: 'bento-cupcakes',
    image: '/images/cakes/bento-cupcakes.png',
    priceFrom: 650,
    sizes: '4" bento + 3 cupcakes',
    serves: '2–4',
    leadTime: '2 days',
    description: 'A lunchbox cake with your message plus three swirled cupcakes. Perfect for monthsaries.',
  },
]

export const services = [
  'Customized Cakes',
  'Portrait Minimalist Cakes',
  'Money Pulling Cakes',
  'Debut Cakes',
  'Character Cakes',
  'Bento Cakes & Cupcakes',
  'Gender-Reveal Cakes',
  'Letter Cakes',
  'Wedding Cakes',
  'Baptismal Cakes',
]

export const shop = {
  name: 'Mama Thess Cakes and Pastries Shop',
  phoneDisplay: '0939 126 6821',
  phoneHref: '+639391266821',
  facebookName: 'Mama Thess Cakes and Pastries Shop',
  facebookUrl:
    'https://www.facebook.com/search/top?q=Mama%20Thess%20Cakes%20and%20Pastries%20Shop',
  address: 'Poblacion, Pateros, Metro Manila',
}

export function formatPeso(value: number) {
  return `Php ${new Intl.NumberFormat('en-PH', { maximumFractionDigits: 0 }).format(value)}`
}

export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug)
}
