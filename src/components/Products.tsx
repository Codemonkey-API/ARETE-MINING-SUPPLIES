import { ArrowUpRight } from 'lucide-react';
// Keep your existing imports
import torqueConverter from '../assets/images/torqueconveter.png';
import axle from '../assets/images/kesslerd91.png';
import brakeHead from '../assets/images/slide-28.png';
import rockDrill from '../assets/images/rockdrill.jpg';
import conveyorBelt from '../assets/images/slide-5.png';
import aluminumBeam from '../assets/images/almnumfdbeam.jpg';
import jawCrusher from '../assets/images/jw42.jpg';

export default function Products() {
  // Smooth scroll helper
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productData = [
    { id: 1, name: 'Torque Converters', img: torqueConverter, desc: 'Heavy-duty drivetrain solutions.', cat: 'Drivetrain' },
    { id: 2, name: 'Kessler Axles', img: axle, desc: 'High-capacity industrial axles.', cat: 'Heavy Duty' },
    { id: 3, name: 'Brake Systems', img: brakeHead, desc: 'Precision safety braking heads.', cat: 'Safety' },
    { id: 4, name: 'Rock Drills', img: rockDrill, desc: 'High-impact extraction tools.', cat: 'Extraction' },
    { id: 5, name: 'Conveyor Systems', img: conveyorBelt, desc: 'Material handling & magnets.', cat: 'Logistics' },
    { id: 6, name: 'Aluminum Beams', img: aluminumBeam, desc: 'Structural mining support.', cat: 'Structural' },
    { id: 7, name: 'Jaw Crushers', img: jawCrusher, desc: 'Primary stage crushing units.', cat: 'Crushing' },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Soft Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#CA9434] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Global Supply Chain
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1B2B3A] tracking-tight uppercase">
              Current <span className="text-slate-300">Inventory</span>
            </h1>
            <div className="mt-4 h-1 w-20 bg-[#CA9434] rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
            Reliable components engineered for the world's most demanding sites. Available for immediate dispatch.
          </p>
        </div>

        {/* The Soft Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((item) => (
            <div key={item.id} className="group relative flex flex-col bg-slate-50 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#1B2B3A]/5">
              
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white border border-slate-100">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-md text-[#1B2B3A] text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200 uppercase tracking-tighter">
                    {item.cat}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-6 px-4 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2B3A] tracking-tight group-hover:text-[#CA9434] transition-colors uppercase">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 font-medium italic">{item.desc}</p>
                  </div>
                  <div className="text-[#CA9434] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Refined Action Button - NOW FUNCTIONAL */}
                <button 
                  onClick={scrollToContact}
                  className="mt-6 w-full py-4 bg-[#1B2B3A] text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-[#CA9434] hover:shadow-lg hover:shadow-[#CA9434]/20 overflow-hidden relative"
                >
                  <span className="relative z-10">Request Technical Specs</span>
                </button>
              </div>
            </div>
          ))}

          {/* Teaser Card linked to Contact too */}
          <button 
            onClick={scrollToContact}
            className="relative aspect-square flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center transition-all hover:bg-slate-200/50 group"
          >
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
               <span className="text-2xl text-[#CA9434]">➕</span>
             </div>
             <h4 className="text-slate-600 font-bold uppercase tracking-widest text-sm">Expanding Catalogue</h4>
             <p className="text-slate-400 text-xs mt-2 italic font-medium">Click to inquire about custom fabrications</p>
          </button>

        </div>
      </div>
    </section>
  );
}