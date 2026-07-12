import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <SEO 
        title="About Vidyate Commerce Hub | Revolutionizing Business Education" 
        description="Discover Vidyate Commerce Hub's mission to transform accounting, taxation, and financial education through digital accessibility, expert-curated modules, and resource minimalism."
        keywords="About Vidyate, Commerce Education India, Digital Accounting learning, CBSE Boards prep guides, CA Foundation course syllabus"
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
        </div>
      
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.15] tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Dedicated to <br/>
          <span className="text-[#10B981]">Analytical</span> Clarity.
        </h1>
        <p className="opacity-60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-12" style={{ color: 'var(--text-main)' }}>
          Vidyate Commerce Hub is a premier, streamlined academic platform designed to make financial reporting, taxation codes, and legal frameworks easy to master.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div 
          className="glass p-8 md:p-12 rounded-3xl border relative overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">radar</span>
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>Minimal Noise, High-Yield Yields.</h2>
            <div className="space-y-4 opacity-70 leading-relaxed font-medium text-xs md:text-sm" style={{ color: 'var(--text-main)' }}>
              <p>
                The Indian commerce stream is dense with ever-shifting direct tax codes, legal amendments, company law formats, and ledger balancing principles. Too often, students waste vital preparation hours parsing disjointed notes.
              </p>
              <p>
                We apply a strict rule of <strong>Resource Minimalism</strong>. We strip away wordy textbooks, isolating core, high-yield formulas, ledger double-entry patterns, and sample questions aligned directly with UGC, CBSE, and ICAI criteria.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="glass p-5 rounded-xl border border-transparent hover:border-[#10B981]/20 transition-colors flex items-center gap-4">
              <span className="material-symbols-rounded text-2xl text-[#10B981]">hub</span>
              <h4 className="font-bold text-xs md:text-sm">Centralized Study Hub</h4>
            </div>
            <div className="glass p-5 rounded-xl border border-transparent hover:border-[#8B5CF6]/20 transition-colors flex items-center gap-4">
              <span className="material-symbols-rounded text-2xl text-[#8B5CF6]">verified_user</span>
              <h4 className="font-bold text-xs md:text-sm">CA Practitioner Checked</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Process Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-[#8B5CF6] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Our Quality Pipeline</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>Curation Standards.</h2>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#8B5CF6]/0 via-[#8B5CF6]/30 to-[#8B5CF6]/0 -z-10"></div>
          {[
            { title: 'Top-Tier Collection', desc: 'We collect materials from central university rank-holders and CA Foundation toppers.', icon: 'cloud_sync' },
            { title: 'Statutory Verification', desc: 'Our advisory practitioners evaluate materials against current Indirect Tax Acts, NCERT revisions, and corporate laws.', icon: 'gavel' },
            { title: 'Clean Digital Delivery', desc: 'Folders are compiled cleanly, converted to low-ink printable formats, and linked directly to cloud servers.', icon: 'picture_as_pdf' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 md:gap-8 mb-12 last:mb-0 animate-subtle-fade">
              <div className="flex-shrink-0 w-16 h-16 rounded-full glass border flex items-center justify-center shadow-lg" style={{ borderColor: 'var(--glass-border)' }}>
                <span className="material-symbols-rounded text-2xl text-[#8B5CF6]">{item.icon}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg md:text-xl font-black mb-2" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
                <p className="opacity-60 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:pb-24">
        <div className="glass p-8 md:p-16 rounded-3xl border text-center relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#10B981]/10 to-transparent">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter" style={{ color: 'var(--text-main)' }}>
            Your Competitive <br/> Academic <span className="text-[#10B981]">Edge</span>.
          </h2>
          <p className="opacity-60 text-xs md:text-base font-medium mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-main)' }}>
            Stop searching countless groups. Explore India’s premium commerce ecosystem that thousands of students trust.
          </p>
          <Link 
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#10B981] text-white rounded-xl font-black text-xs md:text-sm hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all active:scale-95"
          >
            <span>Explore Academic Dashboards</span>
            <span className="material-symbols-rounded text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
