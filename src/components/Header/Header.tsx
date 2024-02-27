import React, { useCallback, useEffect, useState } from 'react';
import LiItem from '../LiItem/LiItem';
import homeIcon from '../../assets/images/home_icon.svg';
import aboutIcon from '../../assets/images/about_icon.svg';
import contactIcon from '../../assets/images/contacts_icon.svg';
import projectsIcon from '../../assets/images/project_icon.png';
import css from './Header.module.css';

type HeaderProps = {
  lang: 'ru' | 'eng';
  setLang: (lang: 'ru' | 'eng') => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [y, setY] = useState(document.scrollingElement ? document.scrollingElement.scrollHeight : 0);
  const [scrollDirection, setScrollDirection] = useState(false);

  const handleScroll = useCallback(() => {
    if (y > window.scrollY) {
      setScrollDirection(false);
    } else if (y < window.scrollY) {
      setScrollDirection(true);
    }
    setY(window.scrollY)
  }, [y]);

  const handleLang = () => {
    lang === 'ru' ? setLang('eng') : setLang('ru');
  }

  const getLangname = () => {
    return lang === 'ru' ? 'Rus' : 'Eng';
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // scroll to the sections - start
    const anchors = document.querySelectorAll('a.scroll_to')

    for (const anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href');
        const element = document.querySelector(blockID!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      })
    }
    // scroll to the sections - end

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={scrollDirection ? `${css.h_wrap} ${css.nav_up}` : css.h_wrap}>
      <header>
        {lang === 'ru' ? (
          <h1>Бурлыко Дмитрий</h1>
        ) : (
          <h1>Burlyko Dmitry</h1>
        )}

        <nav>
          <ul id={css.navBar}>
            <LiItem lang={lang} href={'#home_section'} ruName={'Главная'} engName={'Home'} img={homeIcon} color={'#ee7752'} />
            <LiItem lang={lang} href={'#about_section'} ruName={'Обо мне'} engName={'About'} img={aboutIcon} color={'#e73c7e'} />
            <LiItem lang={lang} href={'#projects_section'} ruName={'Проекты'} engName={'Projects'} img={projectsIcon} color={'#23a6d5'} />
            <LiItem lang={lang} href={'#contacts_section'} ruName={'Контакты'} engName={'Contacts'} img={contactIcon} color={'#23d5ab'} />
          </ul>
        </nav>
        
        <div className={css.lang_wrap} onClick={handleLang}        >
          <div className={css.langItem}>Rus</div>
          <div className={css.langItem}>Eng</div>
          <div style={lang === 'ru' ? { left: '3px', backgroundColor: '#e73c7e' } : { left: '39px', backgroundColor: '#23d5ab' }} className={css.selectedLng}>{getLangname()}</div>
        </div>

      </header>
    </div>
  );
};

export default Header;