import React from 'react';
import css from './FlyingIcons.module.css';


const FlyingIcons: React.FC = () => {


  return (
    <div id={css.wrap}>
      <span id={css.dog}>@</span>
      <span id={css.tag}>{`</>`}</span>
      <span id={css.https}>https</span>
      <span id={css.web}>WEB</span>
    </div>
  );
};

export default FlyingIcons;