import imgRectangle7 from "@/imports/HomepageDhanvantiValley/82f96b44e7364ac861d57ec0313f5c0ff5db74cf.png";
import imgRectangle8 from "@/imports/HomepageDhanvantiValley/d26d26cd727351f4b8d9e417e6e06ac2704b677c.png";
import imgRectangle9 from "@/imports/HomepageDhanvantiValley/9791af80b6be8476fee74983a07f1f9b4446d44a.png";
import imgRectangle10 from "@/imports/HomepageDhanvantiValley/3c6f6784f80b38b2170a7d2c40e5daf1dfec02cb.png";
import imgRectangle11 from "@/imports/HomepageDhanvantiValley/28cadc58a96e5ac603487b3e0e471718f3a8bb00.png";

export default function LifeInside() {
  const items = [
    {
      title: "The Morning Swim",
      description: "Before the valley wakes, the pool is yours — still water, mountain air, and twenty unrushed minutes before the day asks anything of you.",
      img: imgRectangle7,
      isImageLeft: true
    },
    {
      title: "Golf Practice Area",
      description: "A dedicated putting green and practice area set against the treeline — the kind of space where a round of golf stops being exercise and starts being meditation.",
      img: imgRectangle10,
      isImageLeft: false
    },
    {
      title: "Evening Tea, Open Greens",
      description: "The terraces face west, toward the kind of sunset that makes you forget you were ever in a hurry to be anywhere else.",
      img: imgRectangle8,
      isImageLeft: true
    },
    {
      title: "The Lounge",
      description: "A space built for nothing in particular — perfect light, deep chairs, and silence thick enough to finish a chapter in.",
      img: imgRectangle11,
      isImageLeft: false
    },
    {
      title: "Wellness & Gym Studio",
      description: "A body that moves well. A mind that follows. Spaces that treat wellness as a daily habit, not a weekend resolve.",
      img: imgRectangle9,
      isImageLeft: true
    }
  ];

  return (
    <section id="life-inside" className="w-full bg-[#394d23] text-white px-6 py-16 md:px-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Life Inside
          </span>
          <h2 className="font-chopin text-[28px] md:text-[36px] font-light leading-tight tracking-[-0.72px] max-w-xl">
            A day at Dhanvanti Valley <br />
            is unhurried by Design
          </h2>
        </div>

        {/* Alternating Grid List */}
        <div className="flex flex-col gap-12 md:gap-16 mt-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-6 md:gap-12 items-center w-full ${item.isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image box (60% width on desktop) */}
              <div className="w-full md:w-[60%] aspect-[16/9] md:h-[276px] overflow-hidden rounded-lg shadow-md shrink-0">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={item.img.src}
                />
              </div>

              {/* Description box (40% width on desktop) */}
              <div className="w-full md:w-[40%] flex flex-col gap-3 justify-center">
                <h3 className="font-chopin text-[22px] md:text-[25px] font-medium tracking-[-0.5px]">
                  {item.title}
                </h3>
                <p className="font-chopin text-white/90 text-[16px] md:text-[17px] leading-relaxed font-light tracking-[-0.3px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
