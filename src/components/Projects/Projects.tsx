import React from 'react';
import Project from '../Project/Project';
import ecommerceIcon from '../../assets/images/ecommerce.jpg';
import css from './Projects.module.css';

type ProjectsProps = {
  lang: 'ru' | 'eng'
}

const projects = [
  {
    titleRU: 'Магазин',
    titleENG: 'Ecommerce',
    img: ecommerceIcon,
    projectLink: 'https://web-store-one.vercel.app/',
    gitHubLink: 'https://github.com/demos-prog/web_store',
    skills: ['React', 'Typescript', 'REST API', 'React-query']
  }
]

const Projects: React.FC<ProjectsProps> = ({ lang }) => {


  return (
    <section id='projects_section' className={css.projectsSection}>
      <h2>{lang === 'eng' ? 'Some of my projects' : 'Некоторые из моих проектов'}</h2>

      <div id={css.projectsWrap}>
        {projects.map((project, i) => {
          return (
            <Project key={i}
              lang={lang}
              titleRU={project.titleRU}
              titleENG={project.titleENG}
              img={project.img}
              projectLink={project.projectLink}
              gitHubLink={project.gitHubLink}
              skills={project.skills}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;