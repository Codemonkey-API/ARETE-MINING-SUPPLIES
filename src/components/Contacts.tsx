import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#1B2B3A] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA9434] opacity-5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content Side */}
          <div>
            <span className="text-[#CA9434] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Contact Our Team
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Let's build the <br /> 
              <span className="text-gray-500 font-light italic text-3xl md:text-5xl">Future of Mining</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md font-light leading-relaxed">
              Whether you need a full machine refurbishment or a single torque converter, our engineering experts are ready to assist.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#CA9434]/20 flex items-center justify-center text-[#CA9434] group-hover:bg-[#CA9434] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-white font-bold">+27 (0) XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#CA9434]/20 flex items-center justify-center text-[#CA9434] group-hover:bg-[#CA9434] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-bold">solutions@aretemining.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formspree Form Card */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute -top-6 -right-6 bg-[#CA9434] w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
               <MessageSquare size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-[#1B2B3A] uppercase tracking-tight mb-8">
              Request a Quote
            </h3>

            {/* REPLACE THE ACTION URL WITH YOUR FORMSPREE ID */}
            <form action=" https://formspree.io/f/xzdakybq" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 block">Full Name</label>
                  <input 
                    type="text" name="name" required
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA9434]/50 transition-all" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 block">Company</label>
                  <input 
                    type="text" name="company"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA9434]/50 transition-all" 
                    placeholder="Mining Co."
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 block">Email Address</label>
                <input 
                  type="email" name="email" required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA9434]/50 transition-all" 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 block">Equipment Needed</label>
                <textarea 
                  name="message" rows={4} required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#CA9434]/50 transition-all resize-none" 
                  placeholder="Tell us about your project or required spares..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1B2B3A] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#CA9434] transition-all duration-500 shadow-xl hover:shadow-[#CA9434]/30 group"
              >
                SEND MISSION REQUEST
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;