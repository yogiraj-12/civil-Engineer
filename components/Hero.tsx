import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { AppView } from '../types';

declare const gsap: any;

interface HeroProps {
  setView: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined') return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Dramatic Background Reveal
      tl.fromTo(bgRef.current, 
        { scale: 1.4, filter: "blur(15px)", opacity: 0 },
        { scale: 1.1, filter: "blur(0px)", opacity: 0.5, duration: 2, ease: "power2.inOut" }
      );

      // 2. Structural Lines Drawing Animation
      tl.fromTo(".structural-line-v", 
        { scaleY: 0, transformOrigin: "top" }, 
        { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.2 },
        "-=1.5"
      );
      tl.fromTo(".structural-line-h", 
        { scaleX: 0, transformOrigin: "left" }, 
        { scaleX: 1, duration: 1.5, ease: "expo.inOut" },
        "-=1.5"
      );

      // 3. Text Stagger Reveal
      tl.fromTo(".hero-char",
        { y: 150, rotate: 5, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, stagger: 0.04, duration: 1.2, ease: "power4.out" },
        "-=1"
      );

      // 4. Sidebar & Details Fade In
      tl.fromTo([".hero-sidebar", ".hero-meta"],
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
        "-=0.5"
      );

      // 5. Continuous Gradient Pulse for "Mastery"
      gsap.to(".mastery-text", {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none",
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof gsap === 'undefined' || window.innerWidth < 768) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5);
    const yPos = (clientY / innerHeight - 0.5);

    gsap.to(textRef.current, {
      x: xPos * 40,
      y: yPos * 40,
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.to(bgRef.current, {
      x: -xPos * 20,
      y: -yPos * 20,
      rotation: xPos * 1,
      duration: 2,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-[#050505] text-white overflow-hidden"
    >
      {/* Animated Structural Grid Lines */}
      <div className="absolute top-0 left-12 md:left-24 w-[1px] h-full bg-white/10 z-10 structural-line-v hidden md:block"></div>
      <div className="absolute top-0 right-12 md:right-32 w-[1px] h-full bg-white/10 z-10 structural-line-v hidden md:block"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-10 structural-line-h"></div>

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10"></div>
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2108&auto=format&fit=crop" 
          alt="Engineering Structure" 
          className="w-full h-full object-cover opacity-50 grayscale contrast-125 scale-110"
        />
      </div>

      <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-24">
        
        {/* Main Typography */}
        <div ref={textRef} className="max-w-[95vw] relative pt-12 md:pt-0">
          <div className="absolute -top-8 md:-top-16 left-0 text-[8px] md:text-xs font-mono text-yellow-600 uppercase tracking-[0.3em] hero-meta flex items-center gap-2">
            <span className="w-4 md:w-8 h-[1px] bg-yellow-600"></span>
            <span>Engineering Excellence</span>
          </div>

          <h1 className="text-[12vw] md:text-[9vw] font-serif leading-[0.95] tracking-tight text-white/90 mix-blend-overlay">
             <span className="block overflow-hidden"><span className="hero-char inline-block">S</span><span className="hero-char inline-block">T</span><span className="hero-char inline-block">R</span><span className="hero-char inline-block">U</span><span className="hero-char inline-block">C</span><span className="hero-char inline-block">T</span><span className="hero-char inline-block">U</span><span className="hero-char inline-block">R</span><span className="hero-char inline-block">E</span></span>
          </h1>
          
          <h1 className="mastery-text text-[12vw] md:text-[9vw] font-serif leading-[0.95] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] ml-[6vw] md:ml-[10vw]">
            <span className="block overflow-hidden"><span className="hero-char inline-block">M</span><span className="hero-char inline-block">A</span><span className="hero-char inline-block">S</span><span className="hero-char inline-block">T</span><span className="hero-char inline-block">E</span><span className="hero-char inline-block">R</span><span className="hero-char inline-block">Y</span></span>
          </h1>
        </div>

        {/* Sidebar - Positioned for mobile at bottom or hidden */}
        <div className="hero-sidebar md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-80 bg-white/5 backdrop-blur-md border border-white/10 md:border-l p-6 md:p-8 mt-16 md:mt-0 flex flex-col gap-6 md:gap-8 z-30 rounded-lg md:rounded-none">
            <div className="flex md:block justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  Pune, MH
                </p>
                <p className="text-xl md:text-2xl font-serif">Main Office</p>
              </div>
              <div className="md:hidden">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Since 2008</p>
                <p className="text-lg font-serif">15+ Years</p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Philosophy</p>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Delivering high-precision civil engineering solutions for industrial and residential landmarks.
              </p>
            </div>
            <button 
              onClick={() => setView(AppView.BOOKING)}
              className="w-full py-4 bg-white text-black font-bold border border-white/20 text-[10px] uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 group"
            >
              Consult Now
            </button>
        </div>

        <div className="hidden md:flex absolute bottom-12 left-24 items-center gap-4 opacity-60 hero-meta">
           <div className="p-2 border border-white/20 rounded-full animate-bounce">
             <ArrowDown size={14} />
           </div>
           <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;