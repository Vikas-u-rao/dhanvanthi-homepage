import imgInvestment from "@/imports/HomepageDhanvantiValley/178e4e131b13829d6bd8e5794a1ec499776550d1.png";

interface InvestmentSectionProps {
  onEnquireClick?: () => void;
}

export default function InvestmentSection({ onEnquireClick }: InvestmentSectionProps) {
  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  const investmentHighlights = [
    { label: "Price Appreciation", value: "12-15% CAGR", desc: "Historical valley growth trajectory" },
    { label: "Rental Yield", value: "3-4% p.a.", desc: "Strong demand from professionals" },
    { label: "Possession Timeline", value: "Q4 2028", desc: "Clear delivery commitment" },
    { label: "RERA Registration", value: "UKRE03260000729", desc: "Full regulatory compliance" }
  ];

  return (
    <section className="w-full bg-[#ca9731] text-[#394d23] px-6 py-16 md:px-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20">
        
        {/* Content Block */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <span className="font-chopin text-[#394d23]/70 text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Investment
            </span>
            <h2 className="font-chopin text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px] text-[#394d23]">
              Where Your Capital<br />
              Finds Its Natural Return
            </h2>
            <p className="font-chopin text-[#394d23]/80 text-[18px] md:text-[20px] leading-relaxed font-light max-w-xl">
              Dehradun's most sought-after corridor. Limited inventory. A fundamentals-driven opportunity 
              in a market defined by scarcity and enduring demand.
            </p>
          </div>

          {/* Investment Highlights Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            {investmentHighlights.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 border border-[#394d23]/20">
                <h3 className="font-chopin text-[#394d23] text-[24px] md:text-[28px] font-medium leading-tight mb-1">
                  {item.value}
                </h3>
                <p className="font-chopin text-[#394d23]/70 text-[13px] tracking-[0.1em] uppercase mb-2">
                  {item.label}
                </p>
                <p className="font-chopin text-[#394d23]/60 text-[14px] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Property/Map Image */}
        <div className="relative aspect-[21/10] lg:aspect-[24/11] overflow-hidden pt-8 border-t border-[#394d23]/20">
          <img
            alt="Dhanvanti Valley location map and surroundings"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
            src={imgInvestment.src}
          />
        </div>

      </div>
    </section>
  );
}