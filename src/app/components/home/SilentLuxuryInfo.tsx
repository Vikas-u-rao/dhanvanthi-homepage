export default function SilentLuxuryInfo() {
  const columns = [
    {
      title: "Morning Light",
      description: "Residences oriented to greet the day before the valley does — long, low light across every room that faces east."
    },
    {
      title: "Distance From Noise",
      description: "Set apart from the density of the city, close enough to reach it, far enough to never hear it."
    },
    {
      title: "Room To Think",
      description: "Proportions chosen for stillness — ceiling heights, window widths and walking distances that slow you down on purpose."
    }
  ];

  return (
    <section className="w-full bg-[#394d23] text-white px-6 py-16 md:px-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 select-none">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <span className="font-chopin text-[#ffd582] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Silent Luxury
          </span>
          <h2 className="font-chopin text-[30px] md:text-[36px] font-light leading-tight tracking-[-0.72px] max-w-2xl">
            Not marble. Not monograms. <br />
            Just the conditions for a calmer life.
          </h2>
        </div>

        {/* 3-Column Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-4 relative">
          {columns.map((col, idx) => (
            <div 
              key={idx}
              className={`flex flex-col gap-4 relative md:px-8 ${
                idx === 0 ? "md:pl-0" : ""
              } ${
                idx === columns.length - 1 ? "md:pr-0" : ""
              } ${
                idx > 0 ? "border-t border-white/20 pt-6 md:pt-0 md:border-t-0 md:border-l md:border-white/20" : ""
              }`}
            >
              <h3 className="font-chopin text-[#ffd582] text-[22px] md:text-[24px] font-medium tracking-[-0.48px]">
                {col.title}
              </h3>
              <p className="font-chopin text-white/90 text-[18px] md:text-[20px] leading-relaxed font-light tracking-[-0.4px]">
                {col.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
