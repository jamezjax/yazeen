import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Compass, ShieldCheck, Star } from 'lucide-react';
import { LEADERSHIP } from '../data/teamData';

export default function LeadershipSection({ onSelectMember }) {
  const captain = LEADERSHIP.find(l => l.id === 'captain');
  const viceCaptain = LEADERSHIP.find(l => l.id === 'vice-captain');

  return (
    <section id="leadership" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase">
            Command & Guidance
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-wide">
          Executive Leadership
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-amber-500 to-amber-200 mx-auto my-4" />
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          The vanguard guiding Team Miquella toward strategic distinction, disciplined execution, and shared achievement.
        </p>
      </motion.div>

      {/* Leadership Duo Grid: Captain & Vice-Captain */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* CAPTAIN CARD - Most Prominent (7 cols on LG) */}
        {captain && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#13141c] to-[#0c0d12] border border-amber-500/40 shadow-2xl shadow-amber-950/20 hover:border-amber-400 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500" />

            {/* Glowing corner ambiance */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all duration-700" />

            <div className="p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              {/* Captain Portrait with Prestige Frame */}
              <div className="relative shrink-0">
                <div className="w-52 h-64 sm:w-60 sm:h-76 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-black/60 relative group/img">
                  <img
                    src={captain.image}
                    alt={captain.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  />
                  {/* Subtle vignette over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-amber-400/70 text-[10px] font-bold tracking-[0.2em] text-amber-300 uppercase shadow-lg">
                      <Crown className="w-3 h-3 text-amber-400" />
                      {captain.badge}
                    </span>
                  </div>
                </div>

                {/* Subtle gold halo ring */}
                <div className="absolute -inset-1 rounded-2xl border border-amber-400/20 -z-10 blur-[1px]" />
              </div>

              {/* Captain Details */}
              <div className="flex-1 flex flex-col text-center md:text-left space-y-4">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Team Pinnacle</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                    {captain.name}
                  </h3>
                  <p className="text-amber-300/80 text-xs sm:text-sm font-medium tracking-wider uppercase mt-1">
                    {captain.subtitle}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {captain.bio}
                </p>

                {/* Highlight Quote */}
                <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90 italic">
                  "{captain.highlight}"
                </div>

                {/* Responsibilities */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 block mb-2 font-medium">
                    Core Mandates:
                  </span>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {captain.responsibilities.map((resp, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-300"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Profile View */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectMember && onSelectMember(captain)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-amber-300 hover:text-amber-200 font-semibold group/btn"
                  >
                    <span>View Leadership Dossier</span>
                    <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Accent Footer Bar */}
            <div className="px-8 py-3 bg-black/40 border-t border-amber-500/15 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5 text-amber-400/90 font-medium tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> First In Command
              </span>
              <span className="tracking-widest uppercase text-zinc-500">Miquella Executive</span>
            </div>
          </motion.div>
        )}

        {/* VICE-CAPTAIN CARD - Beside Captain (5 cols on LG) */}
        {viceCaptain && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#111219] to-[#0c0d12] border border-zinc-700/60 hover:border-amber-500/50 shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-amber-400/60 to-zinc-500" />

            <div className="p-8 flex flex-col items-center text-center space-y-5 relative z-10">
              {/* Portrait */}
              <div className="relative shrink-0">
                <div className="w-44 h-56 sm:w-48 sm:h-60 rounded-2xl overflow-hidden border border-zinc-600/70 group-hover:border-amber-400/60 shadow-lg bg-black/60 relative group/img transition-all duration-500">
                  <img
                    src={viceCaptain.image}
                    alt={viceCaptain.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-amber-400/50 text-[10px] font-bold tracking-[0.2em] text-amber-200 uppercase shadow-lg">
                      <Compass className="w-3 h-3 text-amber-400" />
                      {viceCaptain.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                  {viceCaptain.name}
                </h3>
                <p className="text-amber-400/80 text-xs font-medium tracking-wider uppercase">
                  {viceCaptain.subtitle}
                </p>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light pt-1">
                  {viceCaptain.bio}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="w-full pt-1">
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {viceCaptain.responsibilities.map((resp, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-zinc-800/80 border border-white/5 text-zinc-300"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Dossier Link */}
              <button
                onClick={() => onSelectMember && onSelectMember(viceCaptain)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-amber-300 hover:text-amber-200 font-semibold group/btn pt-2"
              >
                <span>View Leadership Dossier</span>
                <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5 text-amber-300/80 font-medium tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5" /> Second In Command
              </span>
              <span className="tracking-widest uppercase text-zinc-500">Tactical Strategy</span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
