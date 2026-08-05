"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all duration-200 cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Navigation - Previous */}
      {images.length > 1 && (
        <button
          onClick={() =>
            onNavigate((currentIndex - 1 + images.length) % images.length)
          }
          className="absolute left-4 md:left-8 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center p-2">
        <img
          src={currentImg.src}
          alt={currentImg.alt}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-100"
        />

        {/* Caption & Counter */}
        <div className="mt-4 text-center text-white space-y-1">
          {currentImg.title && (
            <h4 className="font-chopin text-xl md:text-2xl text-[#f2f6df]">
              {currentImg.title}
            </h4>
          )}
          {currentImg.category && (
            <p className="text-xs uppercase tracking-widest text-white/60">
              {currentImg.category}
            </p>
          )}
          <p className="text-xs text-white/40 font-mono mt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Navigation - Next */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 md:right-8 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
