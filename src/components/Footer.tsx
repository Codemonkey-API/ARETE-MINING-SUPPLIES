import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand Side */}
          <div className="max-w-xs text-center md:text-left">
            <img src={logo} alt="Arete Mining" className="h-20 w-auto mb-6 mx-auto md:mx-0" />
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Excellence. Brilliance. Difference. <br />
              Supplying the components that power the extraction of the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[#1B2B3A] uppercase tracking-widest">Navigation</h4>
              <a href="#home" className="text-slate-500 hover:text-[#CA9434] transition-colors">Home</a>
              <a href="#products" className="text-slate-500 hover:text-[#CA9434] transition-colors">Inventory</a>
              <a href="#about" className="text-slate-500 hover:text-[#CA9434] transition-colors">Company</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-[#1B2B3A] uppercase tracking-widest">Services</h4>
              <span className="text-slate-400">Refurbishment</span>
              <span className="text-slate-400">Machining</span>
              <span className="text-slate-400">Spares Delivery</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <p>© 2026 Arete Mining Supplies. All Rights Reserved.</p>
          <p>Built for the Toughest Terrains</p>
        </div>
      </div>
    </footer>
  );
}