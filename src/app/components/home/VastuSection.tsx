"use client";

import { useState } from "react";
import { ChevronDown, Compass, Sun, Wind, ShieldCheck } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const vastuFaqs: FAQItem[] = [
  {
    question: "Are the apartments at Dhanvanti Valley Vastu compliant?",
    answer: "The project is thoughtfully planned by considering principles of natural light, ventilation, spatial planning, and, where applicable, Vastu guidelines.",
  },
  {
    question: "Why do buyers prefer Vastu-compliant homes?",
    answer: "Many buyers believe Vastu contributes to balanced and comfortable living. Others appreciate the practical benefits of well-planned layouts, natural lighting, and efficient space utilization.",
  },
  {
    question: "Does Vastu matter while buying an apartment?",
    answer: "For many families, Vastu is one of several factors considered alongside location, construction quality, amenities, connectivity, and long-term investment value.",
  },
  {
    question: "Can a modern luxury apartment follow Vastu principles?",
    answer: "Yes. Contemporary architecture and Vastu principles complement each other through thoughtful planning, functional layouts, and attention to natural elements.",
  },
];

export default function VastuSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="vastu" className="w-full bg-[#f8fbf4] text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            DESIGNED WITH VASTU PRINCIPLES IN MIND
          </span>
          <h2 className="font-chopin text-[28px] md:text-[40px] font-medium leading-tight tracking-[-0.72px]">
            Designed with Balance at Its Core
          </h2>
          <p className="font-inter text-[#555] text-[15px] md:text-[17px] leading-relaxed">
            At Dhanvanti Valley, thoughtful planning extends beyond architecture and aesthetics. Wherever applicable, the residences are designed with Vastu principles in mind, creating homes that encourage natural light, ventilation, balanced spatial planning, and a harmonious living environment.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e4ebd9] shadow-xs flex flex-col gap-3">
            <Sun className="w-8 h-8 text-[#ca9731]" />
            <h3 className="font-chopin text-lg font-bold text-[#394d23]">Abundant Sunlight</h3>
            <p className="text-xs text-gray-600 font-inter leading-relaxed">
              Oriented to capture maximum natural light throughout the day, uplifting energy and warmth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e4ebd9] shadow-xs flex flex-col gap-3">
            <Wind className="w-8 h-8 text-[#638038]" />
            <h3 className="font-chopin text-lg font-bold text-[#394d23]">Cross Ventilation</h3>
            <p className="text-xs text-gray-600 font-inter leading-relaxed">
              Expansive windows and dual-balcony alignments allow fresh mountain breeze from Mussoorie hills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e4ebd9] shadow-xs flex flex-col gap-3">
            <Compass className="w-8 h-8 text-[#394d23]" />
            <h3 className="font-chopin text-lg font-bold text-[#394d23]">Directional Alignment</h3>
            <p className="text-xs text-gray-600 font-inter leading-relaxed">
              Balanced room placements prioritizing positive flow, serene master bedrooms, and welcoming foyers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e4ebd9] shadow-xs flex flex-col gap-3">
            <ShieldCheck className="w-8 h-8 text-[#638038]" />
            <h3 className="font-chopin text-lg font-bold text-[#394d23]">Efficient Space</h3>
            <p className="text-xs text-gray-600 font-inter leading-relaxed">
              Functional spatial planning that minimizes wasted square footage and maximizes comfort.
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="flex flex-col gap-6 mt-6 bg-white p-8 md:p-10 rounded-2xl border border-[#e4ebd9] shadow-xs">
          <div className="flex flex-col gap-2">
            <h3 className="font-chopin text-2xl md:text-3xl text-[#394d23]">
              Frequently Asked Questions (Vastu & Planning)
            </h3>
            <p className="text-xs text-gray-500 font-inter">
              Common questions regarding Vastu guidelines and architectural planning at Dhanvanti Valley.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-gray-100 mt-2">
            {vastuFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 flex flex-col gap-2">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left font-chopin text-lg text-[#394d23] font-medium hover:text-[#638038] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#638038] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <p className="text-sm font-inter text-gray-600 leading-relaxed pl-2 pt-1 animate-in fade-in duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
