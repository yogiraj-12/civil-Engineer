import React, { useLayoutEffect, useRef } from 'react';
import { Ruler, HardHat, Scroll, Hammer, Activity } from 'lucide-react';
import { SERVICES } from '../constants';

declare const gsap: any;
declare const ScrollTrigger: any;

const iconMap: any = {
  Ruler: Ruler,
  HardHat: HardHat,
  Scroll: Scroll,
  Hammer: Hammer,
  Activity: Activity
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f0f0f] py-32 px-6 border-b border-white/5 relative">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4">
            <div className="max-w-2xl">
                <span className="text-yellow-600/80 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Precision Engineering <br/> <span className="text-gray-500 italic">& Execution.</span>
                </h2>
            </div>
            <div className="hidden md:block">
                <p className="text-xs text-gray-500 max-w-xs text-right leading-relaxed">
                    Vastukala integrates advanced structural analysis with on-ground construction management to deliver defect-free projects in Pune.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={index} className="service-card group border-r border-b border-white/10 p-8 md:p-12 hover:bg-white/5 transition-colors duration-500 cursor-default min-h-[300px] flex flex-col justify-between">
                  
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-gray-600">0{index + 1}</span>
                    <Icon size={24} className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" strokeWidth={1} />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                        {service.description}
                    </p>
                  </div>
                  
                  <div className="w-0 group-hover:w-full h-[1px] bg-yellow-600 transition-all duration-700 ease-out mt-8"></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;