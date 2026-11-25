import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadershipSection from './components/LeadershipSection';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import MottoSection from './components/MottoSection';
import Footer from './components/Footer';
import MemberModal from './components/MemberModal';

export default function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Dynamic Ambient Background Elements */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section: Logo reveal, Miquella typography, tagline, scroll down indicator */}
        <Hero />

        {/* 2. Leadership Section: Captain (Niha T) & Vice-Captain (Safdar Semeer) */}
        <LeadershipSection onSelectMember={setSelectedMember} />

        {/* 3. Team Section: All Members with consistent cards & hover effects */}
        <TeamSection onSelectMember={setSelectedMember} />

        {/* 4. About Our Team: Core pillars & values */}
        <AboutSection />

        {/* 5. Team Motto & Creed */}
        <MottoSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Interactive Modal for detailed inspection */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
