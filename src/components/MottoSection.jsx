import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TEAM_INFO } from '../data/teamData';

export default function MottoSection() {
  return (
    <section id="motto" className="relative py-28 sm:py-36 px-6 overflow-hidden">
      {/* Golden halo backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative hairline border box */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#10121a]/95 to-[#090a0f]/95 border border-amber-500/30 text-center shadow-2xl shadow-black/80"
        >
          {/* Top Center Emblem Tag */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-[#0c0d12] border border-amber-400/60 shadow-lg text-amber-400">
            <Quote className="w-5 h-5 fill-amber-400/20" />
          </div>

          <div className="space-y-6 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-amber-400 block font-display">
              The Miquella Creed
            </span>

            {/* Giant Motto Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[0.2em] text-gold-gradient uppercase leading-tight drop-shadow-md">
              "{TEAM_INFO.tagline}"
            </h2>

            {/* Philosophical elaboration */}
            <div className="max-w-2xl mx-auto">
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-light italic leading-relaxed">
                "{TEAM_INFO.quote.text}"
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <span className="h-[1px] w-12 bg-amber-500/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-zinc-400 font-medium">
                {TEAM_INFO.quote.author}
              </span>
              <span className="h-[1px] w-12 bg-amber-500/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
