import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';
import { TEAM_INFO } from '../data/teamData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-amber-500/15 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Logo and Brand */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-500/40 bg-black/60 p-1 shadow-lg">
            <img
              src={TEAM_INFO.logoUrl}
              alt="Miquella Logo"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-display font-bold tracking-[0.25em] text-white uppercase">
              {TEAM_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/90 font-medium">
              {TEAM_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <a href="#" className="hover:text-amber-300 transition-colors">Hero</a>
          <a href="#leadership" className="hover:text-amber-300 transition-colors">Leadership</a>
          <a href="#team" className="hover:text-amber-300 transition-colors">Team Members</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">Our Values</a>
          <a href="#motto" className="hover:text-amber-300 transition-colors">Creed</a>
        </div>

        {/* Separator */}
        <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Team Miquella. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-amber-400/50 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-amber-200 transition-all duration-300 text-xs uppercase tracking-wider"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
