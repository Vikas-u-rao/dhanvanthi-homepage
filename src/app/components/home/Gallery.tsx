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
    <section id="gallery" className="w-full bg-black text-white px-6 py-16 md:px-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Title and Header - Left Aligned */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            GALLERY
          </span>
          <h2 className="font-chopin text-[#638038] text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-tight tracking-[-0.72px]">
            A walk through<br />
            the valley.
          </h2>
        </div>

        {/* Asymmetric Masonry Grid - CSS Grid with explicit placement */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {/* Image 1 - Large, spans 3 cols, 2 rows on desktop */}
          <div 
            onClick={() => openLightbox(0)}
            className="col-span-1 md:col-span-3 md:row-span-2 aspect-[4/3] md:aspect-[8/5] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[0].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
            </div>
          </div>

          {/* Image 2 - Medium, spans 3 cols, 1 row */}
          <div 
            onClick={() => openLightbox(1)}
            className="col-span-1 md:col-span-3 aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[1].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
            </div>
          </div>

          {/* Image 3 - Tall, spans 2 cols, 2 rows */}
          <div 
            onClick={() => openLightbox(2)}
            className="col-span-1 md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[2].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
            </div>
          </div>

          {/* Image 4 - Tall, spans 2 cols, 2 rows (different position) */}
          <div 
            onClick={() => openLightbox(3)}
            className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-5 aspect-[3/4] md:aspect-[3/5] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[3].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
            </div>
          </div>

          {/* Image 5 - Wide, spans 3 cols, 1 row */}
          <div 
            onClick={() => openLightbox(4)}
            className="col-span-1 md:col-span-3 aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[4].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
            </div>
          </div>

          {/* Image 6 - Medium, spans 3 cols, 1 row */}
          <div 
            onClick={() => openLightbox(5)}
            className="col-span-1 md:col-span-3 aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-pointer relative group"
          >
            <img
              alt={galleryImages[5].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              src={galleryImages[5].src}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/60 px-4 py-2 backdrop-blur-sm">
                View Image
              </span>
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