import imgFinalCTA from "@/imports/HomepageDhanvantiValley/5f8e86edef6db1f6dd0ef3b40e71c5b9fb981c59.png";

interface FinalCTAProps {
  onEnquireClick?: () => void;
}

export default function FinalCTA({ onEnquireClick }: FinalCTAProps) {
  const handleEnquire = () => {
    if (onEnquireClick) {
      onEnquireClick();
    }
  };

  return (
    <section className="w-full bg-[#394d23] relative overflow-hidden">
      
      {/* Background Landscape Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt="Dhanvanti Valley landscape"
          className="w-full h-full object-cover opacity-20"
          src={imgFinalCTA.src}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#394d23] to-[#394d23]/90" />
      </div>

      {/* Content */}
      <div className="relative px-6 py-16 md:px-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Your Move
            </span>
            <h2 className="font-bavicka text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight">
              Where Time<br />
              Feels Richer
            </h2>
          </div>

          {/* Description */}
          <p className="font-chopin text-white/80 text-[18px] md:text-[20px] leading-relaxed font-light tracking-[-0.3px]">
            The valley waits for no one. But for those who choose it, every day begins with intention 
            and ends with satisfaction. This is the life you've been working toward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              onClick={handleEnquire}
              className="bg-[#ca9731] hover:bg-[#b08125] text-white px-10 py-4 rounded-[8px] font-chopin text-[18px] transition-all shadow-sm cursor-pointer w-full sm:w-auto"
            >
              Schedule Your Visit
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById("philosophy");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-[8px] font-chopin text-[18px] transition-all cursor-pointer w-full sm:w-auto"
            >
              Download Brochure
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}