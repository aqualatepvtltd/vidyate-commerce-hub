import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="glass border-t mt-16 transition-all duration-300" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Left Column Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-rounded text-lg font-black">account_balance</span>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#10B981]">
                Vidyate Commerce
              </span>
            </div>
            <p className="opacity-50 text-xs max-w-sm leading-relaxed font-medium">
              India's premier digital academic hub for B.Com, M.Com, CA, CS, CMA, and Class 11-12 Boards. We simplify analytical commerce, financial ledgers, and indirect tax guidelines.
            </p>
          </div>

          {/* Middle Column Pathways */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981]">
              Easy Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/get-certified" className="opacity-60 hover:opacity-100 transition-opacity">
                  Get Certified
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-60 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column Compliance Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981]">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <Link to="/about" className="opacity-60 hover:opacity-100 transition-opacity">
                  Discover Our Mission
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-60 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-60 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Meta */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase tracking-wider text-theme-muted">
          <p>© {new Date().getFullYear()} Vidyate Commerce Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://vidyate-commerce-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]">
              Academic Blog
            </a>
            <a href="mailto:vidyatecommercehub@gmail.com" className="hover:text-[#10B981]">
              Help Desk Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;