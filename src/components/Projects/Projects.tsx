import React from 'react';
import Project from '../Project/Project';
import tictactoeIcon from '../../assets/images/tic-tac-toe.jpg';
import weatherIcon from '../../assets/images/weather.jpg';
import blog from '../../assets/images/blog.jpg';
import todoMERN from '../../assets/images/todoMERN.jpg';
import css from './Projects.module.css';

type ProjectsProps = {
  lang: 'ru' | 'eng'
}

const projects = [
  {
    titleRU: 'Блог',
    titleENG: 'Blog',
    img: blog,
    projectLink: 'https://nest-client-orpin.vercel.app/',
    gitHubLink: 'https://github.com/demos-prog/nest_task',
    skills: ['React', 'Nest', 'PostgreSQL', 'Prisma']
  },
   {
    titleRU: 'ToDo list (MERN)',
    titleENG: 'ToDo list (MERN)',
    img: todoMERN,
    projectLink: 'https://mern-to-do-app-sable.vercel.app/',
    gitHubLink: 'https://github.com/demos-prog/MERN-ToDo-app.git',
    skills: ['React', 'Express', 'MongoDB']
  },
  {
    titleRU: 'Крестики-Нолики',
    titleENG: 'Tik-Tak-Toe',
    img: tictactoeIcon,
    projectLink: 'https://tic-tac-toe-nine-rosy.vercel.app/',
    gitHubLink: 'https://github.com/demos-prog/tic_tac_toe',
    skills: ['React', 'Typescript']
  },
  {
    titleRU: 'Прогноз погоды',
    titleENG: 'Weather forecast',
    img: weatherIcon,
    projectLink: 'https://weather-app2-ashy.vercel.app/',
    gitHubLink: 'https://github.com/demos-prog/weather-app2',
    skills: ['React', 'REST API']
  },
]

const Projects: React.FC<ProjectsProps> = ({ lang }) => {


  return (
    <section id='projects_section' className={css.projectsSection}>
      <h2 id={css.title}>{lang === 'eng' ? 'Some of my projects' : 'Некоторые из моих проектов'}</h2>

      <div id={css.projectsWrap}>
        {projects.map((project, i) => {
          return (
            <Project key={i}
              i={i}
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