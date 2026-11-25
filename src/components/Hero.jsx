import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { TEAM_INFO } from '../data/teamData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden text-center">
      {/* Background radial glow specifically tailored behind the hero logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-amber-600/15 via-amber-400/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative hairline compass/rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border border-amber-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] sm:w-[640px] h-[460px] sm:h-[640px] rounded-full border border-white/[0.03] border-dashed pointer-events-none animate-spin" style={{ animationDuration: '120s' }} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/5 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase">
            Official Team Roster & Portfolio
          </span>
        </motion.div>

        {/* Logo Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-8"
        >
          {/* Subtle logo backlight aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-amber-300/15 to-amber-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-amber-500/30 bg-black/80 shadow-2xl shadow-black p-1.5 transition-all duration-500 group-hover:border-amber-400/60 group-hover:scale-[1.02]">
            <img
              src={TEAM_INFO.logoUrl}
              alt="Miquella Team Emblem"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </motion.div>

        {/* Group Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[0.22em] text-gold-gradient drop-shadow-sm uppercase">
            {TEAM_INFO.name}
          </h1>

          <div className="flex items-center justify-center gap-4 py-1">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-amber-400/40 to-amber-400" />
            <span className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] text-amber-300/90 uppercase font-display">
              {TEAM_INFO.tagline}
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-amber-400/40 to-amber-400" />
          </div>
        </motion.div>

        {/* Short Tagline / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {TEAM_INFO.subtitle}
        </motion.p>

        {/* Quick Action / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#leadership"
            className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5"
          >
            Explore Leadership
          </a>
          <a
            href="#team"
            className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            All Members
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 hover:text-amber-400 transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-amber-400/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
