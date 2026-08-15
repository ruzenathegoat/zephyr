import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { EnergySystemsSection } from './components/sections/EnergySystemsSection';
import { EvidenceGrid } from './components/sections/EvidenceGrid';
import { ProjectGrid } from './components/sections/ProjectGrid';
import { ProcessSection } from './components/sections/ProcessSection';
import { CompanyProfileSection } from './components/sections/CompanyProfileSection';
import { FinalCta } from './components/sections/FinalCta';
import { TrustedBySection } from './components/sections/TrustedBySection';
import { DocumentationPage } from './components/docs/DocumentationPage';
import { SmoothScrollProvider } from './components/providers/SmoothScrollProvider';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'docs'>('landing');

  // Handle URL hash changes (#docs or others)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#docs') {
        setCurrentView('docs');
      } else {
        setCurrentView('landing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openDocs = () => {
    window.location.hash = '#docs';
    setCurrentView('docs');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const closeDocs = () => {
    window.location.hash = '#top';
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (currentView === 'docs') {
    return <DocumentationPage onBackToLanding={closeDocs} />;
  }

  return (
    <SmoothScrollProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-primary px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.025em] text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader onOpenDocs={openDocs} />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <HeroSection />
          <TrustedBySection />
          <EnergySystemsSection />
          <EvidenceGrid />
          <ProjectGrid />
          <ProcessSection />
          <CompanyProfileSection />
          <FinalCta />
        </main>
        <SiteFooter onOpenDocs={openDocs} />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
