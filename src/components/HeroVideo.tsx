import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const videoUrl = "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/showcase.mp4";
    let activeUrl = "";

    fetch(videoUrl)
      .then(res => res.blob())
      .then(blob => {
        activeUrl = URL.createObjectURL(blob);
        setVideoSrc(activeUrl);
      })
      .catch(err => console.error("Video load error:", err));

    return () => {
      if (activeUrl) URL.revokeObjectURL(activeUrl);
    };
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#1B2B3A]">
      {/* Video with Soft Mask */}
      <div className="absolute inset-0 z-0">
        {videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-40 object-center transition-opacity duration-1000"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {/* Soft Radial Gradient for focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B3A] via-[#1B2B3A]/60 to-transparent"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-start max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#CA9434]/20 border border-[#CA9434]/30 text-[#CA9434] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Global Industrial Leader
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
            Powering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CA9434] to-[#f3d396]">Extraction</span> <br /> 
            <span className="text-slate-400 font-light italic">of the Future.</span>
          </h1>
          
          <div className="mt-8 flex items-center gap-6">
             <div className="h-[2px] w-12 bg-[#CA9434]"></div>
             <p className="text-xs md:text-sm text-slate-300 font-bold tracking-[0.3em] uppercase">
               Excellence • Brilliance • Difference
             </p>
          </div>

          <p className="mt-8 text-lg md:text-xl text-slate-300/80 max-w-xl font-medium leading-relaxed">
            Engineered solutions for the world’s toughest terrains. We deliver the components that keep your operation moving.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button 
              onClick={() => scrollToSection('#products')}
              className="group bg-[#CA9434] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-white hover:text-[#1B2B3A] transition-all duration-500 shadow-2xl shadow-[#CA9434]/20"
            >
              OUR INVENTORY
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group border-2 border-white/20 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
            >
              CONTACT EXPERTS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
         <ChevronDown className="text-white/30" size={32} />
      </div>

      {/* Soft Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}