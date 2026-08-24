import imgFinalBanner from "@/imports/HomepageDhanvantiValley/e9ae1adab063682066956368110ab6ac7eec658c.png";

export default function FinalPropertyBanner() {
  return (
    <section className="w-full relative overflow-hidden">
      
      {/* Full-width Property Image with Dark Overlay */}
      <div className="relative w-full aspect-[21/9] lg:aspect-[24/10] overflow-hidden">
        <img
          alt="Dhanvanti Valley - final property view"
          className="w-full h-full object-cover"
          src={imgFinalBanner.src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-chopin text-gold text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              Dhanvanti Valley
            </span>
            <h2 className="font-bavicka text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight">
              Where Time<br />
              Feels Richer
            </h2>
            <p className="font-chopin text-white/80 text-[18px] md:text-[20px] leading-relaxed font-light tracking-[-0.3px]">
              Experience residences designed around the way you want to live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}