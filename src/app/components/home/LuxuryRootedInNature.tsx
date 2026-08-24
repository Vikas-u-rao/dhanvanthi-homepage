import imgLuxuryGarden from "@/imports/HomepageDhanvantiValley/9135f9cb4de095b2e3f8552865717e2946a8e259.png";
import imgLuxuryLifestyle from "@/imports/HomepageDhanvantiValley/46f0c09b205dbdc33df2dbc2088b86965a0004dd.png";

export default function LuxuryRootedInNature() {
  const handleScheduleVisit = () => {
    const el = document.getElementById("enquire");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    const el = document.getElementById("architecture");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        
        {/* Section Header Grid: Left Serif Title, Right Subheading */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-left md:text-right">
          <h2 className="font-bavicka text-[#638038] text-[40px] md:text-[56px] lg:text-[64px] font-normal leading-tight tracking-tight">
            Luxury, Rooted in Nature
          </h2>
          <p className="font-chopin text-[#638038] text-[18px] md:text-[22px] leading-snug font-normal max-w-sm md:ml-auto">
            Luxury Apartments in Dehradun,<br />
            Designed for a Life Well Lived
          </p>
        </div>

        {/* Hero Garden / Lifestyle Image Showcase */}
        <div className="relative w-full max-w-5xl mx-auto mt-2">
          {/* Green lawn / golf garden base image */}
          <div className="w-full aspect-[16/8] md:aspect-[21/9] overflow-hidden shadow-sm">
            <img
              alt="Dhanvanti Valley golf putting green and garden"
              className="w-full h-full object-cover"
              src={imgLuxuryGarden.src}
            />
          </div>

          {/* Father and Son lifestyle cutout overlay floating on top left */}
          <div className="absolute -top-[25%] -left-[2%] md:-left-[4%] w-[42%] md:w-[35%] aspect-[3/4] pointer-events-none z-10 drop-shadow-md">
            <img
              alt="Father and son enjoying putting green"
              className="w-full h-full object-contain"
              src={imgLuxuryLifestyle.src}
            />
          </div>
        </div>

        {/* Supporting Copy */}
        <p className="font-chopin text-[#638038] text-[16px] md:text-[19px] leading-relaxed font-normal max-w-4xl mt-4">
          Experience premium living at Dhanvanti Valley, where contemporary architecture, lush green landscapes, 
          breathtaking mountain views, and thoughtfully designed residences come together. Located in the heart 
          of Dehradun, every home is crafted to offer space, comfort, privacy, and a lifestyle that feels truly elevated.
        </p>

        {/* Configuration Heading & CTAs */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-chopin text-[#638038] text-[32px] md:text-[44px] font-normal tracking-tight">
              2, 3 &amp; 4 BHK Luxury Residences
            </h3>
            <p className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.15em] uppercase font-medium">
              IN HATHIBARKALA, DEHRADUN
            </p>
          </div>

          {/* Gold Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <button
              onClick={handleScheduleVisit}
              className="bg-[#ca9731] hover:bg-[#b08125] text-white px-8 py-3.5 rounded-[8px] font-chopin text-[16px] md:text-[17px] font-medium transition-all shadow-sm cursor-pointer w-full sm:w-auto"
            >
              Schedule a Site Visit
            </button>
            <button 
              onClick={handleDownloadBrochure}
              className="bg-[#ca9731] hover:bg-[#b08125] text-white px-8 py-3.5 rounded-[8px] font-chopin text-[16px] md:text-[17px] font-medium transition-all shadow-sm cursor-pointer w-full sm:w-auto"
            >
              Download Brochure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}