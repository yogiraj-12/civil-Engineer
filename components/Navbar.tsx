import React, { useEffect, useRef } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
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
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex flex-col items-start cursor-pointer group"
          onClick={() => setView(AppView.HOME)}
        >
          <span className="text-2xl font-serif italic font-bold tracking-tighter text-white">
            Vastukala
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">
            Civil Engineers
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16 text-xs font-medium uppercase tracking-widest text-gray-400">
          <button onClick={() => setView(AppView.HOME)} className={`hover:text-white transition-colors ${currentView === AppView.HOME ? 'text-white underline underline-offset-8' : ''}`}>Studio</button>
          <button className="hover:text-white transition-colors">Expertise</button>
          <button className="hover:text-white transition-colors">Selected Works</button>
        </div>

        {/* CTA */}
        <button 
          onClick={() => setView(AppView.BOOKING)}
          className="group flex items-center gap-3 border border-white/20 px-6 py-2.5 rounded-none hover:bg-white hover:text-black transition-all duration-300"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Inquire Project</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;