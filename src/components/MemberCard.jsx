import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function MemberCard({ member, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect && onSelect(member)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#0e0f16]/90 border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/15 flex flex-col justify-between"
    >
      {/* Top subtle golden shimmer border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Image Container with Consistent Aspect Ratio */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-black/60">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectPosition: member.objectPosition || 'center 20%' }}
          loading="lazy"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f16] via-[#0e0f16]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Floating Role Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30">
            {member.role}
          </span>
        </div>

        {/* Quick View Pill (reveals on hover) */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="p-2 rounded-full bg-amber-500/90 text-black shadow-lg">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 relative z-10 bg-[#0e0f16]">
        <div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-amber-400/80 font-medium block">
            {member.department || 'Core Team'}
          </span>
          <h4 className="text-lg font-display font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors mt-0.5 line-clamp-1">
            {member.name}
          </h4>
        </div>

        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 font-light">
          {member.bio}
        </p>

        {/* Skills / Attributes Pills */}
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {member.skills.slice(0, 2).map((skill, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/5"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 2 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded text-amber-400/80 font-medium">
                +{member.skills.length - 2}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom hairline bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent group-hover:via-amber-400 transition-all duration-500" />
    </motion.div>
  );
}
