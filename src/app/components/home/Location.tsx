import imgRectangle18 from "@/imports/HomepageDhanvantiValley/178e4e131b13829d6bd8e5794a1ec499776550d1.png";

export default function Location() {
  const travelTimes = [
    { destination: "Max Super Speciality Hospital", time: "12 min" },
    { destination: "Welham & Doon School", time: "9 min" },
    { destination: "Rajpur Road Market", time: "11 min" },
    { destination: "Mussoorie", time: "35 min" },
    { destination: "Jolly Grant Airport", time: "42 min" },
    { destination: "Hathibarkala Reserve", time: "03 min" }
  ];

  return (
    <section className="w-full bg-[#394d23] text-white px-6 py-16 md:px-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

        {/* Left Column: Text & Travel Times Table */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Location
            </span>
            <h2 className="font-chopin text-[28px] md:text-[36px] font-light leading-tight tracking-[-0.72px] max-w-xl">
              Closer to everything. <br />
              Further from the noise.
            </h2>
            <p className="font-chopin text-[16px] md:text-[17px] text-white/90 leading-relaxed font-light tracking-[-0.3px] mt-2">
              Set against the Hathibarkala wildlife reserve on the road to Mussoorie — within reach of the city, removed from its weight.
            </p>
          </div>

          {/* Travel Times Table */}
          <div className="flex flex-col w-full border-b border-white/20 mt-4">
            {travelTimes.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex justify-between items-center py-4 border-t border-white/20 px-2 font-chopin text-[16px] md:text-[17px] font-light tracking-[-0.3px] hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-gold">
                  {item.destination}
                </span>
                <span className="text-white font-medium">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Location Map Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[450px] lg:max-w-none aspect-[387/685] lg:h-[685px] overflow-hidden rounded-lg shadow-md">
            <img
              alt="Dhanvanti Valley Map Details"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src={imgRectangle18.src}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
