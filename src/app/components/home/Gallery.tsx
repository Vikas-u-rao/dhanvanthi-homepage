import imgRectangle12 from "@/imports/HomepageDhanvantiValley/b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png";
import imgRectangle13 from "@/imports/HomepageDhanvantiValley/812c92bf95d713238535e5f0f3f6905f8a4e0329.png";
import imgRectangle14 from "@/imports/HomepageDhanvantiValley/578ff8498ab295a0883b5a51131fbb4503850479.png";
import imgRectangle15 from "@/imports/HomepageDhanvantiValley/25a0582c9eb9f9ab3d862f2dd56fd4e54b115759.png";
import imgRectangle16 from "@/imports/HomepageDhanvantiValley/7fda8fabb10f1e04f2d737ed1bb4ed7a706ea430.png";
import imgRectangle17 from "@/imports/HomepageDhanvantiValley/70d49e9702302b0f6497c31c9a0d1b66430d4e6e.png";

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-white text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 select-none">

        {/* Title and Header */}
        <div className="flex flex-col gap-4">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Gallery
          </span>
          <h2 className="font-chopin text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            A walk through <br className="hidden md:inline" />
            the valley.
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="w-full flex flex-col gap-6 mt-4">

          {/* Row 1: Two side-by-side images (Unequal widths) */}
          <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-6 w-full">
            {/* Image 1 */}
            <div className="w-full aspect-[415/276] overflow-hidden rounded-lg shadow-sm">
              <img
                alt="Valley Walk 1"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={imgRectangle12}
              />
            </div>
            {/* Image 2 */}
            <div className="w-full aspect-[580/276] overflow-hidden rounded-lg shadow-sm">
              <img
                alt="Valley Walk 2"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src={imgRectangle15}
              />
            </div>
          </div>

          {/* Row 2: Two columns of stacked images (Asymmetrical Masonry) */}
          <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-6 w-full">

            {/* Left Stack Column (Wider Column) */}
            <div className="flex flex-col gap-6">
              {/* Image 3 */}
              <div className="w-full aspect-[611/389] overflow-hidden rounded-lg shadow-sm">
                <img
                  alt="Valley Walk 3"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={imgRectangle16}
                />
              </div>
              {/* Image 5 */}
              <div className="w-full aspect-[611/594] overflow-hidden rounded-lg shadow-sm">
                <img
                  alt="Valley Walk 5"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={imgRectangle13}
                />
              </div>
            </div>

            {/* Right Stack Column (Narrower Column) */}
            <div className="flex flex-col gap-6">
              {/* Image 4 */}
              <div className="w-full aspect-[386/704] overflow-hidden rounded-lg shadow-sm">
                <img
                  alt="Valley Walk 4"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={imgRectangle17}
                />
              </div>
              {/* Image 6 */}
              <div className="w-full aspect-[387/276] overflow-hidden rounded-lg shadow-sm">
                <img
                  alt="Valley Walk 6"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={imgRectangle14}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
