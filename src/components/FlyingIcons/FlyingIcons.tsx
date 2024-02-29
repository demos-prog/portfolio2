import React, { useEffect, useState } from 'react';
import css from './FlyingIcons.module.css';


const FlyingIcons: React.FC = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(-${scrollY * 0.08}px)` }} id={css.wrap}>
      <span id={css.dog}>@</span>
      <span id={css.tag}>{`</>`}</span>
      <span id={css.https}>https</span>
      <span id={css.web}>WEB</span>
    </div>
  );
};

export default FlyingIcons;