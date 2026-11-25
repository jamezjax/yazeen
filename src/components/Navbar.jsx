import React, { useState, useEffect } from 'react';
import { Shield, Users, Compass, Award, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leadership', href: '#leadership' },
    { name: 'Team Members', href: '#team' },
    { name: 'Our Values', href: '#about' },
    { name: 'Motto', href: '#motto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-amber-500/15 py-3 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-102"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 p-0.5 bg-black/60 shadow-sm group-hover:border-amber-400">
            <img 
              src="/images/logo.jpeg" 
              alt="Miquella Emblem" 
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.2em] text-sm text-zinc-100 group-hover:text-amber-200 transition-colors">
              MIQUELLA
            </span>
            <span className="text-[10px] tracking-[0.18em] text-amber-400/80 uppercase font-medium">
              Never Known Defeat
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-amber-300 transition-all duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#leadership"
            className="text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-amber-500/30 text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-amber-500/10"
          >
            Meet The Team
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-amber-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12]/95 backdrop-blur-xl border-b border-amber-500/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-[0.18em] text-zinc-300 hover:text-amber-300 py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2.5 rounded-full border border-amber-500/40 text-amber-200 bg-amber-500/15"
          >
            Meet The Team
          </a>
        </div>
      )}
    </nav>
  );
}
