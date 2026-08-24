"use client";

import { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DetailsBar from "@/app/components/layout/DetailsBar";
import StickyContactBar from "@/app/components/layout/StickyContactBar";

// Homepage responsive sections
import Hero from "@/app/components/home/Hero";
import AboutDeveloper from "@/app/components/home/AboutDeveloper";
import Lifestyle from "@/app/components/home/Lifestyle";
import PremiumAmenities from "@/app/components/home/PremiumAmenities";
import GallerySection from "@/app/components/home/GallerySection";
import InvestmentSection from "@/app/components/home/InvestmentSection";

// Enquiry page component
import EnquiryPage from "@/app/components/enquiry/EnquiryPage";

export default function App() {
  const [page, setPage] = useState<"home" | "enquiry">("home");

  const handleNavigate = (targetPage: "home" | "enquiry") => {
    setPage(targetPage);
  };

  const handleEnquireClick = () => {
    setPage("enquiry");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col w-full overflow-x-hidden pb-20 md:pb-0">
      
      <Toaster position="top-right" richColors />

      <style>{`
        @font-face {
          font-family: 'Bavicka';
          src: url('/fonts/Bavicka.woff') format('woff'),
               url('/fonts/Bavicka.ttf') format('truetype'),
               url('/fonts/Bavicka.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          }
        body {
          font-family: 'Chopin-Trial VF', 'Urbanist', sans-serif;
        }
        .font-chopin {
          font-family: 'Chopin-Trial VF', 'Urbanist', sans-serif;
        }
        .font-bavicka {
          font-family: 'Bavicka', 'Dancing Script', cursive;
        }
        .font-urbanist {
          font-family: 'Urbanist', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <Navbar currentPage={page} onNavigate={handleNavigate} />

      <main className="w-full flex-grow flex flex-col">
        {page === "home" ? (
          <div className="w-full flex flex-col">
            <Hero onEnquireClick={handleEnquireClick} />
            <AboutDeveloper />
            <Lifestyle />
            <PremiumAmenities />
            <GallerySection />
            <InvestmentSection onEnquireClick={handleEnquireClick} />
            <DetailsBar />
            <Footer onEnquireClick={handleEnquireClick} />
          </div>
        ) : (
          <div className="w-full flex flex-col">
            <EnquiryPage />
            <DetailsBar />
            <Footer onEnquireClick={handleEnquireClick} />
          </div>
        )}
      </main>

      <StickyContactBar onEnquireClick={handleEnquireClick} />

    </div>
  );
}
