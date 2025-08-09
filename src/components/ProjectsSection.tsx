import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" aria-label="Projects">
      <h2>Projects</h2>
      <div>
        <ProjectCard
          title="Google Wallet – Front-End Development"
          description="
            Tech Stack: React, TypeScript, HTML, CSS, JavaScript, Git, Accessibility (W3C)

            Developed user-friendly UI components that boosted customer engagement by 30% and reduced user complaints by 25%.

            Led accessibility improvements, ensuring compliance with W3C guidelines and making the product more inclusive.

            Collaborated with designers and researchers to run A/B tests, driving feature adoption and loyalty."
          link="https://wallet.google/"
        />
        <ProjectCard
          title="Looker Components Library – UI Engineering"
          description="
            Tech Stack: React, TypeScript, Accessibility Guidelines, GitHub

            Built reusable UI components for a developer community of 500+, speeding up development and ensuring design consistency.

            Integrated accessibility into component design, expanding usability for a broader audience."
          link="https://looker-open-source.github.io/components/latest/?path=/docs/home--docs"
        />
        <ProjectCard
          title="Nido Interactive – UX Design & Project Management"
          description="
            Tech Stack: Figma, HTML, CSS, JavaScript, Agile/Scrum, Research & Usability Testing

            Led product lifecycle for education technology projects, from concept to launch, prioritizing student engagement and learning outcomes.

            Conducted market research and usability testing to inform design decisions and refine user flows.

            Managed cross-functional teams in Agile environments to meet deadlines and deliver quality results."
          link="laraismaelportfolio.com"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
