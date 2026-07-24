// Content data voor BrouwersMode.nl
'use strict';

const SITE = {
  name: 'BrouwersMode',
  domain: 'brouwersmode.nl',
  base: 'https://brouwersmode.nl',
  tagline: 'De Nederlandse modegids',
  email: 'info@BrouwersMode.nl',
  description: 'BrouwersMode is de onafhankelijke modegids die de beste Nederlandse modewebshops in kaart brengt, met profielen, nieuws en stijladvies.'
};

// Navigatie
const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Over', href: '/over.html' },
  { label: 'Shops', href: '/shops.html' },
  { label: 'Nieuws', href: '/nieuws.html' },
  { label: 'Stijlgids', href: '/stijlgids.html' },
  { label: 'Redactie', href: '/redactie.html' },
  { label: 'Contact', href: '/contact.html' }
];

// Persona
const AUTHOR = {
  name: 'Fenna Brouwers',
  role: 'Hoofdredacteur en modejournalist',
  photo: '/assets/img/fenna.svg',
  short: 'Fenna Brouwers is hoofdredacteur van BrouwersMode en schrijft over Nederlandse modemerken, materiaalkennis en bewust winkelen.'
};

// Segmenten
const SEGMENTS = {
  heren: 'Herenmode',
  dames: 'Damesmode',
  sieraden: 'Sieraden & accessoires',
  loungewear: 'Loungewear',
  schoenen: 'Schoenen & tassen',
  lifestyle: 'Mode & lifestyle'
};

