export default function WhyDhanvanti() {
  const philosophies = [
    { num: "01", title: "Silent Luxury" },
    { num: "02", title: "The 15-Minute Life" },
    { num: "03", title: "Thoughtfully Designed Residences" },
    { num: "04", title: "Effortless by Design" }
  ];

  return (
    <section id="philosophy" className="w-full bg-[#394d23] text-white px-6 py-16 md:px-16 md:py-20 border-t border-[#ececf0]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Left Column: Core Purpose Quote */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase select-none">
            Why Dhanvanti Exists
          </span>
          <h2 className="font-chopin text-[32px] md:text-[36px] font-light leading-[1.2] md:leading-[1.3] max-w-lg select-none">
            We did not set out <br />
            to build apartments. <br />
            <span className="font-chopin italic font-normal">We set out to give <br />
              people back <br />
              their time.</span>
          </h2>
        </div>

        {/* Right Column: Paragraph Description and Core Tenets */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-10">
          {/* Paragraph Details */}
          <div className="flex flex-col gap-6 font-chopin text-[18px] md:text-[20px] text-white/90 font-light leading-relaxed select-none">
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
            {philosophies.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between  items-center py-5 border-t border-white/20 hover:bg-white/5 px-2 transition-all duration-300 group cursor-pointer"
              >
                <span className="font-chopin text-[18px] md:text-[20px] text-gold group-hover:text-[#e6c87a] transition-colors duration-300 font-medium select-none">
                  {item.title}
                </span>
                <span className="font-chopin text-[18px] md:text-[20px] text-white/50 group-hover:text-white transition-colors duration-300 font-medium select-none">
                  {item.num}
                </span>
              </div>
            ))}
            {/* Final bottom line */}
            <div className="w-full border-t border-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
}
