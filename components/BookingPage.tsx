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
    location: '',
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
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col lg:flex-row text-white">
      
      {/* Left Panel - Visual */}
      <div className="w-full lg:w-5/12 h-48 lg:h-auto relative overflow-hidden bg-neutral-900 border-r border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute top-0 left-0 w-full p-8 lg:p-12 z-20">
          <button 
            onClick={goBack} 
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-fit text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Studio
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">Build with <br/><span className="italic text-yellow-600">Precision.</span></h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
              Direct line to our civil engineering team. Discuss blueprints, site requirements, and project scope.
            </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-7/12 p-8 lg:p-24 flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-full max-w-xl">
          <span className="text-yellow-600 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Consultation</span>
          <h3 className="text-3xl font-serif text-white mb-2">Project Inquiry</h3>
          <p className="text-gray-500 text-sm mb-12">Submit your project details. We analyze structural feasibility and revert.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Client Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-700"
                />
                </div>

                <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Contact Number</label>
                <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-700"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Scope of Work</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors [&>option]:bg-black"
                >
                  <option>Commercial Construction</option>
                  <option>Residential Structure</option>
                  <option>Industrial Shed/Factory</option>
                  <option>Structural Consultation</option>
                  <option>Renovation & Retrofitting</option>
                </select>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Site Location</label>
                <input
                  required
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, District"
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-white transition-colors">Technical Requirements</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Details regarding plot area, number of floors, soil type, architectural drawings status..."
                className="w-full bg-transparent border-b border-gray-800 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-700 resize-none"
              />
            </div>

            <div className="pt-4">
                <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-yellow-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4"
                >
                <span>Request Engineer</span>
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