import React, { useCallback, useEffect, useState } from 'react';
import LiItem from '../LiItem/LiItem';
import homeIcon from '../../assets/images/home_icon.svg';
import aboutIcon from '../../assets/images/about_icon.svg';
import contactIcon from '../../assets/images/contacts_icon.svg';
import projectsIcon from '../../assets/images/project_icon.png';
import arrowLeft from '../../assets/images/ArrowLeft.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import gitIcon from '../../assets/images/github_rep_icon.svg';
import linkedInIcon from '../../assets/images/linkedin_icon.svg';
import telegramIcon from '../../assets/images/telegram_icon.svg';
import viberIcon from '../../assets/images/viber_icon.svg';
import css from './Header.module.css';

type HeaderProps = {
  lang: 'ru' | 'eng';
  setLang: (lang: 'ru' | 'eng') => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [y, setY] = useState(document.scrollingElement ? document.scrollingElement.scrollHeight : 0);
  const [scrollDirection, setScrollDirection] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const handleOpenContacts = () => {
    setShow(prev => !prev)
  }

  const handleScroll = useCallback(() => {
    if (y > window.scrollY) {
      setScrollDirection(false);
    } else if (y < window.scrollY) {
      setScrollDirection(true);
    }
    setY(window.scrollY);
    setIsBurgerOpen(false);
  }, [y]);

  const handleLang = () => {
    lang === 'ru' ? setLang('eng') : setLang('ru');
  }

  const getLangname = () => {
    return lang === 'ru' ? 'Rus' : 'Eng';
  }

  const handleBurger = () => {
    setIsBurgerOpen(prev => !prev);
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
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
              <LiItem lang={lang} href={'#about_section'} ruName={'Скилы'} engName={'Skills'} img={aboutIcon} color={'#e73c7e'} />
              <LiItem lang={lang} href={'#projects_section'} ruName={'Проекты'} engName={'Projects'} img={projectsIcon} color={'#23a6d5'} />
              <LiItem lang={lang} href={'#contacts_section'} ruName={'Контакты'} engName={'Contacts'} img={contactIcon} color={'#23d5ab'} />
            </ul>
            <div id={css.burger} onClick={handleBurger}>
              <div className={css.bar} />
              <div className={css.bar} />
              <div className={css.bar} />
            </div>
          </nav>

          <div id={css.btns}>
            <a
              href={lang === 'ru' ? (
                'https://drive.google.com/file/d/1KJnaOLb0rdxcYDFlQ7MH4YLUEyuK9PH9/view?usp=sharing'
              ) : (
                'https://drive.google.com/file/d/1CcxKpCyPunNyNluxOYRKBH3cvCyaqSUb/view?usp=sharing'
              )}
              target="_blank"
            >
              {lang === 'ru' ? ('Загрузить резюме') : ('Download CV')}
            </a>
            <div className={css.lang_wrap} onClick={handleLang}>
              <div className={css.langItem}>Rus</div>
              <div className={css.langItem}>Eng</div>
              <div style={lang === 'ru' ? { left: '3px', backgroundColor: '#e73c7e' } : { left: '39px', backgroundColor: '#23d5ab' }} className={css.selectedLng}>{getLangname()}</div>
            </div>
          </div>


        </header>
      </div>

      {isBurgerOpen && (
        <ul id={css.bugerMenu}>
          <LiItem defaultHover={true} lang={lang} href={'#home_section'} ruName={'Главная'} engName={'Home'} img={homeIcon} color={'#ee7752'} />
          <LiItem defaultHover={true} lang={lang} href={'#about_section'} ruName={'Скилы'} engName={'Skills'} img={aboutIcon} color={'#e73c7e'} />
          <LiItem defaultHover={true} lang={lang} href={'#projects_section'} ruName={'Проекты'} engName={'Projects'} img={projectsIcon} color={'#23a6d5'} />
          <LiItem defaultHover={true} lang={lang} href={'#contacts_section'} ruName={'Контакты'} engName={'Contacts'} img={contactIcon} color={'#23d5ab'} />
        </ul>
      )}

      <div style={show ? { left: 0 } : { left: '-50px' }} id={css.contactsWrap}>
        <div id={css.contacts}>
          <a target="_blank" href="https://t.me/Dmitry_web">
            <img className={css.contImage} src={telegramIcon} alt="telegram" />
          </a>
          <a target="_blank"
            href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%B1%D1%83%D1%80%D0%BB%D1%8B%D0%BA%D0%BE-972461214">
            <img className={css.contImage} src={linkedInIcon} alt="linkedin" />
          </a>
          <a target="_blank" href="viber://add?number=375255171152">
            <img className={css.contImage} src={viberIcon} alt="viber" />
          </a>
          <a target="_blank" href="https://github.com/demos-prog">
            <img className={css.contImage} src={gitIcon} alt="git" />
          </a>
        </div>
        <div id={css.contactsBtn} onClick={handleOpenContacts}>
          {show ? (
            <img src={arrowLeft} alt="open" />
          ) : (
            <img src={arrowRight} alt="close" />
          )}
          <div id={css.contactText}>{lang === 'ru' ? 'Контакты' : 'Contacts'}</div>
        </div>
      </div>
    </>
  );
};

export default Header;