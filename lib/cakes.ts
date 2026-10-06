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
    image: '/images/cakes/debuttttt.webp',
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
    image: '/images/cakes/debutt.webp',
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
    image: '/images/cakes/debuttt.webp',
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
    image: '/images/cakes/wedding.webp',
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
    image: '/images/cakes/unicron.webp',
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
    image: '/images/cakes/number cake.webp',
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
    image: '/images/cakes/number cake (2).webp',
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
    image: '/images/cakes/gender reveal.webp',
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
    image: '/images/cakes/baptism.webp',
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
    image: '/images/cakes/birthday.webp',
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
    image: '/images/cakes/boss baby.webp',
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
    image: '/images/cakes/birthdayyy (2).webp',
    priceFrom: 650,
    sizes: '4" bento + 3 cupcakes',
    serves: '2–4',
    leadTime: '2 days',
    description: 'A lunchbox cake with your message plus three swirled cupcakes. Perfect for monthsaries.',
  },
]

export type GalleryPhoto = {
  id: string
  name: string
  theme: ThemeSlug
  image: string
  cake?: Cake
}

const additionalGalleryPhotos: GalleryPhoto[] = [
  { id: 'baptism-detail', name: 'Blue Baptism Cake', theme: 'baby-christening', image: '/images/cakes/baptsim.webp' },
  { id: 'teddy-bear-birthday', name: 'Teddy Bear Birthday Cake', theme: 'milestone', image: '/images/cakes/birthday (2).webp' },
  { id: 'unicorn-birthday', name: 'Unicorn Birthday Cake', theme: 'kids-character', image: '/images/cakes/birthdayyy.webp' },
  { id: 'cartoon-castle', name: 'Fairytale Castle Cake', theme: 'kids-character', image: '/images/cakes/cartoon.webp' },
  { id: 'roblox-birthday', name: 'Roblox Birthday Cake', theme: 'kids-character', image: '/images/cakes/cartoon (2).webp' },
  { id: 'spongebob-birthday', name: 'SpongeBob Birthday Cake', theme: 'kids-character', image: '/images/cakes/cartoonn (2).webp' },
  { id: 'cartoon-birthday', name: 'Character Birthday Cake', theme: 'kids-character', image: '/images/cakes/cartoonn.webp' },
  { id: 'princess-castle', name: 'Princess Castle Cake', theme: 'kids-character', image: '/images/cakes/cartooonnn.webp' },
  { id: 'cocomelon-birthday', name: 'Cocomelon Birthday Cake', theme: 'kids-character', image: '/images/cakes/cocomelon.webp' },
  { id: 'debut-florals', name: 'Floral Debut Cake', theme: 'debut', image: '/images/cakes/debut (2).webp' },
  { id: 'debut-gold', name: 'Gold Debut Cake', theme: 'debut', image: '/images/cakes/debut.webp' },
  { id: 'debut-bow', name: 'Bow Debut Cake', theme: 'debut', image: '/images/cakes/debutttt.webp' },
  { id: 'minecraft-birthday', name: 'Minecraft Birthday Cake', theme: 'kids-character', image: '/images/cakes/game.webp' },
  { id: 'hello-kitty-birthday', name: 'Hello Kitty Birthday Cake', theme: 'kids-character', image: '/images/cakes/hello kitty.webp' },
  { id: 'paw-patrol-birthday', name: 'Paw Patrol Birthday Cake', theme: 'kids-character', image: '/images/cakes/paw patrol.webp' },
  { id: 'safari-birthday', name: 'Safari Birthday Cake', theme: 'kids-character', image: '/images/cakes/safari (2).webp' },
  { id: 'safari-christening', name: 'Safari Christening Cake', theme: 'baby-christening', image: '/images/cakes/safari.webp' },
  { id: 'tiktok-birthday', name: 'TikTok Birthday Cake', theme: 'kids-character', image: '/images/cakes/tiktok.webp' },
  { id: 'construction-birthday', name: 'Construction Birthday Cake', theme: 'kids-character', image: '/images/cakes/construction-birthday.webp' },
  { id: 'pink-baptism', name: 'Pink Baptism Cake', theme: 'baby-christening', image: '/images/cakes/pink-baptism.webp' },
  { id: 'kpop-cupcake-set', name: 'K-pop Cake and Cupcake Set', theme: 'bento-cupcakes', image: '/images/cakes/kpop-cupcake-set.webp' },
  { id: 'anime-character-cake', name: 'Anime Character Cake', theme: 'kids-character', image: '/images/cakes/anime-character-cake.webp' },
  { id: 'celebration-highlights', name: 'Celebration Cake Display', theme: 'debut', image: '/images/cakes/celebration-highlights.webp' },
  { id: 'mothers-day-cake', name: "Mother's Day Cake", theme: 'custom-designer', image: '/images/cakes/mothers-day-cake.webp' },
  { id: 'spiderman-cake', name: 'Spider-Man Birthday Cake', theme: 'kids-character', image: '/images/cakes/spiderman-cake.webp' },
  { id: 'baptism-cake-cupcakes', name: 'Baptism Cake and Cupcakes', theme: 'baby-christening', image: '/images/cakes/baptism-cake-cupcakes.webp' },
  { id: 'minnie-cupcake-set', name: 'Minnie Mouse Cake and Cupcakes', theme: 'kids-character', image: '/images/cakes/minnie-cupcake-set.webp' },
  { id: 'cookie-drip-cake', name: 'Cookie Drip Cake', theme: 'milestone', image: '/images/cakes/cookie-drip-cake.webp' },
  { id: 'donut-theme-cake', name: 'Donut Theme Birthday Cake', theme: 'milestone', image: '/images/cakes/donut-theme-cake.webp' },
  { id: 'golden-50th-cake', name: 'Golden 50th Birthday Cake', theme: 'milestone', image: '/images/cakes/golden-50th-cake.webp' },
  { id: 'pink-roblox-cake', name: 'Roblox Birthday Cake', theme: 'kids-character', image: '/images/cakes/pink-roblox-cake.webp' },
  { id: 'roblox-tier-cake', name: 'Roblox Tiered Birthday Cake', theme: 'kids-character', image: '/images/cakes/roblox-tier-cake.webp' },
  { id: 'race-car-birthday-cake', name: 'Race Car Birthday Cake', theme: 'kids-character', image: '/images/cakes/race-car-birthday-cake.webp' },
  { id: 'kpop-debut-cake', name: 'K-pop Debut Cake', theme: 'debut', image: '/images/cakes/kpop-debut-cake.webp' },
  { id: 'white-wedding-cake', name: 'Classic White Wedding Cake', theme: 'wedding', image: '/images/cakes/white-wedding-cake.webp' },
  { id: 'photo-print-birthday', name: 'Photo Print Birthday Cake', theme: 'milestone', image: '/images/cakes/new cake/new again/470193430_1294552745032199_9184614795322337263_n.webp' },
  { id: 'construction-theme-cake', name: 'Construction Theme Cake', theme: 'kids-character', image: '/images/cakes/new cake/new again/470206885_1294552388365568_4986290336289946899_n.webp' },
  { id: 'blue-tiered-celebration', name: 'Blue Tiered Celebration Cake', theme: 'baby-christening', image: '/images/cakes/new cake/new again/470211619_1294552698365537_8119894095967445895_n.webp' },
  { id: 'safari-tiered-birthday', name: 'Safari Tiered Birthday Cake', theme: 'kids-character', image: '/images/cakes/new cake/new again/470226383_1294552401698900_4039813422010718828_n.webp' },
  { id: 'pink-rosette-photo-cake', name: 'Pink Rosette Photo Cake', theme: 'milestone', image: '/images/cakes/new cake/new again/470230267_1295151631638977_8987998642002404498_n.webp' },
  { id: 'blue-photo-print-birthday', name: 'Blue Photo Print Birthday Cake', theme: 'milestone', image: '/images/cakes/new cake/new again/470564603_1295151604972313_8326887020127337683_n.webp' },
  { id: 'number-three-birthday-cake', name: 'Number 3 Birthday Cake', theme: 'kids-character', image: '/images/cakes/new cake/new again/471412401_1304069570747183_394304464070585717_n.webp' },
  { id: 'golden-crown-birthday-cake', name: 'Golden Crown Birthday Cake', theme: 'milestone', image: '/images/cakes/new cake/new again/471548588_1304069517413855_1104565590921463128_n.webp' },
  { id: 'chocolate-cookie-drip-cake', name: 'Chocolate Cookie Drip Cake', theme: 'milestone', image: '/images/cakes/new cake/new again/471746072_1304069564080517_7049686878888419956_n.webp' },
]

export const galleryPhotos: GalleryPhoto[] = [
  ...cakes.map((cake) => ({
    id: cake.id,
    name: cake.name,
    theme: cake.theme,
    image: cake.image,
    cake,
  })),
  ...additionalGalleryPhotos,
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
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063621528856',
  address: 'Poblacion, Pateros, Metro Manila',
}

export function formatPeso(value: number) {
  return `Php ${new Intl.NumberFormat('en-PH', { maximumFractionDigits: 0 }).format(value)}`
}

export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug)
}
