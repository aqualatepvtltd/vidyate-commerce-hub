import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  isLightMode: boolean;
  toggleTheme: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLightMode, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs font-black uppercase tracking-wider transition-all duration-300 hover:text-[#10B981] ${
      isActive ? 'text-[#10B981]' : 'opacity-70'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 px-4 text-sm font-black uppercase tracking-wider transition-all rounded-xl hover:bg-[#10B981]/10 ${
      isActive ? 'text-[#10B981] bg-[#10B981]/5' : 'opacity-80'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full glass border-b transition-all duration-300" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo Brand */}
        <Link to="/" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-lg shadow-[#10B981]/10 group-hover:scale-105 transition-transform">
            <span className="material-symbols-rounded text-2xl font-black">account_balance</span>
          </div>
          <div>
            <span className="text-sm font-black tracking-tighter uppercase block" style={{ color: 'var(--text-main)' }}>
              Vidyate
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] block text-[#10B981]">
              Commerce Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Link Actions */}
        <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/get-certified" className={navLinkClass}>
            Get Certified
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Header Right Actions (Toggle + Mobile Button) */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl glass border hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            style={{ borderColor: 'var(--glass-border)' }}
            aria-label="Toggle Theme Mode"
          >
            <span className="material-symbols-rounded text-xl" style={{ color: isLightMode ? '#064e3b' : '#10B981' }}>
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-all"
            style={{ borderColor: 'var(--glass-border)' }}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-rounded text-xl" style={{ color: 'var(--text-main)' }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden backdrop-blur-xxl border-b border-t absolute top-20 left-0 w-full p-4 space-y-2 animate-subtle-fade"
          style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)', opacity: 1 }}
        >
          <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/get-certified" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Get Certified</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;