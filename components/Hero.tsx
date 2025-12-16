import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { AppView } from '../types';

declare const gsap: any;

interface HeroProps {
  setView: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined') return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background scale and overlay fade
      tl.fromTo(".hero-bg", 
        { scale: 1.1, filter: 'grayscale(100%)' },
        { scale: 1, filter: 'grayscale(0%)', duration: 2, ease: "power2.inOut" }
      );

      // Text Reveal
      tl.fromTo(".hero-line",
        { y: "100%", opacity: 0, rotate: 2 },
        { y: "0%", opacity: 1, rotate: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        "-=1.5"
      );

      // Subtext and lines
      tl.fromTo([".hero-sub", ".hero-divider"],
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0f0f0f] text-white overflow-hidden flex flex-col justify-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-10 opacity-30"></div> {/* Grid */}
        <img 
          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2108&auto=format&fit=crop" 
          alt="Engineering Structure" 
          className="hero-bg w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 container max-w-[1920px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">
        
        {/* Main Typography */}
        <div ref={textContainerRef} className="lg:col-span-8">
          <div className="overflow-hidden">
            <h1 className="hero-line text-[12vw] lg:text-[7rem] font-serif leading-[0.85] tracking-tighter text-white/90">
              STRUCTURAL
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-line text-[12vw] lg:text-[7rem] font-serif leading-[0.85] tracking-tighter text-white italic ml-2 lg:ml-12">
              MASTERY
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 ml-2 lg:ml-14">
            <div className="hero-divider h-[1px] w-12 md:w-24 bg-yellow-600/70"></div>
            <p className="hero-sub text-sm md:text-lg text-gray-300 font-light max-w-lg tracking-wide">
              Civil engineering and construction firm dedicated to building the landmarks of tomorrow. Residential. Commercial. Industrial.
            </p>
          </div>
        </div>

        {/* Technical Sidebar / Right Side */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-between h-[60%] border-l border-white/10 pl-12 hero-sub opacity-0">
           <div>
             <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">Location</span>
             <span className="block text-xl font-serif">Hyderabad, India</span>
           </div>
           
           <div className="space-y-6">
             <div>
              <span className="block text-4xl font-light text-white">15<span className="text-yellow-600">+</span></span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Years of Experience</span>
             </div>
             <div>
              <span className="block text-4xl font-light text-white">400<span className="text-yellow-600">k</span></span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Sq. Ft. Built</span>
             </div>
           </div>

           <button 
             onClick={() => setView(AppView.BOOKING)}
             className="w-full py-4 bg-white text-black hover:bg-yellow-600 transition-colors uppercase text-xs font-bold tracking-widest"
           >
             Start Consultation
           </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <ArrowDown size={14} className="text-white" />
      </div>
    </div>
  );
};

export default Hero;