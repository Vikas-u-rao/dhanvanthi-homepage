"use client";

import { useState, useEffect } from "react";
import imgHomePageBanner from "@/imports/HomepageDhanvantiValley/home_page.png";

interface HeroProps {
  onEnquireClick?: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden flex justify-center">
      <h1 className="sr-only">Luxury Apartments in Dehradun — Dhanvanti Valley</h1>

      {/* Full-Width Edge-to-Edge Hero Image Banner (home_page.png) */}
      <div className="w-full max-w-[1200px] aspect-[1200/580] relative overflow-hidden">
        {mounted && (
          <img
            alt="Dhanvanti Valley - Time is the Real Luxury"
            className="w-full h-full object-cover md:object-contain"
            src={imgHomePageBanner.src}
          />
        )}
      </div>
    </section>
  );
}