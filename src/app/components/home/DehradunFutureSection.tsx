import imgDehradunLandscape from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";

export default function DehradunFutureSection() {
  const highlights = [
    { title: "Smart City Mission", desc: "Dehradun selected for ₹1,000+ cr urban transformation — new infrastructure, mobility, and governance." },
    { title: "Education Hub", desc: "Welham, Doon School, UPES, GRD — established institutions within 15 minutes drive." },
    { title: "Healthcare Access", desc: "Max Super Speciality, Himalayan Institute, CMI — tertiary care minutes away." },
    { title: "Transit Upgrades", desc: "Upcoming metro corridor, widened NH-7, Jolly Grant expansion — connectivity accelerating." }
  ];

  return (
    <section className="w-full bg-[#394d23] text-white relative overflow-hidden">
      
      {/* Large Landscape Image - Left/Full on Desktop */}
      <div className="hidden lg:block lg:w-1/2 lg:h-full lg:absolute lg:left-0 lg:top-0 aspect-[1/1]">
        <img
          alt="Dehradun valley landscape - mountains and greenery"
          className="w-full h-full object-cover"
          src={imgDehradunLandscape.src}
        />
      </div>

      {/* Content Area - Right on Desktop, Full on Mobile */}
      <div className="relative lg:w-1/2 lg:ml-auto lg:px-16 lg:py-24 px-6 py-16 md:px-16 md:py-20 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:mx-0 flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Dehradun's Future
            </span>
            <h2 className="font-chopin text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px]">
              A Valley Poised for<br />
              the Next Chapter
            </h2>
          </div>

          {/* Description */}
          <p className="font-chopin text-white/80 text-[18px] md:text-[20px] leading-relaxed font-light tracking-[-0.3px]">
            Dehradun is evolving — new infrastructure, expanding institutions, and rising demand converge on the Mussoorie corridor. 
            Dhanvanti Valley sits at the quiet edge of this growth, positioned to benefit from appreciation without absorbing the noise.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3 className="font-chopin text-gold text-[18px] md:text-[20px] font-medium tracking-[-0.4px]">
                  {item.title}
                </h3>
                <p className="font-chopin text-white/70 text-[15px] md:text-[16px] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Landscape Image */}
      <div className="lg:hidden w-full aspect-[16/9] overflow-hidden">
        <img
          alt="Dehradun valley landscape - mountains and greenery"
          className="w-full h-full object-cover"
          src={imgDehradunLandscape.src}
        />
      </div>

    </section>
  );
}