import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AppView } from '../types';

declare const gsap: any;

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (navRef.current && typeof gsap !== 'undefined') {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (currentView !== AppView.HOME) {
      setView(AppView.HOME);
      // Small delay to allow home to mount
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 md:py-6 mix-blend-difference text-white">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col items-start cursor-pointer group"
            onClick={() => { setView(AppView.HOME); window.scrollTo({top: 0, behavior: 'smooth'}); }}
          >
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter hover:text-yellow-500 transition-colors duration-500">
              VASTUKALA
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
              Pune, MH
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
            <button onClick={() => { setView(AppView.HOME); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={`hover:text-white transition-all ${currentView === AppView.HOME ? 'text-white border-b border-white pb-1' : ''}`}>Studio</button>
            <button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-all">Expertise</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-all">Portfolio</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA */}
          <button 
            onClick={() => setView(AppView.BOOKING)}
            className="group hidden md:flex items-center gap-3 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Start Project</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          <button onClick={() => { setView(AppView.HOME); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-4xl font-serif text-left">Studio</button>
          <button onClick={() => scrollToSection('expertise')} className="text-4xl font-serif text-left">Expertise</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-4xl font-serif text-left">Portfolio</button>
          <button onClick={() => { setView(AppView.BOOKING); setIsMenuOpen(false); }} className="text-4xl font-serif text-left text-yellow-500">Start Project</button>
          
          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Office</p>
            <p className="text-sm">Level 4, Onyx Tower, Koregaon Park, Pune</p>
          </div>
        </div>
        <button className="absolute top-6 right-6 p-2" onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Navbar;