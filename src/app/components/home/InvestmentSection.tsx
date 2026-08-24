"use client";

import imgCity from "@/imports/HomepageDhanvantiValley/city.png";
import imgView from "@/imports/HomepageDhanvantiValley/e9ae1adab063682066956368110ab6ac7eec658c.png";

interface InvestmentSectionProps {
  onEnquireClick?: () => void;
}

export default function InvestmentSection({ onEnquireClick }: InvestmentSectionProps) {
  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <>
      {/* Top Block - Mustard/Gold Background */}
      <section className="w-full bg-[#D09A2D] px-6 py-16 md:px-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Label, Heading, Paragraphs */}
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="font-chopin text-white text-[14px] md:text-[16px] tracking-[0.2em] uppercase font-medium">
              INVESTMENT
            </span>
            <h2 className="font-chopin text-white text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px]">
              A Premium Investment in Dehradun's Growing Future
            </h2>
            <p className="font-chopin text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
              Dehradun is entering a new era of growth. With major infrastructure projects underway — 
              the upcoming metro corridor, NH-7 expansion, and Jolly Grant Airport modernization — the city's 
              connectivity and real estate values are set to accelerate.
            </p>
            <p className="font-chopin text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
              Dhanvanti Valley sits at the heart of this transformation. Positioned on the Mussoorie corridor 
              against the Hathibarkala reserve, it offers scarcity-driven value: limited land, protected green 
              surroundings, and a lifestyle that appreciates with the city.
            </p>
          </div>

          {/* Right: Large Landscape Image - 562x374 */}
          <div className="relative aspect-[562/374] overflow-hidden rounded-xl">
            <img
              alt="Dehradun city view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgCity.src}
            />
          </div>

        </div>
      </section>

      {/* Bottom Block - Two Column Layout */}
      <section className="w-full relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Dark Olive-Green Content */}
          <div className="bg-[#304D20] text-white px-6 py-12 md:px-16 md:py-20 lg:px-20 lg:py-28 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 flex flex-col gap-6">
              
              <p className="font-chopin text-[#D09A2D] text-[24px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight">
                This Isn't Just a Project. It's a Point of View.
              </p>
              
              <p className="font-chopin text-white/90 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
                Every Great Address Begins with a Conversation.
              </p>
              
              <p className="font-chopin text-white/70 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
                We believe a home should be chosen with the same care you'd give to any life-defining decision. 
                Not rushed. Not sold. Discovered.
              </p>

              <button
                onClick={handleEnquire}
                className="bg-[#D09A2D] hover:bg-[#b88626] text-[#304D20] px-8 py-3.5 rounded-[8px] font-chopin text-[16px] md:text-[18px] transition-all shadow-sm cursor-pointer w-fit"
              >
                Schedule a Site Visit
              </button>

              <div className="border-t border-white/20 pt-8 flex flex-col gap-6">
                <h3 className="font-chopin text-white text-[24px] md:text-[32px] lg:text-[36px] font-light leading-tight tracking-[-0.72px]">
                  Before You Choose Your Next Home, Choose the Right Feeling.
                </h3>
                <p className="font-chopin text-white/80 text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
                  A residence isn't measured in square feet alone. It's measured in the quiet of morning light, 
                  the rhythm of valley air, and the certainty that you've invested in a place that holds its value 
                  — because it holds its principles.
                </p>
                <button
                  onClick={handleEnquire}
                  className="bg-transparent border-2 border-[#D09A2D]/50 hover:border-[#D09A2D] hover:bg-[#D09A2D]/10 text-[#D09A2D] px-8 py-3.5 rounded-[8px] font-chopin text-[16px] md:text-[18px] transition-all cursor-pointer w-fit"
                >
                  Download Brochure
                </button>
              </div>

            </div>
          </div>

          {/* Right: Large Vertical Image - View */}
          <div className="relative overflow-hidden">
            <img
              alt="Valley view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgView.src}
            />
          </div>

        </div>
      </section>
    </>
  );
}