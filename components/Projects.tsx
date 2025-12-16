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
    
    const elements = gsap.utils.toArray('.project-row');
    
    elements.forEach((row: any) => {
      gsap.fromTo(row,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <div>
             <span className="text-yellow-600/80 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Selected Works</h2>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-sm text-gray-400">Total Projects</span>
             <span className="block text-3xl font-light text-white">04<span className="text-gray-600 text-lg">/50+</span></span>
          </div>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="project-row group border-t border-white/10 pt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start transition-colors duration-500 hover:border-white/30"
            >
              {/* Project Index */}
              <div className="hidden lg:block w-12 pt-2">
                <span className="text-xs text-gray-600 font-mono">{(index + 1).toString().padStart(2, '0')}</span>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[45%] aspect-[16/9] overflow-hidden rounded-sm relative">
                <div className="absolute inset-0 bg-yellow-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Details */}
              <div className="flex-1 pt-2 flex flex-col justify-between h-full">
                <div>
                   <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 border border-white/20 text-[10px] uppercase tracking-wider text-gray-300 rounded-full">{project.category}</span>
                      <ArrowUpRight className="text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                   </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 group-hover:text-yellow-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 font-light mb-6 max-w-xl">{project.description}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-6">
                  <div>
                    <span className="block text-[10px] uppercase text-gray-600 tracking-wider">Location</span>
                    <span className="text-sm text-gray-300">{project.location}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-gray-600 tracking-wider">Area</span>
                    <span className="text-sm text-gray-300">{project.area}</span>
                  </div>
                   <div>
                    <span className="block text-[10px] uppercase text-gray-600 tracking-wider">Year</span>
                    <span className="text-sm text-gray-300">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
           <button className="text-xs uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;