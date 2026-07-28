import imgDhanvantiValleyLogo1 from "@/imports/HomepageDhanvantiValley/3096135ff5cd0c778307cd0faa1b3d985eac9672.png";
import imgPicture11 from "@/imports/HomepageDhanvantiValley/e9ae1adab063682066956368110ab6ac7eec658c.png";

interface FooterProps {
  onEnquireClick: () => void;
}

export default function Footer({ onEnquireClick }: FooterProps) {
  return (
    <footer className="w-full flex flex-col mt-auto">
      {/* Footer Banner: "Make the Move" */}
      <div className="relative w-full py-8 text-center overflow-hidden flex flex-col items-center justify-center min-h-[431px] bg-black">
        {/* Background Image with correct orientation and opacity */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <img 
            alt="Footer Background" 
            className="absolute w-full h-full object-cover opacity-75" 
            src={imgPicture11.src} 
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <span className="font-chopin text-white text-[16px] md:text-[20px] tracking-[0.2em] uppercase select-none">
            Make the Move
          </span>
          <h2 className="font-bavicka text-white text-[32px] md:text-[40px] tracking-wide leading-none select-none">
            Where Time Feels Richer.
          </h2>
          <p className="font-chopin text-white text-[18px] md:text-[24px] max-w-xl leading-relaxed mt-2 tracking-[-0.48px] select-none">
            Experience residences designed around the way you want to live.
          </p>

          {/* Schedule Visit Button / Box */}
          <button 
            onClick={onEnquireClick}
            className="mt-6 border border-white hover:bg-white hover:text-black cursor-pointer px-10 py-4 font-chopin text-[20px] md:text-[26px] tracking-wide uppercase text-white transition-all duration-300"
          >
            Schedule Your Visit
          </button>
        </div>
      </div>

      <div className="w-full bg-white px-6 py-12 md:px-16 md:py-16 border-t border-[#ececf0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <img 
              alt="Dhanvanti Valley Logo" 
              className="max-h-[90px] md:max-h-[110px] object-contain select-none" 
              src={imgDhanvantiValleyLogo1.src} 
            />
          </div>

          {/* Visit / Address Column */}
          <div className="flex flex-col text-center md:text-left gap-1.5 md:w-1/3">
            <span className="font-chopin text-[#ca9731] text-[15px] md:text-[16px] tracking-[0.1em] font-semibold uppercase select-none">
              Visit
            </span>
            <p className="font-chopin text-[#638038] text-[16px] md:text-[18px] tracking-[-0.3px] leading-relaxed">
              Hathibarkala Road, Dehradun, Uttarakhand
            </p>
          </div>

          {/* Contact / Phone Column */}
          <div className="flex flex-col text-center md:text-left gap-1.5 md:w-1/3">
            <span className="font-chopin text-[#ca9731] text-[15px] md:text-[16px] tracking-[0.1em] font-semibold uppercase select-none">
              Contact
            </span>
            <a 
              href="tel:+917398573985"
              className="font-chopin text-[#638038] text-[16px] md:text-[18px] tracking-[-0.3px] hover:underline"
            >
              +91 73985 73985
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#f2f6df] py-5 px-4 text-center border-t border-[#ececf0]/20">
        <p className="font-chopin text-[#638038] text-[16px] md:text-[20px] tracking-[-0.4px]">
          &copy; 2026 Made by Zebrians Creative Tribe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
