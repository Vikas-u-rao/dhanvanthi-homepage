import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/components/ui/sheet";
import imgDhanvntiValleyLogoFroLightBg1 from "@/imports/HomepageDhanvantiValley/061091c707bc10070bcb7df114ead0673c2febb9.png";

interface NavbarProps {
  currentPage: "home" | "enquiry";
  onNavigate: (page: "home" | "enquiry") => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (currentPage !== "home") {
      onNavigate("home");
      // Wait for page transition to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
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

  const handleLogoClick = () => {
    onNavigate("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#ececf0] px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-300">
      {/* Brand Logo Wrapper (Maintains original Figma crop styling) */}
      <div 
        onClick={handleLogoClick}
        className="relative overflow-hidden cursor-pointer w-[180px] h-[36px] md:w-[331px] md:h-[66px] select-none"
      >
        <img 
          alt="Dhanvanti Valley Logo" 
          className="absolute max-w-none w-full h-[357.31%] left-0 top-[-108.86%] object-contain" 
          src={imgDhanvntiValleyLogoFroLightBg1} 
        />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-2">
        <button 
          onClick={() => handleNavClick("philosophy")}
          className="bg-[#f5f5f5] cursor-pointer px-4 py-2 rounded-[8px] font-chopin text-[#2c2c2c] text-[16px] transition-all hover:bg-gray-200"
        >
          Philosophy
        </button>
        <button 
          onClick={() => handleNavClick("gallery")}
          className="cursor-pointer px-4 py-2 rounded-[8px] font-chopin text-[#2c2c2c] text-[16px] transition-all hover:bg-[#f5f5f5]"
        >
          Gallery
        </button>
        <button 
          onClick={() => handleNavClick("location")}
          className="cursor-pointer px-4 py-2 rounded-[8px] font-chopin text-[#2c2c2c] text-[16px] transition-all hover:bg-[#f5f5f5]"
        >
          Location
        </button>
        <button 
          onClick={() => handleNavClick("brochure")}
          className="cursor-pointer px-4 py-2 rounded-[8px] font-chopin text-[#2c2c2c] text-[16px] transition-all hover:bg-[#f5f5f5]"
        >
          Brochure
        </button>
      </nav>

      {/* Desktop Enquire CTA */}
      <div className="hidden md:block">
        <button 
          onClick={handleEnquireClick}
          className="bg-[#638038] text-white hover:bg-[#536c2e] active:scale-95 cursor-pointer px-6 py-2.5 rounded-[8px] font-inter font-normal text-[16px] transition-all"
        >
          Enquire Now
        </button>
      </div>

      {/* Mobile Menu Toggle (Sheet) */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 cursor-pointer text-[#638038] hover:bg-gray-100 rounded-md transition-all">
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-6 flex flex-col gap-6 bg-white border-l border-gray-100">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div 
                onClick={() => { setIsOpen(false); handleLogoClick(); }}
                className="relative overflow-hidden cursor-pointer w-[150px] h-[30px]"
              >
                <img 
                  alt="Dhanvanti Valley Logo" 
                  className="absolute max-w-none w-full h-[357.31%] left-0 top-[-108.86%] object-contain" 
                  src={imgDhanvntiValleyLogoFroLightBg1} 
                />
              </div>
            </div>

            <nav className="flex flex-col gap-4 mt-4">
              <button 
                onClick={() => handleNavClick("philosophy")}
                className="w-full text-left py-2 px-3 rounded-[8px] bg-gray-50 font-chopin text-[#2c2c2c] text-[18px] transition-all"
              >
                Philosophy
              </button>
              <button 
                onClick={() => handleNavClick("gallery")}
                className="w-full text-left py-2 px-3 rounded-[8px] font-chopin text-[#2c2c2c] text-[18px] transition-all hover:bg-gray-50"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavClick("location")}
                className="w-full text-left py-2 px-3 rounded-[8px] font-chopin text-[#2c2c2c] text-[18px] transition-all hover:bg-gray-50"
              >
                Location
              </button>
              <button 
                onClick={() => handleNavClick("brochure")}
                className="w-full text-left py-2 px-3 rounded-[8px] font-chopin text-[#2c2c2c] text-[18px] transition-all hover:bg-gray-50"
              >
                Brochure
              </button>
            </nav>

            <div className="mt-auto border-t border-gray-100 pt-6">
              <button 
                onClick={handleEnquireClick}
                className="w-full bg-[#638038] text-white text-center py-3 rounded-[8px] font-inter font-normal text-[16px] transition-all hover:bg-[#536c2e]"
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
