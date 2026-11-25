import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0e1017] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar Accent */}
          <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-zinc-400 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">
            {/* Full Portrait Container */}
            <div className="w-56 h-72 sm:w-64 sm:h-80 shrink-0 rounded-2xl overflow-hidden border border-amber-500/30 bg-black/80 shadow-xl relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: member.objectPosition || 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="inline-block px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-amber-400/50 text-[10px] font-bold tracking-[0.2em] text-amber-300 uppercase">
                  {member.badge || member.role}
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold flex items-center justify-center md:justify-start gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {member.department || 'Official Member'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm text-zinc-400 font-light mt-0.5">
                  {member.subtitle || member.role}
                </p>
              </div>

              <div className="h-[1px] w-full bg-white/10" />

              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-semibold block mb-1.5">
                  Biography & Profile
                </span>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              {/* Responsibilities or Skills */}
              {member.responsibilities ? (
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-semibold block mb-2">
                    Key Leadership Responsibilities
                  </span>
                  <div className="space-y-1.5">
                    {member.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : member.skills ? (
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-semibold block mb-2">
                    Core Strengths & Focus
                  </span>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Affiliation footer */}
              <div className="pt-3 flex items-center justify-between text-[11px] text-zinc-500 border-t border-white/5">
                <span>Team Miquella Roster</span>
                <span className="text-amber-400/80 uppercase tracking-widest font-medium">Never Known Defeat</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
