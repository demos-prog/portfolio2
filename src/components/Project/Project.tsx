import React from 'react';
import ProjectSkill from '../ProjectSkill/ProjectSkill';
import css from './Project.module.css';

type ProjectProps = {
  lang: 'ru' | 'eng',
  titleRU: string,
  titleENG: string,
  img: string,
  projectLink: string,
  gitHubLink: string,
  skills: string[],
}

const Project: React.FC<ProjectProps> = ({
  lang, titleRU, titleENG, img, projectLink, gitHubLink, skills }) => {


  return (
    <div className={css.project}>
      <span>{lang === 'ru' ? titleRU : titleENG}</span>

      <a href={projectLink} target="_blank">
        <img className={css.img} src={img} alt="" />
      </a>

      <a className={css.gitHub} href={gitHubLink} target="_blank" >
        GitHub
      </a>

      <div className={css.skills}>
        {skills.map((skill, i) => {
          return <ProjectSkill skill={skill} key={i} />
        })}
      </div>
    </div>
  );
};

export default Project;