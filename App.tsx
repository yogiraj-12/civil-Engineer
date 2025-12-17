import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import BookingPage from './components/BookingPage';
import { AppView } from './types';

function App() {
  const [currentView, setView] = useState<AppView>(AppView.HOME);

  // Simple View Router
  if (currentView === AppView.BOOKING) {
    return <BookingPage goBack={() => setView(AppView.HOME)} />;
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar currentView={currentView} setView={setView} />
      
      <main>
        <Hero setView={setView} />
        <Services />
        <Projects />
      </main>

      <footer className="bg-[#000000] text-white py-24 px-6 border-t border-white/10">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-6 pr-12">
             <div className="flex flex-col items-start mb-8">
              <span className="text-3xl font-serif italic font-bold tracking-tighter text-white">
                VASTUKALA
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mt-2">
                Civil Engineers • Pune
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-md font-light leading-loose">
              Defining the skyline of Pune with structural integrity and architectural finesse. We specialize in high-rise commercial frames and luxury residential shells.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-serif text-lg mb-8">Office</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-light tracking-wide uppercase">
              <li>Level 4, Onyx Tower</li>
              <li>Koregaon Park</li>
              <li>Pune, MH 411001</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-serif text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-light tracking-wide">
              <li>+91 98765 43210</li>
              <li>info@vastukala.in</li>
            </ul>
          </div>

           <div className="md:col-span-2">
            <h4 className="text-white font-serif text-lg mb-8">Connect</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-light tracking-wide uppercase">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-[1920px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-700">
          <span>© {new Date().getFullYear()} Vastukala Constructions.</span>
          <span className="mt-2 md:mt-0">Engineered in Pune.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;