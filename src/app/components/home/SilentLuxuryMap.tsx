import imgDhanvntiValleyLogoFroLightBg1 from "@/imports/HomepageDhanvantiValley/061091c707bc10070bcb7df114ead0673c2febb9.png";

export default function SilentLuxuryMap() {
  const points = [
    { label: "Mountains", time: "35 Mins", x: "28.1%", y: "28.1%" },
    { label: "River Side", time: "10 Mins", x: "43.3%", y: "78.2%" },
    { label: "Hospital", time: "08 Mins", x: "64.7%", y: "68.3%" },
    { label: "Cantonment", time: "05 Mins", x: "32.9%", y: "64.4%" },
    { label: "Jolly Grant Airport", time: "40 Mins", x: "89.1%", y: "59.0%" },
    { label: "Cafes & Clubs", time: "02 Mins", x: "47.7%", y: "12.0%" },
    { label: "Malls & Market", time: "08 Mins", x: "64.0%", y: "55.2%" },
    { label: "Top School", time: "06 Mins", x: "31.6%", y: "53.1%" }
  ];

  return (
    <section id="location" className="w-full bg-[#f2f6df] text-[#394d23] px-6 py-16 md:px-16 md:py-24 relative flex flex-col items-center overflow-hidden">
      
      {/* Title & Introduction block */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 text-left z-10 select-none">
        <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
          Silent Luxury
        </span>
        <h2 className="font-chopin text-[28px] md:text-[36px] tracking-[-0.72px] text-[#394d23] leading-tight max-w-xl">
          Closer to everything, <br className="hidden md:inline" />
          further from the noise
        </h2>
        <p className="font-chopin text-[18px] md:text-[20px] text-[#394d23]/80 leading-relaxed max-w-2xl tracking-[-0.4px] mt-2">
          Everything that matters to your week — held within a quarter hour of home. <br />
          <span className="font-chopin italic font-normal text-[#ca9731]">Not a feature list. A different relationship with your own clock.</span>
        </p>
      </div>

      {/* Graphical Distance Map (Concentric Rings & Dots) - Hidden on Mobile, scaling on Desktop/Tablet */}
      <div className="hidden md:flex relative w-full max-w-[900px] aspect-[900/650] items-center justify-center mt-12 select-none font-chopin font-medium">
        
        {/* Concentric Circles scaled relatively and centered explicitly */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] aspect-square border border-[#B7B7B7] rounded-full flex items-center justify-center animate-[pulse_6s_infinite]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border border-[#B7B7B7] rounded-full flex items-center justify-center" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square border border-[#B7B7B7] rounded-full flex items-center justify-center" />
        
        {/* Central Logo Node - Centers perfectly without vertical offsets */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[150px] overflow-hidden flex items-center justify-center z-20">
          <img 
            alt="Dhanvanti Valley Logo Node" 
            className="w-full h-full object-contain pointer-events-none select-none" 
            src={imgDhanvntiValleyLogoFroLightBg1} 
          />
        </div>

        {/* Location Point Dots */}
        {points.map((pt, idx) => (
          <div 
            key={idx}
            className="absolute flex flex-col items-center justify-center group"
            style={{ left: pt.x, top: pt.y }}
          >
            {/* Pulsing Target Dot */}
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#CA9731]/30 opacity-75"></span>
              <div className="w-[12px] h-[12px] bg-[#CA9731] rounded-full cursor-pointer transition-all duration-300 group-hover:scale-125 shadow-sm" />
            </div>

            {/* Label Block */}
            <div className="absolute top-[18px] bg-white/95 backdrop-blur-xs border border-gray-100 rounded-md px-2.5 py-1.5 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-white shadow-xs transition-all duration-300 text-center flex flex-col pointer-events-none">
              <span className="text-[13px] font-medium text-[#2c2c2c] leading-none">
                {pt.label}
              </span>
              <span className="text-[11px] text-[#ca9731] font-bold mt-[4px] leading-none">
                {pt.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Mobile Layout (Travel Times List) - Shown ONLY on mobile screens */}
      <div className="md:hidden w-full flex flex-col gap-4 mt-8 select-none z-10">
        <div className="grid grid-cols-2 gap-3 w-full">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#394d23]/10 rounded-[8px] p-4 flex flex-col justify-between shadow-xs hover:border-[#ca9731] transition-all"
            >
              <span className="font-chopin text-[#394d23] text-[16px] leading-tight font-medium">
                {pt.label}
              </span>
              <span className="font-chopin text-[#ca9731] text-[14px] font-bold mt-2">
                {pt.time}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