// Webshop-profielen (12)
const SHOPS = [
  {
    slug: 'milez-bracelets',
    name: 'Milez Bracelets',
    url: 'https://milezbracelets.nl',
    segment: 'sieraden',
    wm: { color: '#6b4f3a', style: 'serif' },
    tagline: 'Handgemaakte leren en kralen armbanden voor mannen.',
    intro: 'Milez maakt herenarmbanden van leer en natuursteen, stuk voor stuk met de hand afgewerkt in een eigen atelier. Het merk ontstond uit een persoonlijke zoektocht: oprichter Sandra begon in 2014 met suède armbanden voor vrouwen onder de naam Mira Jewelz, en startte Milez toen een betaalbare, kwalitatieve herenarmband onvindbaar bleek.',
    facts: [
      { k: 'Opgericht', v: '2014' },
      { k: 'Specialisme', v: 'Herenarmbanden' },
      { k: 'Prijsklasse', v: 'circa €44 tot €65' },
      { k: 'Verzending', v: 'Gratis vanaf €49,90' }
    ],
    categories: ['Leren armbanden 8, 10 en 15 mm', 'Kralenarmbanden natuursteen', 'Fusion leer en kralen', 'Sets voor hem, haar en kids', 'Gepersonaliseerd met naam of gravure', 'As-armbanden'],
    special: 'Elke armband wordt met de hand gemaakt en op maat afgesteld op de polsomvang. Natuursteen maakt elk exemplaar uniek, en personalisatie met een naam of gravure geeft er een persoonlijk verhaal aan.',
    usps: [
      'Op maat gemaakt voor elke polsomvang',
      'Handgemaakt in eigen atelier',
      'Personalisatie met naam of gravure',
      'Unieke natuursteen, geen exemplaar identiek'
    ]
  },
  {
    slug: 'hemdvoorhem',
    name: 'HemdVoorHem',
    url: 'https://www.hemdvoorhem.nl',
    segment: 'heren',
    wm: { color: '#1f3a5f', style: 'sans' },
    tagline: 'Specialist in strijkvrije overhemden en complete herenmode.',
    intro: 'HemdVoorHem is sinds 2010 de plek voor mannen die kwaliteit en gemak zoeken. De webshop draait om strijkvrije overhemden, aangevuld met ondergoed, polo’s, truien, broeken en accessoires van meer dan veertig merken, van OLYMP en Profuomo tot HUGO BOSS. Alle bestellingen gaan vanuit het eigen magazijn de deur uit.',
    facts: [
      { k: 'Opgericht', v: '2010' },
      { k: 'Assortiment', v: '40+ herenmerken' },
      { k: 'Klantwaardering', v: '9,2' },
      { k: 'Retour', v: '100 dagen gratis' }
    ],
    categories: ['Strijkvrije overhemden', 'Ondergoed en sokken', 'Polo’s en truien', 'Broeken en zwembroeken', 'Vrijetijdskleding', 'Accessoires en cadeaus'],
    special: 'De echte specialisatie zit in strijkvrije overhemden met persoonlijk maatadvies, inclusief extra lange mouwlengtes. Gratis verzending vanaf €25 en honderd dagen gratis retour maken passen thuis risicoloos.',
    usps: [
      'Specialist in strijkvrije overhemden',
      'Persoonlijk maatadvies, ook mouwlengte 7',
      '100 dagen gratis retour',
      'Eigen magazijn en snelle afhandeling'
    ],
    spotlight: {
      title: 'In de schijnwerpers: Alan Red bij HemdVoorHem',
      url: 'https://www.hemdvoorhem.nl/alan-red',
      body: 'Alan Red is het Italiaanse basicsmerk dat sinds 1940 draait om nette T-shirts, singlets en ondergoed. HemdVoorHem voert de complete collectie en presenteert het merk als de nummer één voor herenondergoed in Nederland. De aantrekkingskracht zit in consistentie: de modellen blijven vrijwel ongewijzigd en continu leverbaar, zodat een favoriet jaren later probleemloos opnieuw te bestellen is. Denk aan V-hals, ronde hals en diepe V, in katoen of stretch, en met extra lange modellen voor langere mannen.'
    }
  },
  {
    slug: 'maeya-jewelry',
    name: 'Maeya Jewelry',
    url: 'https://www.maeyajewelry.nl',
    segment: 'sieraden',
    wm: { color: '#b08d43', style: 'caps' },
    tagline: 'Waterproof sieraden en piercings van roestvrij staal en titanium.',
    intro: 'Maeya maakt sieraden voor een actief leven. De collectie van roestvrij staal en titanium is waterproof en zweetbestendig, zodat oorbellen, kettingen en ringen tegen douchen, zwemmen en sporten kunnen. Naast de webshop heeft het merk een boutique met piercingstudio in Tilburg.',
    facts: [
      { k: 'Materiaal', v: 'RVS en titanium' },
      { k: 'Prijsklasse', v: 'circa €12 tot €18' },
      { k: 'Klanten', v: '40.000+' },
      { k: 'Verzending', v: 'Gratis vanaf €50' }
    ],
    categories: ['Oorbellen en ear cuffs', 'Kettingen en handkettingen', 'Armbanden en enkelbandjes', 'Ringen', 'Charms', 'Piercings: oor, neus en navel'],
    special: 'Waterproof is hier geen bijzaak maar het uitgangspunt. De hypoallergene RVS verkleurt niet en behoudt zijn glans, ook na een zomer vol zon en water. In Tilburg zit bovendien een eigen piercingstudio.',
    usps: [
      'Waterproof en zweetbestendig',
      'Hypoallergeen roestvrij staal',
      'Verkleurt en verkleurt niet na water',
      'Eigen piercingstudio in Tilburg'
    ]
  },
  {
    slug: 'lounge-we-are',
    name: 'Lounge We Are',
    url: 'https://loungeweare.com',
    segment: 'loungewear',
    wm: { color: '#1c1b19', style: 'serif' },
    tagline: 'Luxe loungewear voor vrouwen, ontworpen rond comfort en gevoel.',
    intro: 'Lounge We Are werd in 2022 opgericht door psycholoog Eline de Groot, vanuit de gedachte dat kleding invloed heeft op hoe iemand zich voelt. De collectie luxe loungewear combineert zachte, ademende stoffen met een verzorgde uitstraling, aangevuld met accessoires als alpacasokken, geurkaarsen en plaids.',
    facts: [
      { k: 'Opgericht', v: '2022' },
      { k: 'Prijsklasse', v: 'circa €50 tot €100' },
      { k: 'Waardering', v: '4,7 van 5' },
      { k: 'Klanten', v: '10.000+' }
    ],
    categories: ['Loungesets', 'Hoodies en joggers', 'Teddy en velours', 'Ribgebreide modellen', 'Alpacasokken en sloffen', 'Geurkaarsen en plaids'],
    special: 'De insteek is dat een loungeset meer mag zijn dan alleen comfort. Duurzame katoen, een stretch tailleband en een minimalistische uitstraling maken de collectie geschikt van bank tot boodschappen. Levering gaat vanuit Nederland.',
    usps: [
      'Opgericht door een psycholoog',
      'Zachte, ademende en duurzame stoffen',
      'Stretch tailleband voor flexibel comfort',
      'Nederlandse fulfilment en snelle levering'
    ]
  },
  {
    slug: 'loavies',
    name: 'Loavies',
    url: 'https://www.loavies.com',
    segment: 'dames',
    wm: { color: '#111111', style: 'caps' },
    tagline: 'Trendgerichte damesmode met scherpe seizoenscollecties.',
    intro: 'Loavies is het Amsterdamse online modemerk dat draait om trends. De collectie loopt van jurken, tops en co-ords tot swimwear, jeans en schoenen, met een eigen vintage-geïnspireerde lijn en regelmatige samenwerkingen. Nieuwe drops volgen het ritme van het seizoen en van social media.',
    facts: [
      { k: 'Type', v: 'Eigen modemerk' },
      { k: 'Prijsklasse', v: 'Toegankelijk mid-range' },
      { k: 'Focus', v: 'Trends en drops' },
      { k: 'Korting', v: '15% eerste bestelling' }
    ],
    categories: ['Jurken en tops', 'Co-ords en sets', 'Swimwear', 'Jeans en broeken', 'Schoenen', 'Accessoires'],
    special: 'De kracht zit in gecureerde trendcollecties en samenwerkingen met ontwerpers en makers. Wie snel op de nieuwste look wil zitten, vindt hier telkens verse seizoensthema’s.',
    usps: [
      'Sterke seizoens- en trendcollecties',
      'Designer- en makerssamenwerkingen',
      'Eigen vintage-geïnspireerde lijn',
      'Actieve community en snelle drops'
    ]
  },
  {
    slug: 'omoda',
    name: 'Omoda',
    url: 'https://www.omoda.nl',
    segment: 'schoenen',
    wm: { color: '#111111', style: 'sans' },
    tagline: 'Brede modeboetiek met 250+ merken in schoenen, kleding en tassen.',
    intro: 'Omoda is een van de bekendere Nederlandse modeboetieks online. Het assortiment omvat schoenen, kleding, tassen en accessoires voor dames, heren en kinderen van meer dan 250 merken. Naast de webshop zijn er fysieke winkels, en de service draait om flexibiliteit.',
    facts: [
      { k: 'Merken', v: '250+' },
      { k: 'Doelgroep', v: 'Dames, heren, kids' },
      { k: 'Retour', v: '30 dagen' },
      { k: 'Verzending', v: 'Gratis vanaf €75' }
    ],
    categories: ['Schoenen en sneakers', 'Dames- en herenkleding', 'Tassen', 'Accessoires', 'Bruiloft en gelegenheid', 'Sport en duurzaam'],
    special: 'De brede merkenselectie in combinatie met eigen fysieke winkels geeft zekerheid. Zelf een bezorgmoment kiezen, gratis retour boven €50 en achteraf betalen via Klarna maken het winkelen soepel.',
    usps: [
      'Meer dan 250 merken onder één dak',
      'Zelf bezorgmoment kiezen',
      'Gratis retour boven €50',
      'Combinatie van online en fysieke winkels'
    ]
  },
  {
    slug: 'suitable',
    name: 'Suitable',
    url: 'https://www.suitableshop.nl',
    segment: 'heren',
    wm: { color: '#424153', style: 'sans' },
    tagline: 'Bekroonde herenmodewinkel met eigen labels en 28 fysieke winkels.',
    intro: 'Suitable draait sinds 2001 om verzorgde herenmode en is meerdere jaren uitgeroepen tot beste herenmodewinkel bij de Shopping Awards. Het assortiment loopt van overhemden en polo’s tot pakken, schoenen en accessoires, met meer dan vijftig merken en eigen labels als Suitable, Steppin’ Out en KING Essentials.',
    facts: [
      { k: 'Opgericht', v: '2001' },
      { k: 'Winkels', v: '28 in NL en BE' },
      { k: 'Merken', v: '50+' },
      { k: 'Bezorging', v: 'Gratis thuisbezorgd' }
    ],
    categories: ['Overhemden en polo’s', 'Jeans en broeken', 'Pakken en colberts', 'Schoenen', 'Accessoires', 'Ondergoed en loungewear'],
    special: 'De combinatie van bekroonde service, duurzame materialen en persoonlijk stylingadvies onderscheidt Suitable. Online en 28 fysieke winkels versterken elkaar, met Thuiswinkel Waarborg als extra zekerheid.',
    usps: [
      'Meermaals bekroond bij de Shopping Awards',
      'Eigen labels naast 50+ merken',
      'Aandacht voor duurzame materialen',
      'Gratis thuisbezorgd en Thuiswinkel Waarborg'
    ]
  },
  {
    slug: 'america-today',
    name: 'America Today',
    url: 'https://www.america-today.com/nl-nl',
    segment: 'dames',
    wm: { color: '#111111', style: 'caps' },
    tagline: 'Nederlands merk dat American college-stijl vertaalt sinds 1989.',
    intro: 'America Today is sinds 1989 een Nederlands merk dat de Amerikaanse college-look naar Europese kasten brengt. De collectie draait om casual basics: jeans, hoodies, varsity jackets, T-shirts en sweats voor dames, heren en kids, met sporadische samenwerkingen zoals Keith Haring en Smiley.',
    facts: [
      { k: 'Opgericht', v: '1989' },
      { k: 'Stijl', v: 'Casual Americana' },
      { k: 'Prijsklasse', v: 'Mid-range' },
      { k: 'Verzending', v: 'Gratis vanaf €50' }
    ],
    categories: ['Jeans en broeken', 'Hoodies en sweats', 'Varsity jackets', 'T-shirts en tops', 'Loungewear', 'Accessoires en sneakers'],
    special: 'Tijdloze basics die gemaakt zijn om te layeren en lang mee te gaan, met aandacht voor duurzamere materialen. Het erfgoed vanaf 1989 geeft het merk een herkenbare, ontspannen signatuur.',
    usps: [
      'Nederlands erfgoedmerk sinds 1989',
      'Tijdloze basics om te combineren',
      'Aandacht voor duurzamere materialen',
      'Member Club met welkomstvoordeel'
    ]
  },
  {
    slug: 'josh-v',
    name: 'JOSH V',
    url: 'https://www.joshv.com',
    segment: 'dames',
    wm: { color: '#111111', style: 'serif' },
    tagline: 'Toegankelijke luxe damesmode met een eigen designsignatuur.',
    intro: 'JOSH V is een Nederlands modemerk met vijftien jaar historie en een herkenbare, verzorgde signatuur. De collectie loopt van jurken, blazers en jumpsuits tot knitwear en accessoires, met gecureerde looks voor bruiloften, kantoor en vakantie. Duurzaamheid krijgt vorm via het Tomorrow-initiatief.',
    facts: [
      { k: 'Historie', v: '15 jaar' },
      { k: 'Positionering', v: 'Toegankelijke luxe' },
      { k: 'Levering', v: 'Voor 22u besteld, morgen in huis' },
      { k: 'Retour', v: '30 dagen' }
    ],
    categories: ['Jurken', 'Blazers en pakken', 'Tops en blouses', 'Jumpsuits', 'Knitwear', 'Accessoires'],
    special: 'De aantrekkingskracht zit in verzorgde, veelzijdige stukken met een eigen handschrift, plus gecureerde looks per gelegenheid. Het Tomorrow-initiatief zet in op duurzamere keuzes.',
    usps: [
      'Herkenbare eigen designsignatuur',
      'Gecureerde looks per gelegenheid',
      'Snelle levering en 30 dagen retour',
      'Duurzaamheid via het Tomorrow-initiatief'
    ]
  },
  {
    slug: 'nikkie',
    name: 'NIKKIE',
    url: 'https://www.nikkie.com',
    segment: 'dames',
    wm: { color: '#111111', style: 'serif' },
    tagline: 'Designermode van Nikkie Plessen met een glamoureuze signatuur.',
    intro: 'NIKKIE is het modemerk van Nikkie Plessen, met een herkenbare glamoureuze stijl. Onder de paraplu vallen meerdere labels, waaronder NIKKIE, FIFTH HOUSE, Nik&Nik voor kids en de lifestyle-uitbreidingen N Beauty en N Home. De collectie loopt van tops en blazers tot skiwear en swimwear.',
    facts: [
      { k: 'Ontwerper', v: 'Nikkie Plessen' },
      { k: 'Labels', v: 'NIKKIE, FIFTH HOUSE, Nik&Nik' },
      { k: 'Positionering', v: 'Premium' },
      { k: 'Extra', v: 'N Beauty en N Home' }
    ],
    categories: ['Tops en blouses', 'Blazers en jurken', 'Broeken en rokken', 'Skiwear', 'Swimwear', 'Accessoires'],
    special: 'De glamoureuze, goed te combineren stijl en de sets die af zijn tot in de accessoires maken NIKKIE herkenbaar. Met beauty en home groeit het merk uit tot een compleet lifestyle-universum.',
    usps: [
      'Herkenbare designsignatuur van Nikkie Plessen',
      'Meerdere labels onder één merk',
      'Shop the look en set-styling',
      'Lifestyle-uitbreidingen in beauty en home'
    ]
  },
  {
    slug: 'the-little-green-bag',
    name: 'The Little Green Bag',
    url: 'https://www.thelittlegreenbag.nl',
    segment: 'schoenen',
    wm: { color: '#2f5d3a', style: 'sans' },
    tagline: 'Brede curated collectie schoenen, tassen, mode en lifestyle.',
    intro: 'The Little Green Bag is een Nederlandse multimerk-webshop met een breed aanbod schoenen, tassen, kleding, accessoires en woonartikelen. Het merk presenteert zich als officiële dealer van de gevoerde merken, met snelle levering en aandacht voor duurzamere keuzes.',
    facts: [
      { k: 'Type', v: 'Multimerk' },
      { k: 'Assortiment', v: 'Mode en lifestyle' },
      { k: 'Levering', v: 'Voor 23u besteld, morgen in huis' },
      { k: 'Verzending', v: 'Gratis vanaf €75' }
    ],
    categories: ['Schoenen', 'Tassen en koffers', 'Kleding', 'Accessoires', 'Sieraden en horloges', 'Wonen'],
    special: 'De officiële dealerstatus geeft zekerheid over herkomst en garantie, terwijl de brede selectie en snelle levering het winkelen makkelijk maken. Duurzamere producten zijn met een badge gemarkeerd.',
    usps: [
      'Officiële dealer van alle merken',
      'Snelle levering, morgen in huis',
      'Duurzamere producten gemarkeerd',
      'Breed aanbod mode en lifestyle'
    ]
  },
  {
    slug: 'sissy-boy',
    name: 'Sissy-Boy',
    url: 'https://www.sissy-boy.com',
    segment: 'lifestyle',
    wm: { color: '#111111', style: 'sans' },
    tagline: 'Mode én interieur onder één merk, sinds 1982.',
    intro: 'Sissy-Boy is sinds 1982 een Nederlands mode- en lifestylemerk. Naast kleding voor dames, heren en kinderen is er de Homeland-collectie met meubels, servies, kussens en verlichting. Het merk combineert online met eigen winkels, soms inclusief horeca, en zet in op duurzaamheid.',
    facts: [
      { k: 'Opgericht', v: '1982' },
      { k: 'Assortiment', v: 'Mode en wonen' },
      { k: 'Waardering', v: '9,5 uit 10.940 reviews' },
      { k: 'Kanalen', v: 'Online en winkels' }
    ],
    categories: ['Dameskleding', 'Herenkleding', 'Kids', 'Homeland wonen', 'Accessoires', 'Beauty'],
    special: 'De combinatie van mode en interieur onder één herkenbaar merk maakt Sissy-Boy bijzonder. Fysieke winkels, soms met horeca, en een gecureerde wooncollectie geven het een eigen sfeer.',
    usps: [
      'Mode en wonen onder één merk',
      'Sinds 1982, herkenbare stijl',
      'Multichannel met eigen winkels',
      'Hoog gewaardeerd met 9,5'
    ]
  }
];

