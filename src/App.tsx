import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmoothScrollProvider } from "@/lib/SmoothScrollProvider";
import { ContactModalProvider } from "@/lib/ContactModalContext";
import { ActiveDeskProvider } from "@/lib/ActiveDeskContext";
import Navbar from "@/components/layout/Navbar/Navbar";
import StickyNavbar from "@/components/layout/Navbar/StickyNavbar";
import { ContactModal } from "./components/ContactModal";
import { InlineCTA } from "@/components/InlineCTA";
import { Hero } from "@/sections/Hero";
import { CityMap } from "@/sections/CityMap";
import { TrustBar } from "@/sections/TrustBar";
import { ProblemSection } from "@/sections/ProblemSection";
import { BeforeAfterSimulator } from "@/sections/BeforeAfterSimulator";
import { SOPBlueprint } from "@/sections/SOPBlueprint";
import { RoleInfrastructure } from "@/sections/RoleInfrastructure";
import { ActiveDeskSandbox } from "@/sections/ActiveDeskSandbox";
import { Lifecycle } from "@/sections/Lifecycle";
import { FeatureEcosystem } from "@/sections/FeatureEcosystem";
import { HRMS } from "@/sections/HRMS";
import { Metrics } from "@/sections/Metrics";
import { Testimonials } from "@/sections/Testimonials";
import { Pricing } from "@/sections/Pricing";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";
import { BookingModalProvider } from "@/lib/BookingModalContext";
import BookingModal from "@/components/common/Booking/BookingModal";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ContactModalProvider>
      <BookingModalProvider>
        <ActiveDeskProvider>
          <SmoothScrollProvider>
            <a
              href="#main-content"
              className="
              fixed
              left-4
              top-4
              z-[200]
              -translate-y-24
              rounded-control
              bg-brand-500
              px-4
              py-2.5
              text-nav
              font-semibold
              text-white
              opacity-0
              transition-all
              duration-150
              focus:translate-y-0
              focus:opacity-100
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-white
            "
            >
              Skip to main content
            </a>
            <Navbar />
            <StickyNavbar />
            <main id="main-content">
              <Hero />

              <CityMap />
              <BeforeAfterSimulator />
              <ProblemSection />
              <TrustBar />

              <div className="bg-surface-light1 pt-24">
                <InlineCTA
                  title="Ready to recover leakages and secure operational compliance?"
                  description="Every day spent logging diaries manually, matching JPEG images, and copy-pasting Excel coordinates risks major SLA breaches. Secure your bank partnerships with a fully unified workflow."
                />
              </div>

              <SOPBlueprint />
              <RoleInfrastructure />
              <ActiveDeskSandbox />
              <Lifecycle />
              <FeatureEcosystem />
              <HRMS />
              <Metrics />
              <Testimonials />
              <Pricing />
              <CTA />
            </main>
            <Footer />
            <ContactModal />
            <BookingModal />
          </SmoothScrollProvider>
        </ActiveDeskProvider>
      </BookingModalProvider>
    </ContactModalProvider>
  );
}

export default App;
