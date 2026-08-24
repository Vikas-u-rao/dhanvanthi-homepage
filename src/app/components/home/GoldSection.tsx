import imgGoldLifestyle1 from "@/imports/HomepageDhanvantiValley/b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png";
import imgGoldLifestyle2 from "@/imports/HomepageDhanvantiValley/578ff8498ab295a0883b5a51131fbb4503850479.png";

interface GoldSectionProps {
  onEnquireClick?: () => void;
}

export default function GoldSection({ onEnquireClick }: GoldSectionProps) {
  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <section className="w-full bg-[#ca9731] text-[#394d23] px-6 py-16 md:px-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20">
        
        {/* Top Content Block */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <span className="font-chopin text-[#394d23]/70 text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Sanctuary
            </span>
            <h2 className="font-chopin text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px] text-[#394d23]">
              A Sanctuary Crafted<br />
              Deliberately for Lasting Value
            </h2>
            <p className="font-chopin text-[#394d23]/80 text-[18px] md:text-[20px] leading-relaxed font-light max-w-xl">
              Every detail is engineered with precision, from earthquake-resistant structures to climate-conscious spatial design that embraces Dehradun's mountain breezes.
            </p>
            <button
              onClick={handleEnquire}
              className="bg-[#394d23] hover:bg-[#2d3d1c] text-white px-8 py-3.5 rounded-[8px] font-chopin text-[16px] lg:text-[18px] transition-all shadow-sm cursor-pointer w-full lg:w-auto mt-4"
            >
              Schedule Visit
            </button>
          </div>

          {/* Right: Lifestyle Image */}
          <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative">
            <img
              alt="Dhanvanti Valley lifestyle - sanctuary living"
              className="w-full h-full object-cover"
              src={imgGoldLifestyle2.src}
            />
          </div>
        </div>

        {/* Bottom: Two Lifestyle Images Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-[#394d23]/20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt="Dhanvanti Valley - morning light in residence"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgGoldLifestyle1.src}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt="Dhanvanti Valley - evening terrace view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgGoldLifestyle2.src}
            />
          </div>
        </div>

      </div>
    </section>
  );
}