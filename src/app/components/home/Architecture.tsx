import imgRectangle3 from "@/imports/HomepageDhanvantiValley/5f8e86edef6db1f6dd0ef3b40e71c5b9fb981c59.png";
import imgRectangle5 from "@/imports/HomepageDhanvantiValley/f257ea212fa4f3260fa75f7bd475b9c9c705250f.png";
import imgRectangle6 from "@/imports/HomepageDhanvantiValley/a3658af04e647e6e2a48b6ca2977a885ef2799a6.png";

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Title and Intro */}
        <div className="flex flex-col gap-4">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Architecture
          </span>
          <h2 className="font-chopin text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            Treated as sculpture, <br className="hidden md:inline" />
            not structure.
          </h2>
          <p className="font-chopin text-[18px] md:text-[20px] text-[#394d23]/80 leading-relaxed max-w-3xl tracking-[-0.4px] mt-2">
            Every elevation was drawn to disappear into the hillside it sits on. Materials weather with the seasons rather than resist them — stone darkens, wood softens, and the building grows quieter with age, the way good architecture should.
          </p>
        </div>

        {/* Images Grid Layout */}
        <div className="w-full flex flex-col gap-6 mt-4">

          {/* Top Row: Two side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Left Image */}
            <div className="w-full aspect-[4/3] md:h-[435px] overflow-hidden rounded-lg shadow-sm">
              <img
                alt="Dhanvanti Valley residential building facade — left elevation"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={imgRectangle6.src}
              />
            </div>

            {/* Right Image */}
            <div className="w-full aspect-[4/3] md:h-[435px] overflow-hidden rounded-lg shadow-sm">
              <img
                alt="Dhanvanti Valley residential building facade — right elevation"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={imgRectangle5.src}
              />
            </div>
          </div>

          {/* Bottom Row: Wide banner image */}
          <div className="w-full aspect-[16/9] md:h-[535px] overflow-hidden rounded-lg shadow-sm">
            <img
              alt="Dhanvanti Valley panoramic exterior view surrounded by Dehradun greenery"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              src={imgRectangle3.src}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
