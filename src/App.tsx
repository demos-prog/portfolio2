import React, { Suspense, useState } from 'react';
import AOS from 'aos';
import css from './App.module.css';

const LazyHeader = React.lazy(() => import('./components/Header/Header'));
const LazyFlyingIcons = React.lazy(() => import('./components/FlyingIcons/FlyingIcons'));

function App() {
  const [lang, setLang] = useState<'ru' | 'eng'>('eng');


  AOS.init({
    duration: 1200,
  })


  return (
    <>
      <Suspense fallback={null}>
        <LazyHeader lang={lang} setLang={setLang} />
      </Suspense>

      <div className={css.container}>
        {/* <section id={css.home_section} > */}
        <section id='home_section' >
          {/* <div className={css.item}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >

          </div> */}
          asd
        </section>
        <div className={css.space}></div>
      </div>

      <Suspense fallback={null}>
        <LazyFlyingIcons />
      </Suspense>
    </>
  );
}

export default App;