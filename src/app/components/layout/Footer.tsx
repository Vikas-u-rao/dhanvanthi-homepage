"use client";

import imgDhanvantiValleyLogo1 from "@/imports/HomepageDhanvantiValley/3096135ff5cd0c778307cd0faa1b3d985eac9672.png";
import imgPicture11 from "@/imports/HomepageDhanvantiValley/e9ae1adab063682066956368110ab6ac7eec658c.png";
import { activeSocialLinks, type SocialLink } from "@/lib/social";
import { SALES_PHONE, SALES_PHONE_DISPLAY } from "@/lib/contact";
import { Instagram, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  onEnquireClick: () => void;
}

function SocialIcon({ link }: { link: SocialLink }) {
  const iconMap = {
    instagram: <Instagram className="w-4 h-4" aria-hidden="true" />,
    facebook: <Facebook className="w-4 h-4" aria-hidden="true" />,
    youtube: <Youtube className="w-4 h-4" aria-hidden="true" />,
    twitter: null,
    linkedin: null,
  };
  const icon = iconMap[link.icon];
  if (!icon) return null;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Dhanvanti Valley on ${link.label}`}
      className="w-8 h-8 rounded-full border border-[#638038]/30 flex items-center justify-center text-[#638038] hover:bg-[#638038] hover:text-white transition-all duration-200"
    >
      {icon}
    </a>
  );
}

export default function Footer({ onEnquireClick }: FooterProps) {
  const socialLinks = activeSocialLinks();

  return (
    <footer className="w-full flex flex-col mt-auto">
      
      {/* "Make the Move" Banner */}
      <div className="relative w-full py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center min-h-[400px] bg-black">
        {/* Background Image */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <img 
            alt="" 
            aria-hidden="true"
            className="absolute w-full h-full object-cover opacity-75" 
            src={imgPicture11.src} 
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
          <span className="font-chopin text-white text-[14px] md:text-[16px] tracking-[0.2em] uppercase">
            Make the Move
          </span>
          <h2 className="font-bavicka text-white text-[30px] md:text-[38px] tracking-wide leading-none">
            Where Time Feels Richer.
          </h2>
          <p className="font-chopin text-white text-[15px] md:text-[18px] max-w-xl leading-relaxed mt-1 tracking-[-0.3px]">
            Experience residences designed around the way you want to live.
          </p>

          <button 
            onClick={onEnquireClick}
            aria-label="Schedule a visit to Dhanvanti Valley"
            className="mt-6 border border-white hover:bg-white hover:text-black cursor-pointer px-10 py-4 font-chopin text-[18px] md:text-[22px] tracking-wide uppercase text-white transition-all duration-300"
          >
            Schedule Your Visit
          </button>
        </div>
      </div>

      {/* Main Footer Content - Clean & Minimal */}
      <div className="w-full bg-white px-6 py-12 md:px-16 md:py-16 border-t border-[#ececf0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-12">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <img 
              alt="Dhanvanti Valley logo" 
              className="max-h-[70px] md:max-h-[90px] object-contain select-none" 
              src={imgDhanvantiValleyLogo1.src} 
            />
          </div>

          {/* Visit / Address Column */}
          <div className="flex flex-col text-center md:text-left gap-2 md:w-1/3">
            <span className="font-chopin text-[#638038] text-[12px] md:text-[13px] tracking-[0.1em] font-semibold uppercase">
              Visit
            </span>
            <p className="font-chopin text-[#394d23] text-[14px] md:text-[15px] tracking-[-0.3px] leading-relaxed">
              Hathibarkala Road, Dehradun, Uttarakhand
            </p>
            <p className="font-inter text-[10px] text-gray-400 mt-0.5">
              RERA: UKRE03260000729
            </p>
          </div>

          {/* Contact / Phone Column + Social */}
          <div className="flex flex-col text-center md:text-left gap-2 md:w-1/3">
            <span className="font-chopin text-[#638038] text-[12px] md:text-[13px] tracking-[0.1em] font-semibold uppercase">
              Contact
            </span>
            <a 
              href={`tel:${SALES_PHONE}`}
              aria-label={`Call Dhanvanti Valley at ${SALES_PHONE_DISPLAY}`}
              className="font-chopin text-[#394d23] text-[14px] md:text-[15px] tracking-[-0.3px] hover:underline"
            >
              {SALES_PHONE_DISPLAY}
            </a>
            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.icon} link={link} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Copyright Bar - Minimal */}
      <div className="w-full bg-[#f2f6df] py-4 px-4 text-center border-t border-[#ececf0]/20">
        <p className="font-inter text-[#638038] text-[10px] md:text-[11px] tracking-[0.02em]">
          &copy; 2026 Dhanvanti Valley. All rights reserved.
        </p>
      </div>
    </footer>
  );
}