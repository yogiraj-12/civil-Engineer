import React, { useLayoutEffect, useRef } from 'react';
import { Ruler, HardHat, Scroll, Hammer } from 'lucide-react';
import { SERVICES } from '../constants';

declare const gsap: any;
declare const ScrollTrigger: any;

const iconMap: any = {
  Ruler: Ruler,
  HardHat: HardHat,
  Scroll: Scroll,
  Hammer: Hammer
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#141414] py-24 md:py-32 px-6 border-b border-white/5">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <span className="text-yellow-600/80 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
              Technical precision meets <span className="italic text-gray-400">architectural vision.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              We go beyond basic construction. Vastukala provides comprehensive civil engineering solutions, ensuring structural integrity, material efficiency, and seamless project execution for complex environments.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={index} className="service-item group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Icon size={24} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;