import React from 'react';
import css from './Skill.module.css';

type SkillProps = {
  title: string,
  grade: 0 | 1 | 2 | 3 | 4 | 5,
}

const Skill: React.FC<SkillProps> = ({ title, grade }) => {


  return (
    <div className={css.skillWrap}>
      <span>{title}</span>
      {grade}
    </div>
  );
};

export default Skill;