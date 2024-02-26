import React, { useCallback, useEffect, useState } from 'react';
import css from './Header.module.css';

type HeaderProps = {
  lang: string;
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
        <div className={css.lang_wrap} onClick={handleLang}>
          <div className={css.langItem}>Rus</div>
          <div className={css.langItem}>Eng</div>
          <div style={lang === 'ru' ? { left: '3px' } : {left: '39px'}} className={css.selectedLng}>{getLangname()}</div>
        </div>
      </header>
    </div>
  );
};

export default Header;