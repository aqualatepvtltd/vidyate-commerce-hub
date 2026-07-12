/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded Pages for extreme performance and split bundle sizes
const Home = React.lazy(() => import('./pages/Home'));
const GetCertified = React.lazy(() => import('./pages/GetCertified'));
const PaidTestPage = React.lazy(() => import('./pages/PaidTestPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Lightweight premium PageLoader fallback
const PageLoader = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center animate-subtle-fade">
    <div className="relative w-16 h-16">
      {/* Outer spinning ring */}
      <div className="absolute inset-0 rounded-full border-4 border-[#10B981]/10 border-t-[#10B981] animate-spin"></div>
      {/* Inner glowing pulsing orb */}
      <div className="absolute inset-2 rounded-full bg-[#10B981]/5 border border-[#10B981]/20 animate-pulse flex items-center justify-center">
        <span className="material-symbols-rounded text-base text-[#10B981]">account_balance</span>
      </div>
    </div>
    <span className="mt-4 text-[10px] font-black uppercase tracking-[0.2.5em] text-[#10B981] animate-pulse">
      Loading Hub...
    </span>
  </div>
);

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between">
        <Header
          isLightMode={isLightMode}
          toggleTheme={toggleTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Workspace Frame container */}
        <main className="flex-grow py-8 relative">
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/get-certified" element={<GetCertified />} />
              <Route path="/paid-certification-test/:courseId" element={<PaidTestPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
