import React, { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

declare const gsap: any;
declare const ScrollTrigger: any;

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const elements = gsap.utils.toArray('.project-item');
    
    elements.forEach((item: any) => {
      gsap.fromTo(item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-32 px-6 relative z-10">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-24 px-4 md:px-12">
            <h2 className="text-[12px] text-yellow-600 font-bold tracking-[0.3em] uppercase mb-4">Our Portfolio</h2>
            <p className="text-5xl md:text-7xl font-serif text-white leading-none">
              Selected <span className="text-gray-600 italic">Civil Works</span>
            </p>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="project-item group border-t border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              <div className="py-16 md:py-24 px-4 md:px-12 flex flex-col lg:flex-row gap-12 lg:items-center">
                
                {/* Meta Data */}
                <div className="lg:w-1/4 space-y-8">
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-mono text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
                     <div className="h-[1px] w-12 bg-white/20"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                    <p className="text-sm text-yellow-600 uppercase tracking-wider">{project.category}</p>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1 font-mono">
                    <p>{project.location}</p>
                    <p>{project.year}</p>
                    <p>{project.area}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:w-1/4">
                  <p className="text-sm text-gray-400 leading-loose font-light border-l border-white/10 pl-6">
                    {project.description}
                  </p>
                  <button className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-1">
                    View Case Study <ArrowUpRight size={12} />
                  </button>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 overflow-hidden relative aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[400px]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
                  />
                </div>

              </div>
            </div>
          ))}
          {/* Bottom border for last item */}
          <div className="border-t border-white/10"></div>
        </div>
        
        {/* Removed "View All" Button as requested */}
      </div>
    </section>
  );
};

export default Projects;