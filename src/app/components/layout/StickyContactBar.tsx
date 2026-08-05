"use client";

import { Phone, MessageCircle, ClipboardList } from "lucide-react";
import { SALES_PHONE, SALES_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

interface StickyContactBarProps {
  onEnquireClick: () => void;
}

export default function StickyContactBar({ onEnquireClick }: StickyContactBarProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="flex items-stretch w-full shadow-[0_-2px_16px_rgba(0,0,0,0.12)] border-t border-[#638038]/20">
        {/* Call Now */}
        <a
          href={`tel:${SALES_PHONE}`}
          aria-label={`Call Dhanvanti Valley sales team at ${SALES_PHONE_DISPLAY}`}
          className="flex flex-col items-center justify-center gap-1 flex-1 py-3 px-2 bg-[#394d23] text-white hover:bg-[#2e3e1c] active:bg-[#2e3e1c] transition-colors"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider leading-none">
            Call Now
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dhanvanti Valley on WhatsApp"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-3 px-2 bg-[#25D366] text-white hover:bg-[#1fba59] active:bg-[#1fba59] transition-colors"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider leading-none">
            WhatsApp
          </span>
        </a>

        {/* Enquire Now */}
        <button
          onClick={onEnquireClick}
          aria-label="Open enquiry form for Dhanvanti Valley"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-3 px-2 bg-[#ca9731] text-white hover:bg-[#b08125] active:bg-[#b08125] transition-colors cursor-pointer"
        >
          <ClipboardList className="w-5 h-5" aria-hidden="true" />
          <span className="font-inter text-[10px] font-semibold uppercase tracking-wider leading-none">
            Enquire
          </span>
        </button>
      </div>
    </div>
  );
}
