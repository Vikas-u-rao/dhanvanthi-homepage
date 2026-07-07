import imgHeroBasic from "@/imports/HomepageDhanvantiValley/48c2d9473501db3049486f6e57a29975fc029322.png";
import imgMagnificRemoveFatherAndSonFroKLayHax16B1 from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";
import imgChatGptImageJun252026022748PmRemovebgPreview1 from "@/imports/HomepageDhanvantiValley/46f0c09b205dbdc33df2dbc2088b86965a0004dd.png";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center bg-white overflow-visible">
      {/* 1. Top Hero Image Banner */}
      {/* Fixed aspect ratio container (1200 / 472 = 2.54) preserves entire banner detail without any horizontal clipping */}
      <div className="w-full max-w-7xl mx-auto aspect-[1200/472] relative overflow-hidden select-none">
        <img 
          alt="Dhanvanti Valley Hero Banner" 
          className="w-full h-full object-cover" 
          src={imgHeroBasic} 
        />
      </div>

      {/* 2. Overlapping Layout Container */}
      <div className="w-full relative overflow-visible">
        
        {/* DESKTOP VIEWPORT: Pixel-perfect overlay container using exact absolute metrics from Figma */}
        <div className="hidden lg:block relative w-[1200px] h-[660px] mx-auto overflow-visible select-none">
          
          {/* Panel Image Double: White backdrop card with 80% opacity */}
          <div className="absolute bg-white opacity-80 w-[1200px] h-[660px] left-0 top-0 pb-[64px] pt-[280px] px-[64px] rounded-lg -z-10" />

          {/* Garden Background image wrapper */}
          <div className="absolute left-[92.5px] top-[242px] w-[1015px] h-[367px] overflow-hidden rounded-lg shadow-xs z-0">
            <img 
              alt="Garden Background" 
              className="absolute h-[158.31%] left-[-0.03%] max-w-none top-[-52.28%] w-[100.02%]" 
              src={imgMagnificRemoveFatherAndSonFroKLayHax16B1} 
            />
          </div>

          {/* Father and Son Cutout - positioned absolutely, overlapping garden and text */}
          <div className="absolute left-[138px] top-[114px] w-[722px] h-[539px] pointer-events-none z-10">
            <img 
              alt="Father and Son Gardening" 
              className="w-full h-full object-contain pointer-events-none" 
              src={imgChatGptImageJun252026022748PmRemovebgPreview1} 
            />
          </div>

          {/* Cursive text block & Subtitle */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-full pointer-events-none select-none z-20">
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

        {/* MOBILE & TABLET VIEWPORT: Dynamic Flex stack layout with zero overflow */}
        <div className="lg:hidden w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center select-none">
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
          <div className="relative w-full max-w-[450px] aspect-[450/400] flex justify-center items-center mt-4">
            {/* Garden Background */}
            <div className="absolute w-[90%] h-[70%] bottom-4 left-0 overflow-hidden rounded-lg shadow-sm">
              <img 
                alt="Garden Background" 
                className="w-full h-full object-cover" 
                src={imgMagnificRemoveFatherAndSonFroKLayHax16B1} 
              />
            </div>
            {/* Father & Son Cutout */}
            <div className="absolute w-[75%] h-[90%] left-[20%] top-0 pointer-events-none">
              <img 
                alt="Father and Son Gardening" 
                className="w-full h-full object-contain" 
                src={imgChatGptImageJun252026022748PmRemovebgPreview1} 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
