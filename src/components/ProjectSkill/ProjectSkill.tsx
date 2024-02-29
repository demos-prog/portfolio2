import React from 'react';
import css from './ProjectSkill.module.css';

type ProjectSkillProps = {
  skill: string,
}

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill }) => {


  return (
    <div className={css.skill}>
      {skill}
    </div>
  );
};

export default ProjectSkill;