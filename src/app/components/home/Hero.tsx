import { useState, useEffect, useRef } from "react";
import imgHeroBasic from "@/imports/HomepageDhanvantiValley/home_page.png";
import imgMagnificRemoveFatherAndSonFroKLayHax16B1 from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";
import imgChatGptImageJun252026022748PmRemovebgPreview1 from "@/imports/HomepageDhanvantiValley/46f0c09b205dbdc33df2dbc2088b86965a0004dd.png";

interface HeroProps {
  onEnquireClick?: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
      
      if (parentWidth < 1200 && parentWidth >= 768) {
        const targetWidth = parentWidth - 32; 
        setScale(Math.max(0.5, targetWidth / 1200));
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  const handleBrochure = () => {
    const el = document.getElementById("residences");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col items-center bg-white overflow-visible">
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Luxury Apartments in Dehradun — Dhanvanti Valley</h1>

      {/* 1. Top Hero Image Banner - Complete image, no additional styles */}
      <div className="w-full select-none">
        <img 
          alt="Dhanvanti Valley luxury residential facade" 
          className="w-full h-auto" 
          src={imgHeroBasic.src} 
        />
      </div>

      {/* 2. Overlapping Layout Container */}
      <div className="w-full relative overflow-visible flex flex-col items-center">
        
        {/* DESKTOP VIEWPORT */}
        <div 
          ref={containerRef}
          className="hidden md:flex justify-center items-center w-full overflow-hidden"
          style={{ height: `${660 * scale}px` }}
        >
          <div 
            className="relative w-[1200px] h-[660px] shrink-0 origin-center transition-transform duration-75"
            style={{ transform: `scale(${scale})` }}
          >
            
            {/* White backdrop panel */}
            <div className="absolute bg-white opacity-80 w-[1200px] h-[660px] left-0 top-0 pb-[64px] pt-[280px] px-[64px] rounded-lg -z-10" />

            {/* Garden Background image */}
            <div className="absolute left-[92.5px] top-[242px] w-[1015px] h-[367px] overflow-hidden rounded-none shadow-xs z-0 select-none">
              <img 
                alt="" 
                aria-hidden="true"
                className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1.src} 
              />
            </div>

            {/* Father and Son lifestyle image */}
            <div className="absolute left-[138px] top-[114px] w-[722px] h-[539px] pointer-events-none z-10 select-none">
              <img 
                alt="Family enjoying golf putting green at Dhanvanti Valley" 
                className="w-full h-full object-contain pointer-events-none" 
                src={imgChatGptImageJun252026022748PmRemovebgPreview1.src} 
              />
            </div>

            {/* Text block & Subtitle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-full pointer-events-none z-20">
              <div className="absolute right-[93px] top-[30px] flex flex-col items-end text-right pointer-events-auto">
                <p className="font-chopin text-[#638038] text-[36px] font-medium leading-[1.2] tracking-[-0.72px]">
                  Luxury, Rooted in Nature
                </p>
                <p className="font-chopin text-[#638038] text-[16px] leading-[1.2] mt-4 w-[530px]">
                  Luxury Apartments in Dehradun,<br />
                  Designed for a Life Well Lived
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE VIEWPORT */}
        <div className="md:hidden w-full max-w-3xl mx-auto px-6 py-10 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="font-chopin text-[#638038] text-[24px] font-medium leading-[1.2] tracking-[-0.72px]">
              Luxury, Rooted in Nature
            </p>
            <p className="font-chopin text-[#638038] text-[16px] leading-[1.2] mt-2">
              Luxury Apartments in Dehradun,<br />
              Designed for a Life Well Lived
            </p>
          </div>

          {/* Stacked Images */}
          <div className="relative w-full max-w-[500px] aspect-[1200/660] mt-2 select-none">
            <div className="absolute left-[7.71%] top-[36.67%] w-[84.58%] h-[55.61%] overflow-hidden">
              <img 
                alt=""
                aria-hidden="true"
                className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1.src} 
              />
            </div>
            <div className="absolute left-[11.5%] top-[17.27%] w-[60.17%] h-[81.67%] pointer-events-none">
              <img 
                alt="Family playing golf at Dhanvanti Valley" 
                className="w-full h-full object-contain" 
                src={imgChatGptImageJun252026022748PmRemovebgPreview1.src} 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}