import React from 'react';
import video from '../../assets/videos/video (2160p).mp4';
import css from './BGVideo.module.css';


const BGVideo: React.FC = () => {


  return (
    <div id={css.video_background}>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

};

export default BGVideo;