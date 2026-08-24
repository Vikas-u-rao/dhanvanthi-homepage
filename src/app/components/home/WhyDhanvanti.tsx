import imgWhyLifestyle from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";

export default function WhyDhanvanti() {
  const philosophies = [
    { num: "01", title: "The 15-Minute Life", targetId: "location" },
    { num: "02", title: "Thoughtfully Designed Residences", targetId: "architecture" },
    { num: "03", title: "Effortless by Design", targetId: "lifestyle" }
  ];

  const handleScrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="philosophy" className="w-full bg-[#394d23] text-white px-6 py-16 md:px-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column: Core Purpose Quote + Lifestyle Image */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Why Dhanvanti Exists
            </span>
            <h2 className="font-chopin text-[32px] md:text-[36px] lg:text-[42px] font-light leading-[1.2] lg:leading-[1.3] max-w-lg">
              We did not set out <br />
              to build apartments. <br />
              <span className="font-chopin italic font-normal">We set out to give <br />
                people back <br />
                their time.</span>
            </h2>
          </div>

          {/* Lifestyle Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt="Dhanvanti Valley lifestyle - peaceful valley living"
              className="w-full h-full object-cover"
              src={imgWhyLifestyle.src}
            />
          </div>
        </div>

        {/* Right Column: Paragraph Description and Core Tenets */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-10">
          {/* Paragraph Details */}
          <div className="flex flex-col gap-6 font-chopin text-[18px] md:text-[20px] text-white/90 font-light leading-relaxed">
            <p>
              Most of what's sold as luxury today is louder logos, larger lobbies, longer lists of amenities. None of it gives you back the one thing that actually runs out — <span className="italic font-normal">your time.</span>
            </p>
            <p>
              Dhanvanti Valley was conceived around a simpler idea: a home should shorten the distance between you and the life you're trying to live. <br />
              <span className="italic font-normal text-white/90">Less commuting. Less compromise. More mornings that begin slowly, and evenings that are actually yours.</span>
            </p>
          </div>

          {/* Numbered Philosophy Tenets */}
          <div className="w-full flex flex-col mt-4">
            {philosophies.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleScrollToSection(item.targetId)}
                  className="w-full flex justify-between items-center py-5 border-t border-white/20 px-2 transition-all duration-300 hover:bg-white/5 group cursor-pointer"
                >
                  <span className="font-chopin text-[18px] md:text-[20px] text-gold font-medium group-hover:text-[#e6c87a] transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="font-chopin text-[18px] md:text-[20px] text-white/50 font-medium group-hover:text-white transition-colors duration-300">
                    {item.num}
                  </span>
                </div>
              );
            })}
            {/* Final bottom line */}
            <div className="w-full border-t border-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
}