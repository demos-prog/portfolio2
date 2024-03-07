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
      <h2 id={css.tit}>
        {lang === 'ru' ? (
          "Мои скилы"
        ) : (
          'My skills'
        )}
      </h2>

      <div
        id={css.skills}
        data-aos="fade-right"
      >
        <img id={css.brain} src={brainIcon} alt="" />
        <div id={css.wrapper}>
          <div id={css.skillsWrap}>
            <Skill title={'HTML'} grade={5} />
            <Skill title={'CSS'} grade={5} />
            <Skill title={'SCSS'} grade={4} />
            <Skill title={'CSS modulse'} grade={3} />
            <Skill title={'JavaScript'} grade={5} />
            <Skill title={'React JS'} grade={4} />
            <Skill title={'React Router'} grade={4} />
            <Skill title={'Next JS'} grade={2} />
            <Skill title={'Styled Components'} grade={4} />
            <Skill title={'TypeScript'} grade={4} />
            <Skill title={'Redux'} grade={3} />
          </div>
          <div id={css.skillsWrap}>
            <Skill title={'Recoil'} grade={3} />
            <Skill title={'Zustand'} grade={3} />
            <Skill title={'GitHub'} grade={3} />
            <Skill title={'Jest'} grade={2} />
            <Skill title={'Vite'} grade={4} />
            <Skill title={'Material UI'} grade={4} />
            <Skill title={'Ant design'} grade={3} />
            <Skill title={'REST API'} grade={4} />
            <Skill title={'Graph QL'} grade={2} />
            <Skill title={'Node JS'} grade={2} />
            <Skill title={'Java'} grade={3} />
            <Skill title={'English'} grade={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;