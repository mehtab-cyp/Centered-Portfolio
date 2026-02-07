import React from 'react';
import { HeroImage } from '../components/HeroImage';
import { BioContent } from '../components/BioContent';
import { WritingSection } from '../components/WritingSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { NowSection } from '../components/NowSection';

export function HomePage() {
  return (
    <>
      <HeroImage />
      <BioContent />
      <WritingSection />
      <ProjectsSection />
      <NowSection />
    </>
  );
}
