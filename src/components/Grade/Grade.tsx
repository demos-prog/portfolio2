import React from 'react';
import css from './Grade.module.css';

type GradeProps = {
  grade: 1 | 2 | 3 | 4 | 5;
}

const grades = [
  <div key={0} className={css.emptyGrade} />,
  <div key={1} className={css.emptyGrade} />,
  <div key={2} className={css.emptyGrade} />,
  <div key={3} className={css.emptyGrade} />,
  <div key={4} className={css.emptyGrade} />,
]

const Grade: React.FC<GradeProps> = ({ grade }) => {


  return (
    <div className={css.grade}>
      {grades.map((item, i) => {
        if (i < grade) {
          return <div className={css.fullGrade} key={i} />
        } else return item;
      })}
    </div>
  );
};

export default Grade;