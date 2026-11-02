import { Bodoni_Moda, Instrument_Sans, Instrument_Serif, Tiro_Devanagari_Hindi } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

// Headings
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Body and interface
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

// Only for the ILAAKA wordmark, which is a high-contrast serif in the studio's logo
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: "500",
});

// The "स्टूडीयोज़" half of the logo
const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
});

// Marks JS as available before first paint so reveal styles only hide content when they can show it again
const JS_FLAG = `document.documentElement.classList.add("js")`;

export const metadata = {
  title: {
    default: "Ilaaka Studios | The Creative Hood",
    template: "%s | Ilaaka Studios",
  },
  description:
    "Ilaaka Studios is a film and television studio making feature films, advertisements, short films and music videos.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${bodoni.variable} ${tiro.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <RevealObserver />
      </body>
    </html>
  );
}
