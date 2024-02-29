import React from 'react';
import css from './Project.module.css';

type ProjectProps = {
  lang: 'ru' | 'eng',
  titleRU: string,
  titleENG: string,
}

const Project: React.FC<ProjectProps> = ({ lang, titleRU, titleENG }) => {


  return (
    <div className={css.project}>
      <span>{lang === 'ru' ? titleRU : titleENG}</span>
    </div>
  );
};

export default Project;