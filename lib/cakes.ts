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
  priceFrom?: number
  sizes: string
  serves: string
  leadTime: string
  description: string
}

export const cakes: Cake[] = [
  {
    "id": "royal-princess-tiara-debut",
    "name": "Royal Debutante Princess Tiara Cake",
    "theme": "debut",
    "image": "/images/cakes/468050463_1595882761324334_7464788901145443261_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "30–40",
    "leadTime": "7 days",
    "description": "Quilted ivory top tier with silver dragees, blush pink base with silver swirl lace piping, rhinestone borders, and topped with a jeweled ruby tiara for the 18th debutante."
  },
  {
    "id": "lavender-lace-bow-debut",
    "name": "Lavender Lace & Peach Bow Debut Cake",
    "theme": "debut",
    "image": "/images/cakes/57257122_280503609528929_7581190458005520384_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–35",
    "leadTime": "5 days",
    "description": "Two-tier lavender fondant cake wrapped in delicate edible white lace, finished with a statement peach bow and bead border."
  },
  {
    "id": "classic-white-wedding",
    "name": "Classic White Rose Wedding Cake",
    "theme": "wedding",
    "image": "/images/cakes/684324379_1683124866174983_2757970107175365542_n.webp",
    "sizes": "Single tall · 8\"",
    "serves": "20–25",
    "leadTime": "5 days",
    "description": "Textured wave buttercream in pure white, dotted with sugar pearls, fresh white roses with greenery, and an acrylic couple topper."
  },
  {
    "id": "royal-blue-lace-wedding",
    "name": "Royal Blue & White Tiered Wedding Cake",
    "theme": "wedding",
    "image": "/images/cakes/55864979_270201053892518_3299997766368886784_n.webp",
    "sizes": "3 tiers · 6\" + 8\" + 10\"",
    "serves": "70–90",
    "leadTime": "14 days",
    "description": "Grand 3-tier celebration cake in alternating royal blue and white, detailed with royal lace piping, pearl borders, floral base, and bride & groom figurine topper."
  },
  {
    "id": "disney-frozen-ice-castle",
    "name": "Disney Frozen Ice Castle Cake",
    "theme": "kids-character",
    "image": "/images/cakes/468442835_1597190727860204_4423668920996886873_n.webp",
    "sizes": "Sculpted 3D Castle",
    "serves": "35–45",
    "leadTime": "7 days",
    "description": "Handcrafted 3D ice castle with turrets, snowflake details, wooden fondant doors, and toy figurines of Elsa, Anna, Olaf, Kristoff, Sven, and Hans."
  },
  {
    "id": "minecraft-adventure-drip",
    "name": "Minecraft Adventure Drip Cake",
    "theme": "kids-character",
    "image": "/images/cakes/468279740_1597190781193532_2688003829314595270_n.webp",
    "sizes": "Single · 8\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Lush green grass frosting with rich chocolate mud drip, pixel building blocks, and Minecraft character toppers including Steve, diamond sword, Creeper, and TNT."
  },
  {
    "id": "rainbow-unicorn-birthday",
    "name": "Rainbow Pastel Unicorn 2-Tier Cake",
    "theme": "kids-character",
    "image": "/images/cakes/60120324_295925457986744_2229892340854554624_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "28–35",
    "leadTime": "5 days",
    "description": "Color-blocked pastel yellow and turquoise base tier, topped with a unicorn tier featuring sculpted silver twisted horn, rainbow rosettes mane, and sweet eyelashes."
  },
  {
    "id": "golden-50th-milestone-drip",
    "name": "Golden 50th Milestone Black Drip Cake",
    "theme": "milestone",
    "image": "/images/cakes/560402772_1522098132277658_1373986481285053153_n.webp",
    "sizes": "Tall single · 8\"",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Striking black buttercream canvas with shimmering metallic gold ganache drip, gold and black sphere clusters, edible gold chocolate bars, and gold 50 candles."
  },
  {
    "id": "cookies-and-cream-drip",
    "name": "Cookies & Cream Chocolate Ganache Drip Cake",
    "theme": "milestone",
    "image": "/images/cakes/471746072_1304069564080517_7049686878888419956_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Smooth vanilla frosting smothered in glossy dark chocolate drip, piled high with Oreos, KitKats, biscuit sticks, and mini butter cookies."
  },
  {
    "id": "baby-boy-quilted-baptism",
    "name": "Baby Boy Quilted Baptism Cake & Cupcakes",
    "theme": "baby-christening",
    "image": "/images/cakes/470211619_1294552698365537_8119894095967445895_n.webp",
    "sizes": "2 tiers · 6\" + 8\" + Cupcakes",
    "serves": "35–45",
    "leadTime": "6 days",
    "description": "Royal blue quilted fondant base with pearl studs, light blue ribbon accent, baby booties topper, accompanied by fondant-topped christening cupcakes."
  },
  {
    "id": "sleeping-baby-christening",
    "name": "Sleeping Baby Boy Stars Christening Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/186491386_793114328267852_504716876680550043_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Pastel and royal blue two-tier cake with drip details, rocking horse appliqués, golden stars, and a sweet sleeping baby figure nestled in a cloud of frosting."
  },
  {
    "id": "minnie-mouse-cupcake-set",
    "name": "Minnie Mouse 1st Birthday Cake & 12 Cupcakes",
    "theme": "bento-cupcakes",
    "image": "/images/cakes/482017625_1352679832552823_3689559736419557555_n.webp",
    "sizes": "7\" Cake + 12 Cupcakes",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Baby pink ridged buttercream cake with Minnie polka dot number 1 topper, plus a matching box of 12 chocolate cupcakes piped with pink swirl rosettes."
  }
]

