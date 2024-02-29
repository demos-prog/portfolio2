import React from 'react';
import css from './Projects.module.css';

type ProjectsProps = {
  lang: 'ru' | 'eng'
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {


  return (
    <section id='projects_section' className={css.projectsSection}>
      {lang === 'eng' ? <h2>Projects</h2> : <h2>Проекты</h2>}
    </section>
  );
};

export default Projects;