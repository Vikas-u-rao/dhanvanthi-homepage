interface DetailsBarProps {
  className?: string;
}

export default function DetailsBar({ className = "" }: DetailsBarProps) {
  return (
    <section className={`w-full bg-[#f2f6df] px-6 py-10 md:px-16 md:py-12 border-t border-[#ececf0] ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Developer Column */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <span className="font-chopin text-[#638038] text-[20px] md:text-[24px] tracking-[-0.48px] uppercase">
            Developer
          </span>
          <span className="font-chopin text-[#638038] text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            Dhanvanti Luxury Builders
          </span>
        </div>

        {/* RERA Column */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <span className="font-chopin text-[#638038] text-[20px] md:text-[24px] tracking-[-0.48px] uppercase">
            RERA
          </span>
          <span className="font-chopin text-[#638038] text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            UKRE03260000729
          </span>
        </div>

        {/* Possession Column */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <span className="font-chopin text-[#638038] text-[20px] md:text-[24px] tracking-[-0.48px] uppercase">
            Possession
          </span>
          <span className="font-chopin text-[#638038] text-[28px] md:text-[36px] font-medium leading-tight tracking-[-0.72px]">
            Q4, 2028
          </span>
        </div>
      </div>
    </section>
  );
}
