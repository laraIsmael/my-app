interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Store',
    description:
      'A fully responsive store built with React, Tailwind CSS, and Firebase.',
    link: '#',
    image: 'https://via.placeholder.com/600x400', // replace with real project image
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio showcasing clean, accessible design and modern front-end development.',
    link: '#',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app built with React, TypeScript, and Firebase authentication.',
    link: '#',
    image: 'https://via.placeholder.com/600x400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Projects
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          A selection of my favorite projects, blending creativity with
          technical skills.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-slate-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-4 inline-block text-teal-600 dark:text-teal-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React from 'react';
// import ProjectCard from './ProjectCard';

// const ProjectsSection: React.FC = () => {
//   return (
//     <section id="projects" aria-label="Projects">
//       <h2>Projects</h2>
//       <div>
//         <ProjectCard
//           title="Google Wallet – Front-End Development"
//           description="
//             Tech Stack: React, TypeScript, HTML, CSS, JavaScript, Git, Accessibility (W3C)

//             Developed user-friendly UI components that boosted customer engagement by 30% and reduced user complaints by 25%.

//             Led accessibility improvements, ensuring compliance with W3C guidelines and making the product more inclusive.

//             Collaborated with designers and researchers to run A/B tests, driving feature adoption and loyalty."
//           link="https://wallet.google/"
//         />
//         <ProjectCard
//           title="Looker Components Library – UI Engineering"
//           description="
//             Tech Stack: React, TypeScript, Accessibility Guidelines, GitHub

//             Built reusable UI components for a developer community of 500+, speeding up development and ensuring design consistency.

//             Integrated accessibility into component design, expanding usability for a broader audience."
//           link="https://looker-open-source.github.io/components/latest/?path=/docs/home--docs"
//         />
//         <ProjectCard
//           title="Nido Interactive – UX Design & Project Management"
//           description="
//             Tech Stack: Figma, HTML, CSS, JavaScript, Agile/Scrum, Research & Usability Testing

//             Led product lifecycle for education technology projects, from concept to launch, prioritizing student engagement and learning outcomes.

//             Conducted market research and usability testing to inform design decisions and refine user flows.

//             Managed cross-functional teams in Agile environments to meet deadlines and deliver quality results."
//           link="laraismaelportfolio.com"
//         />
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
