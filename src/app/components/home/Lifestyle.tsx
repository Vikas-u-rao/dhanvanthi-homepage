import imgSwimmingPool from "@/imports/HomepageDhanvantiValley/swimingpool.png";
import imgGym from "@/imports/HomepageDhanvantiValley/gym.png";

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="w-full bg-[#ca9731] px-6 py-16 md:px-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Label & Heading */}
        <div className="flex flex-col gap-4 max-w-3xl mb-12 lg:mb-16">
          <span className="font-chopin text-white text-[14px] md:text-[16px] tracking-[0.2em] uppercase font-medium">
            LIFESTYLE
          </span>
          <h2 className="font-chopin text-white text-[32px] md:text-[42px] lg:text-[48px] font-light leading-tight tracking-[-0.72px]">
            Where Every Day Feels Extraordinary
          </h2>
        </div>

        {/* Three Descriptive Paragraphs */}
        <div className="flex flex-col gap-6 max-w-3xl mb-12 lg:mb-16">
          <p className="font-chopin text-white text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
            At Dhanvanti Valley, lifestyle isn't an afterthought — it's the foundation. Every amenity, every space, 
            every detail has been conceived to elevate the everyday into something quietly remarkable.
          </p>
          <p className="font-chopin text-white text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
            Start your morning with laps in a temperature-controlled pool that holds the valley's mist at bay. 
            Move to a modern gym where natural light streams through full-height glazing, framing the hills beyond 
            as you train. Evenings unfold on landscaped terraces, or in the quiet corners of a clubhouse designed 
            for conversation, not display.
          </p>
          <p className="font-chopin text-white text-[16px] md:text-[18px] leading-relaxed font-light tracking-[-0.3px]">
            This is luxury measured not in marble, but in moments — the swim that clears your mind, the workout 
            that energizes your day, the walk that reconnects you with the valley's rhythm.
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Swimming Pool */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
              alt="Temperature-controlled swimming pool at Dhanvanti Valley"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgSwimmingPool.src}
            />
          </div>

          {/* Modern Gym */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
              alt="Modern premium gym at Dhanvanti Valley"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              src={imgGym.src}
            />
          </div>
        </div>

      </div>
    </section>
  );
}