import imgDhanvntiValleyLogoFroLightBg1 from "@/imports/HomepageDhanvantiValley/061091c707bc10070bcb7df114ead0673c2febb9.png";

export default function SilentLuxuryMap() {
  const points = [
    { label: "Mountains", time: "35 Mins", x: "20.0%", y: "8.5%" },
    { label: "River Side", time: "10 Mins", x: "43.3%", y: "81.7%" },
    { label: "Hospital", time: "08 Mins", x: "68.0%", y: "69.0%" },
    { label: "Cantonment", time: "05 Mins", x: "37.0%", y: "66.0%" },
    { label: "Jolly Grant Airport", time: "40 Mins", x: "93.8%", y: "50.0%" },
    { label: "Cafes & Clubs", time: "05 Mins", x: "48.5%", y: "26.1%" },
    { label: "Malls & Market", time: "02 Mins", x: "66.5%", y: "45.0%" },
    { label: "Top School", time: "06 Mins", x: "34.0%", y: "44.0%" }
  ];

  return (
    <section id="location" className="w-full bg-[#f2f6df] text-[#394d23] px-6 py-16 md:px-16 md:py-24 lg:py-32 relative flex flex-col items-center overflow-hidden">
      
      {/* Title & Introduction block - Centered with more whitespace */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 text-center z-10">
        <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
          Connectivity
        </span>
        <h2 className="font-chopin font-light text-[32px] md:text-[42px] lg:text-[48px] tracking-normal text-[#394d23] leading-tight max-w-2xl mx-auto">
          Connected to Everything<br />
          That Matters to You & Family
        </h2>
        <p className="font-chopin text-[16px] md:text-[18px] text-[#394d23] leading-relaxed max-w-2xl mx-auto font-light">
          Everything that matters to your week — held within a quarter hour of home. <br />
          <span className="font-chopin italic font-normal text-[#394d23]">Not a feature list. A different relationship with your own clock.</span>
        </p>
      </div>

      {/* Graphical Distance Map - Large, Centered, Primary Visual Element */}
      <div className="hidden md:flex relative w-full max-w-[1100px] aspect-[1100/800] items-center justify-center mt-16 select-none font-urbanist font-medium">
        
        {/* Concentric Circles - Thin, Minimal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] aspect-square border border-[#B7B7B7]/50 rounded-full animate-[pulse_6s_infinite]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square border border-[#B7B7B7]/50 rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square border border-[#B7B7B7]/50 rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square border border-[#B7B7B7]/50 rounded-full" />
        
        {/* Central Logo Node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[180px] overflow-hidden flex items-center justify-center z-20">
          <img 
            alt="Dhanvanti Valley Logo Node" 
            className="w-full h-full object-contain pointer-events-none select-none" 
            src={imgDhanvntiValleyLogoFroLightBg1.src} 
          />
        </div>

        {/* Location Point Dots */}
        {points.map((pt, idx) => (
          <div 
            key={idx}
            className="absolute group"
            style={{ left: pt.x, top: pt.y }}
          >
            {/* Pulsing Target Dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[12px] w-[12px]">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#CA9731]/30 opacity-75"></span>
              <div className="w-[12px] h-[12px] bg-[#CA9731] rounded-full cursor-pointer transition-all duration-300 group-hover:scale-125 shadow-sm" />
            </div>

            {/* Label Block - Floating above the dot */}
            <div className="absolute bottom-[20px] left-0 -translate-x-1/2 whitespace-nowrap text-center flex flex-col pointer-events-none select-none font-urbanist items-center">
              <span className="text-[11px] font-normal text-[#394d23] tracking-[0.18em] leading-none uppercase">
                {pt.label.toUpperCase()}
              </span>
              <span className="text-[10px] text-[#394d23]/70 font-light mt-[3px] tracking-[0.08em] leading-none">
                {pt.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Mobile Layout (Travel Times List) */}
      <div className="md:hidden w-full max-w-xl flex flex-col gap-4 mt-12 z-10 font-chopin">
        <div className="grid grid-cols-2 gap-3 w-full">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#394d23]/10 rounded-[8px] p-4 flex flex-col justify-between shadow-xs hover:border-[#ca9731] transition-all"
            >
              <span className="text-[#394d23] text-[14px] leading-tight font-medium uppercase tracking-wider">
                {pt.label.toUpperCase()}
              </span>
              <span className="text-[#394d23]/70 text-[13px] font-normal mt-2">
                {pt.time}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}