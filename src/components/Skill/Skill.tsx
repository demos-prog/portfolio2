import React from 'react';
import Grade from '../Grade/Grade';
import css from './Skill.module.css';

type SkillProps = {
  title: string,
  grade: 1 | 2 | 3 | 4 | 5,
}

const Skill: React.FC<SkillProps> = ({ title, grade }) => {


  return (
    <div className={css.skillWrap}>
      <div className={`${css.skillBox} ${css.leftSide}`}>
        <span className={css.text}>{title}</span>
      </div>
      <div className={css.verticalLine} />
      <div className={`${css.skillBox} ${css.rightSide}`}>
        <Grade grade={grade} />
      </div>
    </div>
  );
};

export default Skill;