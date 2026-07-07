import { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DetailsBar from "@/app/components/layout/DetailsBar";

// Homepage responsive sections
import Hero from "@/app/components/home/Hero";
import WhyDhanvanti from "@/app/components/home/WhyDhanvanti";
import SilentLuxuryMap from "@/app/components/home/SilentLuxuryMap";
import SilentLuxuryInfo from "@/app/components/home/SilentLuxuryInfo";
import Architecture from "@/app/components/home/Architecture";
import LifeInside from "@/app/components/home/LifeInside";
import Gallery from "@/app/components/home/Gallery";
import Location from "@/app/components/home/Location";

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
    <div className="bg-white min-h-screen flex flex-col w-full overflow-x-hidden select-none">
      
      {/* Toast notifications handler */}
      <Toaster position="top-right" richColors />

      {/* Font fallback overrides for Chopin and Bavicka (maps clean naming structure to variables) */}
      <style>{`
        body {
          font-family: var(--font-chopin), 'Cormorant Garamond', Georgia, serif;
        }
        .font-chopin {
          font-family: var(--font-chopin), 'Cormorant Garamond', Georgia, serif;
        }
        .font-bavicka {
          font-family: var(--font-bavicka), 'Dancing Script', cursive;
        }
        .font-urbanist {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
        }
        .font-inter {
          font-family: var(--font-inter), 'Inter', sans-serif;
        }
      `}</style>

      {/* Responsive Navigation Header */}
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      {/* Pages Container */}
      <main className="w-full flex-grow flex flex-col">
        {page === "home" ? (
          <div className="w-full flex flex-col">
            <Hero />
            <WhyDhanvanti />
            <SilentLuxuryMap />
            <SilentLuxuryInfo />
            <Architecture />
            <LifeInside />
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

    </div>
  );
}
