import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/fonts.css";
import "@/styles/index.css";

const bavicka = localFont({
  src: "../../public/fonts/Bavicka.woff",
  variable: "--font-bavicka",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Apartments in Dehradun | Dhanvanti Valley",
  description:
    "Discover Dhanvanti Valley, premium luxury residences in Hathibarkala, Dehradun, thoughtfully designed for comfort, privacy, nature, and modern living.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dhanvanti Valley",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hathibarkala Road",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  telephone: "+91-73985-73985",
  description:
    "Premium luxury residences in Hathibarkala, Dehradun. 2, 3 & 4 BHK apartments designed for comfort, privacy, and modern living. RERA: UKRE03260000729.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bavicka.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
