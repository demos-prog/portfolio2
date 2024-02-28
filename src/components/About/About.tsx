import React from 'react';
import AOS from 'aos';
import Skill from '../Skill/Skill';
import brainIcon from '../../assets/images/brain.svg';
import css from './About.module.css';

type AboutProps = {
  lang: 'ru' | 'eng',
}

AOS.init({
  duration: 1200,
})

const About: React.FC<AboutProps> = ({ lang }) => {


  return (
    <section id='about_section' className={css.aboutSection}>
      <h2>
        {lang === 'ru' ? (
          "Обо мне/ мои скилы"
        ) : (
          'About me/ my skills'
        )}
      </h2>

      <div
        id={css.skills}
        data-aos="fade-right"
      >
        <img id={css.brain} src={brainIcon} alt="" />
        <div id={css.skillsWrap}>
          <Skill title={'HTML'} grade={4} />
        </div>

      </div>
    </section>
  );
};

export default About;