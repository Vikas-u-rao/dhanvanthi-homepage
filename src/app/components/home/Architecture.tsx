import imgEntrance from "@/imports/HomepageDhanvantiValley/dhanavanti_entance.png";

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white overflow-hidden">
      
      {/* Full-Width Entrance Image - Primary Visual Focus */}
      <div className="w-full aspect-[21/10] lg:aspect-[24/11] relative overflow-hidden">
        <img
          alt="Dhanvanti Valley grand entrance architecture"
          className="w-full h-full object-cover"
          src={imgEntrance.src}
        />
      </div>

      {/* Dark Green Information Area */}
      <div className="bg-[#394d23] text-white px-6 py-12 md:px-16 md:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:gap-16 items-start">
          
          {/* Left: Label + Heading + Description */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Architecture
            </span>
            <h2 className="font-chopin text-[32px] md:text-[36px] lg:text-[42px] font-light leading-tight tracking-[-0.72px] max-w-xl">
              An Entrance That<br />
              Announces Arrival
            </h2>
            <p className="font-chopin text-white/80 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px] max-w-md">
              The gateway to Dhanvanti Valley is framed by stone and timber, opening onto a tree-lined boulevard that 
              immediately separates you from the city. Every arrival feels like a return.
            </p>
          </div>

          {/* Right: Multiple Info Columns */}
          <div className="w-full lg:w-3/5 grid grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-chopin text-gold text-[20px] md:text-[22px] font-medium tracking-[-0.4px]">
                Material Palette
              </h3>
              <p className="font-chopin text-white/80 text-[15px] md:text-[16px] leading-relaxed font-light">
                Local stone, sustainably sourced timber, and low-reflectivity glass — chosen to age gracefully 
                against the valley backdrop.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-chopin text-gold text-[20px] md:text-[22px] font-medium tracking-[-0.4px]">
                Spatial Logic
              </h3>
              <p className="font-chopin text-white/80 text-[15px] md:text-[16px] leading-relaxed font-light">
                Double-height lobby, generous porte-cochère, and seamless indoor-outdoor transitions define 
                the arrival experience.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-chopin text-gold text-[20px] md:text-[22px] font-medium tracking-[-0.4px]">
                Environmental Response
              </h3>
              <p className="font-chopin text-white/80 text-[15px] md:text-[16px] leading-relaxed font-light">
                Passive cooling through cross-ventilation corridors, deep overhangs for solar shading, 
                and rainwater harvesting integrated at grade.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-chopin text-gold text-[20px] md:text-[22px] font-medium tracking-[-0.4px]">
                Structural Integrity
              </h3>
              <p className="font-chopin text-white/80 text-[15px] md:text-[16px] leading-relaxed font-light">
                Earthquake-resistant RCC frame (Zone IV compliant), with shear walls designed for 
                the Himalayan seismic profile.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}