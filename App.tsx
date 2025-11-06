
import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AccessibilityContext } from './contexts/AccessibilityContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BloodModule from './pages/BloodModule';
import KindKart from './pages/KindKart';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import { AccessibilitySettings } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSize: 'base',
    contrast: 'normal',
    screenReader: false,
  });

  const accessibilityValue = useMemo(() => ({ accessibility, setAccessibility }), [accessibility]);

  useEffect(() => {
    const root = document.documentElement;
    if (accessibility.contrast === 'high') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    document.body.classList.remove('text-base', 'text-lg', 'text-xl');
    document.body.classList.add(`text-${accessibility.fontSize}`);

  }, [accessibility]);

  return (
    <AccessibilityContext.Provider value={accessibilityValue}>
      <div className={`transition-colors duration-300 dark:bg-gray-900 dark:text-brand-light`}>
        <HashRouter>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate-blood" element={<BloodModule initialTab="donate" />} />
              <Route path="/request-blood" element={<BloodModule initialTab="request" />} />
              <Route path="/compatibility" element={<BloodModule initialTab="compatibility" />} />
              <Route path="/kindkart" element={<KindKart />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </div>
    </AccessibilityContext.Provider>
  );
}

export default App;
