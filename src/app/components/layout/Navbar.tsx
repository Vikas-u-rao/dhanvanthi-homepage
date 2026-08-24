"use client";

import { useState } from "react";
import { Menu, Instagram, Facebook, Youtube } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/components/ui/sheet";
import imgDhanvntiValleyLogoFroLightBg1 from "@/imports/HomepageDhanvantiValley/061091c707bc10070bcb7df114ead0673c2febb9.png";
import { activeSocialLinks, type SocialLink } from "@/lib/social";

interface NavbarProps {
  currentPage: "home" | "enquiry";
  onNavigate: (page: "home" | "enquiry") => void;
}

function NavSocialIcon({ link }: { link: SocialLink }) {
  const iconMap = {
    instagram: <Instagram className="w-3.5 h-3.5" aria-hidden="true" />,
    facebook: <Facebook className="w-3.5 h-3.5" aria-hidden="true" />,
    youtube: <Youtube className="w-3.5 h-3.5" aria-hidden="true" />,
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
      className="w-7 h-7 rounded-full border border-[#638038]/25 flex items-center justify-center text-[#638038]/70 hover:text-[#638038] hover:border-[#638038]/60 transition-all duration-200"
    >
      {icon}
    </a>
  );
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = activeSocialLinks();

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === "brochure") {
      onNavigate("enquiry");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquireClick = () => {
    setIsOpen(false);
    onNavigate("enquiry");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItemStyle = {
    fontFamily: "'Chopin-Trial VF', 'Urbanist', sans-serif",
    fontWeight: 530,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '1',
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    onNavigate("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#ececf0] px-4 md:px-8 my-0.5 py-4 md:py-8 flex justify-between items-center transition-all duration-300">
      {/* Brand Logo — select-none retained on logo only (decorative/brand mark) */}
      <div 
        onClick={handleLogoClick}
        role="button"
        aria-label="Go to Dhanvanti Valley homepage"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}
        className="relative overflow-hidden cursor-pointer w-[180px] h-[34px] md:w-[331px] md:h-[66px] select-none"
      >
        <img 
          alt="Dhanvanti Valley" 
          className="absolute max-w-none w-full h-[360.31%] left-0 top-[-108.86%] object-contain" 
          src={imgDhanvntiValleyLogoFroLightBg1.src} 
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        {/* Subtle social icons — only renders when URLs are configured in src/lib/social.ts */}
        {socialLinks.length > 0 && (
          <div className="flex items-center gap-1.5 mr-2" aria-label="Follow us on social media">
            {socialLinks.map((link) => (
              <NavSocialIcon key={link.icon} link={link} />
            ))}
          </div>
        )}

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          <button 
            onClick={() => handleNavClick("philosophy")}
            aria-label="Go to Philosophy section"
            style={navItemStyle}
            className="cursor-pointer px-3 py-2 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-[#f5f5f5]"
          >
            Philosophy
          </button>
          <button 
            onClick={() => handleNavClick("gallery")}
            aria-label="Go to Gallery section"
            style={navItemStyle}
            className="cursor-pointer px-3 py-2 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-[#f5f5f5]"
          >
            Gallery
          </button>
          <button 
            onClick={() => handleNavClick("location")}
            aria-label="Go to Location section"
            style={navItemStyle}
            className="cursor-pointer px-3 py-2 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-[#f5f5f5]"
          >
            Location
          </button>
          <button 
            onClick={() => handleNavClick("brochure")}
            aria-label="Download brochure — opens enquiry form"
            style={navItemStyle}
            className="cursor-pointer px-3 py-2 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-[#f5f5f5]"
          >
            Brochure
          </button>
        </nav>

        <button 
          onClick={handleEnquireClick}
          aria-label="Open enquiry form"
          style={{
            width: '178px',
            height: '32px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1',
          }}
          className="bg-[#638038] text-white hover:bg-[#536c2e] active:scale-95 cursor-pointer rounded-[8px] transition-all flex items-center justify-center"
        >
          Enquire Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              className="p-2 cursor-pointer text-[#638038] hover:bg-gray-100 rounded-md transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-6 flex flex-col gap-6 bg-white border-l border-gray-100">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div 
                onClick={() => { setIsOpen(false); handleLogoClick(); }}
                role="button"
                aria-label="Go to homepage"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}
                className="relative overflow-hidden cursor-pointer w-[150px] h-[30px] select-none"
              >
                <img 
                  alt="Dhanvanti Valley" 
                  className="absolute max-w-none w-full h-[357.31%] left-0 top-[-108.86%] object-contain" 
                  src={imgDhanvntiValleyLogoFroLightBg1.src} 
                />
              </div>
            </div>

            <nav className="flex flex-col gap-3 mt-2" aria-label="Mobile navigation">
              <button 
                onClick={() => handleNavClick("philosophy")}
                style={navItemStyle}
                className="w-full text-left py-2 px-3 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-gray-50"
              >
                Philosophy
              </button>
              <button 
                onClick={() => handleNavClick("gallery")}
                style={navItemStyle}
                className="w-full text-left py-2 px-3 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-gray-50"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick("location")}
                style={navItemStyle}
                className="w-full text-left py-2 px-3 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-gray-50"
              >
                Location
              </button>
              <button 
                onClick={() => handleNavClick("brochure")}
                style={navItemStyle}
                className="w-full text-left py-2 px-3 rounded-[8px] text-[#2c2c2c] transition-all hover:bg-gray-50"
              >
                Brochure
              </button>
            </nav>

            <div className="mt-auto border-t border-gray-100 pt-5">
              <button 
                onClick={handleEnquireClick}
                aria-label="Open enquiry form"
                style={{
                  width: '178px',
                  height: '32px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '1',
                  margin: '0 auto',
                }}
                className="bg-[#638038] text-white hover:bg-[#536c2e] transition-all rounded-[8px] flex items-center justify-center"
              >
                Enquire Now
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
