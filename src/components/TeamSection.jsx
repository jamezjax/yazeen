import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Filter } from 'lucide-react';
import MemberCard from './MemberCard';
import { TEAM_MEMBERS, LEADERSHIP } from '../data/teamData';

export default function TeamSection({ onSelectMember }) {
  const [filter, setFilter] = useState('all');

  // Combined full roster of all 9 members
  const allMembers = [
    ...LEADERSHIP,
    ...TEAM_MEMBERS
  ];

  const filteredMembers = filter === 'all' 
    ? allMembers 
    : filter === 'leadership' 
      ? LEADERSHIP 
      : TEAM_MEMBERS;

  return (
    <section id="team" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-300 uppercase">
            Collective Strength
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-wide">
          The Full Roster
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-amber-500 to-amber-200 mx-auto my-4" />
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Every individual brings a distinct edge, united under one banner to achieve collective greatness.
        </p>

        {/* Filter / View switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
              filter === 'all'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            All Members ({allMembers.length})
          </button>
          <button
            onClick={() => setFilter('core')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
              filter === 'core'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            Core Team ({TEAM_MEMBERS.length})
          </button>
          <button
            onClick={() => setFilter('leadership')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
              filter === 'leadership'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            Leadership ({LEADERSHIP.length})
          </button>
        </div>
      </motion.div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredMembers.map((member, idx) => (
          <MemberCard
            key={member.id}
            member={member}
            index={idx}
            onSelect={onSelectMember}
          />
        ))}
      </div>

      {/* Roster Integrity Assurance Note */}
      <div className="mt-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Complete Official Roster • Team Miquella • All Rights Reserved
        </p>
      </div>
    </section>
  );
}
