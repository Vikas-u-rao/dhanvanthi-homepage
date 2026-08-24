"use client";

import imgFamily from "@/imports/HomepageDhanvantiValley/family.jpg";
import imgEntrance from "@/imports/HomepageDhanvantiValley/dhanavanti_entance.png";
import imgDhanvantiLogo from "@/imports/HomepageDhanvantiValley/061091c707bc10070bcb7df114ead0673c2febb9.png";

export default function AboutDeveloper() {
  const mapPoints = [
    { label: "MOUNTAINS", time: "35 Mins", x: "20.0%", y: "8.5%" },
    { label: "RIVER SIDE", time: "10 Mins", x: "43.3%", y: "81.7%" },
    { label: "HOSPITAL", time: "08 Mins", x: "68.0%", y: "69.0%" },
    { label: "CANTONMENT", time: "05 Mins", x: "37.0%", y: "66.0%" },
    { label: "Jolly Grant Airport", time: "40 Mins", x: "93.8%", y: "50.0%" },
    { label: "CAFES & CLUBS", time: "05 Mins", x: "48.5%", y: "26.1%" },
    { label: "MALLS & MARKET", time: "02 Mins", x: "66.5%", y: "45.0%" },
    { label: "TOP SCHOOL", time: "06 Mins", x: "34.0%", y: "44.0%" }
  ];

  return (
    <section id="about" className="w-full flex flex-col">
      
      {/* 1. DARK FOREST GREEN ABOUT SECTION */}
      <div className="w-full bg-[#304D1D] text-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (~40% on Desktop): Label, Heading & Family Image */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <span className="font-inter text-[#ca9731] text-[13px] md:text-[14px] font-semibold tracking-[0.2em] uppercase">
              ABOUT DHANVANTI VALLEY
            </span>

            <h2 className="font-chopin text-white text-[32px] md:text-[44px] lg:text-[50px] font-normal leading-[1.15] tracking-tight">
              A New Benchmark<br />
              for Luxury Living<br />
              in Dehradun
            </h2>

            <div className="w-full aspect-[4/3] overflow-hidden rounded-none shadow-md mt-2">
              <img
                src={imgFamily.src}
                alt="Family enjoying Dhanvanti Valley lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN (~60% on Desktop): Text Copy */}
          <div className="w-full lg:w-[58%] flex flex-col gap-6 lg:pt-14 font-inter text-white/95 text-[16px] md:text-[18px] lg:text-[19px] leading-[1.7] font-normal">
            <p>
              Dhanvanti Valley is more than a residential project; it's a thoughtfully planned community designed for those who value quality, comfort, and a deeper connection with nature.
            </p>

            <p>
              Set amidst the serene surroundings of Dehradun, these luxury apartments offer spacious layouts, elegant interiors, premium finishes, and smart home features that make everyday living effortless. From beautifully landscaped open spaces to world class amenities, every detail has been carefully planned to create an exceptional lifestyle for modern families.
            </p>

            <p>
              Whether you're looking for your forever home or a premium real estate investment in Dehradun, <strong className="font-semibold text-white">Dhanvanti Valley offers the perfect balance of luxury, convenience, and lasting value.</strong>
            </p>
          </div>

        </div>
      </div>

      {/* 2. FULL-WIDTH ENTRANCE IMAGE IMMEDIATELY BELOW */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/10] overflow-hidden relative">
        <img
          src={imgEntrance.src}
          alt="Dhanvanti Valley Grand Entrance Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. SECTION 1 — WHY DHANVANTI EXISTS (Dark Forest Green #304D1D) */}
      <div className="w-full bg-[#304D1D] text-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (~40%): Label, Main Heading & Paragraph */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <span className="font-inter text-[#ca9731] text-[13px] md:text-[14px] font-semibold tracking-[0.2em] uppercase">
              WHY DHANVANTI EXISTS
            </span>

            <h2 className="font-chopin text-white text-[32px] md:text-[42px] lg:text-[48px] font-normal leading-[1.18] tracking-tight">
              Everything You Expect<br />
              from Premium Living<br />
              And More
            </h2>

            <p className="font-inter text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light mt-2 max-w-md">
              At Dhanvanti Valley, every aspect has been designed to enhance your everyday life.
            </p>
          </div>

          {/* RIGHT COLUMN (~60%): 4 Content Blocks */}
          <div className="w-full lg:w-[60%] flex flex-col gap-8 font-inter">
            {/* Block 1 */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-6 lg:pb-8">
              <h3 className="font-chopin text-[#ca9731] text-[20px] md:text-[22px] font-semibold">
                Prime Location
              </h3>
              <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                Located in the prestigious Hathibarkala area of Dehradun with excellent connectivity to schools, hospitals, shopping destinations, business hubs, and Jolly Grant Airport.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-6 lg:pb-8">
              <h3 className="font-chopin text-[#ca9731] text-[20px] md:text-[22px] font-semibold">
                Contemporary Architecture
              </h3>
              <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                Elegant exteriors, spacious layouts, expansive balconies, and abundant natural light create homes that are both beautiful and functional.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col gap-2.5 border-b border-white/10 pb-6 lg:pb-8">
              <h3 className="font-chopin text-[#ca9731] text-[20px] md:text-[22px] font-semibold">
                Surrounded by Nature
              </h3>
              <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                Wake up to lush greenery, fresh mountain air, and panoramic skyline views while enjoying the convenience of city living.
              </p>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col gap-2.5">
              <h3 className="font-chopin text-[#ca9731] text-[20px] md:text-[22px] font-semibold">
                Smart Living
              </h3>
              <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                Modern home automation, advanced security systems, and thoughtfully integrated technology make every day simpler, safer, and more comfortable.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. SECTION 2 — CONNECTED TO EVERYTHING (Cream/Off-White Background with Location Map) */}
      <div id="location-advantage" className="w-full bg-[#FFFFFF] text-[#394d23] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Top-Left Label & Headings */}
          <div className="flex flex-col gap-4 text-left max-w-4xl">
            <span className="font-inter text-[#638038] text-[13px] md:text-[14px] font-semibold tracking-[0.2em] uppercase">
              LOCATION ADVANTAGE
            </span>

            <h2 className="font-chopin text-[#394d23] text-[32px] md:text-[44px] lg:text-[50px] font-normal leading-[1.15] tracking-tight">
              Connected to Everything<br />
              That Matters to You &amp; Family
            </h2>

            <p className="font-inter text-[#394d23]/85 text-[16px] md:text-[18px] leading-relaxed font-normal mt-2">
              One of the greatest advantages of living in Dhanvanti Valley is its exceptional location.
              Enjoy easy access to leading educational institutions, renowned healthcare facilities, shopping
              destinations, cafés, restaurants, and major transportation routes — all while coming home to peaceful
              surroundings filled with greenery and breathtaking mountain views.
            </p>

            <p className="font-inter text-[#394d23]/90 text-[16px] md:text-[18px] leading-relaxed font-normal">
              This unique balance makes Dhanvanti Valley one of the most desirable luxury residential projects in Dehradun.
            </p>
          </div>

          {/* Centered Circular Connectivity Distance Diagram */}
          <div className="w-full flex justify-center items-center mt-8">
            {/* Desktop Graphical Diagram */}
            <div className="hidden md:flex relative w-full max-w-[900px] aspect-[900/650] items-center justify-center select-none font-urbanist font-medium">
              {/* Concentric Circles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] aspect-square border border-[#B7B7B7] rounded-full animate-[pulse_6s_infinite]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border border-[#B7B7B7] rounded-full" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square border border-[#B7B7B7] rounded-full" />
              
              {/* Central Logo Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[150px] overflow-hidden flex flex-col items-center justify-center z-20">
                <img 
                  alt="Dhanvanti Valley Logo" 
                  className="w-full h-full object-contain pointer-events-none select-none" 
                  src={imgDhanvantiLogo.src} 
                />
              </div>

              {/* Location Point Dots */}
              {mapPoints.map((pt, idx) => (
                <div 
                  key={idx}
                  className="absolute group"
                  style={{ left: pt.x, top: pt.y }}
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[12px] w-[12px]">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#CA9731]/30 opacity-75"></span>
                    <div className="w-[12px] h-[12px] bg-[#CA9731] rounded-full cursor-pointer transition-all duration-300 group-hover:scale-125 shadow-sm" />
                  </div>

                  <div className="absolute bottom-[17px] left-0 -translate-x-1/2 whitespace-nowrap text-center flex flex-col pointer-events-none select-none font-urbanist items-center">
                    <span className="text-[11px] font-normal text-[#394d23] tracking-[0.18em] leading-none uppercase">
                      {pt.label}
                    </span>
                    <span className="text-[10px] text-[#394d23]/70 font-light mt-[3px] tracking-[0.08em] leading-none">
                      {pt.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout Grid */}
            <div className="md:hidden w-full flex flex-col gap-3 font-inter">
              <div className="grid grid-cols-2 gap-3 w-full">
                {mapPoints.map((pt, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-[#394d23]/10 rounded-[8px] p-4 flex flex-col justify-between shadow-xs"
                  >
                    <span className="text-[#394d23] text-[14px] leading-tight font-medium uppercase tracking-wider">
                      {pt.label}
                    </span>
                    <span className="text-[#ca9731] text-[13px] font-semibold mt-2">
                      {pt.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


