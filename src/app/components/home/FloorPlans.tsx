"use client";

import { useState } from "react";
import { Check, Download, Layers } from "lucide-react";
import imgRectangle12 from "@/imports/HomepageDhanvantiValley/b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png";
import imgRectangle16 from "@/imports/HomepageDhanvantiValley/7fda8fabb10f1e04f2d737ed1bb4ed7a706ea430.png";
import imgRectangle17 from "@/imports/HomepageDhanvantiValley/70d49e9702302b0f6497c31c9a0d1b66430d4e6e.png";
import imgRectangle13 from "@/imports/HomepageDhanvantiValley/812c92bf95d713238535e5f0f3f6905f8a4e0329.png";
import LightboxModal from "@/app/components/ui/LightboxModal";

interface ConfigurationPlan {
  id: string;
  name: string;
  tagline: string;
  location: string;
  image: string;
  highlights: string[];
}

const configurations: ConfigurationPlan[] = [
  {
    id: "2bhk",
    name: "2 BHK Luxury Residences",
    tagline: "Perfect for young professionals, couples, and small families seeking a premium lifestyle with smartly designed living spaces.",
    location: "Hathibarkala, Dehradun",
    image: imgRectangle12.src,
    highlights: [
      "Spacious Living & Dining Area",
      "Modern Kitchen with Premium Countertops",
      "Large Balconies with Scenic Views",
      "Premium Finishes & Italian Marble Option",
      "Smart Home Automation Ready",
    ],
  },
  {
    id: "3bhk",
    name: "3 BHK Luxury Residences",
    tagline: "Designed for growing families who value generous space, elegant interiors, and a seamless blend of functionality and style.",
    location: "Hathibarkala, Dehradun",
    image: imgRectangle16.src,
    highlights: [
      "Spacious Bedrooms & Expansive Living Area",
      "Premium Designer Bathrooms",
      "Modular Kitchen with Soft-Close Hardware",
      "Multiple Panoramic Balconies",
      "High-Grade MIVAN Engineering Construction",
    ],
  },
  {
    id: "4bhk",
    name: "4 BHK Luxury Residences",
    tagline: "Our most exclusive residences, created for those who seek exceptional space, refined design, and an elevated lifestyle.",
    location: "Hathibarkala, Dehradun",
    image: imgRectangle17.src,
    highlights: [
      "Grand Living & Dining Spaces",
      "Premium Master Suite with Dressing Area",
      "Designer Kitchen with Island Counter & Pantry",
      "Unobstructed Panoramic Mountain Views",
      "Luxury Specifications & Smart Digital Lock",
    ],
  },
  {
    id: "penthouse",
    name: "3 BHK Penthouse",
    tagline: "The pinnacle of luxury living featuring elevated terrace gardens and panoramic views of the Dehradun valley.",
    location: "Hathibarkala, Dehradun",
    image: imgRectangle13.src,
    highlights: [
      "Exclusive Open-Air Sky Terrace Lounge",
      "Double-Height Living & Dining Ceiling",
      "360-Degree Views of Mussoorie Hills",
      "Private Butler & Dedicated Concierge Access",
    ],
  },
];

interface FloorPlansProps {
  onBrochureClick?: () => void;
}

export default function FloorPlans({ onBrochureClick }: FloorPlansProps) {
  const [activeTab, setActiveTab] = useState<string>("2bhk");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const selectedPlan = configurations.find((c) => c.id === activeTab) || configurations[0];

  const planImages = configurations.map((c) => ({
    src: c.image,
    alt: c.name,
    title: c.name,
    category: `Hathibarkala, Dehradun - ${c.name}`,
  }));

  const activeIndex = configurations.findIndex((c) => c.id === activeTab);

  return (
    <section id="residences" className="w-full bg-[#fcfdfa] text-[#394d23] px-6 py-16 md:px-16 md:py-24 border-t border-[#ececf0] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="font-chopin text-[#638038] text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Thoughtfully Designed Residences
          </span>
          <h2 className="font-chopin text-[28px] md:text-[40px] font-medium leading-tight tracking-[-0.72px]">
            Find the Home That Fits Your Lifestyle
          </h2>
          <p className="text-[#555] font-inter text-[15px] md:text-[17px] max-w-2xl">
            Choose from thoughtfully designed luxury residences in Hathibarkala, Dehradun, created to offer space, comfort, and privacy.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 border-b border-gray-200 pb-4">
          {configurations.map((plan) => {
            const isActive = plan.id === activeTab;
            return (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`px-5 py-2.5 rounded-full font-chopin text-[15px] md:text-[17px] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#638038] text-white shadow-md"
                    : "bg-white border border-[#d5dec7] text-[#394d23] hover:bg-[#f2f6df]"
                }`}
              >
                {plan.name}
              </button>
            );
          })}
        </div>

        {/* Plan Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#e4ebd9] rounded-2xl p-6 md:p-10 shadow-sm">
          
          {/* Left: Image / Layout Preview */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/10] group cursor-pointer border border-gray-200"
            >
              <img
                src={selectedPlan.image}
                alt={selectedPlan.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium uppercase tracking-wider bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Enlarge Representative Layout
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center font-inter italic">
              📍 {selectedPlan.location} — Representative architectural layout plan.
            </p>
          </div>

          {/* Right: Specifications & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[#f2f6df] text-[#638038] font-mono text-xs font-semibold uppercase tracking-wider rounded-md mb-2">
                Official Project Specifications
              </span>
              <h3 className="font-chopin text-2xl md:text-3xl text-[#394d23] mb-2">
                {selectedPlan.name}
              </h3>
              <p className="text-[#666] font-inter text-sm leading-relaxed mb-6">
                {selectedPlan.tagline}
              </p>

              {/* Highlights List from Official Copy */}
              <div className="space-y-3 bg-[#f8fbf4] p-5 rounded-xl border border-[#e4ebd9]">
                <h4 className="text-xs uppercase tracking-widest text-[#638038] font-bold mb-3">Residence Highlights</h4>
                {selectedPlan.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#2c2c2c] font-inter">
                    <Check className="w-4 h-4 text-[#638038] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {onBrochureClick && (
              <button
                onClick={onBrochureClick}
                className="w-full bg-[#638038] hover:bg-[#536c2e] text-white font-inter text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer mt-2"
              >
                <Download className="w-4 h-4" /> Download Complete Layout & Specs
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={activeIndex}
        images={planImages}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveTab(configurations[idx].id)}
      />
    </section>
  );
}
