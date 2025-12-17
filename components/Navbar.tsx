import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AppView } from '../types';

declare const gsap: any;

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current && typeof gsap !== 'undefined') {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 mix-blend-difference text-white">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex flex-col items-start cursor-pointer group"
          onClick={() => setView(AppView.HOME)}
        >
          <span className="text-2xl font-serif font-bold tracking-tighter hover:text-yellow-500 transition-colors duration-500">
            VASTUKALA
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
            Pune, MH
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
          <button onClick={() => setView(AppView.HOME)} className={`hover:text-white transition-all hover:scale-105 ${currentView === AppView.HOME ? 'text-white border-b border-white pb-1' : ''}`}>Studio</button>
          <button className="hover:text-white transition-all hover:scale-105">Expertise</button>
          <button className="hover:text-white transition-all hover:scale-105">Portfolio</button>
        </div>

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
  );
};

export default Navbar;