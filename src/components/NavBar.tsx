import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import { Menu, X, ArrowRight } from 'lucide-react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#products", label: "Inventory" },
        { href: "#about", label: "Company" },
        { href: "#contact", label: "Connect" },
    ];

    // Smooth scroll helper for buttons
    const handleScrollToContact = () => {
        setIsMenuOpen(false);
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
            scrolled 
            ? 'py-2 bg-white/90 backdrop-blur-lg shadow-xl border-b border-slate-200' 
            : 'py-6 bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    
                    {/* BIG LOGO SECTION */}
                    <div className="relative z-[110]">
                        <a href="#home" className="block">
                            <div className={`transition-all duration-500 transform ${
                                scrolled ? 'scale-90 -translate-y-1' : 'scale-110'
                            }`}>
                                <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 transition-all hover:shadow-[#CA9434]/20 hover:border-[#CA9434]/50">
                                    <img 
                                        src={logo} 
                                        alt="Arete Mining" 
                                        className="h-16 md:h-20 w-auto object-contain transition-all"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="flex bg-slate-100/40 backdrop-blur-md p-1.5 rounded-[20px] border border-slate-200/50 mr-2">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.label} 
                                    href={link.href} 
                                    className="px-6 py-2.5 rounded-[14px] text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-300 text-slate-600 hover:text-[#CA9434] hover:bg-white hover:shadow-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        
                        {/* QUOTATION LINKED TO #CONTACT */}
                        <a 
                            href="#contact"
                            className="group flex items-center gap-3 bg-[#1B2B3A] text-white px-8 py-4 rounded-[20px] font-black text-xs tracking-[0.1em] hover:bg-[#CA9434] hover:shadow-2xl hover:shadow-[#CA9434]/30 transition-all duration-500"
                        >
                            QUOTATION
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-4 bg-white rounded-2xl shadow-lg text-[#1B2B3A] border border-slate-100"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`
                absolute top-full left-0 w-full mt-4 px-6 transition-all duration-500
                ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}
            `}>
                <div className="bg-white/98 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-10 space-y-5">
                    {navLinks.map((link) => (
                        <a 
                            key={link.label} 
                            href={link.href} 
                            className="flex items-center justify-between text-2xl font-black text-[#1B2B3A] uppercase tracking-tighter hover:text-[#CA9434] group border-b border-slate-50 pb-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#CA9434] group-hover:text-white transition-all">
                                <ArrowRight size={20} />
                            </div>
                        </a>
                    ))}
                    {/* MOBILE QUOTATION BUTTON */}
                    <button 
                        onClick={handleScrollToContact}
                        className="w-full mt-8 bg-[#1B2B3A] text-white py-6 rounded-[2rem] font-black text-sm tracking-[0.2em] shadow-xl hover:bg-[#CA9434] transition-colors"
                    >
                        GET A QUOTE
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;