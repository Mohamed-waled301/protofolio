import Hero from '../components/Hero.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsGrid limit={3} />
    </>
  );
}
