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
    <div className="bg-[#0f0f0f] min-h-screen">
      <Navbar currentView={currentView} setView={setView} />
      
      <main>
        <Hero setView={setView} />
        <Services />
        <Projects />
      </main>

      <footer className="bg-[#0a0a0a] text-white py-16 px-6 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className="flex flex-col items-start mb-6">
              <span className="text-2xl font-serif italic font-bold tracking-tighter text-white">
                Vastukala
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Civil Engineers
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm font-light">
              Engineering sustainable, structurally sound, and aesthetically commanding environments. We build the skeleton and the soul of modern infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li>+91 98765 43210</li>
              <li>projects@vastukala.in</li>
              <li>Plot 42, Hitech City, Hyderabad</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Social</h4>
             <div className="flex flex-col gap-4 text-sm text-gray-500 font-light">
              <a href="#" className="hover:text-yellow-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Vastukala Constructions. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Designed & Engineered in India.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;