"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DetailsBar from "@/app/components/layout/DetailsBar";
import StickyContactBar from "@/app/components/layout/StickyContactBar";

// Homepage responsive sections
import Hero from "@/app/components/home/Hero";
import WhyDhanvanti from "@/app/components/home/WhyDhanvanti";
import SilentLuxuryMap from "@/app/components/home/SilentLuxuryMap";
import SilentLuxuryInfo from "@/app/components/home/SilentLuxuryInfo";
import Architecture from "@/app/components/home/Architecture";
import FloorPlans from "@/app/components/home/FloorPlans";
import VastuSection from "@/app/components/home/VastuSection";
import LifeInside from "@/app/components/home/LifeInside";
import AboutDeveloper from "@/app/components/home/AboutDeveloper";
import Gallery from "@/app/components/home/Gallery";
import Location from "@/app/components/home/Location";

// Enquiry page component
import EnquiryPage from "@/app/components/enquiry/EnquiryPage";

export default function App() {
  const [page, setPage] = useState<"home" | "enquiry">("home");

  // Sync browser back/forward history buttons with enquiry page state
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === "#enquiry") {
        setPage("enquiry");
      } else {
        setPage("home");
      }
    };

    // Check hash on initial mount
    if (window.location.hash === "#enquiry") {
      setPage("enquiry");
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (targetPage: "home" | "enquiry") => {
    setPage(targetPage);
    if (targetPage === "enquiry") {
      if (window.location.hash !== "#enquiry") {
        window.history.pushState({ page: "enquiry" }, "", "#enquiry");
      }
    } else {
      if (window.location.hash === "#enquiry") {
        window.history.pushState({ page: "home" }, "", window.location.pathname);
      }
    }
  };

  const handleEnquireClick = () => {
    setPage("enquiry");
    if (window.location.hash !== "#enquiry") {
      window.history.pushState({ page: "enquiry" }, "", "#enquiry");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // select-none removed — text is selectable site-wide
    // pb-20 md:pb-0 ensures sticky bar doesn't cover content on mobile
    <div className="bg-white min-h-screen flex flex-col w-full overflow-x-hidden pb-20 md:pb-0">
      
      {/* Toast notifications handler */}
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

      {/* Responsive Navigation Header */}
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      {/* Pages Container */}
      <main className="w-full flex-grow flex flex-col">
        {page === "home" ? (
          <div className="w-full flex flex-col">
            <Hero onEnquireClick={handleEnquireClick} />
            <WhyDhanvanti />
            <SilentLuxuryMap />
            <SilentLuxuryInfo />
            <Architecture />
            <FloorPlans onBrochureClick={handleEnquireClick} />
            <VastuSection />
            <LifeInside />
            <AboutDeveloper />
            <Gallery />
            <Location />
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

      {/* Mobile sticky contact bar — hidden on desktop */}
      <StickyContactBar onEnquireClick={handleEnquireClick} />

    </div>
  );
}