export type GalleryPhoto = {
  id: string
  name: string
  theme: ThemeSlug
  image: string
  description?: string
  sizes?: string
  serves?: string
  leadTime?: string
  cake?: Cake
}

const additionalGalleryPhotos: GalleryPhoto[] = [
  {
    "id": "caitlyn-pink-rosette-drip",
    "name": "Pink Rosette Drip Birthday Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/110024561_596454084600545_2047707935062640838_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Strawberry pink ganache drip on smooth white icing, crowned with piped rosettes, pastel pearls, and custom chocolate name lettering."
  },
  {
    "id": "hello-kitty-bow-pink",
    "name": "Hello Kitty Fondant Bow Cake",
    "theme": "kids-character",
    "image": "/images/cakes/119871744_641395753439711_1705419169344394521_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–18",
    "leadTime": "4 days",
    "description": "Delightful pink buttercream cake decorated with a large handcrafted fondant bow, daisies on wire, and a sculpted Hello Kitty figurine."
  },
  {
    "id": "roblox-avatar-blocks",
    "name": "Roblox Character & Building Blocks Cake",
    "theme": "kids-character",
    "image": "/images/cakes/119960405_641395233439763_6632576865518111400_n.webp",
    "sizes": "Single · 7\"",
    "serves": "12–15",
    "leadTime": "4 days",
    "description": "Blue and teal cake featuring a handcrafted 3D Roblox avatar face, 3D Roblox logo, and edible colorful building bricks."
  },
  {
    "id": "cocomelon-watermelon-jj",
    "name": "Cocomelon Watermelon JJ 2nd Birthday Cake",
    "theme": "kids-character",
    "image": "/images/cakes/120040149_641395083439778_2760863873473742161_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "4 days",
    "description": "Signature striped green watermelon cake with JJ face, ladybugs, number 2 candle, and full family character banner."
  },
  {
    "id": "paw-patrol-numeral-five",
    "name": "Paw Patrol Numeral 5 Sculpted Cake",
    "theme": "kids-character",
    "image": "/images/cakes/121257064_655622238683729_6431869169797009592_n.webp",
    "sizes": "Numeral 5 · 10\"",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Carved number 5 cake iced in sky blue with grass edging, red shell border, yellow paw prints, and badges of the rescue pups."
  },
  {
    "id": "paw-patrol-kiel-five",
    "name": "Paw Patrol Adventure Number Cake",
    "theme": "kids-character",
    "image": "/images/cakes/121695427_660998898146063_2485737475516885924_n.webp",
    "sizes": "Numeral 5 · 10\"",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Custom sculpted numeral 5 birthday cake with vibrant paw print appliqués and Chase, Marshall, and Skye badges for Kiel."
  },
  {
    "id": "boss-baby-photo-custom",
    "name": "The Boss Baby Custom Photo Cake",
    "theme": "kids-character",
    "image": "/images/cakes/141324891_728567104722575_3830581988657804097_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Baby blue fondant cake with Boss Baby logo lettering, fondant briefcase and baby bottle, topped with a custom portrait photo of the birthday boy."
  },
  {
    "id": "dinosaur-jurassic-nathel",
    "name": "Cute Dinosaur 3rd Birthday Cake",
    "theme": "kids-character",
    "image": "/images/cakes/144434733_732520737660545_7745264060580748949_n.webp",
    "sizes": "Single · 8\"",
    "serves": "18–22",
    "leadTime": "5 days",
    "description": "Playful pastel blue cake featuring handcrafted fondant triceratops, long neck, bunting flags, and a baby in dinosaur onesie on top."
  },
  {
    "id": "gender-reveal-booties",
    "name": "Boy or Girl Gender Reveal Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/152726518_744359053143380_7389185275441843428_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–20",
    "leadTime": "3 days",
    "description": "Half pink and half blue polka dots with miniature sugar shoes and boy/girl balloon toppers. The colored cake filling stays a secret until slicing!"
  },
  {
    "id": "cocomelon-melon-tv-chaddy",
    "name": "Cocomelon Melon TV Character Cake",
    "theme": "kids-character",
    "image": "/images/cakes/176096473_779498659629419_7392971963624291530_n.webp",
    "sizes": "Single · 7\"",
    "serves": "14–18",
    "leadTime": "4 days",
    "description": "Piped green textured watermelon with TV antennas, pink floral crown, ladybug, and 3D face for Chaddy at 4."
  },
  {
    "id": "minnie-mouse-two-tier",
    "name": "Minnie Mouse 2-Tier Polka Dot Cake",
    "theme": "kids-character",
    "image": "/images/cakes/176845297_779498586296093_4473284508585608585_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Pink and white tiered cake decorated with edible polka dots, red satin ribbon trim, and a Minnie Mouse head topper with mirror Happy Birthday sign."
  },
  {
    "id": "lego-ninjago-warriors",
    "name": "Lego Ninjago 5th Birthday Cake",
    "theme": "kids-character",
    "image": "/images/cakes/468295960_1596561224589821_3862227207343610334_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "4 days",
    "description": "Vibrant blue textured rosette buttercream cake with Ninjago hero toppers (Lloyd, Kai, Jay, Zane, Cole) and custom yellow letters for Red @ 5."
  },
  {
    "id": "tiktok-music-beats",
    "name": "TikTok Music Theme Birthday Cake",
    "theme": "milestone",
    "image": "/images/cakes/468326338_1597190784526865_6336748506472662260_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Lavender frosting cake adorned with musical notes, pink headphones, TikTok logo, stars, and personalized photo topper for Khylee."
  },
  {
    "id": "my-little-pony-rainbow",
    "name": "My Little Pony Candy Drip Cake",
    "theme": "kids-character",
    "image": "/images/cakes/468399944_1597937844452159_3236562731025737402_n.webp",
    "sizes": "Tall single · 7\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Tall pink celebration cake with royal purple drip, candy twist marshmallows, sprinkles, and My Little Pony figures for Abby at 6."
  },
  {
    "id": "photo-sheet-jade",
    "name": "Edible Photo Print Sheet Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/470193430_1294552745032199_9184614795322337263_n.webp",
    "sizes": "Sheet cake · 9\" x 13\"",
    "serves": "25–30",
    "leadTime": "3 days",
    "description": "Rectangular party cake with scalloped cream borders, sugar roses in corners, and full high-resolution edible photo print for Jade."
  },
  {
    "id": "construction-simon-anghel",
    "name": "Construction Trucks Milestone Cake",
    "theme": "kids-character",
    "image": "/images/cakes/470206885_1294552388365568_4986290336289946899_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–20",
    "leadTime": "3 days",
    "description": "Caution yellow cake with crushed cookie rubble, candy gravel, construction cones, and excavator and bulldozer toppers."
  },
  {
    "id": "safari-jungle-alvin",
    "name": "Safari Jungle 2-Tier Cake & Cupcake Tower",
    "theme": "kids-character",
    "image": "/images/cakes/470226383_1294552401698900_4039813422010718828_n.webp",
    "sizes": "2 tiers · 6\" + 8\" + Cupcakes",
    "serves": "35–45",
    "leadTime": "6 days",
    "description": "Mint green jungle themed cake with leafy vines, wooden log nameplate, elephant topper, plus animal cupcakes (lion, giraffe, monkey, hippo)."
  },
  {
    "id": "pink-rosette-photo-cake",
    "name": "Pink Rosette Edible Photo Cake",
    "theme": "milestone",
    "image": "/images/cakes/470230267_1295151631638977_8987998642002404498_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–18",
    "leadTime": "3 days",
    "description": "Ring of piped strawberry pink rosettes with golden sugar dragees encircling an edible photo centerpiece."
  },
  {
    "id": "blue-ruffle-photo-cake",
    "name": "Sky Blue Ruffle Photo Birthday Cake",
    "theme": "milestone",
    "image": "/images/cakes/470564603_1295151604972313_8326887020127337683_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–18",
    "leadTime": "3 days",
    "description": "Playful ruffled sky-blue buttercream border with edible pearls surrounding a personalized high-resolution photo print."
  },
  {
    "id": "little-chef-number-three",
    "name": "Little Chef Numeral Milestone Cake",
    "theme": "milestone",
    "image": "/images/cakes/471412401_1304069570747183_394304464070585717_n.webp",
    "sizes": "Numeral 3 · 10\"",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Carved numeral 3 cake covered in gradient blue rosette piping, finished with miniature cooking utensils, chopping board, and baby chef topper."
  },
  {
    "id": "golden-crown-portrait-cake",
    "name": "Royal Gold Crown & Framed Portrait Cake",
    "theme": "milestone",
    "image": "/images/cakes/471548588_1304069517413855_1104565590921463128_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–35",
    "leadTime": "5 days",
    "description": "Opulent gold-lustered cake with pleated ruffles, gold bows, sugar roses, a framed baby portrait, and crowned with an ornate golden tiara."
  },
  {
    "id": "construction-alexis-five",
    "name": "Under Construction Excavator Drip Cake",
    "theme": "kids-character",
    "image": "/images/cakes/480238775_1337708224049984_3300133304560725305_n.webp",
    "sizes": "Single · 8\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Vibrant yellow cake with dripping chocolate, chocolate malt ball rocks, mini dump trucks, caution signs, and number 5 candle for Alexis."
  },
  {
    "id": "mothers-day-rosette-butterfly",
    "name": "Mother’s Day Floral Rosettes & Butterfly Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/480595807_1337709297383210_3297332605866897673_n.webp",
    "sizes": "Square · 8\" x 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Elegant square cake piped with crimson, pink, and white rosettes, sugar pearls, shimmering gold laser-cut butterfly, and gold acrylic topper."
  },
  {
    "id": "spiderman-city-superhero",
    "name": "Spider-Man City Skyline Birthday Cake",
    "theme": "kids-character",
    "image": "/images/cakes/480678725_1339148010572672_6826797276463615122_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "4 days",
    "description": "Sky blue cake featuring web accents, comic sound bubbles (POW! BOOM! BANG!), high-rise cityscape background, and Spider-Man action toppers."
  },
  {
    "id": "angel-wings-cupcake-set",
    "name": "Baby Angel Wings Christening Cake & 12 Cupcakes",
    "theme": "baby-christening",
    "image": "/images/cakes/481957968_1352679595886180_8883540478752632722_n.webp",
    "sizes": "7\" Cake + 12 Cupcakes",
    "serves": "20–25",
    "leadTime": "4 days",
    "description": "Powder blue cake with sculpted white angel wings, baby stroller, sleeping baby in clouds, stars on wire, and 12 blue swirled cupcakes with gold pearls."
  },
  {
    "id": "princess-jasmine-aladdin",
    "name": "Princess Jasmine & Aladdin Palace Cake",
    "theme": "kids-character",
    "image": "/images/cakes/490126965_1223263129804393_6152482426039865808_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "4 days",
    "description": "Turquoise cake with gold painted rim, purple rosette skirt, white pearls, and palace toppers with Princess Jasmine, Genie, Abu, and magic lamp."
  },
  {
    "id": "red-horse-beer-bottle",
    "name": "Red Horse Beer Celebration Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/493082506_1235232828607423_2203315900901297212_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–18",
    "leadTime": "3 days",
    "description": "Crimson frosted cake with miniature Red Horse beer bottle topper, frothy beer mug, gold stars, and blackboard sign for adult celebrations."
  },
  {
    "id": "kuromi-number-eight",
    "name": "Kuromi Monogram Number 8 Cream Tart Cake",
    "theme": "kids-character",
    "image": "/images/cakes/495569833_1250139977116708_7124454212496436260_n.webp",
    "sizes": "Numeral 8 · 10\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Number 8 tart cake layered with piped pink and purple rosettes, pastel chocolate bars, berries, and Kuromi character cutouts for Chloe."
  },
  {
    "id": "teddy-bear-pink-first",
    "name": "Pink Teddy Bear 2-Tier 1st Birthday Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/495645954_1250140233783349_6822772966444560808_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Two tiers of delicate pink ombre with gold trim, sugar roses, pink pearls, and a handcrafted 3D sugar teddy bear holding her paw."
  },
  {
    "id": "sleeping-baby-girl-pink",
    "name": "Sleeping Baby Girl Pink Baptism Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/495704894_1250139893783383_6436860186068180698_n.webp",
    "sizes": "Single · 8\"",
    "serves": "15–18",
    "leadTime": "4 days",
    "description": "Soft pink ridged buttercream cake with gold rim, white chocolate mini bars, golden dragees, and a handcrafted sleeping baby in pink booties."
  },
  {
    "id": "midnight-galaxy-luxe-drip",
    "name": "Midnight Galaxy Luxe 2-Tier Drip Cake",
    "theme": "debut",
    "image": "/images/cakes/495873537_1250140317116674_3550049240513788387_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "30–35",
    "leadTime": "5 days",
    "description": "Dramatic black galaxy cake with shimmering copper-gold drip, cascading metallic gold and silver bubble spheres, and sleek acrylic cake topper."
  },
  {
    "id": "red-roses-ferrero-drip",
    "name": "Red Roses & Ferrero Rocher Drip Cake",
    "theme": "wedding",
    "image": "/images/cakes/496770510_1253361913461181_2097068748858941061_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "28–35",
    "leadTime": "5 days",
    "description": "Semi-naked 2-tier cake with rich chocolate ganache drip, adorned with fresh scarlet roses, baby’s breath, and golden Ferrero Rocher chocolates."
  },
  {
    "id": "lotus-biscoff-caramel",
    "name": "Lotus Biscoff Caramel Drip Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/512976405_1434097247744414_5609103640365090785_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Whipped vanilla frosting with warm caramelized Biscoff cookie butter drip, cookie crumble crust, whipped cream dollops, and whole crunchy Lotus biscuits."
  },
  {
    "id": "emerald-gold-geode-sail",
    "name": "Emerald Green & Gold Leaf Geode Cake",
    "theme": "milestone",
    "image": "/images/cakes/528724425_1465115467975925_8574315868391754159_n.webp",
    "sizes": "Single tall · 8\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Modern fault-line design with emerald green exterior, 24k edible gold leaf edging, translucent green sugar sail, and golden metallic sphere accents."
  },
  {
    "id": "enchanted-garden-kyla-mae",
    "name": "Enchanted Garden 18th Debut Cake",
    "theme": "debut",
    "image": "/images/cakes/55658731_272847660294524_3480737884334456832_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–35",
    "leadTime": "5 days",
    "description": "Bright sunshine yellow and leaf-green tiered cake decorated with miniature pastel blossom flowers, butterflies on wire, and golden number 18 candles."
  },
  {
    "id": "rustic-farm-windmill",
    "name": "Rustic Farm Windmill Christening Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/55692937_272845790294711_9220392789840232448_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Two-tier country farm cake with rope borders, a rotating red windmill topper, and friendly farm/safari animal figurines for Mharcus Gavin."
  },
  {
    "id": "roblox-girl-pastel-pink",
    "name": "Roblox Girl Pastel Pink Drip 2-Tier Cake",
    "theme": "kids-character",
    "image": "/images/cakes/683585991_1683124726174997_1255365519566475744_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–32",
    "leadTime": "5 days",
    "description": "Pastel pink two-tier cake with white chocolate drip, gummy bears, chocolate bars, Roblox avatars, and custom photo cutouts for a 4th birthday."
  },
  {
    "id": "roblox-girl-ombre-tiered",
    "name": "Roblox Girl Pink & Purple Ombre Tiered Cake",
    "theme": "kids-character",
    "image": "/images/cakes/684351603_1683124672841669_6251342589117069435_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Horizontal ridged texture in pastel pink and lavender purple ombre, green grass rim, Roblox girl avatars, and 3D letters for Fiona @ 4."
  },
  {
    "id": "kpop-demon-hunters-disco",
    "name": "K-Pop Demon Hunters Bronze Disco Cake",
    "theme": "kids-character",
    "image": "/images/cakes/684701006_1683124586175011_3549417783328212591_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–35",
    "leadTime": "5 days",
    "description": "Two-tier metallic bronze cake with miniature mirror disco balls, red disco spheres, musical note, anime figures, and KPOP logo for Zerhy @ 7."
  },
  {
    "id": "cars-lightning-mcqueen",
    "name": "Disney Pixar Cars Lightning McQueen Racetrack Cake",
    "theme": "kids-character",
    "image": "/images/cakes/686301886_1683125062841630_4689085955796124868_n.webp",
    "sizes": "Sheet cake · 9\" x 13\"",
    "serves": "25–30",
    "leadTime": "3 days",
    "description": "Checkered flag edible print sheet cake bordered with red and blue piping, tires, and toy cars featuring Lightning McQueen, Mater, and Dinoco."
  },
  {
    "id": "sleeping-baby-petal-ruffle",
    "name": "Sleeping Baby Girl Petal Ruffle Christening Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/686954546_1683125016174968_1488988556088152132_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–32",
    "leadTime": "5 days",
    "description": "Two-tier christening cake with bottom tier covered in pink petal ruffles, gold ribbon band, golden nameplate, and a sleeping baby girl figurine in a pink tutu."
  },
  {
    "id": "celebration-highlights-display",
    "name": "Mama Thess Grand Celebration Cake Display",
    "theme": "debut",
    "image": "/images/cakes/highlights.webp",
    "sizes": "Custom Display",
    "serves": "50+",
    "leadTime": "7 days",
    "description": "A showcase of signature multi-tiered celebration cakes made with love for milestones, debuts, and grand family gatherings."
  },
  {
    "id": "safari-christening-animal",
    "name": "Sweet Safari Animal Christening Cake",
    "theme": "baby-christening",
    "image": "/images/cakes/688426746_1683124529508350_2632674815318133895_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–30",
    "leadTime": "5 days",
    "description": "Pastel jungle theme with hand-sculpted baby animals, leaf patterns, and customized banner for baptismal celebrations."
  },
  {
    "id": "elegant-tiered-wedding-floral",
    "name": "Grand Floral Tiered Wedding Cake",
    "theme": "wedding",
    "image": "/images/cakes/785147186_1099432416109637_7054650052844277338_n.webp",
    "sizes": "3 tiers · 6\" + 8\" + 10\"",
    "serves": "60–80",
    "leadTime": "10 days",
    "description": "Multi-tiered bridal cake with crisp white finish, romantic cascade of floral blooms, and satin ribbon accents."
  },
  {
    "id": "golden-anniversary-milestone",
    "name": "Golden Anniversary Floral Milestone Cake",
    "theme": "milestone",
    "image": "/images/cakes/87199048_495991734646781_8243125612164677632_n.webp",
    "sizes": "2 tiers · 6\" + 8\"",
    "serves": "25–35",
    "leadTime": "5 days",
    "description": "Celebratory golden jubilee cake with warm floral arrangements, gold bead piping, and anniversary lettering."
  },
  {
    "id": "custom-celebration-portrait",
    "name": "Custom Portrait Celebration Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/90151510_513775799535041_201432888145608704_n.webp",
    "sizes": "Single · 8\"",
    "serves": "16–20",
    "leadTime": "3 days",
    "description": "Handcrafted customized design tailored from your photo references, piped in silky buttercream."
  },
  {
    "id": "bento-cupcake-gift-box",
    "name": "Sweet Bento Cake & Cupcake Gift Box",
    "theme": "bento-cupcakes",
    "image": "/images/cakes/95363530_541068846805736_3964196402652774400_n.webp",
    "sizes": "4\" Bento + 5 Cupcakes",
    "serves": "4–6",
    "leadTime": "2 days",
    "description": "Compact Korean-style bento cake paired with matching swirl-piped cupcakes, ideal for intimate milestones and gifting."
  },
  {
    "id": "deluxe-party-custom-designer",
    "name": "Deluxe Themed Party Cake",
    "theme": "custom-designer",
    "image": "/images/cakes/95479937_541068783472409_1764941566759141376_n.webp",
    "sizes": "Single tall · 8\"",
    "serves": "18–22",
    "leadTime": "4 days",
    "description": "Vibrant custom-decorated party cake with artistic piped borders, colorful sprinkles, and personalized toppers."
  }
]

export const galleryPhotos: GalleryPhoto[] = [
  ...cakes.map((cake) => ({
    id: cake.id,
    name: cake.name,
    theme: cake.theme,
    image: cake.image,
    description: cake.description,
    sizes: cake.sizes,
    serves: cake.serves,
    leadTime: cake.leadTime,
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
  'Basic Baking Workshops (Guest Instructor)',
  'Home Kitchen Mentoring (Solo or Group)',
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
