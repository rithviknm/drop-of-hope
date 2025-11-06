
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useAccessibility } from '../hooks/useAccessibility';
import { AccessibilitySettings } from '../types';

const AccessibilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0zM10 18a2 2 0 11-4 0 2 2 0 014 0zM14 6h6M14 12h6M14 18h6" />
    </svg>
);


const AccessibilityToggle = () => {
    const { accessibility, setAccessibility } = useAccessibility();

    const handleSettingChange = <K extends keyof AccessibilitySettings,>(
        key: K,
        value: AccessibilitySettings[K]
    ) => {
        setAccessibility(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-50 text-gray-700 dark:text-gray-200 animate-fade-in">
            <h3 className="font-bold text-lg mb-2">Accessibility Settings</h3>
            
            <div className="mb-4">
                <label className="block font-semibold mb-1">Font Size</label>
                <div className="flex space-x-2">
                    <button onClick={() => handleSettingChange('fontSize', 'base')} className={`px-3 py-1 rounded ${accessibility.fontSize === 'base' ? 'bg-brand-cyan text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
                    <button onClick={() => handleSettingChange('fontSize', 'lg')} className={`px-3 py-1 rounded text-lg ${accessibility.fontSize === 'lg' ? 'bg-brand-cyan text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
                    <button onClick={() => handleSettingChange('fontSize', 'xl')} className={`px-3 py-1 rounded text-xl ${accessibility.fontSize === 'xl' ? 'bg-brand-cyan text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>A</button>
                </div>
            </div>

            <div>
                <label className="block font-semibold mb-1">Contrast</label>
                <div className="flex items-center space-x-2">
                    <span>Normal</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={accessibility.contrast === 'high'} onChange={(e) => handleSettingChange('contrast', e.target.checked ? 'high' : 'normal')} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-brand-cyan dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-cyan"></div>
                    </label>
                    <span>High</span>
                </div>
            </div>
        </div>
    );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  
  const activeLinkStyle = {
    color: '#05BFDB',
    textDecoration: 'underline',
    textUnderlineOffset: '8px'
  };

  return (
    <header className="bg-white/80 dark:bg-brand-blue/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-brand-blue dark:text-white">
          Drop of <span className="text-brand-cyan">Hope</span>
        </NavLink>

        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
              className="text-gray-700 dark:text-gray-200 hover:text-brand-cyan dark:hover:text-brand-teal font-medium transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
            <div className="relative">
                <button
                    onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Accessibility Settings"
                >
                    <AccessibilityIcon />
                </button>
                {isAccessibilityOpen && <AccessibilityToggle />}
            </div>
            
            <button className="hidden lg:inline-block bg-brand-accent hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
              Donate Now
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-brand-blue dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-brand-blue animate-fade-in">
          <div className="px-6 pb-4 flex flex-col space-y-4">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-200 hover:text-brand-cyan dark:hover:text-brand-teal font-medium transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-brand-accent hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
