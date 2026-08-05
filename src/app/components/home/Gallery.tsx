"use client";

import { useState } from "react";
import imgRectangle12 from "@/imports/HomepageDhanvantiValley/b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png";
import imgRectangle13 from "@/imports/HomepageDhanvantiValley/812c92bf95d713238535e5f0f3f6905f8a4e0329.png";
import imgRectangle14 from "@/imports/HomepageDhanvantiValley/578ff8498ab295a0883b5a51131fbb4503850479.png";
import imgRectangle15 from "@/imports/HomepageDhanvantiValley/25a0582c9eb9f9ab3d862f2dd56fd4e54b115759.png";
import imgRectangle16 from "@/imports/HomepageDhanvantiValley/7fda8fabb10f1e04f2d737ed1bb4ed7a706ea430.png";
import imgRectangle17 from "@/imports/HomepageDhanvantiValley/70d49e9702302b0f6497c31c9a0d1b66430d4e6e.png";
import LightboxModal from "@/app/components/ui/LightboxModal";

const galleryImages = [
  { src: imgRectangle12.src, alt: "Valley Walk 1", title: "Resonance of Nature", category: "Architecture & Landscape" },
  { src: imgRectangle15.src, alt: "Valley Walk 2", title: "Serene Pathways", category: "Outdoor Living" },
  { src: imgRectangle16.src, alt: "Valley Walk 3", title: "Mountain Vistas", category: "Panoramic Views" },
  { src: imgRectangle17.src, alt: "Valley Walk 4", title: "Refined Interiors", category: "Luxury Living" },
  { src: imgRectangle13.src, alt: "Valley Walk 5", title: "Harmonious Greens", category: "Landscape Design" },
  { src: imgRectangle14.src, alt: "Valley Walk 6", title: "Sunset Deck", category: "Sunset Experience" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="w-full bg-white text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Title and Header */}
        <div className="flex flex-col gap-4">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Gallery
          </span>
          <h2 className="font-chopin text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            A walk through <br className="hidden md:inline" />
            the valley.
          </h2>
          <p className="text-sm text-gray-500 font-inter">
            Click on any image to open the immersive full-screen viewer.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="w-full flex flex-col gap-6 mt-2">

          {/* Row 1: Two side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-6 w-full">
            {/* Image 1 */}
            <div 
              onClick={() => openLightbox(0)}
              className="w-full aspect-[415/276] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
            >
              <img
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={galleryImages[0].src}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  View Image
                </span>
              </div>
            </div>
            {/* Image 2 */}
            <div 
              onClick={() => openLightbox(1)}
              className="w-full aspect-[580/276] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
            >
              <img
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={galleryImages[1].src}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  View Image
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Two columns of stacked images */}
          <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-6 w-full">

            {/* Left Stack Column */}
            <div className="flex flex-col gap-6">
              {/* Image 3 */}
              <div 
                onClick={() => openLightbox(2)}
                className="w-full aspect-[611/389] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
              >
                <img
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={galleryImages[2].src}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </div>
              {/* Image 5 */}
              <div 
                onClick={() => openLightbox(4)}
                className="w-full aspect-[611/594] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
              >
                <img
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={galleryImages[4].src}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </div>
            </div>

            {/* Right Stack Column */}
            <div className="flex flex-col gap-6">
              {/* Image 4 */}
              <div 
                onClick={() => openLightbox(3)}
                className="w-full aspect-[386/704] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
              >
                <img
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={galleryImages[3].src}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </div>
              {/* Image 6 */}
              <div 
                onClick={() => openLightbox(5)}
                className="w-full aspect-[387/276] overflow-hidden rounded-lg shadow-sm cursor-pointer relative group"
              >
                <img
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={galleryImages[5].src}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        images={galleryImages}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setCurrentIndex(idx)}
      />
    </section>
  );
}

