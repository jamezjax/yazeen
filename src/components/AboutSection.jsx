import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Crosshair, Users, Crown, Sparkles } from 'lucide-react';
import { TEAM_INFO } from '../data/teamData';

const iconMap = {
  Shield: Shield,
  Crosshair: Crosshair,
  Users: Users,
  Crown: Crown,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-12">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase">
            Our Foundation
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-wide">
          About Team Miquella
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-amber-500 to-amber-200 mx-auto my-4" />
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Forged through mutual dedication and steadfast commitment, Team Miquella operates on principles of unshakeable solidarity, analytical clarity, and relentless pursuit of peak performance.
        </p>
      </motion.div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {TEAM_INFO.values.map((val, idx) => {
          const Icon = iconMap[val.icon] || Shield;
          return (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0d0e14]/90 border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-950/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-amber-400/80 transition-colors">
                <span>Core Pillar 0{idx + 1}</span>
                <span className="text-amber-400/50">•</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
