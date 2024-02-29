import React from 'react';
import Project from '../Project/Project';
import css from './Projects.module.css';

type ProjectsProps = {
  lang: 'ru' | 'eng'
}

const projects = [
  {
    titleRU: 'Магазин',
    titleENG: 'Ecommerce'
  }
]

const Projects: React.FC<ProjectsProps> = ({ lang }) => {


  return (
    <section id='projects_section' className={css.projectsSection}>
      {lang === 'eng' ? <h2>Projects</h2> : <h2>Проекты</h2>}

      <div id={css.projectsWrap}>
        {projects.map((project, i) => {
          return (
            <Project key={i}
              lang={lang}
              titleRU={project.titleRU}
              titleENG={project.titleENG}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;