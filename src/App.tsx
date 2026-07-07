import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollProvider } from '@/lib/SmoothScrollProvider';
import { ContactModalProvider } from '@/lib/ContactModalContext';
import Navbar from '@/components/layout/Navbar/Navbar';
import StickyNavbar from '@/components/layout/Navbar/StickyNavbar';
import { ContactModal } from '@/components/ContactModal';
import { InlineCTA } from '@/components/InlineCTA';
import { Hero } from '@/sections/Hero';
import { CityMap } from '@/sections/CityMap';
import { TrustBar } from '@/sections/TrustBar';
import { ProblemSection } from '@/sections/ProblemSection';
import { BeforeAfterSimulator } from '@/sections/BeforeAfterSimulator';
import { DayInLife } from '@/sections/DayInLife';
import { SOPBlueprint } from '@/sections/SOPBlueprint';
import { RoleInfrastructure } from '@/sections/RoleInfrastructure';
import { ActiveDeskSandbox } from '@/sections/ActiveDeskSandbox';
import { Lifecycle } from '@/sections/Lifecycle';
import { FeatureEcosystem } from '@/sections/FeatureEcosystem';
import { HRMS } from '@/sections/HRMS';
import { Metrics } from '@/sections/Metrics';
import { Testimonials } from '@/sections/Testimonials';
import { Pricing } from '@/sections/Pricing';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ContactModalProvider>
      <SmoothScrollProvider>
        <Navbar />
        <StickyNavbar />
        <main>
          <Hero />
          <CityMap />
          <TrustBar />
          <ProblemSection />
          <BeforeAfterSimulator />
          <DayInLife />

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
      </SmoothScrollProvider>
    </ContactModalProvider>
  );
}

export default App;
