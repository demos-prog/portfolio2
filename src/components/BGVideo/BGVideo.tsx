import React, { useEffect, useState } from 'react';
import video from '../../assets/videos/fog.mp4';
import css from './BGVideo.module.css';


const BGVideo: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{transform: `translateY(-${scrollY * 0.06}px)`}} id={css.video_background}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

};

export default BGVideo;