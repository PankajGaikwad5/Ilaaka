// Work shown across Home, /work and /work/[slug].
// Titles marked "from Instagram" come from the studio's feed; the rest are placeholders.
// All footage is Mixkit stock (ids below) until the studio's own cuts replace it. hd: false = no 1080p file.

export const CATEGORIES = ["All", "Feature films", "Advertisements", "Short films", "Music videos"];

export const PROJECTS = [
  {
    slug: "kaise-kahoon",
    title: "Kaise Kahoon",
    format: "Music videos",
    year: "2025",
    client: "Independent release",
    role: "Concept, direction, production, colour",
    video: 42251,
    stills: [42251, 13329, 50325],
    ratio: "aspect-[4/5]",
    logline: "A song about the words that never get said, staged as one long night of almost-confessions.",
    synopsis: [
      "Kaise Kahoon sits in the space between two people who already know how the other feels. We built the film around that hesitation: a lamp-lit apartment, a dance that keeps stopping short, and a camera that drifts in only when the lyric finally lets it.",
      "The shoot ran over two nights with a small crew and a single practical-lit set. Everything warm in the frame comes from the room itself, which gave the grade somewhere honest to start from.",
    ],
  }, // from Instagram
  {
    slug: "pulekhe",
    title: "Pulekhe",
    format: "Music videos",
    year: "2025",
    client: "TMDA",
    role: "Production, direction, VFX",
    video: 42838,
    stills: [42838, 51757, 33896],
    ratio: "aspect-square",
    logline: "Black, white and one voice multiplied until it fills the frame.",
    synopsis: [
      "Pulekhe is a stark piece built on silhouette and repetition. The artist performs against a bare backdrop while the edit splits, doubles and stacks the image, so the visuals keep pace with the layers in the track.",
      "We kept the palette to black and white from pre-production onward, lighting for contrast rather than mood, and finished the multiplications in post so every hand and every echo lands on the beat.",
    ],
  }, // from Instagram
  {
    slug: "livogen-iron-gummies",
    title: "Livogen Iron Gummies",
    format: "Advertisements",
    year: "2025",
    client: "Livogen",
    role: "Production, direction, post",
    video: 50784,
    stills: [50784, 44066, 50787],
    ratio: "aspect-video",
    logline: "Everyday tiredness and hair fall, moved out of the way in thirty seconds.",
    synopsis: [
      "The brief was a product film that felt like a slice of a real day rather than a pack shot with a jingle. We cast two friends, set them loose in an office morning, and let the product arrive as part of their routine.",
      "The campaign was cut for broadcast, social and in-store screens from the same shoot, with a bright hero product sequence built on set so the deliverables stayed consistent across every format.",
    ],
  }, // from Instagram
  {
    slug: "zee-tv-promo",
    title: "Zee TV show promo",
    format: "Advertisements",
    year: "2025",
    client: "Zee TV",
    role: "Production, direction",
    video: 22973,
    hd: false,
    stills: [22973, 23666, 23671],
    ratio: "aspect-video",
    logline: "A warehouse, a man in a grey suit and a reveal timed to the second.",
    synopsis: [
      "A launch promo for a new show, built around one location and one character walking through it. The warehouse gave us scale; the performance gave us the hook.",
      "We shot for the network's on-air slots and cut-downs together, planning the reveal so it holds up at ten, twenty and thirty seconds.",
    ],
  }, // from Instagram
  {
    slug: "frequency",
    title: "Frequency",
    format: "Short films",
    year: "2024",
    client: "Ilaaka original",
    role: "Written, directed and produced in-house",
    video: 43374,
    stills: [43374, 28422, 28417],
    ratio: "aspect-[4/3]",
    logline: "An old radio in a quiet house picks up a station that should not exist.",
    synopsis: [
      "Frequency began as a single image: a hand turning the dial of a radio that has outlived everyone who used to listen to it. The film follows the woman who inherits it and the voice she finds between stations.",
      "Shot in one house over three days, it leans on sound as much as picture, with the radio's hiss designed as a character of its own.",
    ],
  },
  {
    slug: "case-board",
    title: "Case Board",
    format: "Short films",
    year: "2024",
    client: "Ilaaka original",
    role: "Written, directed and produced in-house",
    video: 42521,
    stills: [42521, 40746, 46353],
    ratio: "aspect-[2.39/1]",
    logline: "One officer, one wall of photographs and the thread nobody else will pull.",
    synopsis: [
      "A compact procedural told almost entirely in one room. The case board grows behind our lead as the night goes on, and the camera treats it like a second performer.",
      "We designed the board as a working prop, every photograph and note readable on screen, so the audience can solve it a beat before she does.",
    ],
  },
  {
    slug: "chapel-light",
    title: "Chapel Light",
    format: "Music videos",
    year: "2024",
    client: "Label release",
    role: "Direction, production",
    video: 50325,
    stills: [50325, 49326, 50787],
    ratio: "aspect-[4/5]",
    logline: "A singer, an old hall and the light through a single window.",
    synopsis: [
      "Shot in a heritage interior, Chapel Light keeps its staging simple: one performer, one window, and the slow travel of daylight across the room while she sings.",
      "We scheduled the day around the sun so the window did the lighting, then matched the few artificial set-ups to it.",
    ],
  },
  {
    slug: "shadows-in-sand",
    title: "Shadows in Sand",
    format: "Short films",
    year: "2023",
    client: "Ilaaka original",
    role: "Written, directed and produced in-house",
    video: 49691,
    stills: [49691, 46161, 49691],
    ratio: "aspect-video",
    logline: "Two friends, one road trip and a home video that remembers it better than they do.",
    synopsis: [
      "Told through footage the characters shoot themselves, Shadows in Sand is about how we film the people we love and what the camera keeps after they are gone.",
      "We shot on a mix of cinema and consumer cameras, then treated the home-video passages to feel worn and handled.",
    ],
  },
  {
    slug: "the-long-season",
    title: "The Long Season",
    format: "Feature films",
    year: "In development",
    client: "Ilaaka original",
    role: "Development, production",
    video: 29467,
    hd: false,
    stills: [29467, 22994, 25478],
    ratio: "aspect-[2.39/1]",
    logline: "A neighbourhood cricket team, one last monsoon and the land deal that could end both.",
    synopsis: [
      "Our first feature, now in development. The Long Season follows a gully cricket side through the summer their ground is sold, and the families who have played on it for three generations.",
      "It is the film the studio was named for: a story about an ilaaka, told by people who grew up in one.",
    ],
  },
  {
    slug: "red-room",
    title: "Red Room",
    format: "Music videos",
    year: "2023",
    client: "Independent release",
    role: "Direction, choreography, colour",
    video: 51757,
    stills: [51757, 867, 33896],
    ratio: "aspect-square",
    logline: "One dancer, one colour, and a track that refuses to sit still.",
    synopsis: [
      "Red Room is a performance film shot against a single saturated wall. The choreography carries the whole piece, so the camera stays wide and lets the body do the editing.",
      "We built the look in-camera with coloured light and kept post to a clean grade.",
    ],
  },
];

export function projectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function nextProject(slug) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
