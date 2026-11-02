// Single source for navigation and contact details (header, mobile menu, footer, contact page)

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "What we make", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Placeholder email and city until the studio confirms them
export const CONTACT = {
  email: "hello@ilaakastudios.com",
  city: "Mumbai",
  instagram: { label: "@ilaakastudios", href: "https://www.instagram.com/ilaakastudios/" },
  youtube: { label: "YouTube", href: "https://youtu.be/BX5ZacPjZHU?si=Q2QczseS49193mHf" },
};

export const SHOWREEL_YOUTUBE_ID = "BX5ZacPjZHU";

export const FORMATS = [
  {
    slug: "feature-films",
    name: "Feature films",
    line: "Long-form stories with room to breathe.",
    video: 25478,
    poster: 29467,
  },
  {
    slug: "advertisements",
    name: "Advertisements",
    line: "Thirty seconds that people actually watch.",
    video: 44066,
    poster: 50784,
  },
  {
    slug: "short-films",
    name: "Short films",
    line: "One idea, told without a wasted frame.",
    video: 46161,
    poster: 43374,
  },
  {
    slug: "music-videos",
    name: "Music videos",
    line: "Pictures that move the way the track does.",
    video: 42838,
    poster: 50325,
  },
];

export function mixkitVideo(id, quality = 720) {
  return `https://assets.mixkit.co/videos/${id}/${id}-${quality}.mp4`;
}

export function mixkitPoster(id) {
  return `https://assets.mixkit.co/videos/${id}/${id}-thumb-720-0.jpg`;
}
