"use client";

import { Award, ShieldCheck, Building2, Trees, Sparkles } from "lucide-react";
import imgRectangle14 from "@/imports/HomepageDhanvantiValley/578ff8498ab295a0883b5a51131fbb4503850479.png";

export default function AboutDeveloper() {
  return (
    <section id="developer" className="w-full bg-white text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side: Developer & Project Story (Official PDF Content) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
              ABOUT DHANVANTI VALLEY
            </span>
            <h2 className="font-chopin text-[28px] md:text-[40px] font-medium leading-tight tracking-[-0.72px]">
              A New Benchmark for Luxury Living in Dehradun
            </h2>
          </div>

          <p className="font-inter text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
            Dhanvanti Valley is more than a residential project; it's a thoughtfully planned community designed for those who value quality, comfort, and a deeper connection with nature.
          </p>

          <p className="font-inter text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
            Set amidst the serene surroundings of Dehradun, these luxury apartments offer spacious layouts, elegant interiors, premium finishes, and smart home features that make everyday living effortless. From beautifully landscaped open spaces to world-class amenities, every detail has been carefully planned to create an exceptional lifestyle for modern families.
          </p>

          <div className="bg-[#f8fbf4] p-5 rounded-xl border border-[#e4ebd9] font-inter text-sm text-[#394d23] flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-[#638038]">
              <Sparkles className="w-4 h-4" /> Built on Engineering Excellence
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Built using earthquake-resistant RCC construction with advanced MIVAN technology, premium materials, branded fittings, and world-class engineering standards — designed to deliver lasting quality and safety for generations to come.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#f8fbf4]">
              <ShieldCheck className="w-6 h-6 text-[#638038] mb-2" />
              <span className="font-chopin text-base font-bold text-[#394d23]">MIVAN Tech</span>
              <span className="text-xs text-gray-500 font-inter mt-0.5">Advanced RCC</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#f8fbf4]">
              <Building2 className="w-6 h-6 text-[#638038] mb-2" />
              <span className="font-chopin text-base font-bold text-[#394d23]">Hathibarkala</span>
              <span className="text-xs text-gray-500 font-inter mt-0.5">Prime Location</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#f8fbf4]">
              <Trees className="w-6 h-6 text-[#638038] mb-2" />
              <span className="font-chopin text-base font-bold text-[#394d23]">Lush Greens</span>
              <span className="text-xs text-gray-500 font-inter mt-0.5">Mountain Views</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#f8fbf4]">
              <Award className="w-6 h-6 text-[#638038] mb-2" />
              <span className="font-chopin text-base font-bold text-[#394d23]">2, 3 & 4 BHK</span>
              <span className="text-xs text-gray-500 font-inter mt-0.5">Luxury Homes</span>
            </div>
          </div>
        </div>

        {/* Right Side: Imagery Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5] border border-gray-100">
            <img
              src={imgRectangle14.src}
              alt="Dhanvanti Valley Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="font-chopin text-xl font-semibold">Dhanvanti Valley</span>
              <span className="text-xs text-white/90 font-inter">📍 Hathibarkala, Dehradun</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
