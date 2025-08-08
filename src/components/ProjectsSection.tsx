import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" aria-label="Projects">
      <h2>Projects</h2>
      <div>
        <ProjectCard
          title="TaskFlow Pro"
          description="A productivity app for organizing projects and tracking progress in real time, built with React and Firebase."
          link="#"
        />
        <ProjectCard
          title="Artful Jewelry Showcase"
          description="An e-commerce gallery for showcasing handcrafted jewelry, with a focus on accessibility and performance."
          link="#"
        />
        <ProjectCard
          title="Weatherly"
          description="A sleek weather dashboard using OpenWeather API, providing forecasts with location-based data."
          link="#"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
