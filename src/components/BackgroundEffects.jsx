import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Base Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070709]/80 to-[#070709]" />

      {/* Top Ambient Golden Glow */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(180, 130, 30, 0.2) 50%, transparent 70%)'
        }}
      />

      {/* Mid Subtle Accent Glow */}
      <div 
        className="absolute top-[45%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197, 147, 45, 0.4) 0%, transparent 70%)'
        }}
      />

      {/* Bottom Accent Glow */}
      <div 
        className="absolute bottom-[10%] -right-[10%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%)'
        }}
      />

      {/* Elegant Micro-Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Subtle Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,9,0.7)_100%)]" />
    </div>
  );
}
