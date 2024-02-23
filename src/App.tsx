import { useCallback, useEffect, useState } from 'react';
import AOS from 'aos';
import css from './App.module.css';


function App() {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  AOS.init({
    duration: 1200,
  })


  return (
    <div className={css.container}>
      <div className={scrollDirection ? `${css.h_wrap} ${css.nav_up}` : css.h_wrap}>
        <header>
          <h1>Dmitry Burlyko</h1>
        </header>
      </div>
      <div className={css.space}></div>

      <div className={css.item}
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
      </div>

      <div className={css.space}></div>

    </div>
  );
}

export default App;