import { useState, useEffect, useRef } from "react";
import imgHeroBasic from "@/imports/HomepageDhanvantiValley/48c2d9473501db3049486f6e57a29975fc029322.png";
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
      {/* Visually hidden H1 for SEO — the Bavicka tagline serves as the visual hero heading */}
      <h1 className="sr-only">Luxury Apartments in Dehradun — Dhanvanti Valley, Hathibarkala</h1>

      {/* 1. Top Hero Image Banner (Full Width Edge-to-Edge, cropping top logo and bottom details bar) */}
      <div className="w-full aspect-[1200/360] relative overflow-hidden select-none">
        <img 
          alt="Dhanvanti Valley exterior architectural facade surrounded by Dehradun hills, Hathibarkala" 
          className="w-full h-[140%] object-cover object-[center_38%] -mt-[14%]" 
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
                alt="Family enjoying the serene outdoor gardens at Dhanvanti Valley" 
                className="w-full h-full object-contain pointer-events-none" 
                src={imgChatGptImageJun252026022748PmRemovebgPreview1.src} 
              />
            </div>

            {/* Text block & Subtitle (shifted up to top-[42px] to remove top whitespace & title enlarged to 44px) */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-full pointer-events-none z-20">
              <div className="absolute right-[135px] top-[42px] flex flex-col items-end text-right pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f2f6df] text-[#638038] font-inter text-xs font-semibold rounded-full mb-3">
                  📍 Hathibarkala, Dehradun | 2, 3 &amp; 4 BHK Luxury Residences
                </span>
                <p className="font-chopin text-[#638038] text-[44px] font-medium leading-[1.15] tracking-[-0.6px]">
                  Luxury, Rooted in Nature
                </p>
                <p className="font-inter text-[#394d23] text-[16px] leading-relaxed w-[520px] mt-3">
                  Luxury Apartments in Dehradun, Designed for a Life Well Lived. Contemporary architecture, lush green landscapes, and breathtaking mountain views.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <button
                    onClick={handleEnquire}
                    aria-label="Open enquiry form to schedule a site visit"
                    className="bg-[#638038] hover:bg-[#536c2e] text-white px-6 py-3 rounded-lg font-inter text-sm font-medium transition-all shadow-sm cursor-pointer"
                  >
                    Schedule a Site Visit
                  </button>
                  <button 
                    onClick={handleBrochure}
                    aria-label="View floor plans and download brochure"
                    className="bg-[#ca9731] hover:bg-[#b08125] text-white px-6 py-3 rounded-lg font-inter text-sm font-medium transition-all shadow-sm cursor-pointer"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE VIEWPORT */}
        <div className="md:hidden w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center">
          {/* Typography */}
          <div className="flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f2f6df] text-[#638038] font-inter text-xs font-semibold rounded-full">
              📍 Hathibarkala, Dehradun | 2, 3 &amp; 4 BHK
            </span>
            <p className="font-chopin text-[#638038] text-[28px] sm:text-[32px] font-medium leading-tight mt-2">
              Luxury, Rooted in Nature
            </p>
            <p className="font-inter text-[#394d23] text-[14px] leading-relaxed max-w-md mt-1">
              Luxury Apartments in Dehradun, Designed for a Life Well Lived.
            </p>
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <button
              onClick={handleEnquire}
              aria-label="Open enquiry form to schedule a site visit"
              className="flex-1 bg-[#638038] hover:bg-[#536c2e] text-white px-5 py-3 rounded-lg font-inter text-sm transition-all shadow-sm cursor-pointer"
            >
              Schedule a Site Visit
            </button>
            <button 
              onClick={handleBrochure}
              aria-label="Scroll to floor plans section"
              className="flex-1 bg-[#ca9731] hover:bg-[#b08125] text-white px-5 py-3 rounded-lg font-inter text-sm transition-all shadow-sm cursor-pointer"
            >
              Floor Plans
            </button>
          </div>

          {/* Stacked Images */}
          <div className="relative w-full max-w-[500px] aspect-[1200/660] mt-4 select-none">
            {/* Garden Background */}
            <div className="absolute left-[7.71%] top-[36.67%] w-[84.58%] h-[55.61%] overflow-hidden">
              <img 
                alt=""
                aria-hidden="true"
                className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1.src} 
              />
            </div>
            {/* Family lifestyle cutout */}
            <div className="absolute left-[11.5%] top-[17.27%] w-[60.17%] h-[81.67%] pointer-events-none">
              <img 
                alt="Family enjoying the gardens at Dhanvanti Valley" 
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
