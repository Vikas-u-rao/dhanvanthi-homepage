"use client";

import imgRectangle12 from "@/imports/HomepageDhanvantiValley/b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png";
import imgRectangle13 from "@/imports/HomepageDhanvantiValley/812c92bf95d713238535e5f0f3f6905f8a4e0329.png";
import imgRectangle14 from "@/imports/HomepageDhanvantiValley/578ff8498ab295a0883b5a51131fbb4503850479.png";
import imgRectangle15 from "@/imports/HomepageDhanvantiValley/25a0582c9eb9f9ab3d862f2dd56fd4e54b115759.png";
import imgRectangle16 from "@/imports/HomepageDhanvantiValley/7fda8fabb10f1e04f2d737ed1bb4ed7a706ea430.png";

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-white px-6 py-16 md:px-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        
        {/* Title and Header - Left Aligned */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            GALLERY
          </span>
          <h2 className="font-chopin text-[#638038] text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-tight tracking-[-0.72px]">
            A walk through<br />
            the valley.
          </h2>
        </div>

        {/* Irregular Collage Layout - 5 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          
          {/* Row 1: Small building left (2 cols), wider recreation right (4 cols) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 aspect-[3/4] overflow-hidden">
            <img
              alt="Building entrance view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle12.src}
            />
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-4 aspect-[16/9] overflow-hidden">
            <img
              alt="Recreation area view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle13.src}
            />
          </div>

          {/* Row 2: Large restaurant left (4 cols), tall vertical courtyard right (2 cols) */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 aspect-[4/3] overflow-hidden">
            <img
              alt="Restaurant interior view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle14.src}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 aspect-[3/5] overflow-hidden">
            <img
              alt="Courtyard aerial view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle15.src}
            />
          </div>

          {/* Row 3: Large vertical building left (3 cols), swimming pool right (3 cols) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 aspect-[3/4] overflow-hidden">
            <img
              alt="Building vertical view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle16.src}
            />
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-3 aspect-[4/3] overflow-hidden">
            <img
              alt="Swimming pool view"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgRectangle14.src}
            />
          </div>

        </div>

      </div>
    </section>
  );
}