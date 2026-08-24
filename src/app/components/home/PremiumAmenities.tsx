export default function PremiumAmenities() {
  const column1 = [
    "Temperature-Controlled Swimming Pool",
    "Premium Clubhouse",
    "Modern Gymnasium",
    "Indoor Games",
    "Children's Play Area",
    "24×7 Security & CCTV Surveillance"
  ];

  const column2 = [
    "Landscaped Gardens",
    "Jogging & Walking Tracks",
    "Bistro Café",
    "Senior Citizen Seating Areas",
    "Multi-Purpose Hall"
  ];

  return (
    <section className="w-full bg-[#394d23] px-6 py-16 md:px-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Block - Upper Right */}
        <div className="flex justify-end mb-12 lg:mb-16">
          <div className="flex flex-col gap-4 max-w-xl text-right">
            <span className="font-chopin text-[#ca9731] text-[14px] md:text-[16px] tracking-[0.2em] uppercase font-medium">
              PREMIUM AMENITIES
            </span>
            <h2 className="font-chopin text-white text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px]">
              Designed Around<br />
              Your Lifestyle
            </h2>
          </div>
        </div>

        {/* Amenities - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            {column1.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="font-chopin text-[#ca9731] text-[14px] md:text-[16px] leading-tight shrink-0 mt-0.5">
                  •
                </span>
                <span className="font-chopin text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
                  {amenity}
                </span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            {column2.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="font-chopin text-[#ca9731] text-[14px] md:text-[16px] leading-tight shrink-0 mt-0.5">
                  •
                </span>
                <span className="font-chopin text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
                  {amenity}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}