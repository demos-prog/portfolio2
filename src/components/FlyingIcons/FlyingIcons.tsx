import React from 'react';
import css from './FlyingIcons.module.css';


const FlyingIcons: React.FC = () => {


  return (
    <div id={css.wrap}>
      <span id={css.dog}>@</span>
    </div>
  );
};

export default FlyingIcons;