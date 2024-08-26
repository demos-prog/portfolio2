import React, { useRef } from 'react';
import AOS from 'aos';
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
  i: number,
}

AOS.init({
  duration: 1000,
})

const Project: React.FC<ProjectProps> = ({
  lang, titleRU, titleENG, img, projectLink, gitHubLink, skills, i }) => {
  const windowWidth = useRef(window.innerWidth);

  const getAnimDelay = () => {
    if (windowWidth.current < 750) {
      return 0
    } else {
      return i * 200
    }
  }

  return (
    <div
      data-aos="fade-right"
      data-aos-delay={getAnimDelay()}
      className={css.project}>
      <span className={css.title}>{lang === 'ru' ? titleRU : titleENG}</span>

      <a href={projectLink} target="_blank" aria-label={titleENG}>
        <img className={css.img} src={img} alt={titleENG} />
      </a>

      <a className={css.gitHub} href={gitHubLink} target="_blank" aria-label={'GitHub'}>
        <u>GitHub</u>
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