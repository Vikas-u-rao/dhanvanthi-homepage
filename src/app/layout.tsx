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
  title: "Dhanvanti Valley",
  description: "Interested in this project? Fill out the form, and our real estate experts will get back to you with more details.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bavicka.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