// Nieuws-artikelen
const ARTICLES = [
  {
    slug: 'zomertrends-2026',
    kicker: 'Trends',
    title: 'Zomertrends 2026: kleuren, silhouetten en materialen die het seizoen bepalen',
    date: '2026-07-08',
    dateLabel: '8 juli 2026',
    excerpt: 'Van boterzachte pasteltinten tot ruimvallende silhouetten en waterbestendige accessoires: dit zijn de lijnen die de zomer van 2026 vormgeven.',
    related: ['loavies', 'josh-v', 'nikkie'],
    body: [
      ['p', 'De zomer van 2026 laat zich niet vangen in één trend, maar in een houding. Comfort en zelfvertrouwen bepalen de toon, en dat vertaalt zich naar kleuren die kalmeren, silhouetten die ademen en materialen die tegen een stootje kunnen. Wie de rode draad wil begrijpen, kijkt naar de manier waarop Nederlandse merken hun collecties opbouwen: rond veelzijdigheid en draagbaarheid.'],
      ['h2', 'Zachte kleuren, met een accent'],
      ['p', 'Boterzachte gelen, gebroken wit en gedempte aardetinten vormen de basis. Ze combineren moeiteloos en geven ruimte aan één helder accent per look. Merken als JOSH V zetten dit seizoen in op een subtiele butter yellow, terwijl damesmerken breder grijpen naar taupe en zand als neutrale ankers.'],
      ['h2', 'Ruimvallende silhouetten'],
      ['p', 'Het silhouet wordt losser. Co-ords, ruimvallende overhemden en rechte broeken vervangen de strakke lijnen van eerdere seizoenen. Het draait om beweging en gemak, zonder in te leveren op verzorging. Loavies vertaalt die verschuiving naar sets die als één look kloppen, ideaal voor wie snel wil combineren.'],
      ['h2', 'Materialen die de zomer overleven'],
      ['p', 'Praktisch wint terrein. Ademende, duurzame katoen en stretchweefsels maken kleding draagbaar bij warmte, en waterbestendige accessoires zoals sieraden van roestvrij staal passen bij een leven vol zon en water. Het is mode die niet apart hoeft te worden gelegd voor speciale gelegenheden, maar meedraait in het dagelijks ritme.'],
      ['blockquote', 'De zomer van 2026 gaat over kleding die meebeweegt met het leven, niet andersom.'],
      ['h2', 'Hoe het samenkomt'],
      ['p', 'De sterkste zomergarderobe bestaat uit een handvol neutrale basisstukken, aangevuld met accessoires die karakter geven. Een gedempt kleurenpalet zorgt dat alles combineert, terwijl één statement per look, een fel sieraad of een uitgesproken tas, het geheel persoonlijk maakt. Zo blijft de kast overzichtelijk en toch verrassend.']
    ]
  },
  {
    slug: 'waterproof-sieraden-zomer',
    kicker: 'Materiaal',
    title: 'Waterproof sieraden: waarom roestvrij staal en titanium de zomer overleven',
    date: '2026-07-02',
    dateLabel: '2 juli 2026',
    excerpt: 'Sieraden die tegen zwemmen, douchen en zweten kunnen zijn geen luxe meer maar de norm. Een uitleg over materialen, onderhoud en verwachtingen.',
    related: ['maeya-jewelry', 'milez-bracelets'],
    body: [
      ['p', 'Niets is vervelender dan een sieraad dat na één zomer dof of verkleurd raakt. De opkomst van waterproof sieraden lost dat op, en roestvrij staal en titanium spelen daarin de hoofdrol. Maar wat betekent waterproof precies, en waar moet een koper op letten?'],
      ['h2', 'Waarom roestvrij staal en titanium'],
      ['p', 'Roestvrij staal en titanium zijn corrosiebestendig en hypoallergeen. Ze verkleuren niet door contact met water, zweet of zonnebrand, en houden hun glans zonder intensief onderhoud. Dat maakt ze bij uitstek geschikt voor sieraden die de hele dag om blijven, van de sportschool tot het zwembad. Maeya bouwt de volledige collectie op dit uitgangspunt en belooft dat stukken hun uiterlijk behouden na douchen en zwemmen.'],
      ['h2', 'Waterproof betekent niet onverwoestbaar'],
      ['p', 'Waterbestendig materiaal beschermt tegen verkleuring, maar zorgvuldig omgaan blijft verstandig. Chloor en zout water zijn geen probleem voor het metaal zelf, al is afspoelen met zoet water na het zwemmen altijd een goede gewoonte. Bij sieraden met natuursteen, zoals sommige armbanden van Milez, geldt extra aandacht: de steen is duurzaam, maar de afwerking verdient dezelfde zorg als elk kwaliteitsstuk.'],
      ['h2', 'Onderhoud in het kort'],
      ['ul', ['Spoel na zwemmen af met zoet water en droog het sieraad', 'Bewaar stukken apart om krassen te voorkomen', 'Vermijd schuurmiddelen; een zachte doek volstaat', 'Controleer sluitingen periodiek op slijtage']],
      ['p', 'Wie hierop let, draagt jarenlang plezier van een sieraad dat gemaakt is om mee te leven. De investering in kwaliteitsmateriaal verdient zich terug in houdbaarheid.']
    ]
  },
  {
    slug: 'strijkvrije-garderobe-heren',
    kicker: 'Herenmode',
    title: 'De strijkvrije garderobe: hoe herenoverhemden zichzelf terugverdienen',
    date: '2026-06-24',
    dateLabel: '24 juni 2026',
    excerpt: 'Een strijkvrij overhemd kost meer, maar bespaart tijd en gaat langer mee. Een nuchtere blik op stof, pasvorm en de rol van goede basics.',
    related: ['hemdvoorhem', 'suitable'],
    body: [
      ['p', 'Een overhemd dat na de was niet gestreken hoeft te worden klinkt als een detail, maar telt op over een jaar. Voor wie regelmatig een net overhemd draagt, is de tijdwinst aanzienlijk. De vraag is niet óf het loont, maar hoe een strijkvrije garderobe verstandig wordt opgebouwd.'],
      ['h2', 'Wat strijkvrij precies inhoudt'],
      ['p', 'Strijkvrije overhemden worden geweven en afgewerkt zodat ze na wassen en drogen glad blijven. Het weefsel herstelt zijn vorm, waardoor een kreukvrije uitstraling overblijft zonder strijkbout. HemdVoorHem heeft zich hierin gespecialiseerd en biedt persoonlijk maatadvies, inclusief extra lange mouwlengtes voor wie standaardmaten te kort vindt.'],
      ['h2', 'Pasvorm boven alles'],
      ['p', 'Een strijkvrij overhemd is alleen zo goed als de pasvorm. Schouders die aansluiten, een boord die comfortabel zit en de juiste mouwlengte bepalen of een overhemd er verzorgd uitziet. Merken als Suitable bouwen hun herencollectie rond deze fundamenten, met eigen labels en styladvies om de juiste maat te vinden.'],
      ['h2', 'Basics als fundament'],
      ['p', 'Onder het overhemd begint alles bij goede basics. Nette T-shirts en ondergoed van een consistent merk zorgen voor een strakke basis die niet doorschijnt of uitzakt. Juist die onzichtbare laag maakt het verschil tussen slordig en verzorgd.'],
      ['blockquote', 'Goede basics zijn de onzichtbare investering die de rest van een outfit laat kloppen.'],
      ['p', 'De optelsom is simpel: een paar strijkvrije overhemden in de juiste pasvorm, gedragen op degelijke basics, leveren jarenlang een verzorgde uitstraling met minimale moeite. De hogere aanschafprijs verdient zich terug in tijd en houdbaarheid.']
    ]
  },
  {
    slug: 'loungewear-de-deur-uit',
    kicker: 'Loungewear',
    title: 'Loungewear die de deur uit mag: van bank naar borrel',
    date: '2026-06-16',
    dateLabel: '16 juni 2026',
    excerpt: 'Comfort en verzorgde uitstraling sluiten elkaar niet meer uit. Hoe moderne loungewear buitenshuis stand houdt.',
    related: ['lounge-we-are', 'america-today'],
    body: [
      ['p', 'Loungewear is de afgelopen jaren van de bank naar de straat gewandeld. Wat begon als huiskleding, is uitgegroeid tot een categorie die comfort combineert met een uitstraling die buitenshuis stand houdt. De sleutel zit in stof, snit en de manier van combineren.'],
      ['h2', 'Van huiskleding naar hybride'],
      ['p', 'De nieuwe generatie loungewear is ontworpen om te schakelen. Lounge We Are, opgericht door een psycholoog vanuit de gedachte dat kleding het gevoel beïnvloedt, maakt sets die net zo goed bij een terras passen als op de bank. Zachte, ademende stoffen en een verzorgde afwerking maken het verschil met doorsnee huiskleding.'],
      ['h2', 'Combineren met basics'],
      ['p', 'Loungewear buitenshuis draagbaar maken draait om context. Een joggingbroek met een strak T-shirt en nette sneakers oogt anders dan dezelfde broek met een uitgelubberd shirt. Casual merken als America Today leveren precies die basics: tijdloze sweats en tees die een loungeset optillen naar een complete look.'],
      ['h2', 'Materiaal maakt het verschil'],
      ['p', 'Stretch taillebanden, duurzame katoen en teddy of velours voor koelere avonden bepalen hoe volwassen een set oogt. Hoe hoogwaardiger het materiaal, hoe minder een outfit als pyjama leest en hoe meer als bewuste keuze.'],
      ['p', 'De grens tussen thuis en buiten vervaagt, en loungewear beweegt daarin mee. Met de juiste stof en een paar goede basics stapt comfortabele kleding moeiteloos de deur uit.']
    ]
  },
  {
    slug: 'herenarmbanden-layeren',
    kicker: 'Styling',
    title: 'Herenarmbanden layeren: de stapelgids voor de zomer',
    date: '2026-06-05',
    dateLabel: '5 juni 2026',
    excerpt: 'Meerdere armbanden dragen zonder rommelig te ogen is een kwestie van balans. Een praktische gids voor mannen die willen stapelen.',
    related: ['milez-bracelets', 'maeya-jewelry'],
    body: [
      ['p', 'Eén armband is een detail, meerdere armbanden zijn een statement. Layeren, oftewel stapelen, geeft een polsopstelling karakter, maar vraagt om balans. Te veel of te willekeurig oogt rommelig, terwijl een doordachte combinatie juist verzorgd staat.'],
      ['h2', 'Begin met een ankerstuk'],
      ['p', 'Een goede stapeling begint met één dominant stuk, bijvoorbeeld een brede leren armband. Milez maakt herenarmbanden in verschillende breedtes, van 8 tot 15 millimeter, die met de hand op maat worden afgesteld. Dat ankerstuk bepaalt de toon; de rest bouwt eromheen.'],
      ['h2', 'Speel met textuur, niet met chaos'],
      ['p', 'Combineer leer met natuursteen of een subtiel metalen element voor contrast in materiaal. Houd het kleurenpalet rustig, in aardetinten of één doorlopende kleurfamilie, zodat de stukken samen een geheel vormen. Een enkel metalen accent, zoals een waterbestendige armband van Maeya, geeft glans zonder de aandacht op te eisen.'],
      ['h2', 'Let op de pasvorm'],
      ['ul', ['Kies armbanden die net iets ruimte houden, niet knellen', 'Wissel breedtes af voor ritme in de opstelling', 'Houd het bij twee tot vier stukken voor een verzorgd geheel', 'Stem de kleur af op riem en horlogeband']],
      ['p', 'Stapelen is uiteindelijk een kwestie van smaak binnen een paar eenvoudige spelregels. Met een sterk ankerstuk en rust in kleur staat een gelaagde pols moeiteloos, de hele zomer door.']
    ]
  }
];

module.exports = { SITE, NAV, AUTHOR, SEGMENTS, SHOPS, ARTICLES };
