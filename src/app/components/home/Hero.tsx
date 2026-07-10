import { useState, useEffect, useRef } from "react";
import imgHeroBasic from "@/imports/HomepageDhanvantiValley/48c2d9473501db3049486f6e57a29975fc029322.png";
import imgMagnificRemoveFatherAndSonFroKLayHax16B1 from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";
import imgChatGptImageJun252026022748PmRemovebgPreview1 from "@/imports/HomepageDhanvantiValley/46f0c09b205dbdc33df2dbc2088b86965a0004dd.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
      
      // Scale down proportionally if parent width is between 768px and 1200px
      if (parentWidth < 1200 && parentWidth >= 768) {
        // Keep a small margin for padding
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

  return (
    <section className="w-full flex flex-col items-center bg-white overflow-visible">
      {/* 1. Top Hero Image Banner */}
      <div className="w-full max-w-7xl mx-auto aspect-[1200/472] relative overflow-hidden select-none">
        <img 
          alt="Dhanvanti Valley Hero Banner" 
          className="w-full h-full object-cover" 
          src={imgHeroBasic.src} 
        />
      </div>

      {/* 2. Overlapping Layout Container */}
      <div className="w-full relative overflow-visible flex flex-col items-center">
        
        {/* DESKTOP VIEWPORT: Auto-scaled overlay container using exact absolute metrics from Figma */}
        <div 
          ref={containerRef}
          className="hidden md:flex justify-center items-center w-full overflow-hidden select-none"
          style={{ height: `${660 * scale}px` }}
        >
          <div 
            className="relative w-[1200px] h-[660px] shrink-0 origin-center transition-transform duration-75"
            style={{ transform: `scale(${scale})` }}
          >
            
            {/* Panel Image Double: White backdrop card with 80% opacity */}
            <div className="absolute bg-white opacity-80 w-[1200px] h-[660px] left-0 top-0 pb-[64px] pt-[280px] px-[64px] rounded-lg -z-10" />

            {/* Garden Background image wrapper */}
            <div className="absolute left-[92.5px] top-[242px] w-[1015px] h-[367px] overflow-hidden rounded-none shadow-xs z-0">
              <img 
                alt="Garden Background" 
                className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1.src} 
              />
            </div>

            {/* Father and Son Cutout - positioned absolutely, overlapping garden and text */}
            <div className="absolute left-[138px] top-[114px] w-[722px] h-[539px] pointer-events-none z-10">
              <img 
                alt="Father and Son Gardening" 
                className="w-full h-full object-contain pointer-events-none" 
                src={imgChatGptImageJun252026022748PmRemovebgPreview1.src} 
              />
            </div>

            {/* Cursive text block & Subtitle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-full pointer-events-none z-20">
              <div className="absolute right-[91px] top-[92px] text-right font-bavicka text-[#638038] text-[40px] leading-[1.2] w-[783px] pointer-events-auto">
                Time is the real <br /> luxury
              </div>
              <p className="absolute right-[91px] top-[165px] text-right font-chopin text-[#638038] text-[20px] leading-relaxed w-[530px] tracking-[-0.4px] mt-2 pointer-events-auto">
                Dhanvanti Valley — luxury residences in Dehradun,
                <br />
                where the rarest privilege is getting your evenings back.
              </p>
            </div>

          </div>
        </div>

        {/* MOBILE VIEWPORT: Dynamic Flex stack layout with zero overflow */}
        <div className="md:hidden w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center select-none">
          {/* Typography */}
          <div className="flex flex-col items-center gap-2">
            <div className="font-bavicka text-[#638038] text-[36px] sm:text-[40px] leading-none">
              Time is the real luxury
            </div>
            <p className="font-chopin text-[#638038] text-[18px] sm:text-[20px] leading-relaxed max-w-md tracking-[-0.4px] mt-2">
              Dhanvanti Valley — luxury residences in Dehradun,
              where the rarest privilege is getting your evenings back.
            </p>
          </div>

          {/* Interactive Stacked Images */}
          <div className="relative w-full max-w-[500px] aspect-[1200/660] mt-4 select-none">
            {/* Garden Background */}
            <div className="absolute left-[7.71%] top-[36.67%] w-[84.58%] h-[55.61%] overflow-hidden">
              <img 
                alt="Garden Background" 
                className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1.src} 
              />
            </div>
            {/* Father & Son Cutout */}
            <div className="absolute left-[11.5%] top-[17.27%] w-[60.17%] h-[81.67%] pointer-events-none">
              <img 
                alt="Father and Son Gardening" 
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
