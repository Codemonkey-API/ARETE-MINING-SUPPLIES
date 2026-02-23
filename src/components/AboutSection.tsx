import React from 'react';
import { Settings, Wrench, Truck, Hammer, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Soft Header */}
        <div className="text-center mb-20">
          <span className="text-[#CA9434] font-semibold tracking-widest uppercase text-xs bg-[#CA9434]/10 px-4 py-1.5 rounded-full">
            Engineering Excellence
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-[#1B2B3A] tracking-tight">
            The Arete <span className="text-slate-400 font-light">Journey</span>
          </h1>
          <div className="mt-4 h-1 w-12 bg-[#CA9434] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Mission - Soft Glassmorphism */}
          <div className="md:col-span-7 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h4 className="text-[#CA9434] text-sm font-bold uppercase tracking-widest mb-4">Our Mission</h4>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              We provide <span className="text-[#1B2B3A] border-b-2 border-[#CA9434]/30">tailor-made engineering solutions</span> designed for the high-stakes world of mining.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Arete Supplies thrives on client focus and long-term relationships. Communication is the engine that drives our safety and innovation.
            </p>
          </div>

          {/* Vision - Soft Navy Gradient */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#1B2B3A] to-[#2a3f52] p-10 rounded-3xl shadow-xl flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#CA9434] opacity-10 rounded-full blur-3xl"></div>
            <h4 className="text-[#CA9434] text-sm font-bold uppercase tracking-widest mb-4">Vision</h4>
            <p className="text-2xl font-semibold leading-snug">
              To build a compelling engineering legacy through high-end quality and unparalleled customer satisfaction.
            </p>
          </div>

          {/* Capabilities - Minimalist Icons */}
         {/* Capabilities - Minimalist Icons */}
<div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    { icon: <Settings />, label: "Repairing" },
    { icon: <Wrench />, label: "Refurbishing" },
    { icon: <Truck />, label: "Delivery" },
    { icon: <Hammer />, label: "Machining" }
  ].map((item, idx) => (
    <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="p-3 bg-slate-50 rounded-xl text-[#CA9434] mb-4">
        {/* The Fix: Cast the icon to any or React.ReactElement with props */}
        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
      </div>
      <span className="font-bold text-slate-800 tracking-wide text-sm uppercase">{item.label}</span>
    </div>
  ))}
</div>

          {/* Goal Guidelines - Clean & Spaced */}
          <div className="md:col-span-6 p-2">
            <h4 className="text-2xl font-bold text-[#1B2B3A] mb-8">Our Core Principles</h4>
            <div className="space-y-6">
              {[
                "Optimal performance via specialized training.",
                "Communication-driven satisfaction.",
                "Product knowledge empowerment.",
                "Workshop-to-site feedback loops."
              ].map((goal, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <CheckCircle2 className="text-[#CA9434] shrink-0" size={20} />
                  <p className="text-slate-600 font-medium">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon - Soft Tease */}
          <div className="md:col-span-6 bg-white border-2 border-dashed border-slate-200 p-10 rounded-3xl flex flex-col items-center justify-center text-center group">
             <div className="px-4 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase mb-4 tracking-widest">
                Expansion Project
             </div>
             <h3 className="text-3xl font-bold text-[#1B2B3A] mb-4">New Machine Lines</h3>
             <div className="text-[#CA9434] font-black text-sm tracking-widest border-2 border-[#CA9434] px-6 py-2 rounded-lg group-hover:bg-[#CA9434] group-hover:text-white transition-all cursor-default">
                COMING SOON
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;