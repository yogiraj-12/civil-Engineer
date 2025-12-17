import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { AppView, BookingData } from '../types';
import { sendToWhatsApp } from '../services/whatsappService';

interface BookingPageProps {
  goBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ goBack }) => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    projectType: 'Commercial Construction',
    location: 'Pune, MH',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp(formData);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col lg:flex-row text-white">
      
      {/* Left Panel - Visual */}
      <div className="w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1997&auto=format&fit=crop" 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
        />
        <div className="absolute top-0 left-0 w-full p-8 z-20">
          <button 
            onClick={goBack} 
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors w-fit text-[10px] uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Return
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-12 z-20 hidden lg:block">
            <h2 className="text-6xl font-serif text-white mb-6">Let's Discuss <br/><span className="italic text-gray-500">The Future.</span></h2>
            <div className="h-[1px] w-24 bg-white/20 mb-6"></div>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              We provide comprehensive civil engineering analysis before breaking ground. Ensure your project in Pune stands the test of time.
            </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-24 flex items-center bg-[#0a0a0a]">
        <div className="w-full max-w-lg mx-auto">
          <span className="text-yellow-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Initiate Project</span>
          <h3 className="text-4xl font-serif text-white mb-8">Consultation Request</h3>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            <div className="group relative">
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                    placeholder="Name"
                />
                <label className="absolute left-0 top-4 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]">
                    Client Name
                </label>
            </div>

            <div className="group relative">
                <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                    placeholder="Phone"
                />
                <label className="absolute left-0 top-4 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]">
                    Contact Number
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                 <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors [&>option]:bg-black text-sm"
                >
                  <option>Commercial Tower</option>
                  <option>Residential Villa</option>
                  <option>Industrial Complex</option>
                  <option>Civil Infrastructure</option>
                </select>
                <label className="absolute left-0 -top-4 text-gray-500 text-[10px] uppercase tracking-widest">
                    Project Vertical
                </label>
              </div>

              <div className="group relative">
                <input
                  required
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                  placeholder="Location"
                />
                <label className="absolute left-0 top-4 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]">
                    Site Location
                </label>
              </div>
            </div>

            <div className="group relative">
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="peer w-full bg-transparent border-b border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label className="absolute left-0 top-4 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-valid:-top-4 peer-valid:text-[10px]">
                  Project Brief / Requirements
              </label>
            </div>

            <div className="pt-8">
                <button
                type="submit"
                className="w-full py-5 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.2em] font-bold flex items-center justify-center gap-4"
                >
                <span>Submit Inquiry</span>
                <Send size={14} />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;